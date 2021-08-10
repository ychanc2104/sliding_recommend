
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1" >
    <!-- <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /> -->
    <title>推薦版位</title>
    <link href="https://www.likr.com.tw/rick/recommend2/avividai_recommend.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- <script src="https://www.likr.com.tw/rick/recommend2/avividai_recommend2.js"></script> -->
    <!-- <script src="control_iframe.js"></script> -->

    <style>
        #div1 {
        width: 90vw;
        height: 90vh;
        padding: 10px;
        border: 1px solid #aaaaaa;
        }



    </style>

    <script type="text/javascript">

    function hello(){
        e = window.event;
        console.log('pc: '+e.screenX);
        // console.log('touchY: '+e.touches[0].screenY);
        // console.log('touch_jquery: '+e.originalEvent.targetTouches[0].screenY);
    }

    function change_model() {
        let urlParams = new URLSearchParams(window.location.search);
        current_model = urlParams.get('test');
        redirect_url = (current_model == 1? 'https://www.likr.com.tw/rick/recommend2/index.php?test=2' : 'https://www.likr.com.tw/rick/recommend2/index.php?test=1');
        location.replace(redirect_url);
    }





    var AviviD = typeof(AviviD) == 'undefined'? {} : AviviD;
    //// document ready
    $(function() {
        console.log('document ready');
        // $('#avividai_recommend_iframe').on('load', function() {   

            AviviD.receiver = document.getElementById('avividai_recommend_iframe').contentWindow;
            AviviD.open_status = 0; // 0: fully close, 1: half-open, 2: fully open, 3: in item-page, 4: in the bottom

            AviviD.transmit_to_iframe = function(open_status=0) {
                var scroll_y = window.pageYOffset;
                // var scroll_y = scroll_y==0? -window.document.body.style.top.split('px')[0] : scroll_y;
                var window_x = window.innerWidth;
                var window_y = window.innerHeight;
                var scroll_height = document.body.scrollHeight;
                // var open_status = AviviD.open_status;

                data = {};
                data.scroll_height = scroll_height;
                data.scroll_y = scroll_y;
                data.window_x = window_x;
                data.window_y = window_y;
                data.open_status = open_status;

                AviviD.receiver.postMessage(data, "*"); 
                console.log('transmit: top_position: '+scroll_y+', data: '+data);
            }


            $('#avivid_iframe_handle').on('touchstart touchmove touchend', (e) => {
                AviviD.transmit_to_iframe(AviviD.open_status);
            });


            AviviD.config = 
            {
                "web_id": 'i3fresh', // underwear for e-comm, babyhome for media
                "title" : 'default',
                "model": "bottom", //模式 bottom=底部集合頁, right=右邊集合頁
                "website_type": 3, // 1:media, 2:blog, 3:E-commerce
                "recommend_type": 1 // 1:article, 2:e-commerce
            }

            AviviD.scroll_y = null;
            AviviD.scroll_height = document.body.scrollHeight;

            AviviD.window_X = window.innerWidth;
            AviviD.window_Y = window.innerHeight; // responsive in mobile
            AviviD.window_size = AviviD.config.model == 'right'? AviviD.window_X : AviviD.window_Y; // default is bottom
            AviviD.criteria = 1/3*AviviD.window_size; // bigger than 1/3 window_size => fully open

            AviviD.model = AviviD.config.model;
            AviviD.PosX_click = AviviD.PosY_click = null;
            AviviD.Pos_move_release = null;

            AviviD.Pos_click = null;
            AviviD.distance_move = null;
            AviviD.delta_distance = 0;

            // timeout events
            AviviD.timeout_scroll = null; // timeout for scrolling event
            AviviD.all_timeout_scroll = [];


            AviviD.get_device_type = function() {
                var useragent = navigator.userAgent;
                useragent = useragent.toLowerCase();
                // if (useragent.indexOf('iphone') != -1 || useragent.indexOf('ipad') != -1|| useragent.indexOf('mac') != -1)
                if (useragent.indexOf('iphone') != -1 ) {
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
            AviviD.platform = AviviD.get_device_type();

            if (AviviD.platform == 'pc') {
                AviviD.event = {
                    'down_event' : 'mousedown',
                    'move_event'  : 'mousemove',
                    'up_event'  : 'mouseup'
                }
            } else {
                AviviD.event = {
                    'down_event' : 'touchstart',
                    'move_event'  : 'touchmove',
                    'up_event'  : 'touchend'
                }
            }

            //// get touched position according to model( x or y)
            AviviD.get_Pos = function(e) {
                let model = AviviD.config.model;
                let platform = AviviD.platform;
                let window_X = window.innerWidth;
                if (platform == 'pc') {
                    PosY = e.screenY; // pc
                    PosX = (e.screenX < 0? window_X+e.screenX : e.screenX);
                    PosX = (e.screenX > window_X? e.screenX-window_X : PosX);
                    // console.log('posX is '+PosY+' raw screenX: '+e.screenY+' raw pageX: '+e.pageY+' raw clientX: '+e.clientY);
                } else if (platform == 'ios') {
                    // PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : 0); // mobile
                    PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : e.originalEvent.targetTouches[0].screenY); // mobile

                    // PosY = (PosY>parent.window.innerHeight? PosY-parent.window.innerHeight : PosY)
                    if (typeof(e.touches)!="undefined") {
                        PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile
                        // console.log('posY is '+PosY+' raw pos: '+ e.touches[0].screenY+ ' jquery targetTouches: '+ e.originalEvent.targetTouches[0].screenY+ ' jquery changedTouches: '+e.originalEvent.changedTouches[0].screenY)+ ' jquery targetTouches: '+e.originalEvent.targetTouches[0].screenY;
                    } else {
                        PosX = 0
                    }

                } else if (platform == 'ipad') {
                    //// jquery, e.originalEvent.targetTouches[0].screenX
                    // PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : 0); // mobile
                    PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : e.originalEvent.targetTouches[0].screenY); // mobile

                    PosY = (PosY>parent.window.innerHeight? PosY-parent.window.innerHeight : PosY)
                    if (typeof(e.touches)!="undefined") {
                        PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile
                        // console.log('posY is '+PosY+' raw pos: '+ e.touches[0].screenY+ ' jquery targetTouches: '+ e.originalEvent.targetTouches[0].screenY+ ' jquery changedTouches: '+e.originalEvent.changedTouches[0].screenY)+ ' jquery targetTouches: '+e.originalEvent.targetTouches[0].screenY;
                    } else {
                        PosX = 0
                    }
                } else { // android

                    PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : e.originalEvent.targetTouches[0].screenY); // mobile
                    if (typeof(e.touches)!="undefined") {
                        PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile
                    } else {
                        PosX = 0
                    }
                    // console.log('android positionY: '+PosY);
                }
                return (model=='right'? PosX : PosY); // right or bottom(default)
            }


            //// get scrolling position (top is 0)
            AviviD.get_scrollbar_position = function() {
                var scroll_y = window.pageYOffset;
                var scroll_y = scroll_y == 0? -window.document.body.style.top.split('px')[0] : scroll_y;
                return scroll_y;
            }

            AviviD.set_scrollable = function(state='enable', scroll_y='') { // disable: close scrolling, enable: open scrolling
                if (state == 'disable') {
                    // JS
                    // console.log('disable scrolling.......');
                    // disableScroll();

                    window.document.body.style.top      = -scroll_y + 'px';
                    window.document.body.style.position = "fixed"; // extra required for ios
                    window.document.body.style.overflow = "hidden"; // close scrolling
                    
                } else if (state == 'enable') {
                    // JS
                    // enableScroll();

                    // console.log('set_parent_scroll, top_position: '+top_position);
                    window.document.body.style.top      = -scroll_y + 'px';
                    window.document.body.style.position = ""; // extra required for ios
                    window.document.body.style.overflow = "auto"; // open scrolling
                    window.scrollTo(0, scroll_y); // set croll bar to initial position
                }
                
            }

            AviviD.get_iframe_size = function() {
                let model = AviviD.config.model;
                let window_size = AviviD.window_size;
                let iframe_size = 0;
                if (model == 'right') {
                } else { // bottom
                    iframe_size = AviviD.window_size + parseInt($('#avividai_recommend_iframe').css('bottom').split('px')[0]);
                }
                return iframe_size;
            }


            // main for execute animation
            AviviD.animation_promise = function(motion, in_half_open=true) { // animation + css setting, motion='open', 'close', return promise
                let model = AviviD.config.model;
                var open_status = 10;
                var scroll_y = AviviD.get_scrollbar_position();
                var result = {};
                var open_size = parent.window.innerHeight*1.05;
                if (model == "right") {
                    if (motion == 'open') { // to open                    
                        if (!in_half_open) { // 1st segment to open, in_half_open=false                       
                            $.when(
                                AviviD.set_scrollable('disable', scroll_y), // disable scrolling
                            ).done( () => {
                                promise = AviviD.animation('open', false)
                            })
                            var open_status = 1;
                        } else { // add 2nd segment, in_half_open=true                
                            $.when(
                                AviviD.set_scrollable('disable', scroll_y), // confirm to disable scrolling
                            ).done( () => {
                                promise = AviviD.animation('open', true)
                            })
                            var open_status = 2;
                        }      
                    } else if (motion == 'close') { // to close            
                        if (in_half_open) { // in half open state => close half                       
                            $.when(
                                AviviD.set_scrollable('enable', scroll_y) // confirm to enable scrolling
                            ).done( () => {
                                promise = AviviD.animation('close', true)                                
                            })                    
                    
                        } else { // in fully open state => close all
                            $.when(
                                AviviD.set_scrollable('enable', scroll_y) // confirm to enable scrolling
                            ).done( () => {
                                animation('close', false) // 1st
                                .done( () => {
                                    promise = AviviD.animation('close', true) // 2nd   
                                })
                            }) 
                        }
                        var open_status = 0;
                    }
                } else if (model == "bottom") {
                    if (motion == 'open') { // to open                 
                        promise = $.when(
                            // promise = AviviD.animation('open')
                            AviviD.animation('open')

                        ).done( () => {
                            // AviviD.receiver.AviviD.css_fullyopen() // to be changed, CORS alert
                            $('#avivid_iframe_handle').css({display:'block', 'margin-left': '', left: 0, top: 0, bottom: 0, height: open_size+'px', width: '100vw'});
                            $('#avivid_iframe_handle').css({display:'none'});
                            $('#avividai_recommend_iframe').css({display:'block', 'margin-left': '', left: 0, top: 0, bottom: 0, height: open_size+'px', width: '100vw'}); // required
                            AviviD.set_scrollable('disable', scroll_y) // confirm to disable scrolling, don't use this in ios
                        })
                        var open_status = 2;
                    } else { // to close
                        promise = $.when(
                            AviviD.set_scrollable('enable', scroll_y) // confirm to enable scrolling
                            ).done( () => {
                                // promise = AviviD.animation('close')
                                AviviD.animation('close')
                                .done( () => {
                                    // AviviD.receiver.AviviD.css_close_showdiv() // to be changed, CORS alert
                                    $('#avividai_recommend_iframe').css({display:'block', top:'', bottom: '-95vh', height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw'});
                                    $('#avivid_iframe_handle').css({display:'block', top:'', bottom: '-95vh', height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw'});                      
                                })
                            })    
                        var open_status = 0;
                    }
                }
                result.open_status = open_status;
                result.promise = promise;
                return result;
            }


            //// animation without css
            AviviD.animation = function(motion, in_half_open=true) { // motion: 0 for close, 1 for open, return promise object           
                let model = AviviD.config.model;
                var element_iframe = $('#avividai_recommend_iframe');
                var element_handle = $('#avivid_iframe_handle');
                var promise = element_iframe.promise();
                if (model == "right") {
                    if (motion == 'close') { // close event (in half open => left: 100vw, not in half open => left: 0)
                        if (in_half_open) { // to close, in half open                       
                            promise = element_iframe.animate({left: '100vw'}, 300).promise();
                            console.log('animation, model:right, motion:To close, in half open state, to close');
                        } else { // to close, in fully open (two motion, 1st motion first)                        
                            promise = element_iframe.animate({top: '40vh'}, 300).promise();
                            console.log('animation, model:right, motion:To close, in fully open state, to close');
                        }
                    } else if (motion == 'open') { // open event (in_half_open(true=>open) or in_close(false=>half open))                   
                        if (in_half_open) { // to fully open, in half open=true                       
                            promise = element_iframe.animate({top: 0}, 200).promise();
                            console.log('animation, model:right, motion:To open, in half open state, to fully open (2nd motion)');
                        } else {
                            promise = element_iframe.animate({left: 0}, 500).promise();
                            console.log('animation, model:right, motion:To open, in close state, to half open (1st motion)');
                        }
                    }
                } else if (model == "bottom") {
                    if (motion == 'close') { // close event
                        promise = $.when(
                            element_iframe.animate({top: '95vh'}, 500).promise(),
                            element_handle.animate({top: '95vh'}, 500).promise()
                            // element_iframe.animate({bottom: '-95vh'}, 500).promise(),
                            // element_handle.animate({bottom: '-95vh'}, 500).promise()

                        )          
                        // promise = element_iframe.promise();
                        console.log('animation, model:bottom, motion:To close, to close');

                    } else if (motion == 'open') { // open event                           
                        // output of $.when is jquery promise
                        promise = $.when( 
                            // element_iframe.animate({top: 0}, 500).promise(),
                            // element_handle.animate({top: 0}, 500).promise()
                            element_iframe.animate({bottom: '-15vh'}, 500).promise(),
                            element_handle.animate({bottom: '-15vh'}, 500).promise()
                        )
                        // promise = element_iframe.promise();
                        console.log('animation, model:bottom, motion:To open, to open');
                    }
                }
                return promise;
            }

            //// for receive data from iframe, use for close,
            $(window).on('message', (e_msg) => {
                data = e_msg.originalEvent.data;
                open_status = data.open_status;
                AviviD.open_status = open_status;
                if (open_status == 0) {
                    result = AviviD.animation_promise('close');
                }
                AviviD.open_status = result.open_status;
                result.promise.done( () => {
                    AviviD.transmit_to_iframe(AviviD.open_status); // set css after animation is finished
                });
            });


            //// show samll div to toggle, open_status=0, scroll up (two version, right and bottom)
            AviviD.css_close_showdiv = function() {
                if (AviviD.config.model == 'right') {
                    $('#avividai_recommend_iframe').css({display:'block', 'margin-left': '', left: '90vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
                    $('#avivid_iframe_handle').css({display:'block', 'margin-left': '', left: '90vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // requ
                } else {
                    $('#avividai_recommend_iframe').css({display:'block', top:'', bottom: '-95vh', height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw'});
                    $('#avivid_iframe_handle').css({display:'block', top:'', bottom: '-95vh', height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw'});
                }
            }

            //// hidden samll div to toggle, open_status=0, scroll up (two version, right and bottom)
            AviviD.css_close_hidediv = function() {
                if (AviviD.config.model == 'right') {
                    $('#avividai_recommend_iframe').css({display:'block', 'margin-left': '', left: '100vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
                    $('#avivid_iframe_handle').css({display:'block', 'margin-left': '', left: '100vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
                } else {
                    $('#avividai_recommend_iframe').css({display:'block', top:'', bottom:'-100vh', height: '100vh', width: '100vw', left: 0});
                    $('#avivid_iframe_handle').css({display:'block', top:'', bottom:'-100vh', height: '100vh', width: '100vw', left: 0});
                }
            }


            //// clear all scrolling Timeout event to prevent hiding div
            AviviD.clear_all_scroll_timeout = function() {
                for (i=0; i<AviviD.all_timeout_scroll.length; i++) {
                    clearTimeout(AviviD.all_timeout_scroll[i]);
                }
                AviviD.all_timeout_scroll = []
            }


            
            //// listener to show or hide small iframe during scrolling
            var lastScrollTop = 0; //0 means there were never any requests sent
            // var scroll_y = 0;
            //// scrolling listener here
            var scrolled = false;
            AviviD.scroll_y_down = 0;
            $(window).on(AviviD.event.down_event, function(e1) {
                AviviD.window_Y = window.innerHeight;
                y_initial = AviviD.get_Pos(e1, platform, 'y'); // get position after touch (bigger if move upward)
                y_initial = (y_initial>AviviD.window_Y? y_initial-AviviD.window_Y : y_initial);
                AviviD.scroll_y_down = AviviD.get_scrollbar_position(); // update scrolling position

                console.log(" $(window.parent).on('touchstart'), y_initial: "+y_initial);
                $(window).on(AviviD.event.move_event, function(e2) {
                    AviviD.scroll_height = document.body.scrollHeight;
                    AviviD.window_Y = window.innerHeight; // update window size of y
                    AviviD.scroll_y = AviviD.get_scrollbar_position(); // update scrolling position
                    y_final = AviviD.get_Pos(e2, platform, 'y'); // (smaller) if move to the top
                    y_move = (y_initial - y_final)/y_initial*AviviD.window_Y;
                    y_move = (AviviD.platform=='ios'? -y_move : y_move); //// To real-time listen, in iphone, direction is oppsite            
                    if (!scrolled && AviviD.open_status == 0 || AviviD.open_status == 4) { // use for control updating frequency                                   
                        scrolled = true;
                        var st = parent.window.pageYOffset || parent.document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
                        if (st >= lastScrollTop) { // move down
                            console.log('scroll down')                       
                            if (AviviD.scroll_y + AviviD.window_Y >= 0.98*AviviD.scroll_height) { // at the bottom                           
                                AviviD.open_status = 4;
                            } else {
                                AviviD.css_close_showdiv();
                                AviviD.clear_all_scroll_timeout();
                                //// wait avivid_recommend_setting['second'], and hidden small div
                                AviviD.timeout_scroll = setTimeout(function() {
                                    if (AviviD.open_status == 0) { // if open, then cancel to hidden div                                   
                                        if (AviviD.config.model == 'right') {
                                            $('#avividai_recommend_iframe').animate({'left': '100vw'}, 500);
                                            $('#avivid_iframe_handle').animate({'left': '100vw'}, 500);
                                        } else {                                        
                                            $('#avividai_recommend_iframe').animate({bottom: '-100vh'}, 500);
                                            $('#avivid_iframe_handle').animate({bottom: '-100vh'}, 500);
                                            console.log('prepare to hide div!!!!!!!!!111');
                                        }
                                    }
                                }, 1000);
                                AviviD.all_timeout_scroll.push(AviviD.timeout_scroll);
                            }
                        } else if (st < lastScrollTop && (st + AviviD.window_Y) < 0.98*AviviD.scroll_height) { // move up and not in the bottom  
                            console.log('scroll up') 
                            AviviD.open_status = 0;
                            AviviD.css_close_hidediv();
                        }
                        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
                        setTimeout(() => { scrolled = false; }, 20); // wait each 20 ms
                    }
                    if (st + AviviD.window_Y >= 0.98*AviviD.scroll_height && (AviviD.open_status==0 || AviviD.open_status==4)) { // at the bottom                   
                        console.log('scrollTop: '+st+' window height: '+ parent.window.innerHeight+' document height: '+parent.document.body.scrollHeight);
                        AviviD.clear_all_scroll_timeout(); // don't hide div
                        AviviD.css_close_showdiv();
                    }
                });
            });


            //// mouseup (touchend) event, to control open at the bottom
            $(window).on(AviviD.event.up_event, function(e) {
                let criteria = AviviD.window_Y/10; // at the bottom and move 1/10 => fully open
                // let iframe_size = AviviD.get_iframe_size();
                // var iframe_top = $('#avividai_recommend_iframe', parent.document).css('top').split('px')[0];
                // console.log(" $(window.parent).on('mouseup touchend'), open_status: "+ open_status+", iframe_top: "+iframe_top);
                if (AviviD.scroll_y_down + AviviD.window_Y >= 0.98*AviviD.scroll_height && y_move > criteria && AviviD.open_status == 4) { // at the bottom and move_scroll upward => open iframe               
                    // console.log('parent window, success to open: iframe_top: '+iframe_top);
                    result = AviviD.animation_promise('open'); // bug only in ios(right: not stop in 1st motion)
                    AviviD.open_status = result.open_status; // immediately update status to prevent trigger scrolling event, open_status=2
                    result.promise.done( () => {
                        AviviD.transmit_to_iframe(AviviD.open_status); // set css after animation is finished
                    });
                }
                // release move event
                $(window).off(AviviD.event.move_event);
            });




            //// mousedown, touchstart event and mousemove event
            $('#avivid_iframe_handle').on(AviviD.event.down_event, function(e1) {
                // console.log('trigger mousedown'+e1.touches[0].screenY);
                // update parameters
                AviviD.scroll_y = window.pageYOffset;
                AviviD.window_Y = window.innerHeight;
                // set_parent_scroll(0, top_position) // ios bug here
                AviviD.Pos_move_release = 0;
                AviviD.Pos_click = AviviD.get_Pos(e1);
                // console.log('mousedown ,open status: '+ AviviD.open_status);
                if(AviviD.model == 'bottom') {
                    $('#avivid_iframe_handle').on(AviviD.event.move_event, function(e2) { // move event listener
                        AviviD.Pos_move_release = AviviD.get_Pos(e2); // update PosY_move_release only when mouse is moving
                        AviviD.Pos_click = AviviD.Pos_click > AviviD.window_Y? AviviD.window_Y : AviviD.Pos_click;
                        AviviD.distance_move = AviviD.Pos_click - AviviD.Pos_move_release + 0.1*AviviD.window_Y; // add 10% window_Y

                        // AviviD.distance_move = (AviviD.Pos_click < 0.8*AviviD.window_Y? AviviD.window_Y-AviviD.Pos_move_release : AviviD.distance_move);
                        console.log('move distance(+up, -down): '+AviviD.distance_move+' Pos_click: '+AviviD.Pos_click+' Pos_move_release: '+AviviD.Pos_move_release+' open_status: '+AviviD.open_status);
                        if (AviviD.open_status == 0 || AviviD.open_status == 4 && AviviD.platform != 'ios') { // now is close, to open, adjust height along with mousemove
                            AviviD.set_scrollable('disable', AviviD.scroll_y) // lock parent window scrolling bar to prevent bug
                            // console.log('distance_move is '+ AviviD.distance_move+', size: '+(-AviviD.window_Y + Math.max(AviviD.distance_move, 50)));
                            min_size = AviviD.window_Y*0.9 - AviviD.Pos_click; // you can drag everywhere and prevent restore to initial size
                            iframe_size = Math.max(AviviD.distance_move, 50);
                            console.log('AviviD.Pos_click: '+AviviD.Pos_click+', min_size: '+min_size+', distance_move is '+ AviviD.distance_move+', size: '+iframe_size);
                            $('#avividai_recommend_iframe').css({bottom: -AviviD.window_Y + iframe_size});
                            $('#avivid_iframe_handle').css({bottom: -AviviD.window_Y + iframe_size});
                            AviviD.open_status = 4;
                        }
                    });
                }
            });


            //// mouseup, touchend event, to do animation
            $('#avivid_iframe_handle').on(AviviD.event.up_event, function(e) {
                iframe_size = AviviD.get_iframe_size();
                console.log('touchup, iframe_size: '+iframe_size+', criteria: '+AviviD.criteria);
                result = (iframe_size > AviviD.criteria || AviviD.Pos_move_release == 0)? AviviD.animation_promise('open') : AviviD.animation_promise('close');

                AviviD.open_status = result.open_status;
                result.promise.done( () => {
                    AviviD.transmit_to_iframe(AviviD.open_status); // set css after animation is finished
                });
            });
    });

    </script>


    <!-- <script src="avividai_recommend_config.js"></script>
    <script src="avividai_recommend.js"></script> -->

    <!-- <script src="anime.min.js"></script> -->


</head>




<body style="height: 2000px">
<div id="avivid_iframe_warpper">


<div id="avivid_iframe_handle"></div>
<iframe src="avividai_recommend_cors.php" id="avividai_recommend_iframe"></iframe>
</div>

<button onclick="change_model()" type="button" style="position: sticky; top: 10vh; margin-left: 70vw; width: 10vmax; height: 10vmin; font-size: 3vmin;">Change mode</button>

<!-- Content Start -->
<p>&nbsp;</p>

<p><img src="https://photo.lovingfamily.com.tw/photo/images/%E5%B7%A6%E5%81%B4%E9%96%80%E5%B8%82%E8%B3%87%E8%A8%8A_190321.jpg" style="width:198px" /></p>

<p>&nbsp;</p>

<p><img src="https://photo.lovingfamily.com.tw/photo/images/181205_%E5%AE%98%E7%B6%B2%E5%B7%A6%E5%81%B4_LINE@_QR.jpg" style="height:348px; width:200px" /></p>

<p>&nbsp;</p>

<p><a href="https://www.facebook.com/Lovingfamily.tw/" target="_blank"><img src="https://photo.lovingfamily.com.tw/photo/images/200320_%E5%AE%98%E7%B6%B2%E5%B7%A6%E5%81%B4_facebook.jpg" style="height:198px; width:198px" /></a></p>

<p>&nbsp;</p>

<p><a href="https://www.lovingfamily.com.tw/TC/pdlist.aspx?PP1=001&PP2=0923" target="_blank"><img src="https://photo.lovingfamily.com.tw/photo/images/200320_%E5%AE%98%E7%B6%B2%E5%B7%A6%E5%81%B4_%E6%96%B0%E5%93%81.jpg" style="height:344px; width:198px" /></a></p>

<p>&nbsp;</p>

<p><a href="http://www.lovingfamily.com.tw/tc/pdlist.aspx?pp1=01" target="new"><img src="https://photo.lovingfamily.com.tw/photo/images/190624_%E5%AE%98%E7%B6%B2%E5%B7%A6%E5%81%B4_%E6%88%80%E5%AE%B6%E5%A5%BD%E7%89%A9.jpg" style="height:196px; width:196px" /></a></p>

<p>&nbsp;</p>

<p><a href="http://www.lovingfamily.com.tw/tc/pdlist.aspx?pp1=07" target="_blank"><img src="https://photo.lovingfamily.com.tw/photo/images/左側-01-161219_990.jpg" style="height:198px; width:198px" /></a></p>

<p>&nbsp;</p>
<!-- <img class="lazyload"src="images/kv.jpg" />     --><br />
<!-- Content End --> 

</div>






    <!-- <iframe src="avividai_recommend.php" id="avividai_recommend_iframe" data-status="start" data-height="0" data-width="0" style="background-color: transparent; position: fixed;"></iframe> -->
    

</body>
</html>