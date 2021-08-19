// 1. check device (temporarily)
AviviD.get_device_type = function() {
    var useragent = navigator.userAgent;
    useragent = useragent.toLowerCase();
    // if (useragent.indexOf('iphone') != -1 || useragent.indexOf('ipad') != -1|| useragent.indexOf('mac') != -1) {
    if (useragent.indexOf('iphone') != -1 ) {
        platform = 'ios';
    } 
    else if (useragent.indexOf('ipad') != -1 ) {
        platform = 'ipad';
    } 
    else if (useragent.indexOf('android') != -1 ) {
        platform = 'android';
    } else {
        platform = 'pc';
    }
    return platform
}
AviviD.platform = AviviD.get_device_type();

if (AviviD.platform == 'ios' || AviviD.platform == 'android') {        
    // 2. set config
    var AviviD = typeof(AviviD) == 'undefined'? {} : AviviD;
    AviviD.fetch_config = function() {
        return new Promise((resolve, reject) => {
            let url = 'https://rhea-cache.advividnetwork.com/api/getSlidingConfig'; // https://rhea-cache.advividnetwork.com/api/
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'json',
                data: {
                    'web_id': AviviD.web_id
                },
                success: function (result) {
                    resolve(result)
                },
                fail: function (xhr, ajaxOptions, thrownError) {
                    reject(false)
                },
            })
        })
    }
    //// get config using api
    AviviD.fetch_config().then( (data_array) => {
        //// get config setting
        data = data_array[0];
        AviviD.config = {
            "web_id"           : AviviD.web_id, // underwear for e-comm, babyhome for media
            "css_url"          : data.css_url,
            "iframe_url"       : data.iframe_url,
            "href"             : data.href,
            "href_mobile"      : data.href_mob,
            "use_meta"         : data.use_meta, // 0 or 1
            "title_exclude"    : data.title_exclude,
            "model"            : data.model, //模式 bottom=底部集合頁, right=右邊集合頁
            "website_type"     : data.website_type, // 1:media, 2:blog, 3:E-commerce
            "recommend_type"   : data.recommend_type, // 1:article, 2:e-commerce, useful only when website_type != 3
            "z_open"           : data.z_open,
            "z_close"          : data.z_close,
            "z_item"           : data.z_item // set z-index after get into item url
        }
        // 3. set and get cookie
        //// get item title
        AviviD.get_item_title = function() {
            let obj_og = document.querySelector("meta[property='og:title']");
            let obj_title = document.querySelector("title");
            let title = "default";
            if (AviviD.config.use_meta == '1') { // use meta
                title = (obj_og !== null ? obj_og.getAttribute('content') : obj_title.innerHTML);
            } else { // use title
                title = (obj_title !== null ? obj_title.innerHTML : obj_og.getAttribute('content'));
            }
            return title.trim(); // remove \n, \t in the head or end
        }
        //// save to cookie
        AviviD.save_title_to_cookie = function(title_last_watch="default", title_now_watch="default") {            
            document.cookie = "AviviD_last_watch="+encodeURI(title_last_watch); // ios not support for chinese (ASCII), so encode first
            document.cookie = "AviviD_now_watch="+encodeURI(title_now_watch);
        }
        //// get cookie
        AviviD.get_Cookie = function(cookie_name="AviviD_last_watch") {
            let name = cookie_name + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "404";
        }
        AviviD.update_cookie = function() {
            var title_last_watch = decodeURI(AviviD.get_Cookie("AviviD_last_watch"));
            var title_now_watch = decodeURI(AviviD.get_Cookie("AviviD_now_watch"));
            var now_title = AviviD.get_item_title();
            // console.log('title_now_watch: '+title_now_watch+', get title: '+now_title+', encode: '+encode_title+', decoded title: '+decodeURI(encode_title))
            if (title_last_watch == "404" || title_now_watch == "404" || title_now_watch == AviviD.config.title_exclude || title_last_watch == AviviD.config.title_exclude) {
                AviviD.save_title_to_cookie("default", "default");
                title_now_watch = "default";
            }
            if (title_now_watch != now_title && now_title != AviviD.config.title_exclude) { // user leave last page and not with title_exclude => update cookie
                AviviD.save_title_to_cookie(title_now_watch, now_title)
            }
            //// store title config
            AviviD.config.title_last_watch = AviviD.get_Cookie("AviviD_last_watch");
            AviviD.config.title_now_watch = AviviD.get_Cookie("AviviD_now_watch");           
        }
        //// store title into cookie
        AviviD.update_cookie();

        // 4. insert iframe
        $('body').append('<div id="avivid_iframe_warpper"><div id="avivid_iframe_handle"></div></div>')
        $('#avivid_iframe_handle').css({width: "100vw", height: "100vh", position: "fixed", bottom: "-100vh", left: "0", "background-color": "black", opacity: "0.15", "border-radius": "1vw", "z-index": parseInt(AviviD.config.z_close)+1});
        AviviD.iframe_src = AviviD.config.iframe_url;
        AviviD.iframe_qs = { web_id: AviviD.config.web_id, title_last_watch: AviviD.config.title_last_watch, title_now_watch: AviviD.config.title_now_watch
                            ,title_exclude: AviviD.config.title_exclude, website_type: AviviD.config.website_type, recommend_type: AviviD.config.recommend_type
                            ,model: AviviD.config.model, z_item: AviviD.config.z_item, z_close: AviviD.config.z_close, z_open: AviviD.config.z_open };
        AviviD.src = AviviD.iframe_src + `?` + $.param(AviviD.iframe_qs);
        $('#avivid_iframe_warpper').append(`<iframe id="avividai_recommend_iframe"></iframe>`);
        $('#avividai_recommend_iframe').css({width: "100vw", height: "100vh", position: "fixed", bottom: "-100vh", left: "0", "border-radius": "1vw", "z-index": AviviD.config.z_close, border: "0"});
        document.querySelector('#avividai_recommend_iframe').setAttribute('src', AviviD.src);

        // 5. insert js
        // console.log(navigator.userAgent);
        AviviD.receiver = document.getElementById('avividai_recommend_iframe').contentWindow;
        AviviD.open_status = -1; // -1: fully close, 0: close but show div, 1: half-open, 2: fully open, 3: in item-page, 4: in the bottom, 5: in moving-open
        AviviD.transmit_to_iframe = function(open_status=-1) {
            data = {};
            data.scroll_height = document.body.scrollHeight;
            data.scroll_y = window.pageYOffset;
            data.window_x = window.innerWidth;
            data.window_y = window.outerHeight;
            data.open_status = open_status; // input parameter
            AviviD.receiver.postMessage(data, "*"); 
            // console.log('transmit: top_position: '+scroll_y+', data: '+data);
        }

        //// 
        $('#avivid_iframe_handle').on('touchstart touchmove touchend', (e) => {
            AviviD.transmit_to_iframe(AviviD.open_status);
        });

        AviviD.scroll_y = null;
        AviviD.scroll_height = document.body.scrollHeight;

        AviviD.window_X = window.innerWidth;
        AviviD.window_Y = window.outerHeight; // responsive in mobile
        AviviD.window_size = AviviD.config.model == 'right'? AviviD.window_X : AviviD.window_Y; // default is bottom
        AviviD.criteria = 1/3*AviviD.window_size; // bigger than 1/3 window_size => fully open

        AviviD.model = AviviD.config.model;
        AviviD.PosX_click = AviviD.PosY_click = null;
        AviviD.Pos_click = AviviD.Pos_move_release = null;
        AviviD.Pos_click = AviviD.distance_move = null;

        if (AviviD.platform == 'pc') {
            AviviD.event = {
                'down_event' : 'mousedown',
                'move_event'  : 'mousemove',
                'up_event'  : 'mouseup'
            }
        } else { // mobile device use touch events
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
                PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : e.originalEvent.targetTouches[0].screenY); // mobile
                if (typeof(e.touches)!="undefined") {
                    PosX = (e.touches[0].screenX < 0? window_X+e.touches[0].screenX : e.touches[0].screenX); // mobile
                    // console.log('posY is '+PosY+' raw pos: '+ e.touches[0].screenY+ ' jquery targetTouches: '+ e.originalEvent.targetTouches[0].screenY+ ' jquery changedTouches: '+e.originalEvent.changedTouches[0].screenY)+ ' jquery targetTouches: '+e.originalEvent.targetTouches[0].screenY;
                } else {
                    PosX = 0
                }

            } else if (platform == 'ipad') {
                //// jquery, e.originalEvent.targetTouches[0].screenX
                PosY = (typeof(e.touches)!="undefined"?e.touches[0].screenY : e.originalEvent.targetTouches[0].screenY); // mobile
                PosY = (PosY>parent.window.outerHeight? PosY-parent.window.outerHeight : PosY)
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
        //// disable or enable scrolling bar
        AviviD.set_scrollable = function(state='enable') { // disable: close scrolling, enable: open scrolling
            if (state == 'disable') {
                // window.document.body.style.overflow = "hidden"; // close scrolling        
                window.document.body.style.overflow = "auto"; // open scrolling

            } else if (state == 'enable') {
                window.document.body.style.overflow = "auto"; // open scrolling
            }    
        }

        //// get iframe size during drag to open
        AviviD.get_iframe_size = function() {
            let model = AviviD.config.model;
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
            var result = {};
            var element_iframe = $('#avividai_recommend_iframe');
            var element_handle = $('#avivid_iframe_handle');
            if (model == "right") {
                if (motion == 'open') { // to open                    
                    if (!in_half_open) { // 1st segment to open, in_half_open=false                       
                        promise = $.when(
                            AviviD.set_scrollable('disable'), // disable scrolling
                            AviviD.likrTimer.clearTimer() // clear onpage event
                        ).done( () => {
                            element_iframe.animate({left: 0}, 500).promise();
                        })
                        var open_status = 1;
                    } else { // add 2nd segment, in_half_open=true                
                        promise = $.when(
                            AviviD.set_scrollable('disable'), // confirm to disable scrolling
                            AviviD.likrTimer.clearTimer() // clear onpage event
                        ).done( () => {                            
                            element_iframe.animate({top: 0}, 200).promise();
                        })
                        var open_status = 2;
                    }      
                } else if (motion == 'close') { // to close            
                    if (in_half_open) { // in half open state => close half                       
                        promise = $.when(
                            AviviD.set_scrollable('enable') // confirm to enable scrolling
                        ).done( () => {                            
                            element_iframe.animate({left: '100vw'}, 300).promise();                        
                        })                    
                
                    } else { // in fully open state => close all
                        promise = $.when(
                            AviviD.set_scrollable('enable') // confirm to enable scrolling
                        ).done( () => {
                            element_iframe.animate({top: '40vh'}, 300).animate({left: '100vw'}, 300).promise(); // 1st => 2nd
                        }) 
                    }
                    var open_status = 0;
                }
            } else if (model == "bottom") {
                if (motion == 'open') { // to open                 
                    promise = $.when(
                        AviviD.platform!='ios'? AviviD.set_scrollable('disable') : '', // confirm to disable scrolling, don't use this in ios
                        AviviD.likrTimer.clearTimer(), // clear onpage event
                        element_iframe.animate({bottom: '-0vh'}, 500).promise(),
                        element_handle.animate({bottom: '-0vh'}, 500).promise()
                    ).done( () => {
                        AviviD.css_open_iframe();
                    })
                    var open_status = 2;
                } else { // to close
                    promise = $.when(
                        AviviD.platform!='ios'?AviviD.set_scrollable('enable') : '' // confirm to enable scrolling
                    ).done( () => {
                        element_iframe.animate({top: '95vh'}, 500).promise(), // required for promise.done
                        element_handle.animate({top: '95vh'}, 500).promise()
                        .done( () => {
                            AviviD.css_close_hide_iframe()
                        })
                    })    
                    var open_status = 0;
                }
            }
            result.open_status = open_status;
            result.promise = promise;
            // console.log('animation_promise, open_status: '+open_status);
            return result;
        }
        AviviD.is_in_bottom = function() {
            return AviviD.scroll_y + AviviD.window_Y >= 0.98*AviviD.scroll_height;
        }
        //// auto-open in the bottom, only trigger once
        AviviD.open_in_bottom = false; // true or false
        setInterval( () => {
            if (AviviD.is_in_bottom() && !AviviD.open_in_bottom) { // when in the bottom 
                // console.log("auto-open");
                result = AviviD.animation_promise('open'); // bug only in ios(right: not stop in 1st motion)
                AviviD.open_status = result.open_status; // immediately update status to prevent trigger scrolling event, open_status=2
                result.promise.done( () => {
                    AviviD.transmit_to_iframe(AviviD.open_status); // set css after animation is finished
                });
                AviviD.open_in_bottom = true;
            }
        }, 50);
        //// for receive data from iframe, use for close,
        $(window).on('message', (e_msg) => {
            data = e_msg.originalEvent.data;
            open_status = typeof data.open_status== "undefined" ? AviviD.open_status : data.open_status;
            z_item = typeof data.z_item == "undefined" ? AviviD.config.z_item : data.z_item;
            // console.log('change z-index to '+z_item);
            // $('#avividai_recommend_iframe').css({"z-index": z_item});
            AviviD.open_status = open_status;
            if (open_status == 0 || open_status == -1) {
                result = AviviD.animation_promise('close');
                AviviD.open_status = result.open_status;
                result.promise.done( () => {
                    AviviD.transmit_to_iframe(AviviD.open_status); // set css after animation is finished
                    $('#avividai_recommend_iframe').css({"z-index": AviviD.config.z_close});
                    $('#avivid_iframe_handle').css({"z-index": parseInt(AviviD.config.z_close)+1});
                }); 
            }            
            else if (open_status == 3) {
                $('#avividai_recommend_iframe').css({"z-index": z_item});
            }

        });
        //// show samll div to toggle, open_status=0, scroll up (two version, right and bottom)
        AviviD.css_close_show_iframe = function() {
            if (AviviD.config.model == 'right') {
                $('#avividai_recommend_iframe').css({display:'block', 'margin-left': '', left: '90vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw', "z-index": AviviD.config.z_close}); // required
                $('#avivid_iframe_handle').css({display:'block', 'margin-left': '', left: '90vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw', "z-index": parseInt(AviviD.config.z_close)+1}); // required
            } else {
                $('#avividai_recommend_iframe').css({display:'block', top:'', bottom: '-95vh', height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw', "z-index": AviviD.config.z_close});
                $('#avivid_iframe_handle').css({display:'block', top:'', bottom: '-95vh', height: '100vh', width: '100vw', left: 0, 'border-radius': '1vw', "z-index": parseInt(AviviD.config.z_close)+1});
            }
        }
        //// hidden samll div to toggle, open_status=0, scroll up (two version, right and bottom)
        AviviD.css_close_hide_iframe = function() {
            if (AviviD.config.model == 'right') {
                $('#avividai_recommend_iframe').css({display:'block', 'margin-left': '', left: '100vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw', "z-index": AviviD.config.z_close}); // required
                $('#avivid_iframe_handle').css({display:'block', 'margin-left': '', left: '100vw', top:'40vh', bottom: 0, height: '100vh', width: '100vw', "z-index": parseInt(AviviD.config.z_close)+1}); // required
            } else {
                $('#avividai_recommend_iframe').css({display:'block', top:'', bottom:'-100vh', height: '100vh', width: '100vw', left: 0, "z-index": AviviD.config.z_close});
                $('#avivid_iframe_handle').css({display:'block', top:'', bottom:'-100vh', height: '100vh', width: '100vw', left: 0, "z-index": parseInt(AviviD.config.z_close)+1});
            }
        }
        //// fully open css
        AviviD.css_open_iframe = function() {
            AviviD.window_Y = window.outerHeight;
            var open_size = (AviviD.platform=='ios' ? AviviD.window_Y*1.03 : AviviD.window_Y*1.05);
            $('#avivid_iframe_handle').css({display:'block', 'margin-left': '', left: 0, top: 0, bottom: 0, height: open_size+'px', width: '100vw', "z-index": parseInt(AviviD.config.z_open)+1});
            $('#avivid_iframe_handle').css({display:'none'});
            $('#avividai_recommend_iframe').css({display:'block', 'margin-left': '', left: 0, top: 0, bottom: 0, height: open_size+'px', width: '100vw', "z-index": AviviD.config.z_open}); // required
        }

        //// listener to show or hide small iframe during scrolling
        AviviD.y_move = null;
        AviviD.y_initial = null;
        AviviD.y_final = null;
        AviviD.scroll_y_down = 0;
        $(window).on(AviviD.event.down_event, function(e1) {
            AviviD.window_Y = window.outerHeight;
            AviviD.y_initial = AviviD.get_Pos(e1, platform, 'y'); // get position after touch (bigger if move upward)
            AviviD.scroll_y_down = AviviD.get_scrollbar_position(); // update scrolling position
            AviviD.open_status = (typeof(AviviD.open_status)=='undefined'? 0 : AviviD.open_status);
            AviviD.y_move = 0; // initialize to prevent click in bottom to open
            // console.log(" $(window.parent).on('touchstart'), y_initial: "+AviviD.y_initial+', open_status: '+ AviviD.open_status);
            $(window).on(AviviD.event.move_event, function(e2) {
                AviviD.platform!='ios'? AviviD.set_scrollable('disable') : '', // confirm to disable scrolling, don't use this in ios
                AviviD.scroll_height = document.body.scrollHeight; // update scroll height to ensure get correct scrollHeight
                AviviD.window_Y = window.outerHeight; // update window size of y
                AviviD.scroll_y = AviviD.get_scrollbar_position(); // update scrolling position
                AviviD.y_final = AviviD.get_Pos(e2, platform, 'y'); // (smaller) if move to the top
                // AviviD.y_move = (AviviD.y_initial - AviviD.y_final)/AviviD.y_initial*AviviD.window_Y;
                AviviD.y_move = (AviviD.y_initial - AviviD.y_final);
            });
        });
        //// check whether in the bottom
        setInterval( () => {
            // AviviD.scroll_y = $(document).scrollTop();
            setTimeout( () => {
                AviviD.scroll_y = $(document).scrollTop();
            }, 500);
            if (AviviD.is_in_bottom()) { // when in the bottom 
                if (AviviD.open_status == -1 || AviviD.open_status == 0) {
                    AviviD.css_close_show_iframe();
                    AviviD.open_status == 4
                    // console.log('in the bottom, show div');
                }
            }
            else if (AviviD.scroll_y == $(document).scrollTop()) { // not in bottom and stop scrolling
                bottom = -parseInt($('#avividai_recommend_iframe').css('bottom'))
                if (AviviD.open_status == 0 && bottom != AviviD.window_Y) { // if close or already close, then hidden div                                   
                    if (AviviD.config.model == 'right') {
                        promise = $.when(
                            $('#avividai_recommend_iframe').animate({'left': '100vw'}, 500).promise(),
                            $('#avivid_iframe_handle').animate({'left': '100vw'}, 500).promise()
                        )                            
                        .done( () => {
                            // console.log('already hide right div!!!!!!!!!111');
                            AviviD.open_status = -1;
                        })
                    } else {
                        promise = $.when(                                        
                            $('#avividai_recommend_iframe').animate({bottom: '-100vh'}, 500).promise(),
                            $('#avivid_iframe_handle').animate({bottom: '-100vh'}, 500).promise()
                        )
                        .done( () => {
                            // console.log('already hide div!!!!!!!!!111');
                            AviviD.open_status = -1;
                        })
                    }
                }
            }
            // console.log('setInterval, scroll_y: '+ AviviD.scroll_y+'scroll now: '+ $(document).scrollTop()+'open_status: '+AviviD.open_status);
        }, 2000);
        //// scroll down to show, scroll up to hide
        setInterval( () => {
            if (!AviviD.is_in_bottom()) {
                if ($(document).scrollTop() > AviviD.scroll_y && AviviD.open_status < 1) { // scroll down
                    AviviD.css_close_show_iframe();
                    AviviD.open_status = 0;
                    AviviD.transmit_to_iframe(AviviD.open_status);
                } else if ($(document).scrollTop() < AviviD.scroll_y && AviviD.open_status < 1) { // scroll up
                    AviviD.css_close_hide_iframe();
                    AviviD.open_status = -1;
                    AviviD.transmit_to_iframe(AviviD.open_status);
                } else { // to rescue stuck-window
                    bottom = parseInt($('#avividai_recommend_iframe').css('bottom').split('px')[0])
                    if (bottom == 0 && AviviD.open_status != 3) {
                        AviviD.transmit_to_iframe(2);
                    }
                }
            }
            else {
                AviviD.transmit_to_iframe(AviviD.open_status); // confirm status
            }
        }, 500)
        //// mouseup (touchend) event, to control open at the bottom
        $(window).on(AviviD.event.up_event, function(e) {
            let criteria = AviviD.window_Y/10; // at the bottom and move 1/10 => fully open
            AviviD.scroll_y = $(document).scrollTop();      
            if (AviviD.scroll_y_down + AviviD.window_Y >= 0.98*AviviD.scroll_height && AviviD.y_move > criteria) { // at the bottom and move_scroll upward => open iframe               
                // console.log('parent window, success to open, y_move: '+AviviD.y_move+', criteria: '+ criteria); 
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
            AviviD.window_Y = window.outerHeight;
            AviviD.Pos_move_release = 0;
            AviviD.Pos_click = AviviD.get_Pos(e1);
            // console.log('mousedown ,open status: '+ AviviD.open_status+', Pos_click: '+AviviD.Pos_click);
            if(AviviD.model == 'bottom') {
                $('#avivid_iframe_handle').on(AviviD.event.move_event, function(e2) { // move event listener
                    AviviD.Pos_move_release = AviviD.get_Pos(e2); // update PosY_move_release only when mouse is moving
                    AviviD.Pos_click = AviviD.Pos_click > AviviD.window_Y? AviviD.window_Y : AviviD.Pos_click;
                    AviviD.distance_move = AviviD.Pos_click - AviviD.Pos_move_release + 0.1*AviviD.window_Y; // add 10% window_Y
                    // console.log('move distance(+up, -down): '+AviviD.distance_move+' Pos_click: '+AviviD.Pos_click+' Pos_move_release: '+AviviD.Pos_move_release+' open_status: '+AviviD.open_status);
                    if (AviviD.open_status == 0 || AviviD.open_status == 4 || AviviD.open_status == 5 && AviviD.platform != 'ios') { // now is close, to open, adjust height along with mousemove
                        AviviD.platform!='ios'?AviviD.set_scrollable('disable') : ''; // lock parent window scrolling bar to prevent bug
                        // console.log('distance_move is '+ AviviD.distance_move+', size: '+(-AviviD.window_Y + Math.max(AviviD.distance_move, 50)));
                        min_size = AviviD.window_Y*0.9 - AviviD.Pos_click; // you can drag everywhere and prevent restore to initial size
                        iframe_size = Math.max(AviviD.distance_move, 50);
                        // console.log('AviviD.Pos_click: '+AviviD.Pos_click+', min_size: '+min_size+', distance_move is '+ AviviD.distance_move+', size: '+iframe_size);
                        $('#avividai_recommend_iframe').css({bottom: -AviviD.window_Y + iframe_size});
                        $('#avivid_iframe_handle').css({bottom: -AviviD.window_Y + iframe_size});
                        AviviD.open_status = 5;
                    }
                });
            }
        });
        //// mouseup, touchend event, to do animation
        $('#avivid_iframe_handle').on(AviviD.event.up_event, function(e) {
            iframe_size = AviviD.get_iframe_size();
            // console.log('touchup, iframe_size: '+iframe_size+', criteria: '+AviviD.criteria);
            result = (iframe_size > AviviD.criteria || AviviD.Pos_move_release == 0)? AviviD.animation_promise('open') : AviviD.animation_promise('close');
            AviviD.open_status = result.open_status;
            result.promise.done( () => {
                AviviD.transmit_to_iframe(AviviD.open_status); // set css after animation is finished
            });
        });
        //// outside function, use for dynamically adjusting height of item page
        setInterval( () => {
            var window_Y_new = AviviD.platform=='ios'? window.innerHeight : window.outerHeight; // update window_Y
            if ((AviviD.open_status == 2 || AviviD.open_status == 3) && AviviD.window_Y != window_Y_new) { // when height changed
                console.log('window size in parent7: '+AviviD.window_Y+', window_Y_new: '+window_Y_new);
                AviviD.transmit_to_iframe(AviviD.open_status); // update window_Y of iframe
                AviviD.window_Y = AviviD.platform=='ios'? window.innerHeight : window.outerHeight; // update window_Y
                let open_iframe_size = (AviviD.platform=='ios' ? AviviD.window_Y*1.03 : AviviD.window_Y*1.05);
                $('#avividai_recommend_iframe').css({height: open_iframe_size+'px'}); //
                // console.log('window size in parent5: '+AviviD.window_Y+', window_Y_new: '+window_Y_new+', adjust size to: '+open_iframe_size);
            }
        }, 2000);
        //// listener to execute back button in outside       
        window.history.pushState(null, null, window.top.location.pathname + window.top.location.search);
        window.addEventListener('popstate', function(e) {
            // console.log('outside popstate: open_status:'+AviviD.open_status)
            if (AviviD.open_status == 1 || AviviD.open_status == 2) { // in main iframe page               
                e.preventDefault();
                console.log('outside lock back button, half-open or fully-open, open_status: '+AviviD.open_status);
                window.history.pushState(null, null, window.top.location.pathname + window.top.location.search);
            } else if (AviviD.open_status == 3 || typeof AviviD.open_status == "undefined") { // in item-page, go to last page               
                e.preventDefault();
                console.log('outside lock back button, in item-page, open_status: '+AviviD.open_status);
                AviviD.open_status = 2;
                AviviD.transmit_to_iframe(AviviD.open_status);
                window.history.pushState(null, null, window.top.location.pathname + window.top.location.search);
            } else {
                e.preventDefault();
                console.log('outside do nothing, back, open_status: '+AviviD.open_status);
                history.go(-2); // go back twice
                // do nothing
            }
        });
    });

}