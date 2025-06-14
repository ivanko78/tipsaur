//navigacija
document.querySelectorAll("#liga-drop a, #liga-dropp a").forEach(link => {
    link.addEventListener("click", function() {
        var dropId = this.getAttribute("class");
        setCookie("liga", dropId, "10");
    });
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
document.querySelectorAll(".dropdown-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const caret = this.querySelector(".caret");
        if (caret) {
            caret.classList.toggle("toggle");
        }
    });
});
for (let i = 0; i < dropdown.length; i++) {
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
document.getElementById("menuBtn").addEventListener("click", function() {
    const caret = this.querySelector(".caret");
    if (caret) {
        caret.classList.toggle("toggle");
        
        const parent = this.closest("[style*='z-index']") || this.parentElement;
        if (caret.classList.contains("toggle")) {
            parent.style.zIndex = "20";
        } else {
            parent.style.zIndex = "1";
        }
    }
});
document.getElementById("ligaBtn").addEventListener("click", function() {
    const caret = this.querySelector(".caret");
    if (caret) {
        caret.classList.toggle("toggle");
        
        const parent = this.closest("[style*='z-index']") || this.parentElement;
        if (caret.classList.contains("toggle")) {
            parent.style.zIndex = "20";
        } else {
            parent.style.zIndex = "1";
        }
    }
});

//share
document.querySelector(".st-toggle").addEventListener("click", function() {
    document.getElementById("st-2").classList.toggle("st-hidden");
});
var browser = navigator.userAgent;
const version = browser.split("/");
const verzija = (version[3].split("."))[0];
if (version[3].endsWith("Safari") && !(version[2].endsWith("Chrome"))) {
    if (Number(verzija) < 14) {
        const spans = document.querySelectorAll("#st-2 .st-btn span");
        spans.forEach(span => {
            span.style.top = "-50px";
        });
    }
}
document.querySelectorAll("#st-2 .st-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        var redirects, count_url, share_url, url, short_url, title, image, username;
        var st = window;
        var network = this.getAttribute("data-network");
        st.href = document.location.href;
        count_url = count_url || url || st.href;
        share_url = share_url || short_url || url || st.href;
        if (url == null) { url = count_url; }
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
                // Ignore error
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
        if (title == null) { title = st.getTitle(); }
        st.getImage = function() {
            return st.getMeta(['og:image:secure_url', 'og:image', 'twitter:image']);
        };
        if (image == null) { image = st.getImage(); }
        const is_ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const is_android = /Android/i.test(navigator.userAgent);
        if (is_ios == true || is_android == true) {
            st.mobile = true;
        }
        st.getWindowSize = function() {
            var body = document.body, documentElement = document.documentElement;
            var innerHeight = window.innerHeight, innerWidth = window.innerWidth;
            return {
                height: innerHeight || documentElement.clientHeight || body.clientHeight,
                width: innerWidth || documentElement.clientWidth || body.clientWidth
            };
        };
        st.qs = function(params) {
            var k, v;
            return Object.keys(params).map(function(k) {
                v = params[k];
                if (v != null) {
                    return k + "=" + (encodeURIComponent(v));
                }
            }).filter(Boolean).join('&');
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
        if (!url) { return; }
        if (st.mobile) {
            return window.open(redirects[network], '_blank');
        } else if (url.indexOf('mailto:') > -1 || url.indexOf('viber') > -1) {
            return document.location = url;
        } else {
            const wh = st.getWindowSize().height;
            const ww = st.getWindowSize().width;
            const h = Math.min(600, 0.6 * wh);
            const w = Math.min(800, 0.8 * ww);
            return window.open(redirects[network], '', ["height=" + h, "left=" + ((ww - w) / 2), "top=" + ((wh - h) / 2), "width=" + w, 'status=1', 'toolbar=0'].join(','));
        }
    });
});

function getWindowSize() {
    var body = document.body, documentElement = document.documentElement;
    var innerHeight = window.innerHeight, innerWidth = window.innerWidth;
    return {
        height: innerHeight || documentElement.clientHeight || body.clientHeight,
        width: innerWidth || documentElement.clientWidth || body.clientWidth
    };
}
var winWidth = getWindowSize().width;
if (winWidth < 1024) {
    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("st-2").style.bottom = "-50px";
            document.getElementById("toTop").style.display = "block";
        } else {
            document.getElementById("st-2").style.bottom = "0";
            document.getElementById("toTop").style.display = "none";
        }
    };
}
if (winWidth > 1024) {
    window.onscroll = function() {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.getElementById("toTop").style.display = "block";
        } else {
            document.getElementById("toTop").style.display = "none";
        }
    };
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}