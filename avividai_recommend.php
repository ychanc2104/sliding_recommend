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
    <img src="img/right_close_arrow.png?20210604" id="right_arrow_btn" style="width:19px; height:36px; position: absolute; top: 50%; bottom: 50%; z-index: 100">
    <div class="block_overlay" style="z-index: 1000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.15; cursor: wait; position: fixed;"></div>
    <!-- <div class="row _init_" id="row_header" style="background-color: rgba(0,0,0,0.5); position: fixed; width: 100%; top: 0px; right: 0; left: 0; margin:0 0 20px 0; height:60px; z-index:10;"></div> -->

    <div id="mydiv" class="container" style="max-width: 100%;">
        <!--浮動標題列 rgba(116,116,116,0.5)-->
        <div class="row _init_" id="row_header" style="background-color: rgba(0,0,0,0.5); position: fixed; width: 100%; top: 0px; right: 0; left: 0; margin:0 0 20px 0; height:60px; z-index:10;">
            <div class="col-2">
                <div style="color: #9f9f9f; text-align: left; height: 60px; line-height: 60px; z-index:99" id="reback_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M 10 8 a 0.5 0.5 0 0 0 0 0 H 3 l 3.147 -3.146 a 0.5 0.5 0 1 0 -0.708 -0.708 l -4 4 a 0.5 0.5 0 0 0 0 0.708 l 4 4 a 0.5 0.5 0 0 0 0.708 -0.708 L 3 9 H 10 A 0.5 0.5 0 0 0 10 8 z"/>
                    </svg>
                </div>
            </div>
            <div class="col-8 text-center">
                <div style="line-height: 66px" id="window_title"></div>
            </div>
            <div class="col-2">
                <div style="text-align: right; height: 60px; line-height: 60px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" id="close_window_btn" style="color: #ffffff; z-index:99">
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

    platform = get_device_type(); // pc, ios or android

    $(function() {
        default_init();

        var open_status = false;
        var lastPosY = null; // store position Y of clicked cursor
        var PosY_click = 0;
        var PosY_release = 0;

        const window_Y = window.outerHeight;
        
        var model = '<?php echo $model; ?>';
        var open_height = $('#avividai_recommend_iframe', parent.document).attr("data-height");
        console.log('fully height is '+ height);

        if(model == 'bottom_product')
        {
            var height = $('#avividai_recommend_iframe', parent.document).attr("data-height");

            $('._init_').show();
            $('.block_overlay').hide(); //半透明遮罩
            $(".body_row_one").css({'margin-top': 80});
            $('body').css({height: '100%', overflow: 'auto'}); //開啟卷軸滑動
        }


        $(window).on('mouseup touchend', function(e) {
        // $(window).on('touchend', function(e) {    
            /* stop moving when mouse button is released:*/



            const criteria = window.outerHeight/3;
            console.log('when mouse height is greater than ' + criteria + ' fully open')
            // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: 100}, 0);


            if (open_status == false) // now is close, to open
            {
                if (window.outerHeight - lastPosY < criteria) // restore
                {
                    $('#avividai_recommend_iframe', parent.document).css({height:'50px'}); // get 
                    $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                    $('#avividai_recommend_iframe', parent.document).css({display:'block'});
                    window.parent.document.body.style.overflow = "auto"; // enable scroll of parent window

                    default_init();
                    reback();
                    open_status = false;

                }
                else // open
                {
                    console.log('open fully window')
                    $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: open_height}, 600);
                    $('._init_').show();
                    $('.block_overlay').hide(); //半透明遮罩
                    $(".body_row_one").css({'margin-top': 80});
                    $('body').css({height: '100%', overflow: 'auto'}); //開啟卷軸滑動
                    window.parent.document.body.style.overflow="hidden"; // disable scroll of parent window
                    open_status = true;
                    lastPosY = 0; // reset Y to prevent restore when click upper region
                    // default_init();
                    // reback();
                }
                // $('#avividai_recommend_iframe', parent.document).css({height:'50px'});
                // $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                // $('#avividai_recommend_iframe', parent.document).css({display:'block'});
                // default_init();
                // reback();
            }
            else if (open_status == true) // now is open, to close
            {
                if (window.outerHeight - PosY_click>0.8*window.outerHeight && window.outerHeight - PosY_release < 0.6*window.outerHeight) // to close
                {
                    // lastPosY = e.originalEvent.targetTouches[0].screenY; // mobile
                    // lastPosY = e.screenY; // pc
                    // h_iframe = window.outerHeight - lastPosY;
                    // height = Math.min(window.outerHeight, h_iframe+50);
                    console.log('now is open, start to close x,xxxx ' + window.outerHeight - PosY_release+' < '+0.6*window.outerHeight);
                   
                    $('#avividai_recommend_iframe', parent.document).slideUp(300);

                    setTimeout(function() {

                        $('#avividai_recommend_iframe', parent.document).css({display:'block'});
                        $('#avividai_recommend_iframe', parent.document).css({height:'50px'});
                        $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                        
                        window.parent.document.body.style.overflow = "auto"; // enable scroll of parent window
                        default_init();
                        reback();
                        open_status = false;
                        console.log('status: '+ open_status);
                    }, 300);

                }
                else // restore to fully open
                {
                    console.log('now is open, restore to open');

                    $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: open_height}, 0);
                    window.parent.document.body.style.overflow = "hidden"; // disable scroll of parent window
                    open_status = true;
                    lastPosY = 0;

                }

            }
            $(window).unbind('mousemove');
            $(window).unbind('touchmove');

        });


        
        //開啟集合頁
        $(window).on('mousedown touchstart', function(e) {
            PosY_click = get_PosY(e, platform)
            console.log('open status: '+ open_status);
            console.log('platform is '+platform);
        // $(window).on('touchstart', function(e) {    
            var model = '<?php echo $model; ?>';

            if(model == 'right')
            {
                var height = $('#avividai_recommend_iframe', parent.document).attr("data-height");

                $('#avividai_recommend_iframe', parent.document).css("height", height);
                $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop");
                $('#avividai_recommend_iframe', parent.document).animate({'margin-left': 0}, 600);
                
                $('.block_overlay').hide(); //半透明遮罩
                $('body').css({height: '100%', overflow: 'auto'}); //開啟卷軸滑動

                //箭頭關閉，所以內容都需左移
                setTimeout(function() {

                    $('#right_arrow_btn').hide();
                    $('#row_header').show();
                    $('#item_div ._init_:eq(0)').css({'left':'-3px', 'background-color':'#ffffff'});
                    $('.block_overlay').css('margin-left', 0);
                    $('body').css('background', '#ffffff');
                }, 100);
            }

            if(model == 'bottom')
            {
                var height = $('#avividai_recommend_iframe', parent.document).attr("data-height");
                console.log('bottom NO1, height is ' + height);
                console.log('bottom NO1, last posY is ' + lastPosY);


                $(window).on('mousemove touchmove', function(e) {
                    window.parent.document.body.style.overflow = "hidden"; // disable scroll of parent window
                    // $(window.parent).unbind('scroll');
                // $(window).on('touchmove', function(e) {
                    // e.preventDefault()
                    if (platform == 'pc')
                        {
                            lastPosY = e.screenY; // pc
                        }
                    else // android or ios
                        {
                            lastPosY = e.originalEvent.targetTouches[0].screenY; // mobile
                        }
                    PosY_release = get_PosY(e, platform);

                    if (open_status == false) // now is close, to open
                    {
                        /* stop moving when mouse button is released:*/

                        // lastPosY = e.originalEvent.targetTouches[0].screenY; // mobile
                        // if (platform == 'pc')
                        // {
                        //     lastPosY = e.screenY; // pc
                        // }
                        // else // android or ios
                        // {
                        //     lastPosY = e.originalEvent.targetTouches[0].screenY; // mobile
                        // }
                        // lastPosY = e.screenY; // pc
                        h_iframe = window.outerHeight - lastPosY;
                        // console.log('mouse move: '+ (window.outerHeight - lastPosY));
                        // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: 100}, 0);
                        cursor_height = Math.max(50, h_iframe+40);
                        // console.log('set hieght is ' + height)
                        $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: cursor_height}, 0);
                        // console.log('drag to open, hieght is ' + height)

                    }
                    // else // now is open, to close
                    // {
                    //     // lastPosY = e.originalEvent.targetTouches[0].screenY; // mobile
                    //     // lastPosY = e.screenY; // pc
                    //     if (window.outerHeight - PosY_click>0.8*window.outerHeight)
                    //     {

                        
                    //         window.parent.document.body.style.overflow = "hidden"; // disable scroll of parent window
                    //         $(window).unbind('touchmove');
                    //         h_iframe = window.outerHeight - lastPosY;
                    //         cursor_height = Math.min(window.outerHeight, h_iframe+50);

                    //         console.log('now is open, to close, set hieght is ' + cursor_height)
                    //         console.log('drag to open, outer.hieght is ' + window.outerHeight+'PosY_click: '+PosY_click)
                    //         $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: cursor_height}, 0); // pc
                    //     }


                    //     // if (platform == 'pc' && window.outerHeight-PosY_click>0.8*window.outerHeight)
                    //     // {
                    //     //     console.log('change height: mousemove... '+PosY_click+' > '+window.outerHeight)
                    //     //     $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: cursor_height}, 0); // pc
                    //     // }
                    //     // else // android or ios
                    //     // {
                    //     //      // mobile
                    //     // }
                    //     // if (height > 0.7*window_Y)
                    //     // {
                    //     // $('#avividai_recommend_iframe', parent.document).attr("data-status", "stop").animate({height: height}, 0);
                    //         // lastPosY = 0;
                    //     // }
                    //     // else
                    //     // {
                    //     //     lastPosY = 0;
                    //     // }
                        
                    // }
                    // e.stopPropagation();



                });


            }

            return false;
        });


        //關閉集合頁
        $('#close_window_btn').on('click', function() {
            var model = '<?php echo $model; ?>';

            if(model == 'right')
            {
                var width = parseInt($('#avividai_recommend_iframe', parent.document).attr("data-width"))+10;

                $('#avividai_recommend_iframe', parent.document).animate({'height': avivid_recommend_setting['right_item_height']}, 600);

                setTimeout(function() {
                    $('#avividai_recommend_iframe', parent.document).animate({marginLeft: width}, 800);
                }, 600);

                setTimeout(function() {
                    $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                    $('#avividai_recommend_iframe', parent.document).css({display:'block'});

                    default_init();
                    reback();
                }, 700);
            }

            if(model == 'bottom')
            {
                $('#avividai_recommend_iframe', parent.document).slideUp(300);

                setTimeout(function() {
                    $('#avividai_recommend_iframe', parent.document).css({height:'50px'});
                    $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                    $('#avividai_recommend_iframe', parent.document).css({display:'block'});

                    default_init();
                    reback();

                }, 300);
            }

            if(model == 'bottom_product')
            {
                $('#avividai_recommend_iframe', parent.document).slideUp(600);

                setTimeout(function() {
                    $('#avividai_recommend_iframe', parent.document).css({height:'0'});
                    $('#avividai_recommend_iframe', parent.document).attr("data-status", "start");
                    $('#avividai_recommend_iframe', parent.document).css({display:'block'});
                }, 700);
            }
            open_status = false;
            window.parent.document.body.style.overflow = "auto"; // enable scroll of parent window

            return false;
        });


        //開啟內容頁的推薦集合頁
        $('#recommend_iframe').on('click', function() {
            reback();

            document.addEventListener('scroll', function() {
                $('#recommend_iframe').hide();
            }, false);

            return false;
        });


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


        //超連結內容
        $(document).on('click', '.href_btn', function() {

            var model = '<?php echo $model; ?>';
            var width = window.innerWidth;
            var url   = $(this).attr('data-url');
            var title = $(this).text().substring(0, 15);

            $('#body_iframe').html('<iframe src="'+url+'" scrolling="no" style="border:0; width:100%; height:5000px; z-index:1; overflow-x:hidden"></iframe>');

            $('#item_div').animate({height:"0"}, 700);

            setTimeout(function() {
                $('#item_div').hide();
                $('#body_iframe').show();
                $('#reback_btn').css("color", "#ffffff").show();
                $('#window_title').text(title);
                $('#body_iframe').css({"margin-topavividai_recommend_iframe":"50px"});
                $('#recommend_iframe').attr("data-status", "start");
                $('#mydiv').css({"margin": "30px 0 0 0"}); // align product page

                //右邊推薦集合頁設定
                if(model == "right")
                {
                    $('#recommend_iframe').css({'margin-left': width+16});

                    var timer = null;

                    //滾動動作, useless??
                    document.addEventListener('scroll', function() {
                        //利用狀態停止列表滾動時，出現滑不完選單
                        if($('#recommend_iframe').attr("data-status") == "end")
                        {
                            return false;
                        }

                        $('#recommend_iframe').show();
                        $('#recommend_iframe').animate({'margin-left': width-16}, 600);

                        if(timer !== null) 
                        {
                            clearTimeout(timer);        
                        }

                        //停止scroll事件
                        timer = setTimeout(function() 
                        {
                            //收回
                            $('#recommend_iframe').hide();
                        }, avivid_recommend_setting['second']);
                        
                    }, false);

                    $('#recommend_iframe').show(); //開啟內容頁的推薦集合頁

                    return false;
                }

                //底部推薦集合頁設定
                if(model == "bottom")
                {
                    $('#recommend_iframe').hide().css({'height': 50});
                    $('#recommend_iframe .row').css({'padding-left': 10});

                    var timer = null;

                    //滾動動作 , useless??
                    // document.addEventListener('scroll', function() {
                    //     //利用狀態停止列表滾動時，出現滑不完選單
                    //     if($('#recommend_iframe').attr("data-status") == "end")
                    //     {
                    //         return false;
                    //     }

                    //     $('#recommend_iframe').slideDown(600);

                    //     if(timer !== null) 
                    //     {
                    //         clearTimeout(timer);        
                    //     }

                    //     //停止scroll事件
                    //     timer = setTimeout(function() 
                    //     {
                    //         //收回
                    //         $('#recommend_iframe').slideUp(600);
                    //     }, avivid_recommend_setting['second']);
                    // }, false);

                    // return false;
                }

                //商品 底部推薦集合頁設定
                if(model == "bottom_product")
                {
                    $('#recommend_iframe').hide().css({'height': 50});
                    $('#recommend_iframe .row').css({'padding-left': 10});

                    var timer = null;

                    //滾動動作
                    document.addEventListener('scroll', function() {
                        //利用狀態停止列表滾動時，出現滑不完選單
                        if($('#recommend_iframe').attr("data-status") == "end")
                        {
                            return false;
                        }

                        $('#recommend_iframe').slideDown(600);

                        if(timer !== null) 
                        {
                            clearTimeout(timer);        
                        }

                        //停止scroll事件
                        timer = setTimeout(function() 
                        {
                            //收回
                            $('#recommend_iframe').slideUp(600);
                        }, avivid_recommend_setting['second']);
                    }, false);

                    return false;
                }
            }, 500);
        });


        //回上一頁
        $('#reback_btn').on("click", function() {
            reback();
        });


        var timer = null;

        window.parent.addEventListener('scroll', function(event) {
            console.log('trigger scroll ,open_status: '+open_status);
            if (open_status == false)
            {
                // event.preventDefault();
                // console.log("trigger scroll " + $('#recommend_iframe').attr("style"));
                // $('#recommend_iframe').css({height:'50px', display:'block'})
                // element.style.height = "50px"; //設定初始高度
                // element.style.display = "block";
                // if($('#recommend_iframe').attr("data-status") == "stop")
                // {
                //     return false;
                // }

                // anime({
                //     targets: $('#recommend_iframe').attr("style"),
                //     height: 50,
                //     duration: 400
                // });
                console.log('height 50px......');
                $('#avividai_recommend_iframe', parent.document).css({display:'block', height:'50px'});
                $('#avividai_recommend_iframe', parent.document).animate({height: 50}, 0);
                // $('#recommend_iframe').animate({height: '50px'});

                if(timer !== null) 
                {
                    clearTimeout(timer);        
                }

                //停止scroll事件
                timer = setTimeout(function() 
                {
                    // if($('#recommend_iframe').attr("data-status") == "stop")
                    // {
                    //     return false;
                    // }

                    // 收回
                    // anime({
                    //     targets: $('#recommend_iframe').attr("style"),
                    //     height: 0,
                    //     duration: 5000
                    // });
                    if (open_status == false)
                    {
                        $('#avividai_recommend_iframe', parent.document).animate({height: 0}, 0);
                    }
                }, avivid_recommend_setting['second']);
            }
        });




    });


    //預設項目, 
    function default_init()
    {
        var model = '<?php echo $model; ?>';

        if(model == "right")
        {
            get_like(100);

            $('._init_').show();
            $('body').css({height: '100%', overflow: 'hidden'}); //關閉卷軸滑動

            //為了讓箭頭顯示，所以內容都需右移
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

            $('._init_').hide();
            $('body').css({height: '100%', overflow: 'hidden'}); //關閉卷軸滑動
            $(".body_row_one").css('margin-top', 0);

            $('#right_arrow_btn').hide(); //關閉箭頭
        }

        if(model == "bottom_product")
        {
            get_like(); //抓猜你喜歡

            $('._init_').hide();
            $('body').css({height: '100%', overflow: 'hidden'}); //關閉卷軸滑動
            $(".body_row_one").css('margin-top', 0);

            $('#right_arrow_btn').hide(); //關閉箭頭
        }

        $('.block_overlay').show();
    }


    //回上一頁
    function reback()
    {
        $('#body_iframe').animate({height:"0"}, 800);
        $('#recommend_iframe').hide().attr("data-status", "end");

        setTimeout(function() {
            $('#body_iframe').html('');
            $('#body_iframe').hide(); //推薦內容頁
            $('#reback_btn').css("color", "#9f9f9f").show(); //回上一頁按鈕

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
            if (website_type==1 || website_type==2)
            {
                callback = merge_article_ad(callback);
            }
            //
            console.log(callback);
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
                    div_class = 'body_row_one';
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

            $(".body_row_one").css('padding', '12px');
            $(".body_row_one").css('margin-top', '100px');

        });
    }




    //抓猜你喜歡
    function get_like(top)
    {
        var web_id         = '<?php echo $web_id; ?>';
        var uuid           = '<?php echo $uuid; ?>'; 
        var title          = '<?php echo $title; ?>'; 
        var url            = '<?php echo $url; ?>'; 
        var meta_url       = '<?php echo $meta_url; ?>';
        var website_type   = '<?php echo $website_type; ?>';
        var recommend_type = '<?php echo $recommend_type; ?>';
        const type         = 'guess';
        

        // var web_id   = 'underwear';
        // var title    = ''
        console.log('getlike look web_id is '+web_id)

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
            if (website_type==1 || website_type==2)
            {
                callback = merge_article_ad(callback);
            }
            //
            console.log(callback);
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
                    div_class = 'body_row_one';
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

            $(".body_row_one").css('padding', '12px');

            if(top > 0)
            {
                $(".body_row_one").css('margin-top', top);
            }
        });
    }


    //其他人也看了
    function get_other(top)
    {
        var web_id         = '<?php echo $web_id; ?>';
        var uuid           = '<?php echo $uuid; ?>'; 
        var title          = '<?php echo $title; ?>'; 
        var url            = '<?php echo $url; ?>'; 
        var meta_url       = '<?php echo $meta_url; ?>';
        var website_type   = '<?php echo $website_type; ?>';
        var recommend_type = '<?php echo $recommend_type; ?>';
        const type         = 'also';

        console.log('others look web_id is '+web_id)

        $('#recommend_body_div').html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto; margin-top: 150px" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#fe718d" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
        </svg>`);

        $.getJSON(get_api_route(website_type, recommend_type, web_id, title, type), function(callback) {
            if(callback === '_')
            {
                return false;
            }

            $('#recommend_body_div').html('');

            var i = 0;
            if (website_type==1 || website_type==2)
            {
                callback = merge_article_ad(callback);
            }

            $.each(callback, function(key, value) {
                if(key == "item_list")
                {
                    return false;
                }

                var html      = '';
                var div_class = '';

                if(i <= 1)
                {
                    div_class = 'body_row_one';
                }

                html += `
                        <div class="col-6 `+div_class+`">
                            <a href="javascript:void(0)" data-url="`+value['url'] + `" class="href_btn"><img src="`+value['image_url']+`" class="w-100" style="z-index:1"></a>
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

        $(".body_row_one").css('padding', '12px');

        if(top > 0)
        {
            $(".body_row_one").css('margin-top', top);
        }

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
        // article_ad = JSON.parse(article_ad);
        article = article_ad['article'];
        // console.log(article)
        ad = article_ad['ad'];
        // console.log(ad);
        for (let i=0; i<ad.length; i++) {
            index = Math.floor(Math.random() * article.length);
            article.splice(index, 0, ad[i])
        }
        // article.push(ad)
        // console.log(article);
        // result = Array.prototype.push.apply(article, ad);
        return article;
    }

    function initiation()
    {
        // document.querySelector('#avividai_recommend_iframe').style.display='block';
        $('._init_').hide();
        $('.block_overlay').show(); //半透明遮罩
        $('#avividai_recommend_iframe', parent.document).css({height:'100px'});

    }


    function expansion()
    {
        $('._init_').show();
        $('.block_overlay').hide(); //半透明遮罩

    }

    function get_device_type()
    {
        var useragent = navigator.userAgent;
        useragent = useragent.toLowerCase();                    if( useragent.indexOf('iphone') != -1 )
        {
            platform = 'ios';
        }                    else if( useragent.indexOf('android') != -1 )
        {
            platform = 'android';
        }                    else
        {
            platform = 'pc';
        }
        return platform
    }

    function get_PosY(e, platform)
    {
        if (platform == 'pc')
        {
            PosY = e.screenY; // pc
        }
        else // android or ios
        {
            PosY = e.originalEvent.targetTouches[0].screenY; // mobile
        }
        return PosY

    }



        //頁底集合頁
    function bottom_item(height)
    {
        // var element = document.querySelector('#avividai_recommend_iframe');
        var element = $('#avividai_recommend_iframe', parent.document);
        var timer   = null;
        $('#avividai_recommend_iframe', parent.document).css({height:'50px'}); //設定初始高度
        

        window.parent.addEventListener('scroll', function(event) {
            console.log('trigger scroll '+open_status);
            // if (open_status == false)
            // {
                // event.preventDefault();
                console.log("trigger scroll");
                element.style.height = "50px"; //設定初始高度
                element.style.display = "block";
                if(element.getAttribute('data-status') == "stop")
                {
                    return false;
                }

                anime({
                    targets: element.style,
                    height: 50,
                    duration: 400
                });
                
                if(timer !== null) 
                {
                    clearTimeout(timer);        
                }

                //停止scroll事件
                timer = setTimeout(function() 
                {
                    if(element.getAttribute('data-status') == "stop")
                    {
                        return false;
                    }

                    // 收回
                    anime({
                        targets: element.style,
                        height: 0,
                        duration: 5000
                    });
                }, avivid_recommend_setting['second']);
            // }
        });
    }

    </script>
</body>
</html>