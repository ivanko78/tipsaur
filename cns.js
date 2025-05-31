//cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function eraseCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
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
    return "";
}


//navigacija
$("#liga-drop").find("a").click(function(){
    var dropId = $(this).attr("class");
    setCookie("liga", dropId, "10");
  });
$("#liga-dropp").find("a").click(function(){
    var dropId = $(this).attr("class");
    setCookie("liga", dropId, "10");
  });

//Sidenav  
function openNav() {
  document.getElementById("mySidenav").style.width = "280px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Sidenav - dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

$(".dropdown-btn").click(function(){
    $(this).find(".caret").toggleClass("toggle");
  });

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function submenu() {
  document.getElementById("submenu").classList.toggle("visa");
}

function ligaDrop() {
  document.getElementById("liga-dropp").classList.toggle("visa");
}

$("#menuBtn").click(function(){
    
    $(this).find(".caret").toggleClass("toggle");
    
    if ($(this).find(".caret").hasClass("toggle")) {
        $(this).offsetParent().css({"z-index": "20"});
    } else {
        $(this).offsetParent().css({"z-index": "1"});
    }
});

$("#ligaBtn").click(function(){

    $(this).find(".caret").toggleClass("toggle");
    
    if ($(this).find(".caret").hasClass("toggle")) {
        $(this).offsetParent().css({"z-index": "20"});
    } else {
        $(this).offsetParent().css({"z-index": "1"});
    }
});

//share

$(".st-toggle").click(function(){
   $("#st-2").toggleClass("st-hidden");
  });
  
  var browser = navigator.userAgent;
  const version = browser.split("/");
  const verzija = (version[3].split("."))[0];
  if (version[3].endsWith("Safari") && !(version[2].endsWith("Chrome"))) {
    if (Number(verzija) < 14) {
        $("#st-2").find(".st-btn").find("span").css({"top": "-50px"});
    }
}

$("#st-2").find(".st-btn").click(function(){
    var redirects, count_url, share_url, url, short_url, title, image, username;
    var st = window;
    var network = $(this).attr("data-network");

    st.href = document.location.href;
    count_url = count_url || url || st.href;
    share_url = share_url || short_url || url || st.href;
    if (url == null) {
      url = count_url;
    }
    
    st.meta = (function() {
    var el, i, item, j, k, key, len, len1, offer, ref, ref1, ref2, v;
    item = {};
    ref = document.querySelectorAll("meta,[itemprop]");
    for (i = 0, len = ref.length; i < len; i++) {
      el = ref[i];
      key = el.getAttribute('property') || el.getAttribute('name') || el.getAttribute('itemprop');
      if (key) {
        if (item[key] == null) {
          item[key] = el.getAttribute('content') || el.getAttribute("href") || el.innerText;
        }
      }
    }
    try {
      if (st.ldjson) {
        ref1 = st.ldjson;
        for (k in ref1) {
          v = ref1[k];
          if (item[k] == null) {
            item[k] = v;
          }
        }
        if (st.ldjson.offers) {
          ref2 = st.ldjson.offers;
          for (j = 0, len1 = ref2.length; j < len1; j++) {
            offer = ref2[j];
            for (k in offer) {
              v = offer[k];
              if (item[k] == null) {
                item[k] = v;
              }
            }
          }
        }
      }
    } catch (error1) {

    }
    return item;
  })();
  
    st.getMeta = function(types) {
    var i, len, type;
    for (i = 0, len = types.length; i < len; i++) {
      type = types[i];
      if ((st.meta[type] != null) && typeof st.meta[type] !== 'object') {
        return "" + st.meta[type];
      }
    }
    return '';
  };
    st.getTitle = function() {
    return st.getMeta(['og:title', 'twitter:title']) || document.title;
  };
    if (title == null) {
      title = st.getTitle();
    }
    
    st.getImage = function() {
    return st.getMeta(['og:image:secure_url', 'og:image', 'twitter:image']);
  };
    if (image == null) {
      image = st.getImage();
    }
    
    is_ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
    is_android = /Android/i.test(navigator.userAgent);
    if (is_ios == true || is_android == true) {
        st.mobile = true;
    }
    
    st.getWindowSize = function() {
    var body, documentElement, innerHeight, innerWidth;
    body = document.body, documentElement = document.documentElement;
    innerHeight = window.innerHeight, innerWidth = window.innerWidth;
    return {
      height: innerHeight || documentElement.clientHeight || body.clientHeight,
      width: innerWidth || documentElement.clientWidth || body.clientWidth
    };
  };
    
  
    st.qs = function(params) {
    var k, v;
    return ((function() {
      var results;
      results = [];
      for (k in params) {
        v = params[k];
        if (v != null) {
          results.push(k + "=" + (encodeURIComponent(v)));
        }
      }
      return results;
    })()).join('&');
  };

  
    redirects = {
    facebook: "https://www.facebook.com/sharer.php?" + st.qs({
        t: title,
        u: share_url
      }),
    pinterest: "https://pinterest.com/pin/create/button/?" + st.qs({
        description: title,
        media: image,
        url: share_url
      }),
    sms: "sms:" + (is_ios ? '&' : '?') + "body=" + (encodeURIComponent(share_url)),
    snapchat: "https://snapchat.com/scan?" + st.qs({
        attachmentUrl: share_url,
        utm_source: 'sharethis'
      }),
    twitter: "https://twitter.com/intent/tweet?" + st.qs({
        text: title || description,
        url: share_url,
        via: username
      }),
      telegram: "https://t.me/share/url?" + st.qs({
        url: share_url,
        text: title,
        to: ''
      }),
    whatsapp: (!st.mobile ? "https://web.whatsapp.com/send?" : "whatsapp://send?") + st.qs({
        text: share_url
      })
      };

    if (!url) {
      return;
    }
    
    if (st.mobile) {
      return window.open(redirects[network], '_blank');
    } else if (url.indexOf('mailto:') > -1 || url.indexOf('viber') > -1) {
      return document.location = url;
    } else {
      wh = st.getWindowSize().height;
      ww = st.getWindowSize().width;
      h = Math.min(600, 0.6 * wh);
      w = Math.min(800, 0.8 * ww);
      return window.open(redirects[network], '', ["height=" + h, "left=" + ((ww - w) / 2), "top=" + ((wh - h) / 2), "width=" + w, 'status=1', 'toolbar=0'].join(','));
    }

  });
  
  getWindowSize = function() {
    var body, documentElement, innerHeight, innerWidth;
    body = document.body, documentElement = document.documentElement;
    innerHeight = window.innerHeight, innerWidth = window.innerWidth;
    return {
      height: innerHeight || documentElement.clientHeight || body.clientHeight,
      width: innerWidth || documentElement.clientWidth || body.clientWidth
    };
  };
  
  var winWidth = window.getWindowSize().width;
  
  if (winWidth < 1024) {
    
    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("st-2").style.bottom = "-50px";
            document.getElementById("toTop").style.display = "block";
            } else {
             document.getElementById("st-2").style.bottom = "0";
             document.getElementById("toTop").style.display = "none";
            }
        }
    }
    
if (winWidth > 1024) {
    
    window.onscroll = function() {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.getElementById("toTop").style.display = "block";
            } else {
             document.getElementById("toTop").style.display = "none";
            }
        }
    }

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
