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

<body class="sticky_top" style="background-color: transparent;">
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

                <div id="recommend_body_div" class="row" style="overflow-y:scroll; margin-top:0vh; height:100vh;"></div>
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
        const platform = get_device_type(); // pc, ios or android
        console.log('this os is '+platform);
        var model = '<?php echo $model; ?>';
        var open_status = 0; // 0: fully close, 1: half-open, 2: fully open

        var PosX_click = PosY_click = null;

        var Pos_move_release = PosX_move_release = PosY_move_release = null;

        // const window_Y = window.outerHeight;
        
        // const window_X = window.outerWidth;
        const window_X = screen.width;
        const window_Y = screen.height;
        // const window_X = screenX;
        
        const open_width = window.innerWidth;;
        const open_height = $('#avividai_recommend_iframe', parent.document).attr("data-height");
        var model = '<?php echo $model; ?>';
        console.log('initialize model ' +model);

        var Pos_click = null;
        var distance_move = null;
        var delta_distance = 0;
        const window_size = (model=='right'? window_X : window_Y);
        const open_size = (model=='right'? open_width : open_height);
        
        // timeout events
        var timeout_scroll = null; // timeout for scrolling event
        
        var right_open_motion_2nd = null;
        var right_open_css = null;
        var timeout_right_right = null;
        var timeout_right_init = null;


        console.log('window_size is '+ window_size);
        console.log('fully height is '+ open_size);


        //關閉集合頁
        $('#close_window_btn').on('click', function(e) {
        // $(window).on('click', '#close_window_btn', function(e) {
            // var top_position = window.parent.pageYOffset; // save scrolling position
            var top_position = get_scrollbar_position(); // get scrolling position
            console.log('close_window_btn event trigger, top_position: '+top_position);
            clearTimeout(timeout_scroll);

            if(model == 'right')
            {
                console.log("right, close page");
                $('#avividai_recommend_iframe', parent.document).css({top:'', bottom:0});
                $('#avividai_recommend_iframe', parent.document).animate({top: '40vh'}, 300);
                timeout_right_right = setTimeout(function() {
                    $('#avividai_recommend_iframe', parent.document).animate({left: '100vw'}, 300);
                }, 300);
                timeout_right_init = setTimeout(function() {
                    // $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                    $('#avividai_recommend_iframe', parent.document).css({display:'block'});
                    $('#left_arrow_btn').css({display: 'block'});
                    $('#right_arrow_btn').css({display: 'block'});
                    css_close_showdiv(model);
                    css_close_hidediv(model);
                    reback();   
                    set_parent_scroll(1, top_position);
         
                }, 600);

            }

            if(model == 'bottom')
            {
                // $('#avividai_recommend_iframe', parent.document).css({top:'', overflow:'scroll'}); // cancel sticky to the top
                $('#avividai_recommend_iframe', parent.document).animate({top: '100vh'}, 600);
                timeout_right_init = setTimeout(function() {
                    css_close_showdiv(model);
                    css_close_hidediv(model);
                    reback();
                    set_parent_scroll(1, top_position);
                    window.parent.document.body.style.position = ""; // extra required for ios
                    window.parent.document.body.style.overflow = "auto"; // open scrolling
                    // $('#avividai_recommend_iframe', parent.document).css({top:'100vh'});
                }, 600);
            }
            //// not yet to use
            // if(model == 'bottom_product')
            // {
            //     $('#avividai_recommend_iframe', parent.document).slideUp(600);

            //     setTimeout(function() {
            //         $('#avividai_recommend_iframe', parent.document).css({height:'0'});
            //         $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
            //         $('#avividai_recommend_iframe', parent.document).css({display:'block'});
            //     }, 700);
            // }

            open_status = 0;
            Pos_move_release = 0; // reset to 0 position, to enable click to open


        });



        // mouseup (touchend) event
        $(window).on('mouseup touchend', function(e) {
        // window.addEventListener('touchend', function(e) {
            // console.log('mouseup event trigger')
            const criteria = window_size/3;
            // var top_position = window.parent.pageYOffset; // save scrolling position
            // var top_position = -window.parent.document.body.style.top.split('px')[0];
            var top_position = get_scrollbar_position(); // get scrolling position

            console.log('mouseup: '+ top_position);
            if (open_status == 0) // now is close or moving, to open
            {
                clearTimeout(timeout_scroll);  // clear shinking scrolling event
                // if (window_size - Pos_move_release < criteria || distance_move < criteria) // restore to close
                if (window_size - Pos_move_release > criteria || distance_move > criteria) // success to open
                {
                    console.log('now is close, start to open, Pos_move_release '+Pos_move_release+' model: '+ model);
                    set_parent_scroll(0, top_position);
                    if (model == 'right') { // 1st motion, two motions to open  
                        $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({left: 0}, 500);
                        // $('#right_arrow_btn').css({display: 'block', top: '35vh'});
                        // $('#left_arrow_btn').css({display: 'none'});
                        setTimeout(function() {
                            css_halfopen();
                            open_status = 1;
                        }, 500);
                    }
                    else { // bottom
                        console.log('now is close, start to open, Pos_move_release '+Pos_move_release+' model: '+ model);

                        // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({top: 0}, 500);
                        $('#avividai_recommend_iframe', parent.document).animate({top: 0}, 500);

                        setTimeout(function() {
                            css_fullyopen();
                            open_status = 2; // one motion open
                            console.log('bottom to open, open_status: '+open_status)
                        }, 500);

                    }
                    Pos_move_release = 0; // reset Y to prevent restore when click upper region
                    // default_init();
                    // reback();
                }
                // else // open
                else // restore to close
                {
                    console.log('now is close, restore to close top_position: '+top_position);
                    model=='right'? $('#avividai_recommend_iframe', parent.document).animate({left: '100vw'}, 300) : $('#avividai_recommend_iframe', parent.document).animate({top: '100vh'}, 300);
                    setTimeout(function() { // wait for animation to close
                        css_close_showdiv(model);
                        css_close_hidediv(model);
                    }, 300);
                    // $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                    set_parent_scroll(1, top_position);
                    reback();
                    open_status = 0; // confirm to be 0
                    Pos_move_release = 0; // reset Y to prevent restore when click upper region
                }
            }

            // release move event
            $(window).unbind('mousemove');
            $(window).unbind('touchmove');

        });


        // $(window).on('mousedown touchstart', function(e) {
        //     window.parent.document.body.style.overflow = "hidden";
        //     console.log('tirgger click, tap: overflow: '+window.parent.document.body.style.overflow);
        // });


        
        // mousedown, touchstart event and mousemove event
        // $(window).on('mousedown touchstart', function(e) {
        $(window).on('mousedown touchstart', function(e) {
            // $(window.parent).unbind('scroll');
            // open_status = 3; // moving state
            // var top_position = window.parent.pageYOffset; // save scrolling position
            var top_position = get_scrollbar_position();
            // window.parent.document.body.style.top = -top_position+'px';
            // window.parent.document.body.style.position = "fixed"; // extra required for ios
            // window.parent.document.body.style.overflow = "hidden"; // close scrolling

            Pos_click = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y'));
            // top_position = parent.window.pageYOffset;
            console.log('testttttttt: '+top_position)
            // window.parent.document.body.style.top = -top_position+'px';
            set_parent_scroll(0, top_position);
            // top_position = window.parent.pageYOffset;
            // $(parent.document).css({'top': -top_position+'px', 'position': 'fixed', 'overflow': 'hidden'});
            // console.log($(parent.document))
            // window.parent.document.body.style.top = -top_position+'px';
            // window.parent.document.body.style.position = "fixed"; // extra required for ios
            // window.parent.document.body.style.overflow = "hidden"; // close scrolling
            // console.log('scrolling position: '+top_position);
            // window.parent.document.body.style.top = -top_position+'px';
            // clearTimeout(timeout_scroll); // cancel scrolling event
            console.log('open status: '+ open_status);
            if(model == 'right')
            {
                if (open_status==1) // 2nd motion open, click to fully open
                    {   // already half open
                        console.log('mousedown event trigger, now is half open');

                        var right_open_motion_2nd = setTimeout(function() {
                            $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({top:0}, 200);
                        }, 500);

                        // change status until animate is finished
                        var right_open_css = setTimeout(function() {                            
                            open_status = 2; // to fully open
                            css_fullyopen();
                        }, 700);

                        //// To close at half, use to listen right_arrow_btn to close iframe during close motion 1~2
                        $('#right_arrow_btn').on('click touchstart', function(e) {
                            // clearAllTimeouts();
                            // e.preventDefault();
                            right_open_motion_2nd != null? clearTimeout(right_open_motion_2nd) : '';
                            right_open_css != null? clearTimeout(right_open_css) : '';
                            console.log('right_arrow_btn event trigger, open_status = '+open_status);
                            if (open_status != 0) { 
                                console.log('trigger right_arrow_btn close event, open_status: '+ open_status);
                                $('#avividai_recommend_iframe', parent.document).animate({'left': '100vw'}, 300); // back to original position
                                setTimeout(function() {
                                    css_close_showdiv(model);
                                    css_close_hidediv(model);
                                    open_status = 0;
                                    Pos_move_release = 0;
                                    set_parent_scroll(1);
                                }, 500);
                                // open_status = 0;
                                // Pos_move_release = 0; // reset to 0 position, to enable click to open
                                // window.parent.document.body.style.overflow="auto";
                            }
                        });

                        // change status until animate is finished
                        // var right_open_css = setTimeout(function() {
                        //     open_status = 2; // to fully open
                        //     $('._init_').show();
                        //     $('#avividai_recommend_iframe', parent.document).css({top:0}); // get 
                        //     $('#right_arrow_btn').css({display: 'none'});
                        //     $('#left_arrow_btn').css({display: 'none'});
                        // }, 700);


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
                            // clearAllTimeouts();
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
                    // top_position = parent.window.pageYOffset;
                    // console.log('move, scrolling position: '+parent.window.pageYOffset);
                    console.log('bottom, mousemove, top_position :'+top_position);
                    set_parent_scroll(0, top_position);
                    Pos_move_release = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y')); // update PosY_move_release only when mouse is moving
                    distance_move = Pos_click - Pos_move_release + 0.1*window_Y;
                    distance_move = (Pos_click < 0.8*window_Y? window_Y-Pos_move_release : distance_move);
                    console.log('move distance(+up, -down): '+distance_move+' Pos_click: '+Pos_click+' Pos_move_release: '+Pos_move_release);
                    // set_parent_scroll(0);                  
                    screenX = (screenX!=0? screenX : window_size); // ios screen will =0, so make screen=window_size
                    iframe_size = distance_move*window_size/screenX;


                    if (open_status == 0) // now is close, to open, adjust height along with mousemove
                    {
                        /* stop moving when mouse button is released:*/
                        // clearAllTimeouts();
                        
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
                // create iframe linked to clicked item page
                $('#body_iframe').html('<iframe src="'+url+'" style="border:0; width:100%; height:5000px; z-index:1;"></iframe>');
                // hiden all items div
                // $('#item_div').animate({height:"0"}, 700);
                $('#item_div').animate({top:"100vh"}, 700);
                $('#body_iframe').css({'background-color': 'white'});

                setTimeout(function() {
                    $('#item_div').hide(); // hidden all items page including header bar
                    $('#body_iframe').show(); // show iframe of clicked item
                    $('#reback_btn').css("color", "#ffffff").show();
                    // $('#window_title').text(title); // add item title to the top
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
        });

        var lastreq = lastScrollTop = 0; //0 means there were never any requests sent
        // window.parent.addEventListener('scroll', function(event) {
        var scrolled = false;
        var scroll_events = [];
        $(window.parent).on('scroll', function(event) {
            var Pos_move_release = 0; // update PosY_move_release only when mouse is moving
            // if (!scrolled && open_status==0) 
            if (!scrolled && open_status==0) 
            {
                scrolled = true;
                console.log('trigger scroll ,open_status: '+open_status+ ' pageYOffset: '+window.parent.pageYOffset+' top: '+window.parent.document.body.style.top);
                // set_parent_scroll(1, -window.parent.document.body.style.top);
                if (open_status == 0) // only when now is close, show small div and set to default setting when scrolling
                {
                    var st = parent.window.pageYOffset || parent.document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
                    if (st > lastScrollTop) // move to down, show div
                    {
                        console.log('downscroll: st: '+st+' lastScrollTop: '+lastScrollTop);
                        css_close_showdiv_ran(model);
                        // downscroll code
                    } 
                    else // move upward, hidden div
                    {
                        console.log('upscroll: st: '+st+' lastScrollTop: '+lastScrollTop);
                        // scroll_up_hide(model);

                        // default_animation(0, 300);
                        css_close_hidediv(model);

                        // upscroll code
                    }
                    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

                    clearTimeout(timeout_scroll); 
                    // wait avivid_recommend_setting['second'], and hidden small div
                    timeout_scroll = setTimeout(function() {
                        if (open_status == 0) // if open, then cancel to hidden div
                        {
                            if (model == 'right') {
                                // $('#avividai_recommend_iframe', parent.document).animate({'margin-left': window_size}, 500);
                                $('#avividai_recommend_iframe', parent.document).animate({'left': '100vw'}, 500);
                            }
                            else {
                                // $('#avividai_recommend_iframe', parent.document).animate({height: 0}, 500);
                                $('#avividai_recommend_iframe', parent.document).animate({top: '100vh'}, 500);
                            }
                            // $('#avividai_recommend_iframe', parent.document).animate({height: 0}, 500);
                        }
                    }, avivid_recommend_setting['second']);
                }
                setTimeout(function () { scrolled = false; }, 20); // 400
            }

            // at the bottom, always show div 
            if (st + parent.window.innerHeight >= 0.85*parent.document.body.scrollHeight)
            {
                console.log('scrollTop: '+st+' window height: '+ parent.window.innerHeight+' document height: '+parent.document.body.scrollHeight);
                clearTimeout(timeout_scroll);
                css_close_showdiv_ran(model);
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
            iframe_size = 4+Math.random();
            $('#avividai_recommend_iframe', parent.document).css({display:'block', 'margin-left': '', left: 'calc(100% - '+iframe_size+'%)', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
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
            iframe_size = 7+Math.random();
            $('#avividai_recommend_iframe', parent.document).css({display:'block', top: 'calc(100% - '+iframe_size+'%)' , bottom: 0, height: '100vh', width: '100vw', left: 0});
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
            $('#avividai_recommend_iframe', parent.document).css({display:'block', top:'94vh', bottom: 0, height: '100vh', width: '100vw', left: 0});
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
        // set_parent_scroll(0);
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
            // top_position = window.parent.pageYOffset;
            window.parent.document.body.style.top = -top_position+'px';
            window.parent.document.body.style.position = "fixed"; // extra required for ios
            window.parent.document.body.style.overflow = "hidden"; // close scrolling
            console.log('scrolling position: '+top_position);
            
        }
        else if (state == 1) 
        {
            console.log('set_parent_scroll, top_position: '+top_position);
            // window.parent.document.body.style.top = -top_position+'px';
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
            $('body').css({height: '100%', overflow: 'hidden'}); //關閉卷軸滑動
            // $('body').css({height: '100%', overflowY: 'hidden'}); //關閉卷軸滑動

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
        // $('#body_iframe').animate({top: '100vh'}, 800); // make items disappeared

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
            // console.log(callback);
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
 


    // function initiation()
    // {
    //     // document.querySelector('#avividai_recommend_iframe').style.display='block';
    //     $('._init_').hide();
    //     $('.block_overlay').show(); //半透明遮罩
    //     $('#avividai_recommend_iframe', parent.document).css({height:'100px'});
    // }

    // function expansion()
    // {
    //     $('._init_').show();
    //     $('.block_overlay').hide(); //半透明遮罩

    // }

    function get_device_type()
    {
        var useragent = navigator.userAgent;
        useragent = useragent.toLowerCase();   
                         
        if (useragent.indexOf('iphone') != -1 || useragent.indexOf('ipad') != -1|| useragent.indexOf('mac') != -1)
        {
            platform = 'ios';
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
        else if (platform == 'ios')
        {

            PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : 0); // mobile
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


    </script>
</body>
</html>