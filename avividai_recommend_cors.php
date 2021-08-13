<?php


header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods:POST, GET');  
header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");
header('Access-Control-Allow-Credentials: True');

$web_id         = filter_var($_GET["web_id"], FILTER_SANITIZE_STRING); 
$title_last_watch     = filter_var($_GET["title_last_watch"], FILTER_SANITIZE_STRING); 
$title_now_watch      = filter_var($_GET["title_now_watch"], FILTER_SANITIZE_STRING); 
$title_exclude     = filter_var($_GET["title_exclude"], FILTER_SANITIZE_STRING); 
// required
$model          = filter_var($_GET["model"], FILTER_SANITIZE_STRING); //模式 bottom=底部滑上來, right=右邊滑出來
$title          = filter_var($_GET["title"], FILTER_SANITIZE_STRING);
$website_type   = filter_var($_GET["website_type"], FILTER_SANITIZE_STRING);

// not used now
$uuid           = filter_var($_GET["uuid"], FILTER_SANITIZE_STRING);
$url            = filter_var($_GET["url"], FILTER_SANITIZE_STRING);
$meta_url       = filter_var($_GET["meta_url"], FILTER_SANITIZE_STRING);
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
    <!-- <link href="avividai_recommend.css" rel="stylesheet" /> -->
    <link href="https://www.likr.com.tw/rick/recommend2/avividai_recommend.css" rel="stylesheet" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>-->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


    <style>


    </style>
</head>

<body style="background-color: transparent; overflow: hidden;">
    <img src="img/left_close_arrow2.png?20210604" id="avivid_left_arrow_btn" style="width:35px; height:35px; position: absolute; top: 50%; bottom: 50%; z-index: 10000; cursor: pointer;">
    <img src="img/right_close_arrow2.png?20210604" id="avivid_right_arrow_btn" style="width:35px; height:35px; position: absolute; right: 0;top: 50%; bottom: 50%; z-index: 10000; cursor: pointer;">



    <div class="parameters_wrapper" style="display: none;">
        <div id="parent_scroll_height"></div>
        <div id="parent_scroll_y"></div>
        <div id="parent_window_x"></div>
        <div id="parent_window_y"></div>
        <div id="parent_open_status"></div>

    </div>


    <div class="avivid_block_overlay" style="z-index: 1000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.15; cursor: wait; position: fixed;"></div>


    <div id="avivid_recomm_wrapper" class="container" style="max-width: 100%; margin-left: -1vmax;">
        <!--浮動標題列 rgba(116,116,116,0.5)-->
        <div class="row" id="avivid_row_header" style="display:none; background-color: rgba(0,0,0,0.5); position: fixed; width: 100%; top: 0px; right: 0; left: 0; margin:0 0 20px 0; height:6vh; z-index:10;">
            <div class="col-2">
                <div id="avivid_reback_btn" style="color: #9f9f9f; text-align: left; height: 60px; line-height: 6vh; z-index:99">
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
                    <svg id="avivid_close_window_btn" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" style="color: #ffffff; z-index:99">
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="row avivid_init_">
            <div class="col" style="height: 27px">&nbsp</div>
        </div>


        <!--推薦內容顯示-->
        <div class="row avivid_init_">
            <div class="col" style="padding:0; margin:0">
                <div id="avivid_body_iframe"></div>

                <!--滑不完推薦內容-->
                <div id="recommend_iframe" class="<?php echo $recommend_iframe_css; ?>" data-status="end">
                    <img src="img/right_close_arrow.png?202106041" id="avivid_right_arrow_btn" style="width:19px; height:36px; position: absolute; top: 50%; bottom: 50%; left:-31px; z-index: 100">
                    <div class="row" style="padding: 10px 10px 0 0; background-color: rgb(0, 0, 0); opacity: 0.6; height: 525px"></div>
                </div>
            </div>
        </div>

        <!--推薦內容集合頁-->
        <div class="row" id="avivid_item_div" style="margin:10vh auto; width:100%">
            <div class="col">
                <div id="header_wrapper" class="avivid_init_" style="background-color:#ffffff; position: fixed; width: 100%; top: 6vh; right: 0px; left: -0.5vw; margin:0; margin-bottom: 15px; z-index:10; height: 8vh; line-height: 4vh">
                    <div class="row">
                        <div class="col-6 text-center avivid_menu_header_btn" style="padding: 0 3vw 0 6vw">
                            <b style="font-size: 20px">猜你喜歡</b>
                            <div class="bg-dark" style="height: 10px">&nbsp</div>
                        </div>

                        <div class="col-6 text-center avivid_menu_header_btn" style="padding: 0 6vw 0 3vw">
                            <b class="text-gray" style="font-size: 20px">別人也看了</b>
                            <div class="bg-gray" style="height: 10px">&nbsp</div>
                        </div>
                    </div>
                </div>

                <div id="avivid_recommend_body_div" class="row" style="overflow-y:scroll; margin-top:-0.5vh; height:82vh; position:fixed; left:2.5vw;"></div>
            </div>
        </div>
    </div>

    <script type="text/javascript">

        var AviviD = (typeof(AviviD) == 'undefined'? {} : AviviD);

        // $(function() {
        //     AviviD.config = 
        //     {
        //         "web_id": 'i3fresh', // underwear for e-comm, babyhome for media
        //         "title" : 'default',
        //         "model": "bottom", //模式 bottom=底部集合頁, right=右邊集合頁
        //         "website_type": 3, // 1:media, 2:blog, 3:E-commerce
        //         "recommend_type": 1, // 1:article, 2:e-commerce
        //         "z_item": 10000
        //     }

        AviviD.config = 
        {
            "web_id": '<?php echo $web_id; ?>', // underwear for e-comm, babyhome for media
            "title_last_watch" : '<?php echo $title_last_watch; ?>',
            "title_now_watch"  : '<?php echo $title_now_watch; ?>',
            "title_exclude"    : '<?php echo $title_exclude; ?>',
            "model": "bottom", //模式 bottom=底部集合頁, right=右邊集合頁
            "website_type": 3, // 1:media, 2:blog, 3:E-commerce
            "recommend_type": 1, // 1:article, 2:e-commerce
            "z_open": 10000,
            "z_close": 10,
            "z_item": 10000
        }




            //// inside function, 
            AviviD.get_item = function(type='guess') {
                let web_id         = AviviD.config.web_id;
                let title_last_watch = AviviD.config.title_last_watch; 
                let title_now_watch = AviviD.config.title_now_watch; 

                title = (type=='guess'? title_last_watch: title_now_watch) // (guess you like, other also watch) = (title_last_watch, title_now_watch)
                let website_type   = AviviD.config.website_type;
                let recommend_type = AviviD.config.recommend_type;
                // let iframe = $('#avividai_recommend_iframe');
                console.log(type + ', web_id is '+web_id+', website_type: '+website_type+', title: '+title);
                $.getJSON(AviviD.get_api_route(website_type, recommend_type, web_id, title, type), function(callback) {
                    if(callback == 'error') {
                        return false; // early return
                    }
                    $('#avivid_recommend_body_div').html(''); // clear items div
                    var i = 0;
                    if (website_type==1 || website_type==2) // There are ad mixing in, shuffle ad into article 
                    {
                        callback = AviviD.merge_article_ad(callback);
                    }

                    $.each(callback, function(key, value) {
                        if(key == "item_list") {
                            return false;
                        }
                        var html      = '';
                        var div_class = '';
                        html += `
                                <div class="col-6 `+div_class+`">
                                    <a href="javascript:void(0)" data-url="`+value['url']+`" class="avivid_href_btn"><img src="`+value['image_url']+`" class="w-100" style="z-index:1"></a>
                                    <h6 class="title"><a href="javascript:void(0)" data-url="`+value['url']+`" class="avivid_href_btn">`+value['title']+`</a></h6>
                                    <div class="description"><a href="javascript:void(0)" data-url="`+value['url']+`" class="avivid_href_btn">`+value['description']+`</a></div>
                                </div>`;

                        $('#avivid_recommend_body_div').append(html);

                        // if(i >= 2 && i <= 4) {
                        //     $('#avivid_recommend_iframe > div').append(html);
                        // }

                        i++;
                    });
                    console.log("TONY's API, get items length: "+i+', title: '+title);

                });
            }

            //// use for merge ad and article (random sorting)
            AviviD.merge_article_ad = function(article_ad) {
                let article = article_ad['article'];
                let ad = article_ad['ad'];
                for (let i=0; i<ad.length; i++) {
                    index = Math.floor(Math.random() * article.length);
                    article.splice(index, 0, ad[i])
                }
                return article;
            }


            // recommend_type: 1 for own article, 2 for other e-comm; website_type: 1 for media, 2 for blog, 3 for e-comm
            AviviD.get_api_route = function(website_type, recommend_type, web_id, title, type) {
                if (website_type == 3) { // E-commerce must recommend e-comm
                    route = 'https://rhea-cache.advividnetwork.com/api/productEcom?web_id='+web_id+'&title='+title+'&type='+type;
                } else if (website_type == 1 || website_type == 2 && recommend_type == 1) { // media or blog + recommend article                
                    route = 'https://rhea-cache.advividnetwork.com/api/articleMedia?web_id='+web_id+'&title='+title+'&type='+type;
                } else if (website_type == 1 || website_type == 2 && recommend_type == 2) { // media or blog + recommend e-comm                
                    route = 'https://rhea-cache.advividnetwork.com/api/productMedia?web_id='+web_id+'&title='+title+'&type='+type;
                } else {
                    route = 'https://rhea-cache.advividnetwork.com/api/productEcom'
                }
                return route
            }


            //// show samll div to toggle, open_status=0, scroll down (two version, right and bottom)
            AviviD.css_close_showdiv = function(model='bottom') {
                // let iframe = $('#avividai_recommend_iframe');
                $('.avivid_block_overlay').show();
                $('#avivid_row_header').hide();
                $('.avivid_init_').hide(); // show header title bar
                if (model == 'right') {
                    $('#avivid_item_div').css({'margin-top': '10vh'});
                    // iframe.css({display:'block', 'margin-left': '', left: '90vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw'}); // required
                    $('#avivid_right_arrow_btn').css({display: 'block', top: '25vh'});
                    $('#avivid_left_arrow_btn').css({display: 'block', top: '25vh'});
                    $('#avivid_recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
                    $('.avivid_block_overlay').css({"margin-left": "-1vmax"}); // align product page
                } else {
                    $('#avivid_item_div').css({'margin-top': '2vh'});
                    // iframe.css({display:'block', top:'', bottom: '-95vh', height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw'});
                    $('#avivid_right_arrow_btn').css({display: 'none'});
                    $('#avivid_left_arrow_btn').css({display: 'none'});
                    $('#avivid_recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
                }
                $('#avivid_reback_btn').hide();
            }







            //// fully open state (open_status = 2, right = bottom) 
            AviviD.css_fullyopen = function() {
                $('.avivid_block_overlay').hide(); //半透明遮罩
                $('#avivid_row_header').show(); // hide gray transparent bar
                $('.avivid_init_').show(); // show header title bar
                // let open_size = parent.window.innerHeight*1.05;
                // $('#avividai_recommend_iframe', parent.document).css({display:'block', 'margin-left': '', left: 0, top: 0, bottom: 0, height: open_size+'px', width: '100vw'}); // required
                $('#avivid_item_div').css({'margin-top': '10vh'}); // items images
                $('#avivid_right_arrow_btn').css({display: 'none'});
                $('#avivid_left_arrow_btn').css({display: 'none'});
                $('#avivid_recommend_body_div').css({'overflow-y': 'auto'}) // close iframe scrolling
                console.log('css_fullyopen');
                // set_parent_scroll(0);
            }

            //// transmit open_status to parent page
            AviviD.transmit_to_parent = function(open_status=0, z_item=0) {
                // var open_status = open_status;
                data = {};
                data.open_status = open_status;
                data.z_item = z_item;
                window.parent.postMessage(data, "*"); 
                // console.log('transmit to parent: data: '+data);
            }


            //// default setting, wait for .php to read parameters
            setTimeout( () => {
                AviviD.get_item('guess'); //抓猜你喜歡
                AviviD.css_close_showdiv('bottom');

            }, 1000);

            // initialize open_status
            AviviD.open_status = 0; 
            //// function to receive parameters from parent window
            $(window).on('message', function (e_msg) {
                // alert(e_msg.origin);
                // if (e_msg.origin !== "http://www.42du.cn") {
                //     return;
                // }
                data = e_msg.originalEvent.data;
                // console.log(data);
                // console.log('now open_status: '+data.open_status+', previous open_status: '+AviviD.open_status);

                var scroll_height = data.scroll_height;
                var scroll_y = data.scroll_y;
                var window_x = data.window_x;
                var window_y = data.window_y;
                var open_status = data.open_status;

                document.getElementById('parent_scroll_height').innerHTML = scroll_height;
                document.getElementById('parent_scroll_y').innerHTML = scroll_y;
                document.getElementById('parent_window_x').innerHTML = window_x;
                document.getElementById('parent_window_y').innerHTML = window_y;
                document.getElementById('parent_open_status').innerHTML = open_status;

                if (AviviD.open_status != data.open_status) {
                    if (data.open_status == 0) { // close css                        
                        AviviD.css_close_showdiv();
                        console.log('close css');
                        
                    } else if (data.open_status == 2) { // fully open css
                        AviviD.css_fullyopen();
                        console.log('fully open css');
                    }
                }
                AviviD.open_status = data.open_status; // update open_status

            });

            AviviD.window_Y = document.getElementById('parent_window_y').innerHTML; // update parameter


            //// back to all items page(猜你喜歡 & 別人也看了), cand confrim to fully open
            AviviD.reback = function() {
                // $('#body_iframe').animate({height:"0"}, 800); // make items disappeared
                // css_fullyopen();
                $('#avivid_recomm_wrapper').css({"margin-left": "-1vmax"}); // align product page
                $('#avivid_body_iframe').css({'background-color': 'white'});
                $('#avivid_body_iframe').css({top: '100vh'});
                $('#avivid_recommend_iframe').hide().attr("data-status", "end"); 
                $('#avivid_reback_btn').hide(); // hide reback_arrow
                $('#avivid_body_iframe').html(''); // clear item url iframe
                $('#avivid_body_iframe').hide(); // hidden item url iframe to show all items page
                $('#avivid_item_div').show();
                $('#window_title').text('');
                $('#avivid_item_div').css("height", "100vh");
                AviviD.css_fullyopen();
            }


            // to close
            $('#avivid_close_window_btn').on('touchstart', function(e) {
                AviviD.reback();
                AviviD.css_close_showdiv(AviviD.config.model);
                AviviD.open_status = 0;
                AviviD.transmit_to_parent(AviviD.open_status); // transmit open_status = 0 to parent
            });


            //選項卡
            $('.avivid_menu_header_btn').on('click', function() {
                if (AviviD.open_status == 2) {
                    $('.avivid_menu_header_btn').find(' > div').removeClass('bg-dark');
                    $('.avivid_menu_header_btn').find(' > div').addClass('bg-gray');
                    $('.avivid_menu_header_btn').find(' > b').addClass('text-gray');

                    $(this).find(' > div').removeClass('bg-gray');
                    $(this).find(' > div').addClass('bg-dark');
                    $(this).find(' > b').removeClass('text-gray');

                    if($(this).find(' > b').text() == "猜你喜歡") {
                        AviviD.get_item('guess');
                        return false;
                    }
                    if($(this).find(' > b').text() == "別人也看了") {
                        AviviD.get_item('also');
                        return false;
                    }
                }
            });

            // 超連結內容, to open item url
            $(document).on('click', '.avivid_href_btn', function() {
                if (AviviD.open_status == 2) {
                    var url   = $(this).attr('data-url');
                    var title = $(this).text().substring(0, 15);
                    let window_y = document.getElementById('parent_window_y').innerHTML;
                    let open_size = window_y*0.91;
                    AviviD.open_status = 3; // in item state
                    AviviD.transmit_to_parent(AviviD.open_status, AviviD.config.z_item);
                    console.log('click item, open_status: '+AviviD.open_status);
                    // create iframe linked to clicked item page
                    if (AviviD.platform=='ios') // there are bottom tap in ios
                    {
                        // $('#avivid_body_iframe').html('<iframe id="avividai_item_iframe" src="'+url+'" style="border:0; width:100%; height:80vh; z-index:1;"></iframe>'); // contents after clicked item 93 for full
                        $('#avivid_body_iframe').html('<iframe id="avividai_item_iframe" src="'+url+'" style="border:0; width:100%; height:80vh; z-index:1;"></iframe>'); // contents after clicked item 93 for full

                    } else {
                        $('#avivid_body_iframe').html('<iframe id="avividai_item_iframe" src="'+url+'" style="border:0; width:100%; height:93vh; z-index:1;"></iframe>'); // contents after clicked item 93 for full
                    }
                    // hiden all items div
                    $('#avivid_item_div').animate({top:"100vh"}, 700);
                    // $('#avivid_body_iframe').css({'background-color': 'white'});
                    setTimeout(function() {
                        // $('#avividai_item_iframe').css({height: open_size+'px'}); // 
                        $('#avivid_item_div').hide(); // hidden all items page including header bar
                        $('#avivid_body_iframe').show(); // show iframe of clicked item
                        $('#avivid_reback_btn').css("color", "#ffffff").show();
                        // $('#avivid_body_iframe').css({"margin-topavividai_recommend_iframe":"50px"});
                        $('#avivid_body_iframe').css({'background-color': 'white', "position":"fixed", "top":"6vh", "left":"0", "width":"100vw"});
                        // $('#recommend_iframe').attr("data-status", "start");
                        $('#avivid_recomm_wrapper').css({"margin-left": ""}); // restore to align page              
                        // $('#recomm_wrapper').css({"margin": "30px 0 0 0"}); // align product page
                    }, 500);
                }
            });


            //// 回上一頁
            $('#avivid_reback_btn').on("click", function(e) {
                // e.preventDefault();
                AviviD.reback();
                AviviD.open_status = 2;
                AviviD.transmit_to_parent(AviviD.open_status);
            });



            //// listener to execute back button in iframe       
            window.history.pushState(null, null, null);
            $(window).on('popstate', function(e) {
                console.log('popstate: open_status:'+AviviD.open_status)
                if (AviviD.open_status == 1 || AviviD.open_status == 2) { // in main iframe page               
                    e.preventDefault();
                    console.log('lock back button, half-open or fully-open, open_status: '+AviviD.open_status);
                    window.history.pushState(null, null, null);
                } else if (AviviD.open_status == 3) { // in item-page, go to last page               
                    e.preventDefault();
                    console.log('lock back button, in item-page, open_status: '+AviviD.open_status);
                    AviviD.reback();
                    AviviD.open_status = 2;
                    AviviD.transmit_to_parent(AviviD.open_status);
                    window.history.pushState(null, null, null);
                } else {
                    // e.preventDefault();
                    console.log('do nothing, back, open_status: '+AviviD.open_status);
                    // history.go(-2); // go back twice
                    // do nothing
                }
            });



        //     //// inside function, use for dynamically adjusting height of item page
        //     setInterval( () => {
        //         if (AviviD.open_status == 2 || AviviD.open_status == 3) { // when height changed
        //             AviviD.window_Y = document.getElementById('parent_window_y').innerHTML; // update window_Y
        //             let open_item_size = AviviD.platform=='ios'? AviviD.window_Y*0.86:AviviD.window_Y*0.91;
        //             $('#avividai_item_iframe').css({height: open_item_size+'px'}); //
        //         }
        //     }, 2000);

        // });






        


    </script>
</body>
</html>