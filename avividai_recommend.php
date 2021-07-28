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
</head>

<body>
    <img src="img/right_close_arrow.png?20210604" id="right_arrow_btn" style="width:19px; height:36px; position: absolute; top: 50%; bottom: 50%; z-index: 100; cursor: pointer;">
    <div class="block_overlay" style="z-index: 1000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.15; cursor: wait; position: fixed;"></div>
    <!-- <div class="row _init_" id="row_header" style="background-color: rgba(0,0,0,0.5); position: fixed; width: 100%; top: 0px; right: 0; left: 0; margin:0 0 20px 0; height:60px; z-index:10;"></div> -->

    <div id="mydiv" class="container" style="max-width: 100%;">
        <!--浮動標題列 rgba(116,116,116,0.5)-->
        <div class="row _init_" id="row_header" style="background-color: rgba(0,0,0,0.5); position: fixed; width: 100%; top: 0px; right: 0; left: 0; margin:0 0 20px 0; height:60px; z-index:10;">
            <div class="col-2">
                <div style="color: #9f9f9f; text-align: left; height: 60px; line-height: 60px; z-index:99" id="reback_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M 10 8 a 0.5 0.5 0 0 0 0 0 H 3 l 3.147 -3.146 a 0.5 0.5 0 1 0 -0.708 -0.708 l -4 4 a 0.5 0.5 0 0 0 0 0.708 l 4 4 a 0.5 0.5 0 0 0 0.708 -0.708 L 3 9 H 10 A 0.5 0.5 0 0 0 10 8 z"/>
                    </svg>
                </div>
            </div>
            <div class="col-8 text-center">
                <div style="line-height: 66px" id="window_title"></div>
            </div>
            <div class="col-2">
                <div style="text-align: right; height: 60px; line-height: 60px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" id="close_window_btn" style="color: #ffffff; z-index:99">
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
        <div class="row" id="item_div" style="margin:0 auto; width:100%">
            <div class="col">
                <div class="_init_" style="background-color:#ffffff; position: fixed; width: 100%; top: 60px; right: 0; left: 0; margin:0; margin-bottom: 15px; z-index:10; height: 66px; line-height: 45px">
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

                <div id="recommend_body_div" class="row"></div>
            </div>
        </div>
    </div>

    <script type="text/javascript">

    

    $(function() {

        $(window.parent).on('mouseup touchend mousedown touchstart mousemove touchmove', function(e) {}); // required for ios

        console.log(navigator.userAgent.toLowerCase());
        default_init();
        const platform = get_device_type(); // pc, ios or android
        console.log('this os is '+platform);

        var model = '<?php echo $model; ?>';
        var open_status = 0; // 0: fully close, 1: half-open, 2: fully open
        var half_open = true;

        var PosY_click = null;
        var PosX_click = null;

        var PosY_move_release = null;
        var PosX_move_release = null;

        // const window_Y = window.outerHeight;
        const window_Y = screen.height;
        const window_X = window.outerWidth;
        // const window_X = screenX;
        const open_height = $('#avividai_recommend_iframe', parent.document).attr("data-height");
        const open_width = window.innerWidth;;

        var model = '<?php echo $model; ?>';
        console.log('initialize model ' +model);

        var Pos_click = null;
        var Pos_move_release = null;
        const window_size = (model=='right'? window_X : window_Y);
        const open_size = (model=='right'? open_width : open_height);

        var timeout_scroll = null; // timeout for scrolling event
        console.log('window_size is '+ window_size);

        console.log('fully height is '+ open_size);

        // if(model == 'bottom_product')
        // {
        //     var height = $('#avividai_recommend_iframe', parent.document).attr("data-height");

        //     $('._init_').show();
        //     $('.block_overlay').hide(); //半透明遮罩
        //     $(".body_row_one").css({'margin-top': 80});
        //     $('body').css({height: '100%', overflow: 'auto'}); //開啟卷軸滑動
        // }


        var timeout_right_right = null;
        var timeout_right_init = null;

        //關閉集合頁
        // $('#close_window_btn').on('click', function(event, open_status, timeout_scroll, timeout_right_right, timeout_right_init) {
        //     close_window(event, open_status, timeout_scroll, timeout_right_right, timeout_right_init);
        //     var open_status = 0;
        // });


        $('#close_window_btn').on('click', function(e) {
        // $(window).on('click', '#close_window_btn', function(e) {

            // e.stopPropagation();
            clearTimeout(timeout_scroll); // cancel scrolling event

            if(model == 'right')
            {
                console.log("right, close page");
                var width = parseInt($('#avividai_recommend_iframe', parent.document).attr("data-width"))+10;
                if (open_status != 1) // in half-open state, no need to shrink height
                {
                    $('#avividai_recommend_iframe', parent.document).animate({'height': Math.round(open_height*2/3)}, 600);
                }
                
                timeout_right_right = setTimeout(function() {
                    $('#avividai_recommend_iframe', parent.document).animate({marginLeft: width}, 800);
                }, 600);
                timeout_right_init = setTimeout(function() {
                    $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                    $('#avividai_recommend_iframe', parent.document).css({display:'block'});
                    // (open_status != 1? $('#avividai_recommend_iframe', parent.document).css({height: Math.round(open_height*2/3)}): '');
                    $('#avividai_recommend_iframe', parent.document).css({height: Math.round(open_height*2/3)});
                    default_init();
                    reback();
                }, 700);
                // open_status = false;
                // half_open = true;
            }

            if(model == 'bottom')
            {
                $('#avividai_recommend_iframe', parent.document).slideUp(300);

                timeout_right_init = setTimeout(function() {
                    $('#avividai_recommend_iframe', parent.document).css({height:'50px'});
                    $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                    $('#avividai_recommend_iframe', parent.document).css({display:'block'});

                    default_init();
                    reback();

                }, 300);
                // open_status = 0;

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
            window.parent.document.body.style.overflow = "auto"; // enable scroll of parent window
            // e.stopPropagation();
        });



        // mouseup (touchend) event
        $(window).on('mouseup touchend', function(e) {
        // $(window).on('touchend', function(e) {    
        // window.addEventListener('touchend', function(e) {
        // $(window).bind('touchend', function(e) {
            // e.preventDefault();
            /* stop moving when mouse button is released:*/
            // const criteria = window_Y/3;
            const criteria = window_size/3;

            // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: 100}, 0);

            if (open_status == 0) // now is close, to open
            {


                if (window_size - Pos_move_release < criteria) // restore to close

                // if (window_Y - PosY_move_release < criteria) // restore
                {
                    console.log('now is close, restore to close');

                    if (model == 'right') {
                        $('#avividai_recommend_iframe', parent.document).css({display: 'block','margin-left': open_width-50}); // get

                    }
                    else {
                        $('#avividai_recommend_iframe', parent.document).css({display:'block', height: '10vh'}); // get 
                    }
                    // $('#avividai_recommend_iframe', parent.document).css({height:'50px'}); // get 
                    $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                    // $('#avividai_recommend_iframe', parent.document).css({display:'block'});
                    window.parent.document.body.style.overflow = "auto"; // enable scroll of parent window

                    default_init();
                    reback();
                    open_status = 0; // confirm to be 0

                }
                else // open
                {
                    console.log('now is close, start to open, Pos_move_release '+Pos_move_release);

                    if (model == 'right') {
                        $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({'margin-left': 0}, 600);
                        open_status = 1; // 1st motion, two motion open
                    }
                    else {
                        $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: open_height}, 600);
                        open_status = 2; // one motion open
                    }
                    // $('#avividai_recommend_iframe', parent.document).css({position:'-webkit-sticky'});
                    $('._init_').show();
                    $('.block_overlay').hide(); //半透明遮罩
                    $(".body_row_one").css({'margin-top': 80});
                    $('body').css({height: '100%', overflow: 'auto'}); //開啟卷軸滑動
                    window.parent.document.body.style.overflow="hidden"; // disable scroll of parent window
                    // open_status = true;
                    PosY_move_release = 0; // reset Y to prevent restore when click upper region
                    // default_init();
                    // reback();
                }

            }
            //// use to close iframe withous click X(exit)

            // else if (open_status == true) // now is open, to close
            // {
            //     if (window_size - Pos_click>0.8*window_size && window_size - Pos_move_release < 0.6*window_size) // to close
            //     // if (window_Y - PosY_click>0.8*window_Y && window_Y - PosY_move_release < 0.6*window_Y) // to close
            //     {
            //         console.log('now is open, start to close');

            //         // h_iframe = window.outerHeight - lastPosY;
            //         // height = Math.min(window.outerHeight, h_iframe+50);
            //         // console.log('now is open, start to close x,xxxx ' + window_Y - PosY_move_release+' < '+0.6*window_Y);
                   
            //         $('#avividai_recommend_iframe', parent.document).slideUp(300);

            //         setTimeout(function() {

            //             $('#avividai_recommend_iframe', parent.document).css({display:'block'});
            //             if (model == 'right') {

            //                 $('#avividai_recommend_iframe', parent.document).css({'margin-left': open_width-50});
            //             }
            //             else {
            //                 $('#avividai_recommend_iframe', parent.document).css({height:'50px'});
            //             }
            //             $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                        
            //             window.parent.document.body.style.overflow = "auto"; // enable scroll of parent window
            //             default_init();
            //             reback();
            //             open_status = false;
            //             console.log('status: '+ open_status);
            //         }, 300);

            //     }
            //     else // restore to fully open
            //     {
            //         console.log('now is open, restore to open');
            //         if (model == 'right') {
            //             $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({'margin-left': 0}, 0);

            //         }
            //         else {
            //             $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: open_height}, 0);
            //         }

            //         // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: open_height}, 0);
            //         window.parent.document.body.style.overflow = "hidden"; // disable scroll of parent window
            //         open_status = true;
            //         PosY_move_release = 0;

            //     }

            // }
            // release move event
            $(window).unbind('mousemove');
            $(window).unbind('touchmove');

        });


        
        // mousedown, touchstart event and mousemove event
        // $(window).on('mousedown touchstart', function(e) {
        $(window).on('mousedown touchstart', function(e) {

        // $(window).on('touchstart', function(e) {
        // window.addEventListener('touchstart', function(e) {
        // $(window).bind('touchstart', function(e) {
            clearTimeout(timeout_scroll); // cancel scrolling event
            window.parent.document.body.style.overflow = "hidden"; // disable scroll of parent window                                                                                                                                                                                                                     
            Pos_click = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y'));
            console.log('open status: '+ open_status);

            if(model == 'right')
            {
                // if (open_status==true && half_open==true) // 2nd motion open, click to fully open
                if (open_status==1) // 2nd motion open, click to fully open

                    { // already half open
                        // $(document).off('click', '.href_btn'); // cancel click event

                        // e.preventDefault();
                        // e.stopPropagation();
                        // open to full height
                        $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: open_height}, 600);
                        // change status until animate is finished
                        setTimeout(function() {
                           open_status = 2; // to fully open
                        }, 700);
                    }
                else // open = true, half_open = false or open = true, half_open = true (should not exist this)
                {
                    $(window).on('mousemove touchmove', function(e) {
                    // e.stopPropagation();
                    window.parent.document.body.style.overflow = "hidden"; // disable scroll of parent window
                    Pos_move_release = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y')); // update PosY_move_release only when mouse is moving
                    console.log('mouse move ' + PosY_move_release);

                    if (open_status == 0) // now is close, to open, adjust height along with mousemove, useless
                    {
                        /* stop moving when mouse button is released:*/
                        screenX = (screenX!=0? screenX : window_size); // ios screen will =0, so make screen=window_size
                        iframe_size = Pos_move_release*window_size/screenX; // window_size = 2400, screenX=1920, Pos=0~1920
                        console.log('windwo_X is '+ window_size + 'screenX is '+ screenX + ' and cursor is '+ Pos_move_release);
                        $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({'margin-left': iframe_size-50}, 0); // bigger is smaller

                    }
                });


                }

            }

            if(model == 'bottom')
            {

                // var height = $('#avividai_recommend_iframe', parent.document).attr("data-height");
                // console.log('bottom NO1, height is ' + height);
                $(window).on('mousemove touchmove', function(e) {
                    // const window_Y = window.outerHeight;

                    clearTimeout(timeout_scroll);
                    Pos_move_release = (model == 'right'? get_Pos(e, platform, 'x') : get_Pos(e, platform, 'y')); // update PosY_move_release only when mouse is moving

                    window.parent.document.body.style.overflow = "hidden"; // disable scroll of parent window
                    // PosY_move_release = get_Pos(e, platform, 'y'); // update PosY_move_release only when mouse is moving

                    // console.log('mouse move ' + PosY_move_release);

                    if (open_status == 0) // now is close, to open, adjust height along with mousemove
                    {
                        /* stop moving when mouse button is released:*/
                        h_iframe = window_size - Pos_move_release;
                        // console.log('mouse move: '+ (window.outerHeight - lastPosY));
                        // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: 100}, 0);
                        cursor_height = Math.max(50, h_iframe);
                        // console.log('cursor is '+ Pos_move_release+' window_size '+ screen.height+' set height is '+cursor_height+ ' screenY: '+e.touches[0].screenY);
                        // console.log('set cursor_height is ' + cursor_height + 'windwo_Y is '+ window_Y + ' and cursor is '+ PosY_move_release);
                        $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: cursor_height}, 0);
                    }
                });

            }

        });

        // var timeout_right_right = null;
        // var timeout_right_init = null;

        // //關閉集合頁
        // $('#close_window_btn').on('click', function(e) {
        //     // e.stopPropagation();
        //     clearTimeout(timeout_scroll); // cancel scrolling event

        //     if(model == 'right')
        //     {
        //         console.log("right, close page")
        //         var width = parseInt($('#avividai_recommend_iframe', parent.document).attr("data-width"))+10;
        //         if (open_status != 1) // in half-open state, no need to shrink height
        //         {
        //             $('#avividai_recommend_iframe', parent.document).animate({'height': Math.round(open_height*2/3)}, 600);
                    
        //         }
                
        //         timeout_right_right = setTimeout(function() {
        //             $('#avividai_recommend_iframe', parent.document).animate({marginLeft: width}, 800);
        //         }, 600);
        //         timeout_right_init = setTimeout(function() {
        //             $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
        //             $('#avividai_recommend_iframe', parent.document).css({display:'block'});
        //             // (open_status != 1? $('#avividai_recommend_iframe', parent.document).css({height: Math.round(open_height*2/3)}): '');
        //             $('#avividai_recommend_iframe', parent.document).css({height: Math.round(open_height*2/3)});
        //             default_init();
        //             reback();
        //         }, 700);
        //         // open_status = false;
        //         // half_open = true;
        //     }

        //     if(model == 'bottom')
        //     {
        //         $('#avividai_recommend_iframe', parent.document).slideUp(300);

        //         timeout_right_init = setTimeout(function() {
        //             $('#avividai_recommend_iframe', parent.document).css({height:'50px'});
        //             $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
        //             $('#avividai_recommend_iframe', parent.document).css({display:'block'});

        //             default_init();
        //             reback();

        //         }, 300);
        //         // open_status = 0;

        //     }
        //     //// not yet to use
        //     // if(model == 'bottom_product')
        //     // {
        //     //     $('#avividai_recommend_iframe', parent.document).slideUp(600);

        //     //     setTimeout(function() {
        //     //         $('#avividai_recommend_iframe', parent.document).css({height:'0'});
        //     //         $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
        //     //         $('#avividai_recommend_iframe', parent.document).css({display:'block'});
        //     //     }, 700);
        //     // }
        //     open_status = 0;
        //     window.parent.document.body.style.overflow = "auto"; // enable scroll of parent window
        //     e.stopPropagation();
        // });


        // //開啟內容頁的推薦集合頁
        // $('#recommend_iframe').on('click', function() {
        //     reback();

        //     document.addEventListener('scroll', function() {
        //         $('#recommend_iframe').hide();
        //     }, false);

        //     return false;
        // });


        //選項卡
        $('.menu_header_btn').on('click', function() {
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
        });


        // 超連結內容, to open item url
        $(document).on('click', '.href_btn', function() {

            if (open_status == 2)
            {
                var width = window.innerWidth;
                var url   = $(this).attr('data-url');
                var title = $(this).text().substring(0, 15);
                // create iframe linked to clicked item page
                $('#body_iframe').html('<iframe src="'+url+'" scrolling="no" style="border:0; width:100%; height:5000px; z-index:1; overflow-x:hidden"></iframe>');
                // hiden all items div
                $('#item_div').animate({height:"0"}, 700);

                setTimeout(function() {
                    $('#item_div').hide(); // hidden all items page including header bar
                    $('#body_iframe').show(); // show iframe of clicked item
                    $('#reback_btn').css("color", "#ffffff").show();
                    $('#window_title').text(title); // add item title to the top
                    $('#body_iframe').css({"margin-topavividai_recommend_iframe":"50px"});
                    $('#recommend_iframe').attr("data-status", "start");
                    $('#mydiv').css({"margin": "30px 0 0 0"}); // align product page
                }, 500);
            }
        });



        //回上一頁
        $('#reback_btn').on("click", function(e) {
            // e.preventDefault();
            reback();
        });



        window.parent.addEventListener('scroll', function(event) {
            console.log('trigger scroll ,open_status: '+open_status);
            open_status = 0;
            // clearTimeout(timeout_right_right);
            // clearTimeout(timeout_right_init);
            if (open_status == 0) // now is close, show small div when scrolling
            {
                Pos_move_release = 0; // update PosY_move_release only when mouse is moving

                window.parent.document.body.style.overflow = "auto"; // enable scroll of parent window
                // console.log('height 50px......');
                if (model == 'right') {
                    console.log('margin-left: '+window.innerWidth+', open_width: '+open_width);
                    
                    $('#avividai_recommend_iframe', parent.document).css({display:'block', 'margin-left': open_width-50}); // required
                    // $('#avividai_recommend_iframe', parent.document).css({display:'block'});

                    $('#avividai_recommend_iframe', parent.document).css({height: open_height*2/3});
                    // $('#avividai_recommend_iframe', parent.document).animate({'margin-left': open_width-50}, 0);              
                }
                else { // bottom
                    // $('#avividai_recommend_iframe', parent.document).css({display:'block', height:'50px'});
                    $('#avividai_recommend_iframe', parent.document).css({display:'block', height:'10vh'});

                    $('#avividai_recommend_iframe', parent.document).animate({height: '10vh'}, 0);

                }

                // $('#avividai_recommend_iframe', parent.document).css({display:'block', height:'50px'});
                // $('#avividai_recommend_iframe', parent.document).animate({height: 50}, 0);
                // $('#recommend_iframe').animate({height: '50px'});

                if(timeout_scroll !== null) // reset timeout if contimuously scrolling
                {
                    clearTimeout(timeout_scroll);        
                }

                // wait avivid_recommend_setting['second'], and hidden small div
                timeout_scroll = setTimeout(function() 
                {
                    if (open_status == 0) // if open, then cancel to hidden div
                    {
                        if (model == 'right') {
                            $('#avividai_recommend_iframe', parent.document).animate({'margin-left': window_size}, 500);
                        }
                        else {
                            $('#avividai_recommend_iframe', parent.document).animate({height: 0}, 500);
                        }
                        // $('#avividai_recommend_iframe', parent.document).animate({height: 0}, 500);
                    }
                }, avivid_recommend_setting['second']);
            }
            // e.stopPropagation();
        });

    });





    //// function


    function slide_to_open(e) 
    {

    }

    function close_window(e, open_status, timeout_scroll, timeout_right_right, timeout_right_init)
    {
        // e.stopPropagation();
        clearTimeout(timeout_scroll); // cancel scrolling event
        console.log("start right, close page model is " + model);
        var model = '<?php echo $model; ?>';
        if(model == 'right')
        {
            console.log("right, close page");
            var width = parseInt($('#avividai_recommend_iframe', parent.document).attr("data-width"))+10;
            const open_height = $('#avividai_recommend_iframe', parent.document).attr("data-height");

            if (open_status != 1) // in half-open state, no need to shrink height
            {
                $('#avividai_recommend_iframe', parent.document).animate({'height': Math.round(open_height*2/3)}, 600);
            }
            
            timeout_right_right = setTimeout(function() {
                $('#avividai_recommend_iframe', parent.document).animate({marginLeft: width}, 800);
            }, 600);
            timeout_right_init = setTimeout(function() {
                $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                $('#avividai_recommend_iframe', parent.document).css({display:'block'});
                // (open_status != 1? $('#avividai_recommend_iframe', parent.document).css({height: Math.round(open_height*2/3)}): '');
                $('#avividai_recommend_iframe', parent.document).css({height: Math.round(open_height*2/3)});
                default_init();
                reback();
            }, 700);
            // open_status = false;
            // half_open = true;
        }

        if(model == 'bottom')
        {
            $('#avividai_recommend_iframe', parent.document).slideUp(300);

            timeout_right_init = setTimeout(function() {
                $('#avividai_recommend_iframe', parent.document).css({height:'50px'});
                $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                $('#avividai_recommend_iframe', parent.document).css({display:'block'});

                default_init();
                reback();

            }, 300);
            // open_status = 0;

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
        window.parent.document.body.style.overflow = "auto"; // enable scroll of parent window
        // e.stopPropagation();
    }


    //預設項目, 
    function default_init()
    {
        var model = '<?php echo $model; ?>';

        if(model == "right")
        {
            get_item('guess') //抓猜你喜歡

            $('._init_').show();
            $('body').css({height: '100%', overflow: 'hidden'}); //關閉卷軸滑動

            //為了讓箭頭顯示，所以內容都需右移
            $('#reback_btn').hide(); // hide reback_arrow
            $('#right_arrow_btn').show();
            $('#row_header').hide();
            $('#item_div ._init_:eq(0)').css({'left':'19px', 'background-color':'none'});
            $('.block_overlay').css('margin-left', '19px');
            $('body').css('background', 'rgb(255, 255, 255, 0.0)');
        }

        if(model == "bottom")
        {
            // get_like(); //抓猜你喜歡
            get_item('guess') //抓猜你喜歡

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
        
        $('#body_iframe').animate({height:"0"}, 800); // make items disappeared
        $('#recommend_iframe').hide().attr("data-status", "end"); 

        setTimeout(function() {
            $('#reback_btn').hide(); // hide reback_arrow
            $('#body_iframe').html(''); // clear item url iframe
            $('#body_iframe').hide(); // hidden item url iframe to show all items page

            // $('#reback_btn').css("color", "#9f9f9f").show(); //回上一頁按鈕
            $('#item_div').show();
            $('#window_title').text('');
            $('#item_div').css("height", "100%");
        }, 800);

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
                    div_class = 'body_row_one" style="padding: 12px;'; // padding 12px
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
                         
        if( useragent.indexOf('iphone') != -1 || useragent.indexOf('ipad') != -1|| useragent.indexOf('mac') != -1)
        {
            platform = 'ios';
        }             
        else if( useragent.indexOf('android') != -1 )
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
            // let e = window.parent.event;
            PosY = e.screenY; // pc
            // PosX = (e.pageX < 0? window_X+e.pageX : e.pageX);
            PosX = (e.screenX < 0? window_X+e.screenX : e.screenX);
            PosX = (e.screenX > window_X? e.screenX-window_X : PosX);

            // PosX = (e.clientX < 0? window_X+e.clientX : e.clientX);

            // console.log('posY is '+PosY);
            console.log('posX is '+PosX+'raw screenX: '+e.screenX+'raw pageX: '+e.pageX+'raw clientX: '+e.clientX);

        }
        else if (platform == 'ios')
        {
            PosY = e.touches[0].screenY+70; // ios
            // PosX = (e.originalEvent.targetTouches[0].pageX < 0? window_X+e.originalEvent.targetTouches[0].pageX : e.originalEvent.targetTouches[0].pageX); // mobile
            PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile

        }
        else // android 
        {
            // PosY = e.originalEvent.targetTouches[0].screenY; // mobile
            // // PosX = (e.originalEvent.targetTouches[0].pageX < 0? window_X+e.originalEvent.targetTouches[0].pageX : e.originalEvent.targetTouches[0].pageX); // mobile
            // PosX = (e.originalEvent.targetTouches[0].screenX < 0? window_X+e.originalEvent.targetTouches[0].screenX : e.originalEvent.targetTouches[0].screenX); // mobile

            PosY = e.touches[0].screenY; // mobile
            // PosX = (e.originalEvent.targetTouches[0].pageX < 0? window_X+e.originalEvent.targetTouches[0].pageX : e.originalEvent.targetTouches[0].pageX); // mobile
            PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile

            // console.log('posY is '+PosY);
            // console.log('posX is '+PosX);

            // PosY = e.originalEvent.targetTouches[0].pageY; // mobile

        }
        
        return (axis=='x'? PosX : PosY);

    }


    </script>
</body>
</html>