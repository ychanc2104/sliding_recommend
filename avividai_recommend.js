

window.onload = function() {
    if(typeof avivid_recommend_setting != 'undefined')
    {
        var platform = get_device_type(); // pc, ios or android
        var avivid_height = window.innerHeight;
        var avivid_width  = window.screen.availWidth+10;
        //var avivid_uuid   = AviviD.get_cookie_data("AviviD_uuid");
        var avivid_uuid   = '1234';
        var avivid_url    = window.location.href;
        var avivid_title  = document.querySelector("meta[property='og:title']") !== null ? document.querySelector("meta[property='og:title']").getAttribute('content') : '_';

        if (avivid_title == '_')
        {
            avivid_title = document.querySelector("meta[name='og:title']") !== null ? document.querySelector("meta[name='og:title']").getAttribute('content') : '_';
        }
        
        var avivid_meta_url = document.querySelector("meta[property='og:url']") !== null ? document.querySelector("meta[property='og:url']").getAttribute('content') : '_';
    

        //// set iframe query string
        // document.querySelector('#avividai_recommend_iframe').setAttribute('src', "avividai_recommend.php?web_id="+avivid_recommend_setting['web_id']+"&uuid="+avivid_uuid+'&title='+avivid_title+'&url='+avivid_url+'&meta_url='+avivid_meta_url+'&model='+avivid_recommend_setting['model']+'&website_type='+avivid_recommend_setting['website_type']+'&recommend_type='+avivid_recommend_setting['recommend_type']);
        document.querySelector('#avividai_recommend_iframe').setAttribute('src', "avividai_recommend.php?web_id="+avivid_recommend_setting['web_id']+'&title='+avivid_title+'&model='+avivid_recommend_setting['model']+'&website_type='+avivid_recommend_setting['website_type']+'&recommend_type='+avivid_recommend_setting['recommend_type']);

        document.querySelector('#avividai_recommend_iframe').setAttribute('data-height', avivid_height);

        //右邊集合頁
        if(avivid_recommend_setting['model'] == "right")
        {
            // right_item(avivid_height, avivid_width);
            document.querySelector('#avividai_recommend_iframe').style.marginLeft = (avivid_width-29)+'px'; //設定最大寬度、和初始寬度
            document.querySelector('#avividai_recommend_iframe').style.height = Math.round(avivid_height*2/3)+"px"; //設定初始高度
            document.querySelector("#avividai_recommend_iframe").setAttribute('data-width', avivid_width); //設定最大寬度，讓內容頁可以關閉
        }

        //底下集合頁
        if(avivid_recommend_setting['model'] == "bottom")
        {
            console.log('tessssttt ' + document.querySelector('#avividai_recommend_iframe').style)

            // document.querySelector('#avividai_recommend_iframe').style.height = "100px"; //設定初始高度

            // bottom_item(avivid_height);
        }

        //底下集合頁
        if(avivid_recommend_setting['model'] == "bottom_product")
        {
            bottom_item_product(avivid_height);
        }
    }
    


    //右邊集合頁
    function right_item(height, width)
    {
        height = avivid_recommend_setting['right_item_height'];

        document.querySelector('#avividai_recommend_iframe').style.marginLeft = (width-29)+'px'; //設定最大寬度、和初始寬度
        document.querySelector('#avividai_recommend_iframe').style.height = height+"px"; //設定初始高度
        document.querySelector("#avividai_recommend_iframe").setAttribute('data-width', width); //設定最大寬度，讓內容頁可以關閉

        var element = document.querySelector('#avividai_recommend_iframe');
        var timer   = null;

        window.parent.addEventListener('scroll', function() {
            if(element.getAttribute('data-status') == "stop")
            {
                return false;
            }

            anime({
                targets: element.style,
                marginLeft: (width-40),
                duration: 600,
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

                //收回
                anime({
                    targets: element.style,
                    marginLeft: (width-29),
                    duration: 5000
                });
            }, avivid_recommend_setting['second']);
            
        }, false);
    }


    //頁底集合頁
    function bottom_item(height)
    {
        var element = document.querySelector('#avividai_recommend_iframe');
        var timer   = null;
        element.style.height = "50px"; //設定初始高度
        

        window.parent.addEventListener('scroll', function(event) {
            console.log(parent.open_status);
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


    //商品頁底部
    function bottom_item_product(height)
    {
        var element = document.querySelector('#avividai_recommend_iframe');

        window.parent.addEventListener('scroll', function(event) {
            if(element.getAttribute('data-status') == "stop")
            {
                return false;
            }

            //滾動條高度(目前元素的高度)
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

            //可見區域高度
            let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            
            //滾動條頂部到瀏覽器頂部高度
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            if(clientHeight + scrollTop + 1 >= scrollHeight)
            {
                //element.style.height = height;

                //打開
                anime({
                    targets: element.style,
                    height: height,
                    duration: 100
                });

                //打開
                anime({
                    targets: element.style,
                    height: height,
                    duration: 1000
                });
            }
        });
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

}