// Cache DOM elements
const sidenav = document.getElementById("mySidenav");
const menuBtn = document.getElementById("menuBtn");
const ligaBtn = document.getElementById("ligaBtn");

// Create the sidenav content structure
function createSidenavContent() {
  sidenav.innerHTML = `
    <div style="display:inline">
        <img src="logo4.svg" style="display:inline-block;width:45px;height:45px;border-radius:5px;margin-left:10px" alt="Free soccer betting predictions - Free football betting tips" loading="lazy">
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
          <img src="static/images/youtube.svg" alt="youtube social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
        </a>
        <a href="https://www.facebook.com/profile.php?id=100088873696552" target="_blank" rel="noopener" class="text-white me-4 btn-round btn-face" style="display:inline-block;padding:0;text-align:center;background-color: #3b5998;">
          <img src="static/images/facebook.svg" alt="facebook social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
        </a>
        <a href="https://www.instagram.com/tipsaur/" target="_blank" rel="noopener" class="text-white me-4 btn-round btn-inst" style="display:inline-block;padding:0;text-align:center;background-color: #ac2bac;">
          <img src="static/images/instagram.svg" alt="instagram social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
        </a>
        <a href="https://twitter.com/tipsaur" target="_blank" rel="noopener" class="text-white me-4 btn-round btn-twit" style="display:inline-block;padding:0;text-align:center;border: solid 1px white;background-color: black;">
          <img src="static/images/twitter1.svg" alt="twitter social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
        </a>
        <a href="https://twitter.com/tipsaur" target="_blank" rel="noopener" class="me-4 btn-round" style="display:inline-block;padding:0;text-align:center;border: solid 1px white;background-color: black;">
            <img src="static/images/tiktok1.svg" alt="tiktok social media button" style="width:24px;height:24px;position:relative;top:10px" loading="lazy">
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

// Create the submenu content
function createSubmenu() {
  const submenu = document.createElement("div");
  submenu.id = "submenu";
  submenu.className = "menu-content sub-content";
  submenu.innerHTML = `
    <a href="https://www.tipsaur.com/1x2.php">Tips 1X2</a>
    <a href="https://www.tipsaur.com/over25.php">Over 2,5/ Under 2,5</a>
    <a href="https://www.tipsaur.com/over35.php">Over 3,5/ Under 3,5</a>
    <a href="https://www.tipsaur.com/btts.php">BTTS Yes/No</a>
    <a href="https://www.tipsaur.com/accu.php">Accumulated tips 1x2</a>
    <a href="https://www.tipsaur.com/accu1.php">Accumulated random</a>
    <a href="https://www.tipsaur.com/upcom.php">Upcoming matches</a>
    <a href="https://www.tipsaur.com/football-live-score.php">Livescore</a>
  `;
  menuBtn.appendChild(submenu);
}

// Create the league dropdown content
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
function openNav() {
  if (!sidenav.innerHTML) {
    createSidenavContent();
  }
  sidenav.style.width = "280px";
}

function closeNav() {
  sidenav.style.width = "0";
}

function submenu() {
  if (!document.getElementById("submenu")) {
    createSubmenu();
  }
  document.getElementById("submenu").classList.toggle("visa");
  menuBtn.querySelector(".caret").classList.toggle("toggle");
  
  const navi = document.getElementById("navi");
  if (menuBtn.querySelector(".caret").classList.contains("toggle")) {
    navi.style.zIndex = "20";
  } else if (!ligaBtn.querySelector(".caret").classList.contains("toggle")) {
    navi.style.zIndex = "1";
  }
}

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

// Close dropdowns when clicking outside
document.addEventListener("click", function(event) {
  // Close sidenav
  if (!event.target.closest("#mySidenav") && !event.target.matches('.menuBtn') && sidenav.style.width === "280px") {
    closeNav();
  }
  
  // Close submenu
  if (!event.target.closest("#menuBtn") && document.getElementById("submenu")?.classList.contains("visa")) {
    document.getElementById("submenu").classList.remove("visa");
    menuBtn.querySelector(".caret").classList.remove("toggle");
    if (!ligaBtn.querySelector(".caret").classList.contains("toggle")) {
      document.getElementById("navi").style.zIndex = "1";
    }
  }
  
  // Close league dropdown
  if (!event.target.closest("#ligaBtn") && document.getElementById("liga-dropp")?.classList.contains("visa")) {
    document.getElementById("liga-dropp").classList.remove("visa");
    ligaBtn.querySelector(".caret").classList.remove("toggle");
    if (!menuBtn.querySelector(".caret").classList.contains("toggle")) {
      document.getElementById("navi").style.zIndex = "1";
    }
  }
});

// Cookie functions (from your original code)
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Initialize event listeners for league clicks
document.addEventListener("DOMContentLoaded", function() {
  // This will be added when the elements are created dynamically
  document.addEventListener("click", function(event) {
    if (event.target.closest("#liga-drop a") || event.target.closest("#liga-dropp a")) {
      const dropId = event.target.closest("a").className;
      if (dropId) setCookie("liga", dropId, "10");
    }
  });
});
