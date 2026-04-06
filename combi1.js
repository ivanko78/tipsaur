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
// NAVIGACIJA
/*document.querySelectorAll("#liga-drop a, #liga-dropp a").forEach(link => {
    link.addEventListener("click", function() {
        var dropId = this.getAttribute("class");
        setCookie("liga", dropId, "10");
    });
});*/
// SIDENAV
const sidenav = document.getElementById("mySidenav");
function createSidenavContent() {
  sidenav.innerHTML = `...`; // (tvoj postojeći HTML)
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  dropdownBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      this.querySelector(".caret").classList.toggle("toggle");
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  });
}
function openNav1() {
  if (!sidenav.innerHTML) {
    createSidenavContent();
  }
  sidenav.style.width = "280px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function submenu() {
    document.getElementById("submenu").classList.toggle("visa");
}
// LIGA DROPDOWN
const ligaBtn = document.getElementById("ligaBtn");
function createLigaDrop() {
  const ligaDrop = document.createElement("div");
  ligaDrop.id = "liga-dropp";
  ligaDrop.className = "menu-content liga-content";
  ligaDrop.innerHTML = `...`; // (tvoj postojeći HTML)
  ligaBtn.appendChild(ligaDrop);
}
document.getElementById("menuBtn").addEventListener("click", function() {
    const caret = this.querySelector(".caret");
    if (caret) {
        caret.classList.toggle("toggle");
        const parent = this.offsetParent || this.parentElement;
        if (caret.classList.contains("toggle")) {
            parent.style.zIndex = "20";
        } else {
            parent.style.zIndex = "1";
        }
    }
});
function ligaDrop() {
  if (!document.getElementById("liga-dropp")) {
    createLigaDrop();
  }
  document.getElementById("liga-dropp").classList.toggle("visa");
  ligaBtn.querySelector(".caret").classList.toggle("toggle");
  
  const navi = document.getElementById("navi");
  if (ligaBtn.querySelector(".caret").classList.contains("toggle")) {
    navi.style.zIndex = "20";
  } else if (!menuBtn.querySelector(".caret").classList.contains("toggle")) {
    navi.style.zIndex = "1";
  }
}
// INTERSECTION OBSERVER ZA FLAGOVE
document.addEventListener('DOMContentLoaded', function() {
  if ('IntersectionObserver' in window) {
    const flagObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const flagElement = entry.target;
          const flagCode = flagElement.getAttribute('data-flag');
          if (flagCode && flagCode.trim() !== '') {
            flagElement.classList.add(flagCode);
          }
          observer.unobserve(flagElement);
        }
      });
    }, { rootMargin: '100px' });
    
    document.querySelectorAll('[data-flag]').forEach(flag => {
      flagObserver.observe(flag);
    });
  } else {
    document.querySelectorAll('[data-flag]').forEach(flag => {
      const flagCode = flag.getAttribute('data-flag');
      if (flagCode && flagCode.trim() !== '') {
        flag.classList.add(flagCode);
      }
    });
  }
});
// STICKY BANNER
function initSimpleStickyBanner() {
    const rightAside = document.querySelector('.right');
    if (!rightAside || window.getComputedStyle(rightAside).display === 'none') {
        return;
    }
    
    const secondBanner = document.querySelector('.banner-item:last-child');
    const firstBanner = document.querySelector('.banner-item:first-child');
    
    if (!secondBanner || !firstBanner) return;
    
    let firstBannerHeight = 0;
    let bannerTop = 0;
    let isFixed = false;
    
    function measureBanners() {
        firstBannerHeight = firstBanner.offsetHeight;
        const rect = firstBanner.getBoundingClientRect();
        bannerTop = rect.top + window.scrollY;
    }
    
    function handleScroll() {
        const scrollY = window.scrollY;
        const secondBannerTop = bannerTop + firstBannerHeight;
        const shouldBeFixed = scrollY >= secondBannerTop;
        
        if (shouldBeFixed && !isFixed) {
            secondBanner.style.position = 'fixed';
            secondBanner.style.top = '0';
            isFixed = true;
        } else if (!shouldBeFixed && isFixed) {
            secondBanner.style.position = 'absolute';
            secondBanner.style.top = firstBannerHeight + 'px';
            isFixed = false;
        }
    }
    
    setTimeout(() => {
        measureBanners();
        handleScroll();
    }, 200);
    
    window.addEventListener('scroll', () => {
        requestAnimationFrame(handleScroll);
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 800) {
            measureBanners();
            handleScroll();
        } else {
            secondBanner.style.position = '';
            secondBanner.style.top = '';
            isFixed = false;
        }
    });
}
// SCROLL ZA TOP DUGME
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
            document.getElementById("toTop").style.display = "block";
        } else {
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// DROPDOWN FUNKCIJE ZA KALENDAR
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  // Zatvaranje kalendar dropdown-a
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  // Zatvaranje sub-content menija
  if (!event.target.matches('#menuBtn')) {
    var dropdowns2 = document.getElementsByClassName("sub-content");
    var menuBtn = document.getElementById("menuBtn");
    
    var caret = menuBtn.querySelector(".caret");
    if (caret && caret.classList.contains("toggle")) {
      caret.classList.remove("toggle");
      var ligaBtnCaret = document.getElementById("ligaBtn").querySelector(".caret");
      var navi = document.getElementById("navi");
      
      if (ligaBtnCaret && ligaBtnCaret.classList.contains("toggle")) {
        navi.style.zIndex = "20";
      } else {
        navi.style.zIndex = "1";
      }
    }
    for (var a = 0; a < dropdowns2.length; a++) {
      var openDropdown2 = dropdowns2[a];
      if (openDropdown2.classList.contains('visa')) {
        openDropdown2.classList.remove('visa');
      }
    }
  }
  // Zatvaranje liga-content menija
  if (!event.target.matches('#ligaBtn')) {
    var dropdowns3 = document.getElementsByClassName('liga-content');
    var ligaBtn = document.getElementById("ligaBtn");
    
    var ligaCaret = ligaBtn.querySelector(".caret");
    if (ligaCaret && ligaCaret.classList.contains("toggle")) {
      ligaCaret.classList.remove("toggle");
      var menuBtnCaret = document.getElementById("menuBtn").querySelector(".caret");
      var navi = document.getElementById("navi");
      
      if (menuBtnCaret && menuBtnCaret.classList.contains("toggle")) {
        navi.style.zIndex = "20";
      } else {
        navi.style.zIndex = "1";
      }
    }
    for (var e = 0; e < dropdowns3.length; e++) {
      var openDropdown3 = dropdowns3[e];
      if (openDropdown3.classList.contains('visa')) {
        openDropdown3.classList.remove('visa');
      }
    }
  }
  // Zatvaranje sidenav-a
  if (!event.target.matches('.menuBtn, .dropdown-btn, .caret, #mySidenav')) {
    var dropdowns1 = document.getElementsByClassName("sidenav");
    for (var u = 0; u < dropdowns1.length; u++) {
      var openDropdown1 = dropdowns1[u];
      if (openDropdown1.style.width === "280px") {
        openDropdown1.style.width = "0";
      }
    }
  }
};
const d = new Date();
var diff = d.getTimezoneOffset();
setCookie("razlika", diff, "10");
// INICIJALIZACIJA
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSimpleStickyBanner);
} else {
    initSimpleStickyBanner();
}
