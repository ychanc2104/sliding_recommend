<?php
$web_id         = filter_var($_GET["web_id"], FILTER_SANITIZE_STRING);
$model          = filter_var($_GET["model"], FILTER_SANITIZE_STRING); //模式 bottom=底部滑上來, right=右邊滑出來
$uuid           = filter_var($_GET["uuid"], FILTER_SANITIZE_STRING);
$title          = filter_var($_GET["title"], FILTER_SANITIZE_STRING);
$url            = filter_var($_GET["url"], FILTER_SANITIZE_STRING);
$meta_url       = filter_var($_GET["meta_url"], FILTER_SANITIZE_STRING);
$website_type   = filter_var($_GET["website_type"], FILTER_SANITIZE_STRING);
$recommend_type = filter_var($_GET["recommend_type"], FILTER_SANITIZE_STRING);


if(empty($model) == true)
{
    $model = 'bottom';
}

$recommend_iframe_css = 'bottom_recommend_iframe';

if($model == 'right')
{
    $recommend_iframe_css = 'right_recommend_iframe';
}
?>

<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <title>推薦版位</title>
    <link href="avividai_recommend.css?<?php echo date('Ymdhis'); ?>" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>-->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.blockUI.js"></script>
    <script src="anime.min.js?<?php echo date('Ymdhis'); ?>"></script>

    <?php if($model == "bottom"): ?>
        <script src="avividai_recommend_config.js?<?php echo date('Ymdhis'); ?>"></script>
    <?php else: ?>
        <script src="avividai_recommend_config_right.js?<?php echo date('Ymdhis'); ?>"></script>
    <?php endif; ?>

    <style>
        .sticky_top
        {
            position : sticky;
            top : 0;
        }
    </style>
</head>

<body class="sticky_topxx" style="background-color: transparent;">
    <img src="img/left_close_arrow2.png?20210604" id="left_arrow_btn" style="width:35px; height:35px; position: absolute; top: 50%; bottom: 50%; z-index: 10000; cursor: pointer;">
    <img src="img/right_close_arrow2.png?20210604" id="right_arrow_btn" style="width:35px; height:35px; position: absolute; right: 0;top: 50%; bottom: 50%; z-index: 10000; cursor: pointer;">

    <div class="block_overlay" style="z-index: 1000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.15; cursor: wait; position: fixed;"></div>
    <!-- <div class="row _init_" id="row_header" style="background-color: rgba(0,0,0,0.5); position: fixed; width: 100%; top: 0px; right: 0; left: 0; margin:0 0 20px 0; height:60px; z-index:10;"></div> -->

    <div id="recomm_wrapper" class="container" style="max-width: 100%; margin-left: -1vmax;">
        <!--浮動標題列 rgba(116,116,116,0.5)-->
        <div class="row" id="row_header" style="background-color: rgba(0,0,0,0.5); position: fixed; width: 100%; top: 0px; right: 0; left: 0; margin:0 0 20px 0; height:6vh; z-index:10;">
            <div class="col-2">
                <div style="color: #9f9f9f; text-align: left; height: 60px; line-height: 6vh; z-index:99" id="reback_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M 10 8 a 0.5 0.5 0 0 0 0 0 H 3 l 3.147 -3.146 a 0.5 0.5 0 1 0 -0.708 -0.708 l -4 4 a 0.5 0.5 0 0 0 0 0.708 l 4 4 a 0.5 0.5 0 0 0 0.708 -0.708 L 3 9 H 10 A 0.5 0.5 0 0 0 10 8 z"/>
                    </svg>
                </div>
            </div>
            <div class="col-8 text-center">
                <div style="line-height: 66px" id="window_title"></div>
            </div>
            <div class="col-2">
                <div style="text-align: right; height: 60px; line-height: 6vh">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" id="close_window_btn" style="color: #ffffff; z-index:99">
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="row _init_">
            <div class="col" style="height: 27px">&nbsp</div>
        </div>


        <!--推薦內容顯示-->
        <div class="row _init_">
            <div class="col" style="padding:0; margin:0">
                <div id="body_iframe"></div>

                <!--滑不完推薦內容-->
                <div id="recommend_iframe" class="<?php echo $recommend_iframe_css; ?>" data-status="end">
                    <img src="img/right_close_arrow.png?202106041" id="right_arrow_btn" style="width:19px; height:36px; position: absolute; top: 50%; bottom: 50%; left:-31px; z-index: 100">
                    <div class="row" style="padding: 10px 10px 0 0; background-color: rgb(0, 0, 0); opacity: 0.6; height: 525px"></div>
                </div>
            </div>
        </div>

        <!--推薦內容集合頁-->
        <div class="row" id="item_div" style="margin:10vh auto; width:100%">
            <div class="col">
                <div id="header_wrapper" class="_init_" style="background-color:#ffffff; position: fixed; width: 100%; top: 6vh; right: 0px; left: -1.5vw; margin:0; margin-bottom: 15px; z-index:10; height: 8vh; line-height: 4vh">
                    <div class="row">
                        <div class="col-6 text-center menu_header_btn" style="padding: 0 12px 0 36px">
                            <b style="font-size: 20px">猜你喜歡</b>
                            <div class="bg-dark" style="height: 10px">&nbsp</div>
                        </div>

                        <div class="col-6 text-center menu_header_btn" style="padding: 0 36px 0 12px">
                            <b class="text-gray" style="font-size: 20px">別人也看了</b>
                            <div class="bg-gray" style="height: 10px">&nbsp</div>
                        </div>
                    </div>
                </div>

                <div id="recommend_body_div" class="row" style="overflow-y:scroll; margin-top:0vh; height:82vh;"></div>
            </div>
        </div>
    </div>

    <script type="text/javascript">

    //// **css should set after animations

    $(function() {
        $(window.parent).on('mouseup touchend mousedown touchstart mousemove touchmove click tap', function(e) {}); // required for ios
        $(window).on('mouseup touchend mousedown touchstart mousemove touchmove click tap', function(e) {}); // required for ios
        $(window.parent).on('scroll touchstart', function(e) {});
        $('#right_arrow_btn').on('touchstart mousedown click', function(e) {});
        

        console.log(navigator.userAgent.toLowerCase());
        default_init();
        css_close_showdiv();
        css_close_hidediv();

        const platform = get_device_type(); // pc, ios or android
        console.log('this os is '+platform);
        var model = '<?php echo $model; ?>';
        var open_status = 0; // 0: fully close, 1: half-open, 2: fully open, 3: in item-page

        var PosX_click = PosY_click = null;

        var Pos_move_release = PosX_move_release = PosY_move_release = null;

        // const window_Y = window.outerHeight;
        // const window_X = window.outerWidth;
        const window_X = screen.width;
        const window_Y = screen.height;
        // const window_X = screenX;
        const open_width = window.innerWidth;;
        // const open_height = $('#avividai_recommend_iframe', parent.document).attr("data-height");
        const open_height = parent.window.innerHeight;
        var model = '<?php echo $model; ?>';

        var Pos_click = null;
        var distance_move = null;
        var delta_distance = 0;
        const window_size = (model=='right'? window_X : window_Y);
        const open_size = (model=='right'? open_width : open_height);
        const scroll_height = parent.document.body.scrollHeight;
        // timeout events
        var timeout_scroll = null; // timeout for scrolling event
        
        var right_open_motion_2nd = null;
        var right_open_css = null;
        var timeout_right_right = null;
        var timeout_right_init = null;
        // var promise = $('#avividai_recommend_iframe', parent.document).promise();
        var promise = $('#avividai_recommend_iframe', parent.document).promise();

        console.log('window_size is '+ window_size);
        console.log('fully height is '+ open_size);

        //關閉集合頁
        $('#close_window_btn').on('click', function(e) {
        // $(window).on('click', '#close_window_btn', function(e) {
            // var top_position = window.parent.pageYOffset; // save scrolling position
            var top_position = get_scrollbar_position(); // get scrolling position
            clearTimeout(timeout_scroll);
            open_status = animation_promise('close', false);
            console.log('close_window_btn event trigger, top_position: '+top_position+' open_status: '+open_status);

            Pos_move_release = 0;
            reback();
        });


        // mouseup (touchend) event
        $(window).on('mouseup touchend', function(e) {
        // window.addEventListener('touchend', function(e) {
            const criteria = window_size/3;
            var top_position = get_scrollbar_position(); // get scrolling position
            var iframe_top = $('#avividai_recommend_iframe', parent.document).css('top').split('px')[0];
            console.log('mouseup: '+ top_position+' open_status: '+ open_status);
            // if (open_status == 0 || open_status == 1) // now is close or moving, to open
            if (open_status == 0) // now is close or moving, to open
            {
                // clearTimeout(timeout_scroll);  // clear shinking scrolling event
                // if (window_size - Pos_move_release > criteria || distance_move > criteria) // success to fully open, (1st motion for right) 
                if (iframe_top < criteria || Pos_move_release < 10) // success to fully open, (1st motion for right) 
                {
                    console.log('now is close, start to open, Pos_move_release '+Pos_move_release+' model: '+ model);
                    // set_parent_scroll(0, top_position);
                    // clearTimeout(timeout_scroll);
                    clearTimeout(timeout_scroll);
                    open_status = animation_promise('open', false);
                    promise.then(function() {
                        clearTimeout(timeout_scroll);
                        Pos_move_release = 0;
                        // set_parent_scroll(0, top_position);
                        console.log('new method, open_status: '+open_status);
                    });

                    // open_status = animation_promise('open', false); // bug only in ios(right: not stop in 1st motion)
                    // if (model == 'right')
                    // {
                    //     setTimeout(function() {
                    //         open_status = 1;
                    //         console.log('new method1111111st, open_status: '+open_status);                        
                    //     }, 1000);
                    // }
                    // else
                    // {
                    //     open_status = 2; // don't wait
                    // }

                    
                }
                // else // open
                else // restore to close
                {
                    console.log('now is close, restore to close top_position: '+top_position);

                    open_status = animation_promise('close', false);
                    reback();
                    Pos_move_release = 0; // reset Y to prevent restore when click upper region
                    console.log('new method, restore to close open_status: '+open_status);

                }
            }

            // release move event
            $(window).off('mousemove');
            $(window).off('touchmove');

        });


        // $(window).on('mousedown touchstart', function(e) {
        //     window.parent.document.body.style.overflow = "hidden";
        //     console.log('tirgger click, tap: overflow: '+window.parent.document.body.style.overflow);
        // });


        
        // mousedown, touchstart event and mousemove event
        // $(window).on('mousedown touchstart', function(e) {
        $(window).on('mousedown touchstart', function(e) {
            // $(window.parent).unbind('scroll');
            
            var top_position = get_scrollbar_position();
            // set_parent_scroll(0, top_position) // ios bug here
            Pos_move_release = 0;
            Pos_click = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y'));
            console.log('testttttttt: '+top_position)
            clearTimeout(timeout_scroll); // cancel scrolling event
            console.log('mousedown ,open status: '+ open_status);
            if(model == 'right')
            {
                if (open_status==1) // 2nd motion open, click to fully open
                    {   // already half open
                        // open_status = animation_promise('open', true);
                        // promise.then(function() {
                        //     css_fullyopen();
                        //     console.log('new method to 2nd motion open, open_status: '+open_status);
                        // });

                        animation_promise('open', true); // 2nd motion open, click to fully open
                        setTimeout(function() {
                            open_status = 2;
                        }, 1000);

                        // var right_open_motion_2nd = setTimeout(function() {
                        //     $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({top:0}, 200);
                        // }, 500);

                        // // change status until animate is finished
                        // var right_open_css = setTimeout(function() {                            
                        //     open_status = 2; // to fully open
                        //     css_fullyopen();
                        // }, 700);

                        //// To close at half, use to listen right_arrow_btn to close iframe during close motion 1~2
                        $('#right_arrow_btn').on('click touchstart', function(e) {
                            // clearAllTimeouts();
                            // e.preventDefault();
                            // right_open_motion_2nd != null? clearTimeout(right_open_motion_2nd) : '';
                            // right_open_css != null? clearTimeout(right_open_css) : '';
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
                    $(window).on('mousemove touchmove', function(e) {
                        // $(window.parent).off();
                        // $(window.parent).unbind('scroll');
                        // clearTimeout(timeout_scroll); // cancel scrolling event
                        set_parent_scroll(0, top_position);
                        Pos_move_release = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y')); // update PosY_move_release only when mouse is moving
                        console.log('mouse move ' + PosY_move_release);
                        if (open_status == 0) // now is close, to open, adjust height along with mousemove, useless
                        {
                            /* stop moving when mouse button is released:*/
                            screenX = (screenX!=0? screenX : window_size); // ios screen will =0, so make screen=window_size
                            iframe_size = Pos_move_release*window_size/screenX; // window_size = 2400, screenX=1920, Pos=0~1920
                            console.log('windwo_X is '+ window_size + 'screenX is '+ screenX + ' and cursor is '+ Pos_move_release);
                            $('#avividai_recommend_iframe', parent.document).css({left: iframe_size-50});
                            // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({'left': iframe_size-50}, 0); // bigger is smaller
                        }
                });
                }
            }
            if(model == 'bottom')
            {
                $(window).on('mousemove touchmove', function(e) {
                    // clearTimeout(timeout_scroll); // put in here to disable animation from scrolling event
                    console.log('bottom, mousemove, top_position :'+top_position);
                    // set_parent_scroll(0, top_position);
                    Pos_move_release = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y')); // update PosY_move_release only when mouse is moving
                    Pos_click = Pos_click>open_height? open_height : Pos_click;
                    distance_move = Pos_click - Pos_move_release + 0.1*window_Y;
                    distance_move = (Pos_click < 0.8*window_Y? window_Y-Pos_move_release : distance_move);
                    console.log('move distance(+up, -down): '+distance_move+' Pos_click: '+Pos_click+' Pos_move_release: '+Pos_move_release+' open_status: '+open_status);
                    // set_parent_scroll(0);                  
                    screenX = (screenX!=0? screenX : window_size); // ios screen will =0, so make screen=window_size
                    // iframe_size = distance_move*window_size/screenX;

                    // if (open_status == 0 || open_status == 1) // now is close, to open, adjust height along with mousemove
                    if (open_status == 0 && platform != 'ios') // now is close, to open, adjust height along with mousemove
                    {

                        set_parent_scroll(0, top_position);
                        /* stop moving when mouse button is released:*/
                        // clearAllTimeouts();
                        // open_status = 1; // half open                        
                        h_iframe = window_size - Pos_move_release;
                        // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: 100}, 0);
                        cursor_height = Math.max(100, h_iframe);
                        // console.log('cursor is '+ Pos_move_release+' window_size '+ screen.height+' set height is '+cursor_height+ ' screenY: '+e.touches[0].screenY);
                        console.log('set open_size is ' + open_size - distance_move + 'open_size is '+ open_size + ' and distance_move is '+ distance_move);
                        // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: cursor_height}, 0);
                        clearTimeout(timeout_scroll);
                        $('#avividai_recommend_iframe', parent.document).css({top: parent.window.innerHeight - Math.max(distance_move, 100)});
                        // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({top: open_size - distance_move}, 0);

                    }
                });
            }


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


        // 超連結內容, to open item url
        $(document).on('click', '.href_btn', function() {

            if (open_status == 2)
            {
                var width = window.innerWidth;
                var url   = $(this).attr('data-url');
                var title = $(this).text().substring(0, 15);
                open_status = 3;
                // create iframe linked to clicked item page
                $('#body_iframe').html('<iframe src="'+url+'" style="border:0; width:100%; height:95vh; z-index:1;"></iframe>');
                // hiden all items div
                // $('#item_div').animate({height:"0"}, 700);
                $('#item_div').animate({top:"100vh"}, 700);
                $('#body_iframe').css({'background-color': 'white'});

                setTimeout(function() {
                    $('#item_div').hide(); // hidden all items page including header bar
                    $('#body_iframe').show(); // show iframe of clicked item
                    $('#reback_btn').css("color", "#ffffff").show();
                    // $('#body_iframe').css({"margin-topavividai_recommend_iframe":"50px"});
                    $('#body_iframe').css({"margin-top":"3vh"});
                    $('#recommend_iframe').attr("data-status", "start");
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

        //// listener to show or hide small iframe during scrolling
        var lastreq = lastScrollTop = 0; //0 means there were never any requests sent
        var cum_scroll = 0;
        var scrolled = false;
        // $(window.parent).on('scroll', function(event) {
        //     var Pos_move_release = 0; // update PosY_move_release only when mouse is moving
        //     // open_status = 0;
        //     // if (!scrolled && open_status==0) 
        //     if (!scrolled && open_status==0) 
        //     {
        //         scrolled = true;
        //         // set_parent_scroll(1, -window.parent.document.body.style.top);
        //         if (open_status == 0) // only when now is close, show small div and set to default setting when scrolling
        //         {
        //             var st = parent.window.pageYOffset || parent.document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        //             console.log('trigger scroll ,open_status: '+open_status+ ' st: '+st+' parent.window.innerHeight: '+parent.window.innerHeight);

        //             if (st > lastScrollTop) // move to down, show div
        //             {
        //                 console.log('downscroll: st: '+st+' lastScrollTop: '+lastScrollTop);
        //                 css_close_showdiv_ran(model);
        //                 // downscroll code
        //                 if (st + parent.window.innerHeight >= 0.90*parent.document.body.scrollHeight)
        //                 {
  
        //                 }
        //                 else
        //                 {
        //                     console.log('downscroll: st: '+st+' lastScrollTop: '+lastScrollTop);
        //                     css_close_showdiv_ran(model);
        //                     cum_scroll = 0;
        //                 }


        //             } 
        //             else // move upward, hidden div
        //             {
        //                 console.log('upscroll: st: '+st+' lastScrollTop: '+lastScrollTop);
        //                 // scroll_up_hide(model);
        //                 // default_animation(0, 300);
        //                 css_close_hidediv(model);

        //                 // upscroll code
        //             }
        //             lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        //             cum_scroll = cum_scroll + (st-lastScrollTop);

        //             clearTimeout(timeout_scroll); 
        //             // wait avivid_recommend_setting['second'], and hidden small div
        //             timeout_scroll = setTimeout(function() {
        //                 if (open_status == 0) // if open, then cancel to hidden div
        //                 {
        //                     if (model == 'right') {
        //                         $('#avividai_recommend_iframe', parent.document).animate({'left': '100vw'}, 500);
        //                     }
        //                     else {
        //                         $('#avividai_recommend_iframe', parent.document).animate({top: '100vh'}, 500);
        //                     }
        //                 }
        //             }, avivid_recommend_setting['second']);
        //         }
        //         setTimeout(function () { scrolled = false; }, 20); // wait each 20 ms
        //     }

        //     // at the bottom, always show div 
        //     if (st + parent.window.innerHeight >= 0.85*parent.document.body.scrollHeight && open_status==0)
        //     {
        //         console.log('scrollTop: '+st+' window height: '+ parent.window.innerHeight+' document height: '+parent.document.body.scrollHeight);
        //         clearTimeout(timeout_scroll);
        //         css_close_showdiv_ran(model);
        //     }

        // });

        //// scrolling listener here
        var scrolled = false;
        $(window.parent).on('touchstart', function(e1) {
            // set_parent_scroll(0, get_scrollbar_position());            
            y_initial = get_Pos(e1, platform, 'y'); // bigger
            y_initial = (y_initial>parent.window.innerHeight? y_initial-parent.window.innerHeight : y_initial);
            console.log(" $(window.parent).on('touchstart'), y_initial: "+y_initial);
            scroll_y = get_scrollbar_position();
            $(window.parent).on('touchmove', function(e2) {
                scroll_y = get_scrollbar_position(); // update scrolling position
                clearTimeout(timeout_scroll); 
                if (!scrolled)
                {
                    
                    // clearTimeout(timeout_scroll); 
                    scrolled = true;
                    console.log('parent scroll, posScroll: '+ get_scrollbar_position()+' vs scroll_y: '+scroll_y);
                    var st = parent.window.pageYOffset || parent.document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
                    if (st >= lastScrollTop) // move down
                    {
                        if (scroll_y + parent.window.innerHeight >= 0.90*scroll_height && (y_initial - get_Pos(e2, platform, 'y'))>0) // at the bottom
                        {
                            open_status = 4;
                            // clearTimeout(timeout_scroll);

                            // set_parent_scroll(0, parent.document.body.scrollHeight-parent.window.innerHeight);
                            y_final = get_Pos(e2, platform, 'y'); // smaller if move to the top
                            y_move = (y_initial - get_Pos(e2, platform, 'y'))/y_initial*parent.window.innerHeight;
                            console.log('open_status: '+open_status+', scroll_y: '+scroll_y+', y_initial: '+y_initial+', y_final: '+y_final+', y_move: '+y_move+', parent.window.innerHeight: '+parent.window.innerHeight)
                            // $('#avividai_recommend_iframe', parent.document).css({top: parent.window.innerHeight - Math.max(y_move, 100)});
                        
                        }
                        else
                        {
                            console.log('open_status: '+open_status+', scroll_y: '+scroll_y+', show div!!!!!!1, scroll_y: '+scroll_y+', parent.window.innerHeight: '+parent.window.innerHeight+', scroll_height: '+scroll_height+', y_initial: '+y_initial+', current_y: '+get_Pos(e2, platform, 'y'));
                            // css_close_showdiv_ran(model);
                            css_close_showdiv(model);

                            // clearTimeout(timeout_scroll); 
                            // wait avivid_recommend_setting['second'], and hidden small div
                            timeout_scroll = setTimeout(function() {
                                if (open_status == 0) // if open, then cancel to hidden div
                                {
                                    if (model == 'right') {
                                        $('#avividai_recommend_iframe', parent.document).animate({'left': '100vw'}, 500);
                                    }
                                    else {
                                        $('#avividai_recommend_iframe', parent.document).animate({top: '100vh'}, 500);
                                    }
                                }
                            }, avivid_recommend_setting['second']);


                        }
                    }
                    else if (st < lastScrollTop && st + parent.window.innerHeight < 0.90*parent.document.body.scrollHeight)// move up
                    {
                        open_status = 0;
                        css_close_hidediv(model);
                    }
                    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling


                    // clearTimeout(timeout_scroll); 
                    // // wait avivid_recommend_setting['second'], and hidden small div
                    // timeout_scroll = setTimeout(function() {
                    //     if (open_status == 0) // if open, then cancel to hidden div
                    //     {
                    //         if (model == 'right') {
                    //             $('#avividai_recommend_iframe', parent.document).animate({'left': '100vw'}, 500);
                    //         }
                    //         else {
                    //             $('#avividai_recommend_iframe', parent.document).animate({top: '100vh'}, 500);
                    //         }
                    //     }
                    // }, avivid_recommend_setting['second']);


                    setTimeout(function () { scrolled = false; }, 20); // wait each 20 ms
                }
                if (st + parent.window.innerHeight >= 0.85*parent.document.body.scrollHeight && open_status==0)
                {
                    console.log('scrollTop: '+st+' window height: '+ parent.window.innerHeight+' document height: '+parent.document.body.scrollHeight);
                    clearTimeout(timeout_scroll);
                    css_close_showdiv(model);
                }

                // else
                // {
                //     // set_parent_scroll(1, get_scrollbar_position());
                // }
            });
        });


        // mouseup (touchend) event
        $(window.parent).on('mouseup touchend', function(e) {
        // window.addEventListener('touchend', function(e) {
            const criteria = window_size/5*4;
            var iframe_top = $('#avividai_recommend_iframe', parent.document).css('top').split('px')[0];
            console.log(" $(window.parent).on('mouseup touchend'), open_status: "+ open_status+", iframe_top: "+iframe_top);
            // if (open_status == 0 || open_status == 1) // now is close or moving, to open
            if (open_status == 4) // now is close or moving, to open
            {
                clearTimeout(timeout_scroll);  // clear shinking scrolling event
                // if (window_size - Pos_move_release > criteria || distance_move > criteria) // success to fully open, (1st motion for right) 
                // if (iframe_top < criteria || y_move > 50) // success to fully open, (1st motion for right) 
                if (scroll_y + parent.window.innerHeight >= 0.90*scroll_height && y_move > 50)
                {
                    console.log('parent window, success to open: iframe_top: '+iframe_top);
                    clearTimeout(timeout_scroll);
                    open_status = animation_promise('open', false); // bug only in ios(right: not stop in 1st motion)
                }

                // else // open
                // else // restore to close
                // {
                //     if (get_scrollbar_position() + parent.window.innerHeight >= 0.90*scroll_height)
                //     {
                //         animation_promise('close');
                //         console.log(" $(window.parent).on('mouseup touchend'), open_status: "+ open_status+", restore to close");
                //         reback();
                //         // set_parent_scroll(1, get_scrollbar_position());
                //         Pos_move_release = 0; // reset Y to prevent restore when click upper region
                //         $(window.parent).off('touchmove');
                //         setTimeout( () => {
                //             open_status = 0;
                //         }, 1000);
                //     }

                // }
            }

            // release move event
            $(window).off('mousemove');
            $(window).off('touchmove');

        });



        //// listener to execute back button in iframe       
        history.pushState(null, null, window.top.location.pathname + window.top.location.search);
        $(window).on('popstate', function(e) {
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
    });



    //// detect scrolling direction
    // var lastScrollTop = 0;

    // // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    // element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    // var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    // if (st > lastScrollTop){
    //     // downscroll code
    // } else {
    //     // upscroll code
    // }
    // lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }, false);




    //// function

    //// scroll up to hide 
    // async function scroll_up_hide(model) {
    //     const close_av = await default_animation(0) // to close
    //     css_close_hidediv(model, close_av);
    // }
    

    // //// scroll up to show 
    // async function scroll_down_show(model) {
    //     const show_av = await default_animation(1) // to show
    //     css_close_showdiv(model, show_av);
    // }


    function animation_promise(motion, in_half_open=true) // animation + css setting, motion='open', 'close', return promise
    {
        var model = '<?php echo $model; ?>';
        var open_status = 10;
        var element = $('#avividai_recommend_iframe', parent.document);
        var top_position = get_scrollbar_position();
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
                        animation('open', false)
                        .done( () => {
                            css_halfopen()
                            // set_parent_scroll(0, top_position) // disable scrolling
                        })
                    })

                    // promise = animation('open', false);
                    // animation('open', false).done(()=>{
                    //     css_halfopen();
                    //     // set_parent_scroll(0, top_position); // disable scrolling
                    //     // var open_status = 1;
                    // });

                    // av_right_open_1 = await animation('open', false); // 
                    // css_halfopen(av_right_open_1);

                    var open_status = 1;

                    
                }
                else // add 2nd segment, in_half_open=true
                {
                    // promise = animation('open', true);
                    $.when(
                        set_parent_scroll(0, top_position), // confirm to disable scrolling
                        // animation('open', false)
                    ).done( () => {
                        animation('open', true)
                        .done( () => {
                            css_fullyopen()
                            // set_parent_scroll(0, top_position) // disable scrolling
                        })
                    })



                    // animation('open', true).done(() => {
                    //     css_fullyopen();
                    //     set_parent_scroll(0, top_position); // disable scrolling

                    // });


                    // promise.then(()=>{
                    //     css_fullyopen();
                    // });

                    // av_right_open_2 = await animation('open', true);
                    // css_fullyopen(av_right_open_2);
                    var open_status = 2;
                }      
            }
            else if (motion == 'close') // to close
            {
                // set_parent_scroll(1, top_position); // enable scrolling
                if (in_half_open) // in half open state => close half
                {

                    $.when(
                        set_parent_scroll(1, top_position) // confirm to enable scrolling
                    ).done( () => {
                        animation('close', true)
                        .done( () => {
                            css_close_showdiv(model),
                            css_close_hidediv(model)
                        })
                    })                    
                    
                    // promise = animation('close', true);
                    // animation('close', true).done(()=>{
                    //     css_close_showdiv(model);
                    //     css_close_hidediv(model);  
                    //     // set_parent_scroll(1, top_position); // enable scrolling
                    // });
                    // css_1 = await css_close_showdiv(model, av_right_close);
                    // css_2 = await css_close_hidediv(model, css_1);                    
                }
                else // in fully open state => close all
                {

                    $.when(
                        set_parent_scroll(1, top_position) // confirm to enable scrolling
                        // animation('close', false).promise() // 1st
                    ).done( () => {
                        animation('close', false) // 1st
                        // animation('close', true).promise()  // 2nd           
                        .done( () => {
                            animation('close', true) // 2nd   
                            // set_parent_scroll(1, top_position),
                            // css_close_showdiv(model),
                            // css_close_hidediv(model)
                            .done( () => {
                                css_close_showdiv(model),
                                css_close_hidediv(model)
                            })
                        })
                    }) 

                    // $('#avividai_recommend_iframe', parent.document).animate({top: '40vh'}, 300);
                    // $('#avividai_recommend_iframe', parent.document).promise().done(function() {
                    //     $('#avividai_recommend_iframe', parent.document).animate({left: '100vw'}, 300);
                    //     $('#avividai_recommend_iframe', parent.document).promise().done(function() {
                    //         css_close_showdiv(model);
                    //         css_close_hidediv(model);
                    //     });
                    // });
                    // set_parent_scroll(1, top_position); // enable scrolling

                    // promise = animation('close', false); // only 1st close-motion
                    // animation('close', false).done(function() {
                    //     animation('close', true); // add 2nd close-motion
                    //     // element.animate({left: '100vw'}, 300); // add 2nd close-motion
                    // }).done(() => {
                    //     css_close_showdiv(model);
                    //     css_close_hidediv(model); 
                    // });

                    // promise = animation('close', false); // only 1st close-motion
                    // promise.then(function() {
                    //     element.animate({left: '100vw'}, 300); // add 2nd close-motion
                    //     promise.then(() => {
                    //         css_close_showdiv(model);
                    //         css_close_hidediv(model);  
                            
                    //     });
                    // });

                    // promise.done(()=>{
                    //     css_close_showdiv(model);
                    //     css_close_hidediv(model);    
                    // });
                    // const av_right_close = await animation('close', false);
                    // const css_1 = await css_close_showdiv(model, av_right_close);
                    // const css_2 = await css_close_hidediv(model, css_1); 
                }
                var open_status = 0;
            }
        }
        else if (model == "bottom")
        // else // bottom case
        {
            if (motion == 'open') // to open
            {

                $.when(
                    animation('open')
                    // set_parent_scroll(0, top_position), // confirm to disable scrolling, don't use this in ios
                ).done( () => {
                    css_fullyopen()
                    // set_parent_scroll(0, top_position) // confirm to disable scrolling, don't use this in ios
                })


                // $.when(
                //     // set_parent_scroll(0, top_position), // confirm to disable scrolling, don't use this in ios
                // ).done( () => {
                //     animation('open')
                //     .done( () => {
                //         css_fullyopen()
                //     })
                // })

                // set_parent_scroll(0, top_position); // disable scrolling
                // promise = animation('open');
                // animation('open').done(()=>{
                //     css_fullyopen();
                //     set_parent_scroll(0, top_position); // disable scrolling
                // });

                // av_bottom_open = await animation('open');
                // css_fullyopen(av_bottom_open);
                var open_status = 2;
            }
            else // to close
            {

                $.when(
                    set_parent_scroll(1, top_position) // confirm to enable scrolling
                    ).done( () => {
                        animation('close')
                        .done( () => {
                            css_close_showdiv(model)
                            // css_close_hidediv(model)
                        })
                    })    




                // set_parent_scroll(1, top_position); // disable scrolling
                // promise = animation('close');
                // animation('close').done(()=>{
                //     css_close_showdiv(model);
                //     css_close_hidediv(model);
                //     set_parent_scroll(1, top_position); // disable scrolling            
                // });

                // av_bottom_close = await animation('close');
                // css_1 = await css_close_showdiv(model);
                // css_2 = await css_close_hidediv(model);
                var open_status = 0;
            }
        }
        return open_status;
    }


    function animation(motion, in_half_open=true) // motion: 0 for close, 1 for open
    {
        var model = '<?php echo $model; ?>';
        var element = $('#avividai_recommend_iframe', parent.document);
        var promise = element.promise();
        if (model == "right")
        {
            if (motion == 'close') // close event (in half open => left: 100vw, not in half open => left: 0)
            {
                if (in_half_open) // to close, in half open
                {
                    promise = element.animate({left: '100vw'}, 300).promise();
                    console.log('animation, model:right, motion:To close, in half open state, to close');
                }
                else // to close, in fully open (two motion, 1st motion first)
                {
                    promise = element.animate({top: '40vh'}, 300).promise();
                    // $('#avividai_recommend_iframe', parent.document).animate({top: '40vh'}, 300);
                    // $('#avividai_recommend_iframe', parent.document).promise().then(function() {
                    //     $('#avividai_recommend_iframe', parent.document).animate({left: '100vw'}, 300);
                    // });
                    // av_right_close_1 = await animation_right_close(1); // 1st motion to close
                    // animation_right_close(2, av_right_close_1); // 2nd motion to close

                    // av_right_close_2 = await animation_right_close(2, av_right_close_1); // 2nd motion to close
                    console.log('animation, model:right, motion:To close, in fully open state, to close');
                }
            }
            else if (motion == 'open') // open event (in_half_open(true=>open) or in_close(false=>half open))
            {
                if (in_half_open) // to fully open, in half open=true
                {
                    promise = element.animate({top: 0}, 200).promise();
                    console.log('animation, model:right, motion:To open, in half open state, to fully open (2nd motion)');
                }
                else
                {
                    promise = element.animate({left: 0}, 500).promise();
                    console.log('animation, model:right, motion:To open, in close state, to half open (1st motion)');
                }

                // in_half_open? $('#avividai_recommend_iframe', parent.document).animate({top: 0}, 200) : $('#avividai_recommend_iframe', parent.document).animate({left: 0}, 500);
                // console.log('animation, motion:To open, in fully open state, to close');

            }
        }
        else if (model == "bottom")
        {
            if (motion == 'close') // close event
            {
                promise = element.animate({top: '100vh'}, 300).promise();
                console.log('animation, model:bottom, motion:To close, to close');

            }
            else if (motion == 'open') // open event
            {
                promise = element.animate({top: 0}, 500).promise();
                console.log('animation, model:bottom, motion:To open, to open');
            }
        }
        return promise;

    }

    // not used
    function animation_right_close(right, av_right_close_1) // two motion to close
    {
        right==1? $('#avividai_recommend_iframe', parent.document).animate({top: '40vh'}, 300) : $('#avividai_recommend_iframe', parent.document).animate({left: '100vw'}, 300);
    }




    // not used
    function default_animation(motion, timeout) // motion: 0 for close, 1 for open
    {
        var model = '<?php echo $model; ?>';
        if(model == "right")
        {
            motion==0? $('#avividai_recommend_iframe', parent.document).animate({left: '100vw'}, timeout): $('#avividai_recommend_iframe', parent.document).animate({left: '90vw'}, timeout);
        }
        else
        {
            motion==0? $('#avividai_recommend_iframe', parent.document).animate({top: '100vh'}, timeout): $('#avividai_recommend_iframe', parent.document).animate({top: '94vh'}, timeout);
        }
    }

    //// show samll div to toggle, open_status=0, scroll down (two version, right and bottom)
    function css_close_showdiv_ran(model)
    {
        // top_position = window.parent.pageYOffset;
        if (model == 'right')
        {
            $('.block_overlay').show();
            $('#row_header').hide();
            $('._init_').hide(); // show header title bar
            $('#item_div').css({'margin-top': '10vh'});
            iframe_show = 6.5+Math.random();
            $('#avividai_recommend_iframe', parent.document).css({display:'block', 'margin-left': '', left: 'calc(100% - '+iframe_show+'%)', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
            $('#right_arrow_btn').css({display: 'block', top: '25vh'});
            $('#left_arrow_btn').css({display: 'block', top: '25vh'});
            $('#recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
            $('.block_overlay').css({"margin-left": "-1vmax"}); // align product page
        }
        else
        {
            $('.block_overlay').show();
            $('#row_header').hide();
            $('._init_').hide(); // show header title bar
            $('#item_div').css({'margin-top': '2vh'});
            // $('#avividai_recommend_iframe', parent.document).css({display:'block', top:(91+Math.random()*2)+'vh', bottom: 0, height: '100vh', width: '100vw', left: 0});
            // iframe_height = 46+5*Math.random();
            iframe_show = 9.5+Math.random();
            $('#avividai_recommend_iframe', parent.document).css({display:'block', top: 'calc(100% - '+iframe_show+'%)' , bottom: 0, height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw'});
            $('#right_arrow_btn').css({display: 'none'});
            $('#left_arrow_btn').css({display: 'none'});
            $('#recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
            // $('.block_overlay').css({"margin-left": "-1vmax"}); // align product page
        }
        // set_parent_scroll(1, 500);

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
            $('#avividai_recommend_iframe', parent.document).css({display:'block', 'margin-left': '', left: '90vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
            $('#right_arrow_btn').css({display: 'block', top: '25vh'});
            $('#left_arrow_btn').css({display: 'block', top: '25vh'});
            $('#recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
            $('.block_overlay').css({"margin-left": "-1vmax"}); // align product page
        }
        else
        {
            $('.block_overlay').show();
            $('#row_header').hide();
            $('._init_').hide(); // show header title bar
            $('#item_div').css({'margin-top': '2vh'});
            // $('#avividai_recommend_iframe', parent.document).css({display:'block', top:'97vh', bottom: 0, height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw'});
            $('#avividai_recommend_iframe', parent.document).css({display:'block', top:'', bottom: '-97vh', height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw'});

            $('#right_arrow_btn').css({display: 'none'});
            $('#left_arrow_btn').css({display: 'none'});
            $('#recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
            // $('.block_overlay').css({"margin-left": "-1vmax"}); // align product page
        }
        // set_parent_scroll(1, 500);
    }
    //// hidden samll div to toggle, open_status=0, scroll up (two version, right and bottom)
    function css_close_hidediv(model)
    {
        // var top_position = window.parent.pageYOffset;
        // console.log('css_close_hidediv, top_position: '+top_position);
        if (model == 'right')
        {
            $('#avividai_recommend_iframe', parent.document).css({display:'block', 'margin-left': '', left: '100vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
        }
        else
        {
            $('#avividai_recommend_iframe', parent.document).css({display:'block', top:'100vh', bottom: 0, height: '100vh', width: '100vw', left: 0});
        }
        // set_parent_scroll(1, 500);

    }

    //// for model=right, half open (open_status = 1, right only)
    function css_halfopen()
    {
        $('.block_overlay').hide(); //半透明遮罩
        $('#avividai_recommend_iframe', parent.document).css({display:'block', 'margin-left': '', left: '0', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
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
        $('#avividai_recommend_iframe', parent.document).css({display:'block', 'margin-left': '', left: 0, top: 0, bottom: 0, height: '100vh', width: '100vw'}); // required
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


            // top_position = window.parent.pageYOffset;

            window.parent.document.body.style.top = -top_position+'px';
            window.parent.document.body.style.position = "fixed"; // extra required for ios
            window.parent.document.body.style.overflow = "hidden"; // close scrolling
            console.log('scrolling position: '+top_position);
            
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


    //預設項目, 
    function default_init()
    {
        var model = '<?php echo $model; ?>';

        if(model == "right")
        {
            get_item('guess') //抓猜你喜歡

            $('#reback_btn').hide(); // hide reback_arrow
            $('._init_').show();
            // $('body').css({height: '90vh'}); //關閉卷軸滑動
            $('body').css({height: '100%', overflowY: 'hidden'}); //關閉卷軸滑動

            //為了讓箭頭顯示，所以內容都需右移
            $('#right_arrow_btn').show();
            $('#row_header').hide();
            $('#avividai_recommend_iframe', parent.document).css({top: '40vh', left: '100vw'});

            // $('#item_div ._init_:eq(0)').css({'left':'0px', 'background-color':'white'});
            // $('.block_overlay').css('margin-left', '19px');
            // $('body').css('background', 'rgb(255, 255, 255, 0.0)');
        }

        if(model == "bottom")
        {
            // get_like(); //抓猜你喜歡
            get_item('guess') //抓猜你喜歡
            $('#reback_btn').hide(); // hide reback_arrow
            $('._init_').hide(); // close header bar (猜你喜歡, 別人也看了)
            // $('body').css({height: '90vh'}); //關閉卷軸滑動
            $('body').css({height: '100%', overflow: 'hidden'}); //關閉卷軸滑動

            $(".body_row_one").css('margin-top', 0); // move image of items to the top
            $('#right_arrow_btn').hide(); //關閉箭頭
        }

        //// not used yet
        // if(model == "bottom_product")
        // {
        //     get_item('guess') //抓猜你喜歡

        //     $('._init_').hide();
        //     $('body').css({height: '100%', overflow: 'hidden'}); //關閉卷軸滑動
        //     $(".body_row_one").css('margin-top', 0);

        //     $('#right_arrow_btn').hide(); //關閉箭頭
        // }

        $('.block_overlay').show();
    }


    // back to all items page(猜你喜歡 & 別人也看了)
    function reback()
    {
        // $('#body_iframe').animate({height:"0"}, 800); // make items disappeared
        // css_fullyopen();
        $('#body_iframe').css({'background-color': 'white'});
        $('#body_iframe').css({top: '100vh'});
        $('#recommend_iframe').hide().attr("data-status", "end"); 
        $('#reback_btn').hide(); // hide reback_arrow
        $('#body_iframe').html(''); // clear item url iframe
        $('#body_iframe').hide(); // hidden item url iframe to show all items page

        // $('#reback_btn').css("color", "#9f9f9f").show(); //回上一頁按鈕
        $('#item_div').show();
        $('#window_title').text('');
        $('#item_div').css("height", "100vh");
        css_fullyopen();
        // setTimeout(function() {
        //     $('#reback_btn').hide(); // hide reback_arrow
        //     $('#body_iframe').html(''); // clear item url iframe
        //     $('#body_iframe').hide(); // hidden item url iframe to show all items page

        //     // $('#reback_btn').css("color", "#9f9f9f").show(); //回上一頁按鈕
        //     $('#item_div').show();
        //     $('#window_title').text('');
        //     $('#item_div').css("height", "100vh");
        //     css_fullyopen();
        // }, 800);

    }

    // get "guess your like" or "others also watch"
    function get_item(type)
    {
        var web_id         = '<?php echo $web_id; ?>';
        var uuid           = '<?php echo $uuid; ?>'; 
        var title          = '<?php echo $title; ?>'; 
        var url            = '<?php echo $url; ?>'; 
        var meta_url       = '<?php echo $meta_url; ?>';
        var website_type   = '<?php echo $website_type; ?>';
        var recommend_type = '<?php echo $recommend_type; ?>';
        // const type         = 'guess';
        // var web_id   = 'underwear';
        // var title    = ''
        console.log(type + ' web_id is '+web_id)

        $('#recommend_body_div').html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto; margin-top: 150px" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#fe718d" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
        </svg>`);


        $.getJSON(get_api_route(website_type, recommend_type, web_id, title, type), function(callback) {
            if(callback === '_')
            {
                console.log(callback)

                return false;
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

                if(i <= 1)
                {
                    // div_class = 'body_row_one" style="padding: 0px;'; // padding 12px
                    div_class = ''; // padding 12px
                }

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
        if (website_type == 3) // E-commerce must recommend e-comm
        {
            route = 'https://rhea-cdn.advividnetwork.com/api/productEcom?web_id='+web_id+'&title='+title+'&type='+type;
        }
        else if (website_type == 1 || website_type == 2 && recommend_type == 1) // media or blog + recommend article
        {
            route = 'https://rhea-cdn.advividnetwork.com/api/articleMedia?web_id='+web_id+'&title='+title+'&type='+type;
        }
        else if (website_type == 1 || website_type == 2 && recommend_type == 2) // media or blog + recommend e-comm
        {
            route = 'https://rhea-cdn.advividnetwork.com/api/productMedia?web_id='+web_id+'&title='+title+'&type='+type;
        }
        else // nothing
        {
            route = '_';
        }
        return route
    }

    function merge_article_ad(article_ad)
    {
        article = article_ad['article'];
        ad = article_ad['ad'];
        for (let i=0; i<ad.length; i++) {
            index = Math.floor(Math.random() * article.length);
            article.splice(index, 0, ad[i])
        }

        return article;
    }

 
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
                         
        // if (useragent.indexOf('iphone') != -1 || useragent.indexOf('ipad') != -1|| useragent.indexOf('mac') != -1)
        if (useragent.indexOf('iphone') != -1)
        {
            platform = 'ios';
        }
        else if (useragent.indexOf('ipad') != -1 )
        {
            platform = 'ipad';
        }
             
        else if (useragent.indexOf('android') != -1 )
        {
            platform = 'android';
        }                    
        else
        {
            platform = 'pc';
        }
        return platform
    }

    function get_Pos(e, platform, axis)
    {
        window_X = screenX;
        if (platform == 'pc')
        {
            PosY = e.screenY; // pc
            PosX = (e.screenX < 0? window_X+e.screenX : e.screenX);
            PosX = (e.screenX > window_X? e.screenX-window_X : PosX);
            console.log('posX is '+PosY+' raw screenX: '+e.screenY+' raw pageX: '+e.pageY+' raw clientX: '+e.clientY);

        }
        else if (platform == 'ios' || platform == 'ipad')
        {

            PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : 0); // mobile
            PosY = (PosY>parent.window.innerHeight? PosY-parent.window.innerHeight : PosY)
            if (typeof(e.touches)!="undefined")
            {
                PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile
                console.log('posY is '+PosY+' raw pos: '+ e.touches[0].screenY+ ' jquery targetTouches: '+ e.originalEvent.targetTouches[0].screenY+ ' jquery changedTouches: '+e.originalEvent.changedTouches[0].screenY)+ ' jquery targetTouches: '+e.originalEvent.targetTouches[0].screenY;
            }
            else
            {
                PosX = 0
            }

        }
        else // android 
        {

            PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : 0); // mobile
            if (typeof(e.touches)!="undefined")
            {
                PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile
            }
            else
            {
                PosX = 0
            }


        }
        
        return (axis=='x'? PosX : PosY);

    }


    // JS version
    function preventDefault(e){
        e.preventDefault();
    }

    function disableScroll(){
        parent.document.body.addEventListener('touchmove', preventDefault, { passive: false });
    }

    function enableScroll(){
        parent.document.body.removeEventListener('touchmove', preventDefault);
    }


    </script>
</body>
</html>