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
document.querySelectorAll("#liga-drop a, #liga-dropp a").forEach(link => {
    link.addEventListener("click", function() {
        var dropId = this.getAttribute("class");
        setCookie("liga", dropId, "10");
    });
});
//Sidenav  
const sidenav = document.getElementById("mySidenav");
function createSidenavContent() {
  sidenav.innerHTML = `
    <div style="display:inline">
        <img src="https://cdn.jsdelivr.net/gh/ivanko78/tipsaur@main/logo4.svg" alt="Free soccer betting predictions" loading="lazy" style="display:inline-block;width:45px;height:45px;border-radius:5px;margin-left:10px">
        <p style="display:inline-block;color:#f56c08;margin-left:10px;font-family:'Lato', sans-serif;font-size:21px;font-weight:100;letter-spacing:1px;vertical-align:10px">tipsaur.com</p>
    </div>
    <span style="padding: 8px 8px 8px 32px" class="closebtn" onclick="closeNav()">&times;</span>
    <hr>
    <button class="dropdown-btn">Free tips
        <span class="caret">&#9660;</span>
    </button>
		<div class="dropdown-container">
		    <a href="https://www.tipsaur.com/1x2.php">Tips 1X2</a>
		    <a href="https://www.tipsaur.com/over25.php">Tips Over/Under 2,5</a>
		    <a href="https://www.tipsaur.com/over35.php">Tips Over/Under 3,5</a>
		    <a href="https://www.tipsaur.com/btts.php">Tips BTTS Yes/No</a>
		    <a href="https://www.tipsaur.com/score.php">Correct score tips</a>
		    <a href="https://www.tipsaur.com/accu.php">Accumulated 1x2</a>
		    <a href="https://www.tipsaur.com/accu1.php">Accumulated random</a>
		    <a href="https://www.tipsaur.com/upcom.php">Upcoming matches</a>
		    <a href="https://www.tipsaur.com/football-live-score.php">Livescore matches</a>
		</div>
		<hr>
	<button class="dropdown-btn">Leagues
        <span class="caret">&#9660;</span>
    </button>
		<div id="liga-drop" class="dropdown-container">
		    <a class="AR1" href="https://www.tipsaur.com/league/liga-profesional-argentina.php"><i style="margin-right:10px" class="flag-icon flag-icon-ar"></i>Liga Profesional</a>
		    <a class="CO1" href="https://www.tipsaur.com/league/primera-a-colombia.php"><i style="margin-right:10px" class="flag-icon flag-icon-co"></i>Primera A</a>
		    <a class="EN1" href="https://www.tipsaur.com/league/premier-league-england.php"><i style="margin-right:10px" class="flag-icon flag-icon-gb-eng"></i>Premier League</a>
		    <a class="DE1" href="https://www.tipsaur.com/league/bundesliga-germany.php"><i style="margin-right:10px" class="flag-icon flag-icon-de"></i>Bundesliga</a>
		    <a class="ES1" href="https://www.tipsaur.com/league/laliga-1-spain.php"><i style="margin-right:10px" class="flag-icon flag-icon-es"></i>La Liga</a>
		    <a class="IT1" href="https://www.tipsaur.com/league/serie-a-italy.php"><i style="margin-right:10px" class="flag-icon flag-icon-it"></i>Serie A</a>
		    <a class="FR1" href="https://www.tipsaur.com/league/ligue-1-france.php"><i style="margin-right:10px" class="flag-icon flag-icon-fr"></i>Ligue 1</a>
		    <a class="NL1" href="https://www.tipsaur.com/league/eredivisie-netherlands.php"><i style="margin-right:10px" class="flag-icon flag-icon-nl"></i>Eredivisie</a>
		    <a class="PT1" href="https://www.tipsaur.com/league/liga-portugal-portugal.php"><i style="margin-right:10px" class="flag-icon flag-icon-pt"></i>Liga Portugal</a>
		    <a class="BE1" href="https://www.tipsaur.com/league/jupiler-pro-league-belgium.php"><i style="margin-right:10px" class="flag-icon flag-icon-be"></i>Jupiler Pro League</a>
		    <a href="https://www.tipsaur.com/league.php">All leagues</a>
		</div>
		<hr>
	<a href="https://www.tipsaur.com/blog/football-betting-school/">Football betting school</a><hr>
    <a href="https://www.tipsaur.com/about_us.php">About us</a><hr>
    <a href="https://www.tipsaur.com/disc.php">Disclaimer</a><hr>
    <a href="https://www.tipsaur.com/cookie_policy.php">Cookie policy</a><hr>
    <a href="https://www.tipsaur.com/faq.php">FAQ</a><hr>
    <p style="font-size: 17px;font-family: 'Lato', sans-serif;color: white;padding: 8px 8px 15px 32px;text-decoration: none;">Follow us:</p>
    <div class="text-center mb-5 btn-rounds">
        <a href="https://x.com/tipsaur" target="_blank" rel="noopener" class="text-white me-4 btn-round" style="display:inline-block;padding:0;text-align:center;background-color: #ff0000;">
          <img src="https://cdn.jsdelivr.net/gh/ivanko78/tipsaur@main/youtube.svg" alt="youtube social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
        </a>
        <a href="https://www.facebook.com/profile.php?id=100088873696552" target="_blank" rel="noopener" class="text-white me-4 btn-round btn-face" style="display:inline-block;padding:0;text-align:center;background-color: #3b5998;">
          <img src="https://cdn.jsdelivr.net/gh/ivanko78/tipsaur@main/facebook.svg" alt="facebook social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
        </a>
        <a href="https://www.instagram.com/tipsaur/" target="_blank" rel="noopener" class="text-white me-4 btn-round btn-inst" style="display:inline-block;padding:0;text-align:center;background-color: #ac2bac;">
          <img src="https://cdn.jsdelivr.net/gh/ivanko78/tipsaur@main/instagram.svg" alt="instagram social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
        </a>
        <a href="https://x.com/tipsaur" target="_blank" rel="noopener" class="text-white me-4 btn-round btn-twit" style="display:inline-block;padding:0;text-align:center;border: solid 1px white;background-color: black;">
          <img src="https://cdn.jsdelivr.net/gh/ivanko78/tipsaur@main/twitter.svg" alt="twitter social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
        </a>
        <a href="https://x.com/tipsaur" target="_blank" rel="noopener" class="me-4 btn-round" style="display:inline-block;padding:0;text-align:center;border: solid 1px white;background-color: black;">
            <img src="https://cdn.jsdelivr.net/gh/ivanko78/tipsaur@main/tiktok1.svg" alt="tiktok social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
        </a>
      </div>
  `;
// Initialize dropdown buttons in sidenav
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
// Create the league dropdown content
const ligaBtn = document.getElementById("ligaBtn");
function createLigaDrop() {
  const ligaDrop = document.createElement("div");
  ligaDrop.id = "liga-dropp";
  ligaDrop.className = "menu-content liga-content";
  ligaDrop.innerHTML = `
    <a class="AR1" href="https://www.tipsaur.com/league/liga-profesional-argentina.php"><i style="margin-right:10px" class="flag-icon flag-icon-ar"></i>Liga Profesional</a>
    <a class="EN1" href="https://www.tipsaur.com/league/premier-league-england.php"><i style="margin-right:10px" class="flag-icon flag-icon-gb-eng"></i>Premier League</a>
    <a class="DE1" href="https://www.tipsaur.com/league/bundesliga-germany.php"><i style="margin-right:10px" class="flag-icon flag-icon-de"></i>Bundesliga</a>
    <a class="CO1" href="https://www.tipsaur.com/league/primera-a-colombia.php"><i style="margin-right:10px" class="flag-icon flag-icon-co"></i>Primera A</a>
    <a class="ES1" href="https://www.tipsaur.com/league/laliga-1-spain.php"><i style="margin-right:10px" class="flag-icon flag-icon-es"></i>La Liga</a>
    <a class="IT1" href="https://www.tipsaur.com/league/serie-a-italy.php"><i style="margin-right:10px" class="flag-icon flag-icon-it"></i>Serie A</a>
    <a class="FR1" href="https://www.tipsaur.com/league/ligue-1-france.php"><i style="margin-right:10px" class="flag-icon flag-icon-fr"></i>Ligue 1</a>
    <a class="NL1" href="https://www.tipsaur.com/league/eredivisie-netherlands.php"><i style="margin-right:10px" class="flag-icon flag-icon-nl"></i>Eredivisie</a>
    <a class="PT1" href="https://www.tipsaur.com/league/liga-portugal-portugal.php"><i style="margin-right:10px" class="flag-icon flag-icon-pt"></i>Liga Portugal</a>
    <a class="BE1" href="https://www.tipsaur.com/league/jupiler-pro-league-belgium.php"><i style="margin-right:10px" class="flag-icon flag-icon-be"></i>Jupiler Pro League</a>
    <a href="https://www.tipsaur.com/league.php">All leagues</a>
  `;
  ligaBtn.appendChild(ligaDrop);
}
// Navigation functions
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
/*function ligaDrop() {
    document.getElementById("liga-dropp").classList.toggle("visa");
}*/
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
/*document.getElementById("ligaBtn").addEventListener("click", function() {
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
});*/
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
    }, {
      rootMargin: '100px'
    });
    const flagElements = document.querySelectorAll('[data-flag]');
    flagElements.forEach(flag => {
      flagObserver.observe(flag);
    });
  } else {
    const flagElements = document.querySelectorAll('[data-flag]');
    flagElements.forEach(flag => {
      const flagCode = flag.getAttribute('data-flag');
      if (flagCode && flagCode.trim() !== '') {
        flag.classList.add(flagCode);
      }
    });
  }
});
// STICKY BANNER - SAMO AKO JE BANNER VIDLJIV
function initSimpleStickyBanner() {
    const rightAside = document.querySelector('.right');
    if (!rightAside || window.getComputedStyle(rightAside).display === 'none') {
        console.log('Banner nije vidljiv - sticky banner nije aktivan');
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
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSimpleStickyBanner);
} else {
    initSimpleStickyBanner();
}

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