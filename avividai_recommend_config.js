let urlParams = new URLSearchParams(window.location.search);


if (urlParams.get('test') == 1)
{
    avivid_recommend_setting = 
    {
        // "web_id": 'lovingfamily', // underwear for e-comm, babyhome for media
        "web_id": 'i3fresh', // underwear for e-comm, babyhome for media, 'i3fresh'
        "model": "right", //模式 bottom=底部集合頁, right=右邊集合頁
        "second": 1000, //停止多久的秒數，集合頁會消失，預設為2秒 = 2000
        "right_item_height": 525, //右邊集合頁預設頁面滑動時的高度
        "website_type": 3, // 1:media, 2:blog, 3:E-commerce
        "recommend_type": 1 // 1:article, 2:e-commerce
    }
}
else
{
    avivid_recommend_setting = 
    {
        "web_id": 'i3fresh', // underwear for e-comm, babyhome for media
        "model": "bottom", //模式 bottom=底部集合頁, right=右邊集合頁
        "second": 1000, //停止多久的秒數，集合頁會消失，預設為2秒 = 2000
        "right_item_height": 525, //右邊集合頁預設頁面滑動時的高度
        "website_type": 3, // 1:media, 2:blog, 3:E-commerce
        "recommend_type": 1 // 1:article, 2:e-commerce
    }
}