function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  // Prvi deo - zatvaranje dropdown-a
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  // Drugi deo - zatvaranje sub-content menija
  if (!event.target.matches('#menuBtn')) {
    var dropdowns2 = document.getElementsByClassName("sub-content");
    var menuBtn = document.getElementById("menuBtn");
    
    // Zamenjuje jQuery deo
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

  // Treći deo - zatvaranje liga-content menija
  if (!event.target.matches('#ligaBtn')) {
    var dropdowns3 = document.getElementsByClassName('liga-content');
    var ligaBtn = document.getElementById("ligaBtn");
    
    // Zamenjuje jQuery deo
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

  // Četvrti deo - zatvaranje sidenav-a
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
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};
setCookie("razlika", diff, "10");
