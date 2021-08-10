
//// **css should set after animations
$(function() {

    // function
    function clear_all_scroll_timeout()
    {
        for (i=0; i<all_timeout_scroll.length; i++)
        {
            clearTimeout(all_timeout_scroll[i]);
        }
        all_timeout_scroll = []
    }

    console.log(navigator.userAgent.toLowerCase());

    const platform = get_device_type(); // pc, ios or android
    var model = 'bottom';
    var open_status = 0; // 0: fully close, 1: half-open, 2: fully open, 3: in item-page, 4: in the bottom
    var PosX_click = PosY_click = null;
    var Pos_move_release = PosX_move_release = PosY_move_release = null;

    const window_X = screen.width;
    const window_Y = screen.height;
    var Pos_click = null;
    var distance_move = null;
    var delta_distance = 0;
    const window_size = (model=='right'? window_X : window_Y);
    const scroll_height = parent.document.body.scrollHeight;

    // timeout events
    var timeout_scroll = null; // timeout for scrolling event
    var all_timeout_scroll = [];
    
    var iframe_element = $('#avividai_recommend_iframe');
    var iframe_window = $($('#avividai_recommend_iframe')[0].contentWindow);


    //// wait for .php to read parameters
    setTimeout( () => {
        get_item('guess'); //抓猜你喜歡
        css_close_showdiv();
        // css_close_hidediv();
    }, 1000);

    //// mousedown, touchstart event and mousemove event
    iframe_window.on('mousedown touchstart', function(e) {
        clear_all_scroll_timeout(); // make sure iframe is not shrinking due to scrolling event
        var top_position = get_scrollbar_position();
        // set_parent_scroll(0, top_position) // ios bug here
        Pos_move_release = 0;
        Pos_click = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y'));
        console.log('mousedown ,open status: '+ open_status);
        if(model == 'right')
        {
            if (open_status==1) // 2nd motion open, click to fully open
            {   // already half open
                animation_promise('open', true); // 2nd motion open, click to fully open
                setTimeout(function() {
                    open_status = 2;
                }, 1000);

                //// To close at half, use to listen right_arrow_btn to close iframe during close motion 1~2
                $('#right_arrow_btn').on('click touchstart', function(e) {
                    console.log('right_arrow_btn event trigger, open_status = '+open_status);
                    if (open_status == 1) { 
                        open_status = animation_promise('close', true);
                        Pos_move_release = 0;
                        console.log('trigger right_arrow_btn close event, open_status: '+ open_status);
                    }
                });

            }
            else // use to drag iframe ,open = true, half_open = false or open = true, half_open = true (should not exist this)
            {
                iframe_window.on('mousemove touchmove', function(e) {
                    set_parent_scroll(0, top_position);
                    Pos_move_release = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y')); // update PosY_move_release only when mouse is moving
                    // console.log('mouse move ' + PosY_move_release);
                    if (open_status == 0) // now is close, to open, adjust height along with mousemove, useless
                    {
                        /* stop moving when mouse button is released:*/
                        screenX = (screenX!=0? screenX : window_size); // ios screen will =0, so make screen=window_size
                        iframe_size = Pos_move_release*window_size/screenX; // window_size = 2400, screenX=1920, Pos=0~1920
                        // console.log('windwo_X is '+ window_size + 'screenX is '+ screenX + ' and cursor is '+ Pos_move_release);
                        iframe_element.css({left: iframe_size-50});
                    }
                });
            }
        }
        if(model == 'bottom')
        {
            iframe_window.on('mousemove touchmove', function(e) {
                Pos_move_release = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y')); // update PosY_move_release only when mouse is moving
                Pos_click = Pos_click>parent.window.innerHeight? parent.window.innerHeight : Pos_click;
                distance_move = Pos_click - Pos_move_release + 0.1*window_Y;
                distance_move = (Pos_click < 0.8*window_Y? window_Y-Pos_move_release : distance_move);
                console.log('move distance(+up, -down): '+distance_move+' Pos_click: '+Pos_click+' Pos_move_release: '+Pos_move_release+' open_status: '+open_status);
                // if (open_status == 0 || open_status == 1) // now is close, to open, adjust height along with mousemove
                if (open_status == 0 && platform != 'ios') // now is close, to open, adjust height along with mousemove
                {
                    set_parent_scroll(0, top_position); // lock parent window scrolling bar to prevent bug
                    console.log('distance_move is '+ distance_move);
                    iframe_element.css({bottom: -parent.window.innerHeight + Math.max(distance_move, 50)});
                }
            });
        }
    });


    //// mouseup (touchend) event, to open
    iframe_window.on('mouseup touchend', function(e) {
        const criteria = window_size/3*2;
        var top_position = get_scrollbar_position(); // get scrolling position
        var iframe_top = -iframe_element.css('bottom').split('px')[0];
        console.log('mouseup: '+ top_position+' open_status: '+ open_status);
        // if (open_status == 0 || open_status == 1) // now is close or moving, to open
        if (open_status == 0 || open_status == 4) // now is close or in the bottom, to open
        {
            clear_all_scroll_timeout();
            // if (window_size - Pos_move_release > criteria || distance_move > criteria) // success to fully open, (1st motion for right) 
            if (iframe_top < criteria || Pos_move_release < 10) // move to or click to fully open, (1st motion for right), and size greater than 1/3 height of window
            {
                console.log('now is close, start to open, Pos_move_release '+Pos_move_release+' model: '+ model);
                result = animation_promise('open', false);
                open_status = result['open_status']; // immediately update status to prevent trigger scrolling event
                // result['promise'].done(function() {
                //     // Pos_move_release = 0;
                //     console.log('new method, open_status: '+open_status);
                // });
                
            } else { // restore to close                
                // reback();
                result = animation_promise('close', false);
                open_status = result['open_status'];
                result['promise'].done( () => {
                    Pos_move_release = 0;
                    console.log('restore to close event trigger, open_status: '+open_status+', Pos_move_release: '+Pos_move_release);
                });
            }
        }
        // release move event
        iframe_window.off('mousemove');
        iframe_window.off('touchmove');
    });


    //// use for dynamically adjusting height of item page
    setInterval( () => {
        if (open_status == 2 || open_status == 3)
        {
            let open_item_size = platform=='ios'? parent.window.innerHeight*0.86:parent.window.innerHeight*0.9;
            let open_recomm_size = parent.window.innerHeight;
            $('#avividai_item_iframe').css({height: open_item_size+'px'}); //
            iframe_element.css({height: open_recomm_size*1.05+'px'}); //
        }
    }, 1000);


    //// 關閉集合頁
    $('#close_window_btn').on('click', function(e) {
        let top_position = get_scrollbar_position(); // get scrolling position
        // open_status = animation_promise('close', false);
        reback();
        result = animation_promise('close', false);
        result['promise'].done( () => {
            open_status = result['open_status'];
            Pos_move_release = 0;
            console.log('close_window_btn event trigger, top_position: '+top_position+' open_status: '+open_status);
        });
        
        
    });



    //選項卡
    $('.menu_header_btn').on('click', function() {
        if (open_status == 2)
        {
            // css_fullyopen();
            $('.menu_header_btn').find(' > div').removeClass('bg-dark');
            $('.menu_header_btn').find(' > div').addClass('bg-gray');
            $('.menu_header_btn').find(' > b').addClass('text-gray');

            $(this).find(' > div').removeClass('bg-gray');
            $(this).find(' > div').addClass('bg-dark');
            $(this).find(' > b').removeClass('text-gray');

            if($(this).find(' > b').text() == "猜你喜歡")
            {
                // get_like(100);
                get_item('guess');
                return false;
            }
            if($(this).find(' > b').text() == "別人也看了")
            {
                // get_other(100);
                get_item('also');
                return false;
            }
        }
    });


    //// 超連結內容, to open item url
    $(document).on('click', '.href_btn', function() {
        if (open_status == 2)
        {
            var width = window.innerWidth;
            var url   = $(this).attr('data-url');
            var title = $(this).text().substring(0, 15);
            let open_size = parent.window.innerHeight*0.9;
            open_status = 3; // in item state
            // create iframe linked to clicked item page
            if (platform=='ioss') // there are bottom tap in ios
            {
                $('#body_iframe').html('<iframe id="avividai_item_iframe" src="'+url+'" style="border:0; width:100%; height:80vh; z-index:1;"></iframe>'); // contents after clicked item 93 for full

            } else {
                $('#body_iframe').html('<iframe id="avividai_item_iframe" src="'+url+'" style="border:0; width:100%; height:93vh; z-index:1;"></iframe>'); // contents after clicked item 93 for full
            }
            // hiden all items div
            $('#item_div').animate({top:"100vh"}, 700);
            $('#body_iframe').css({'background-color': 'white'});
            setTimeout(function() {
                $('#avividai_item_iframe').css({height: open_size+'px'}); // 
                $('#item_div').hide(); // hidden all items page including header bar
                $('#body_iframe').show(); // show iframe of clicked item
                $('#reback_btn').css("color", "#ffffff").show();
                // $('#body_iframe').css({"margin-topavividai_recommend_iframe":"50px"});
                $('#body_iframe').css({"margin-top":"2.5vh"});
                // $('#recommend_iframe').attr("data-status", "start");
                $('#recomm_wrapper').css({"margin-left": ""}); // restore to align page              
                // $('#recomm_wrapper').css({"margin": "30px 0 0 0"}); // align product page
            }, 500);
        }
    });


    //回上一頁
    $('#reback_btn').on("click", function(e) {
        // e.preventDefault();
        reback();
        open_status = 2;
    });


    // //// listener to show or hide small iframe during scrolling
    // var lastScrollTop = 0; //0 means there were never any requests sent
    // var scroll_y = 0;
    // //// scrolling listener here
    // var scrolled = false;
    // $(window.parent).on('touchstart', function(e1) {
    //     // set_parent_scroll(0, get_scrollbar_position());            
    //     y_initial = get_Pos(e1, platform, 'y'); // get position after touch (bigger if move upward)
    //     y_initial = (y_initial>parent.window.innerHeight? y_initial-parent.window.innerHeight : y_initial);
    //     console.log(" $(window.parent).on('touchstart'), y_initial: "+y_initial);
    //     // scroll_y = get_scrollbar_position();
    //     $(window.parent).on('touchmove', function(e2) {
    //         scroll_y = get_scrollbar_position(); // update scrolling position
    //         y_final = get_Pos(e2, platform, 'y'); // (smaller) if move to the top
    //         y_move = (y_initial - y_final)/y_initial*parent.window.innerHeight;
    //         // y_move = (y_initial - get_Pos(e2, platform, 'y'))/y_initial*parent.window.innerHeight;
    //         y_move = platform=='ios'? -y_move : y_move; //// To real-time listen, in iphone, direction is oppsite, 
    //         if (!scrolled && open_status == 0 || open_status == 4) // use for control updating frequency
    //         {
    //             scrolled = true; 
    //             // console.log('parent scroll, posScroll: '+ get_scrollbar_position()+' vs scroll_y: '+scroll_y);
    //             var st = parent.window.pageYOffset || parent.document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //             if (st >= lastScrollTop) // move down
    //             {
    //                 // if (scroll_y + parent.window.innerHeight >= 0.90*scroll_height && (y_initial - get_Pos(e2, platform, 'y'))>0) // at the bottom
    //                 if (scroll_y + parent.window.innerHeight >= 0.98*scroll_height) // at the bottom
    //                 {
    //                     open_status = 4;
    //                     // console.log('open_status: '+open_status+', scroll_y: '+scroll_y+', y_initial: '+y_initial+', y_final: '+y_final+', y_move: '+y_move+', parent.window.innerHeight: '+parent.window.innerHeight)
    //                 } else {
    //                     // console.log('open_status: '+open_status+', scroll_y: '+scroll_y+', show div!!!!!!1, scroll_y: '+scroll_y+', parent.window.innerHeight: '+parent.window.innerHeight+', scroll_height: '+scroll_height+', y_initial: '+y_initial+', current_y: '+get_Pos(e2, platform, 'y'));
    //                     css_close_showdiv(model);
    //                     clear_all_scroll_timeout();
    //                     // wait avivid_recommend_setting['second'], and hidden small div
    //                     timeout_scroll = setTimeout(function() {
    //                         if (open_status == 0) // if open, then cancel to hidden div
    //                         {
    //                             if (model == 'right') {
    //                                 iframe_element.animate({'left': '100vw'}, 500);
    //                             } else {                                        
    //                                 iframe_element.animate({bottom: '-100vh'}, 500);
    //                                 console.log('prepare to hide div!!!!!!!!!111');
    //                             }
    //                         }
    //                     }, 1000);
    //                     all_timeout_scroll.push(timeout_scroll);
    //                     // console.log('************timeout: '+ timeout_scroll+', all: '+all_timeout_scroll);
    //                 }
    //             }
    //             else if (st < lastScrollTop && (st + parent.window.innerHeight) < 0.98*parent.document.body.scrollHeight) // move up and in the bottom
    //             {
    //                 open_status = 0;
    //                 css_close_hidediv(model);
    //                 // y_move = -1; // disable move bottom to open
    //             }
    //             lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    //             setTimeout(() => { scrolled = false; }, 20); // wait each 20 ms
    //         }
    //         if (st + parent.window.innerHeight >= 0.85*parent.document.body.scrollHeight && (open_status==0 || open_status==4)) // at the bottom
    //         {
    //             console.log('scrollTop: '+st+' window height: '+ parent.window.innerHeight+' document height: '+parent.document.body.scrollHeight);
    //             clear_all_scroll_timeout(); // don't hide div
    //             css_close_showdiv(model);
    //         }

    //         // else
    //         // {
    //         //     // set_parent_scroll(1, get_scrollbar_position());
    //         // }
    //     });
    // });


    // //// mouseup (touchend) event, to control open at the bottom
    // $(window.parent).on('mouseup touchend', function(e) {
    //     let criteria = window_size/10;
    //     var iframe_top = iframe_element.css('top').split('px')[0];
    //     console.log(" $(window.parent).on('mouseup touchend'), open_status: "+ open_status+", iframe_top: "+iframe_top);
    //     if (scroll_y + parent.window.innerHeight >= 0.98*scroll_height && y_move > criteria && open_status == 4) // at the bottom and move_scroll upward => open iframe
    //     {
    //         console.log('parent window, success to open: iframe_top: '+iframe_top);
    //         result = animation_promise('open'); // bug only in ios(right: not stop in 1st motion)
    //         open_status = result['open_status']; // immediately update status to prevent trigger scrolling event
    //     }
    //     // release move event
    //     iframe_window.off('mousemove');
    //     iframe_window.off('touchmove');
    // });

    //// listener to execute back button in iframe       
    history.pushState(null, null, window.top.location.pathname + window.top.location.search);
    iframe_window.on('popstate', function(e) {
        console.log('back-button detected, open_status: '+open_status+', history length: '+history.length+', parent history length: '+parent.window.history.length);
        if (open_status == 1 || open_status == 2) // in main iframe page
        {
            e.preventDefault();
            console.log('lock back button, half-open or fully-open');
            history.pushState(null, null, window.top.location.pathname + window.top.location.search);
        }
        else if (open_status == 3) // in item-page, go to last page
        {
            e.preventDefault();
            console.log('lock back button, in item-page');
            reback();
            open_status = 2;
            history.pushState(null, null, window.top.location.pathname + window.top.location.search);
        }
        else
        {
            console.log('do nothing, back :');
            history.go(-2); // go back twice
            // do nothing
        }
    });


/////////////////////////////////////////////////////////////////////////// end of listener ///////////////////////////////////////////////////////////////////

    //// function
    // main for execute animation and css in order
    function animation_promise(motion, in_half_open=true) // animation + css setting, motion='open', 'close', return promise
    {
        let model = 'bottom';
        let open_status = 10;
        let top_position = get_scrollbar_position();
        let result = new Object();
        if (model == "right")
        {
            if (motion == 'open') // to open
            {
                if (!in_half_open) // 1st segment to open, in_half_open=false
                {
                    $.when(
                        set_parent_scroll(0, top_position), // disable scrolling
                        // animation('open', false)
                    ).done( () => {
                        promise = animation('open', false)
                        .done( () => {
                            css_halfopen()
                            // set_parent_scroll(0, top_position) // disable scrolling
                        })
                    })
                    let open_status = 1;
                } else { // add 2nd segment, in_half_open=true                
                    $.when(
                        set_parent_scroll(0, top_position), // confirm to disable scrolling
                        // animation('open', false)
                    ).done( () => {
                        promise = animation('open', true)
                        .done( () => {
                            css_fullyopen()
                            // set_parent_scroll(0, top_position) // disable scrolling
                        })
                    })

                    let open_status = 2;
                }      
            } else if (motion == 'close') { // to close            
                // set_parent_scroll(1, top_position); // enable scrolling
                if (in_half_open) // in half open state => close half
                {
                    $.when(
                        set_parent_scroll(1, top_position) // confirm to enable scrolling
                    ).done( () => {
                        promise = animation('close', true)
                        .done( () => {
                            css_close_showdiv(model)
                            // css_close_hidediv(model)
                        })
                    })                    
            
                } else { // in fully open state => close all
                    $.when(
                        set_parent_scroll(1, top_position) // confirm to enable scrolling
                    ).done( () => {
                        animation('close', false) // 1st
                        .done( () => {
                            promise = animation('close', true) // 2nd   
                            .done( () => {
                                css_close_showdiv(model)
                                // css_close_hidediv(model)
                            })
                        })
                    }) 
                }
                let open_status = 0;
            }
            return open_status;

        } else if (model == "bottom") {
            if (motion == 'open') // to open
            {

                $.when(
                    promise = animation('open')
                    // set_parent_scroll(0, top_position), // confirm to disable scrolling, don't use this in ios
                ).done( () => {
                    css_fullyopen()
                    set_parent_scroll(0, top_position) // confirm to disable scrolling, don't use this in ios
                })
                let open_status = 2;
            } else { // to close
                $.when(
                    set_parent_scroll(1, top_position) // confirm to enable scrolling
                    ).done( () => {
                        promise = animation('close')
                        .done( () => {
                            css_close_showdiv(model)
                            // css_close_hidediv(model)
                        })
                    })    
                let open_status = 0;
            }
            result['open_status'] = open_status;
            result['promise'] = promise;
            return result;

        }
        // return open_status;
    }


    //// animation without css
    function animation(motion, in_half_open=true) // motion: 0 for close, 1 for open, return promise object
    {
        let model = 'bottom';
        // let iframe_element = $('#avividai_recommend_iframe', parent.document);
        let promise = iframe_element.promise();
        if (model == "right")
        {
            if (motion == 'close') // close event (in half open => left: 100vw, not in half open => left: 0)
            {
                if (in_half_open) // to close, in half open
                {
                    promise = iframe_element.animate({left: '100vw'}, 300).promise();
                    console.log('animation, model:right, motion:To close, in half open state, to close');
                } else { // to close, in fully open (two motion, 1st motion first)
                
                    promise = iframe_element.animate({top: '40vh'}, 300).promise();
                    console.log('animation, model:right, motion:To close, in fully open state, to close');
                }
            }
            else if (motion == 'open') // open event (in_half_open(true=>open) or in_close(false=>half open))
            {
                if (in_half_open) // to fully open, in half open=true
                {
                    promise = iframe_element.animate({top: 0}, 200).promise();
                    console.log('animation, model:right, motion:To open, in half open state, to fully open (2nd motion)');
                } else {
                    promise = iframe_element.animate({left: 0}, 500).promise();
                    console.log('animation, model:right, motion:To open, in close state, to half open (1st motion)');
                }

            }
        } else if (model == "bottom") {
            if (motion == 'close') // close event
            {
                promise = iframe_element.animate({top: '95vh'}, 500).promise();
                console.log('animation, model:bottom, motion:To close, to close');

            } else if (motion == 'open') { // open event            
                promise = iframe_element.animate({bottom: '-15vh'}, 500).promise();

                console.log('animation, model:bottom, motion:To open, to open');
            }
        }
        return promise;

    }


    //// show samll div to toggle, open_status=0, scroll down (two version, right and bottom)
    function css_close_showdiv(model)
    {
        // var top_position = window.parent.pageYOffset;
        if (model == 'right')
        {
            $('.block_overlay').show();
            $('#row_header').hide();
            $('._init_').hide(); // show header title bar
            $('#item_div').css({'margin-top': '10vh'});
            iframe_element.css({display:'block', 'margin-left': '', left: '90vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
            $('#right_arrow_btn').css({display: 'block', top: '25vh'});
            $('#left_arrow_btn').css({display: 'block', top: '25vh'});
            $('#recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
            $('.block_overlay').css({"margin-left": "-1vmax"}); // align product page
        } else {
            $('.block_overlay').show();
            $('#row_header').hide();
            $('._init_').hide(); // show header title bar
            $('#item_div').css({'margin-top': '2vh'});
            iframe_element.css({display:'block', top:'', bottom: '-95vh', height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw'});
            
            $('#right_arrow_btn').css({display: 'none'});
            $('#left_arrow_btn').css({display: 'none'});
            $('#recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
            // $('.block_overlay').css({"margin-left": "-1vmax"}); // align product page
        }
        $('#reback_btn').hide();
    }

    //// hidden samll div to toggle, open_status=0, scroll up (two version, right and bottom)
    function css_close_hidediv(model)
    {
        if (model == 'right') {
            iframe_element.css({display:'block', 'margin-left': '', left: '100vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
        } else {
            iframe_element.css({display:'block', top:'', bottom:'-100vh', height: '100vh', width: '100vw', left: 0});
        }
    }

    //// for model=right, half open (open_status = 1, right only)
    function css_halfopen()
    {
        $('.block_overlay').hide(); //半透明遮罩
        iframe_element.css({display:'block', 'margin-left': '', left: '0', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
        $('#row_header').hide(); // hide gray transparent bar
        $('._init_').show(); // show header title bar
        $('#right_arrow_btn').css({display: 'block', top: '37vh'});
        $('#left_arrow_btn').css({display: 'none', top: '37vh'});
        $('#recommend_body_div').css({'overflow-y': 'hidden'}) // close iframe scrolling

    }

    //// fully open state (open_status = 2, right = bottom) 
    function css_fullyopen()
    {
        $('.block_overlay').hide(); //半透明遮罩
        $('#row_header').show(); // hide gray transparent bar
        $('._init_').show(); // show header title bar
        let open_size = parent.window.innerHeight*1.05;
        iframe_element.css({display:'block', 'margin-left': '', left: 0, top: 0, bottom: 0, height: open_size+'px', width: '100vw'}); // required
        $('#item_div').css({'margin-top': '10vh'}); // items images
        $('#right_arrow_btn').css({display: 'none'});
        $('#left_arrow_btn').css({display: 'none'});
        $('#recommend_body_div').css({'overflow-y': 'auto'}) // close iframe scrolling
        // set_parent_scroll(0);
    }


    function set_parent_scroll(state, top_position='') // 0: close scrolling, 1: open scrolling
    {
        // var top_position = window.parent.pageYOffset;
        if (state == 0) 
        {
            // JS
            // console.log('disable scrolling.......');
            // disableScroll();

            window.parent.document.body.style.top = -top_position+'px';
            window.parent.document.body.style.position = "fixed"; // extra required for ios
            window.parent.document.body.style.overflow = "hidden"; // close scrolling
            
        }
        else if (state == 1) 
        {
            // JS
            // enableScroll();

            // console.log('set_parent_scroll, top_position: '+top_position);
            window.parent.document.body.style.top = -top_position+'px';
            window.parent.document.body.style.position = ""; // extra required for ios
            window.parent.document.body.style.overflow = "auto"; // open scrolling
            window.parent.scrollTo(0, top_position); // set croll bar to initial position
        }
        
    }

    // back to all items page(猜你喜歡 & 別人也看了), cand confrim to fully open
    function reback()
    {
        // $('#body_iframe').animate({height:"0"}, 800); // make items disappeared
        // css_fullyopen();
        $('#recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
        $('#body_iframe').css({'background-color': 'white'});
        $('#body_iframe').css({top: '100vh'});
        $('#recommend_iframe').hide().attr("data-status", "end"); 
        $('#reback_btn').hide(); // hide reback_arrow
        $('#body_iframe').html(''); // clear item url iframe
        $('#body_iframe').hide(); // hidden item url iframe to show all items page
        $('#item_div').show();
        $('#window_title').text('');
        $('#item_div').css("height", "100vh");
        css_fullyopen();
    }

    // get "guess your like" or "others also watch"
    function get_item(type='guess')
    {
        var web_id         = 'i3fresh';
        var title          = '_'; 
        var website_type   = '3';
        var recommend_type = '1';


        console.log(type + ' web_id is '+web_id+', website_type: '+website_type);
        $('#recommend_body_div').html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto; margin-top: 150px" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#fe718d" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
        </svg>`);

        $.getJSON(get_api_route(website_type, recommend_type, web_id, title, type), function(callback) {
            if(callback === '_')
            {
                console.log(callback);

                return false; // early return
            }

            $('#recommend_body_div').html('');

            var i = 0;
            if (website_type==1 || website_type==2) // There are ad mixing in, shuffle ad into article 
            {
                callback = merge_article_ad(callback);
            }
            //
            //  

            $.each(callback, function(key, value) {
                if(key == "item_list")
                {
                    return false;
                }
                var html      = '';
                var div_class = '';
                html += `
                        <div class="col-6 `+div_class+`">
                            <a href="javascript:void(0)" data-url="`+value['url']+`" class="href_btn"><img src="`+value['image_url']+`" class="w-100" style="z-index:1"></a>
                            <h6 class="title"><a href="javascript:void(0)" data-url="`+value['url']+`" class="href_btn">`+value['title']+`</a></h6>
                            <div class="description"><a href="javascript:void(0)" data-url="`+value['url']+`" class="href_btn">`+value['description']+`</a></div>
                        </div>`;
                

                $('#recommend_body_div').append(html);
                
                if(i >= 2 && i <= 4)
                {
                    $('#recommend_iframe > div').append(html);
                }

                i++;
            });
            console.log("TONY's API, get items length: "+i);
            // $(".body_row_one").css('padding', '12px');
            // $(".body_row_one").css('margin-top', '100px');

        });
    }



    // recommend_type: 1 for own article, 2 for other e-comm; website_type: 1 for media, 2 for blog, 3 for e-comm
    function get_api_route(website_type, recommend_type, web_id, title, type)
    {
        let route = '';
        if (website_type == 3) // E-commerce must recommend e-comm
        {
            // route = 'https://rhea-cdn.advividnetwork.com/api/productEcom?web_id='+web_id+'&title='+title+'&type='+type;
            route = 'https://rhea-cache.advividnetwork.com/api/productEcom?web_id='+web_id+'&title='+title+'&type='+type;

        }
        else if (website_type == 1 || website_type == 2 && recommend_type == 1) // media or blog + recommend article
        {
            // route = 'https://rhea-cdn.advividnetwork.com/api/articleMedia?web_id='+web_id+'&title='+title+'&type='+type;
            route = 'https://rhea-cache.advividnetwork.com/api/articleMedia?web_id='+web_id+'&title='+title+'&type='+type;

        }
        else if (website_type == 1 || website_type == 2 && recommend_type == 2) // media or blog + recommend e-comm
        {
            // route = 'https://rhea-cdn.advividnetwork.com/api/productMedia?web_id='+web_id+'&title='+title+'&type='+type;
            route = 'https://rhea-cache.advividnetwork.com/api/productMedia?web_id='+web_id+'&title='+title+'&type='+type;

        }

        return route
    }

    function merge_article_ad(article_ad)
    {
        let article = article_ad['article'];
        let ad = article_ad['ad'];
        for (let i=0; i<ad.length; i++) {
            index = Math.floor(Math.random() * article.length);
            article.splice(index, 0, ad[i])
        }

        return article;
    }

    //// outside
    function get_scrollbar_position()
    {
        var top_position = parent.window.pageYOffset;
        var top_position = top_position==0? -window.parent.document.body.style.top.split('px')[0] : top_position;
        return top_position;
    }


    function get_device_type()
    {
        var useragent = navigator.userAgent;
        useragent = useragent.toLowerCase();
        let platform = '';   
                        
        // if (useragent.indexOf('iphone') != -1 || useragent.indexOf('ipad') != -1|| useragent.indexOf('mac') != -1)
        if (useragent.indexOf('iphone') != -1) {
            platform = 'ios';
        } else if (useragent.indexOf('ipad') != -1 ) {
            platform = 'ipad';
        } else if (useragent.indexOf('android') != -1 ) {
            platform = 'android';
        } else {
            platform = 'pc';
        }
        return platform
    }

    function get_Pos(e, platform, axis)
    {
        let window_X = screenX;
        if (platform == 'pc')
        {
            PosY = e.screenY; // pc
            PosX = (e.screenX < 0? window_X+e.screenX : e.screenX);
            PosX = (e.screenX > window_X? e.screenX-window_X : PosX);
            // console.log('posX is '+PosY+' raw screenX: '+e.screenY+' raw pageX: '+e.pageY+' raw clientX: '+e.clientY);

        } else if (platform == 'ios') {

            PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : 0); // mobile
            // PosY = (PosY>parent.window.innerHeight? PosY-parent.window.innerHeight : PosY)
            if (typeof(e.touches)!="undefined")
            {
                PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile
                // console.log('posY is '+PosY+' raw pos: '+ e.touches[0].screenY+ ' jquery targetTouches: '+ e.originalEvent.targetTouches[0].screenY+ ' jquery changedTouches: '+e.originalEvent.changedTouches[0].screenY)+ ' jquery targetTouches: '+e.originalEvent.targetTouches[0].screenY;
            } else {
                PosX = 0
            }

        } else if (platform == 'ipad') {

            PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : 0); // mobile
            PosY = (PosY>parent.window.innerHeight? PosY-parent.window.innerHeight : PosY)
            if (typeof(e.touches)!="undefined")
            {
                PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile
                // console.log('posY is '+PosY+' raw pos: '+ e.touches[0].screenY+ ' jquery targetTouches: '+ e.originalEvent.targetTouches[0].screenY+ ' jquery changedTouches: '+e.originalEvent.changedTouches[0].screenY)+ ' jquery targetTouches: '+e.originalEvent.targetTouches[0].screenY;
            } else {
                PosX = 0
            }

        } else { // android

            PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : 0); // mobile
            if (typeof(e.touches)!="undefined")
            {
                PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile
            } else {
                PosX = 0
            }

        }
        
        return (axis=='x'? PosX : PosY);

    }


    function get_title()
    {
        let element_meta_title = parent.document.querySelector("meta[property='og:title']");
        let element_title = parent.document.querySelector("title");
        let title = element_meta_title !== null ? element_meta_title.getAttribute('content') : element_title.innerHTML;
        return title;
    }


});
/////////////////////////////////////////////////////////////////////////// end of listener ///////////////////////////////////////////////////////////////////



