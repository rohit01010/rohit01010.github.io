AOS.init();

var logos = [
  '<i style="color: #23be5b;" class="fab fa-node-js"></i>',
  '<i style="color: #61dbfb;" class="fab fa-react"></i>',
  '<i style="color: #2965f1;" class="fab fa-css3"></i>',
  '<i style="color: #e34c26;" class="fab fa-html5"></i>',
  '<i style="color: #4B8BBE;" class="fab fa-python"></i>',
  '<i style="color: #f0db4f;" class="fab fa-js-square"></i>',
  '<i style="color: #563d7c;" class="fab fa-bootstrap"></i>',
  '<i style="color: #d9d9d9;" class="fab fa-linux"></i>',
  '<i style="color: #8993be;" class="fab fa-php"></i>',
  '<i style="color: #c69;" class="fab fa-sass"></i>',
];

const hero_logoBox = document.querySelector(".hero__section .ImgBox");

function createBubble() {
  const hero_logoBox_elem = document.createElement("span");
  hero_logoBox_elem.classList.add("blackBack");
  hero_logoBox_elem.innerHTML = logos[Math.floor(Math.random() * logos.length)];

  if (window.innerWidth < 600) {
    hero_logoBox_elem.style.width = Math.random() * 80 + "px";
    hero_logoBox_elem.style.height = hero_logoBox_elem.style.width;

    hero_logoBox_elem.style.left = Math.floor(Math.random() * 2)
      ? Math.random() * (window.innerWidth / 4) - 20 + "px"
      : Math.random() * (window.innerWidth / 3) +
        window.innerWidth / 1.5 +
        "px";

    hero_logoBox_elem.style.animationDuration = Math.random() * 3 + 5 + "s";
  } else {
    hero_logoBox_elem.style.width = Math.random() * 100 + "px";
    hero_logoBox_elem.style.height = hero_logoBox_elem.style.width;

    hero_logoBox_elem.style.left = Math.floor(Math.random() * 2)
      ? Math.random() * 150 + "px"
      : Math.random() * 150 + 380 + "px";
    hero_logoBox_elem.style.animationDuration = Math.random() * 4 + 4 + "s";
  }
  hero_logoBox_elem.style.zIndex = 0;
  hero_logoBox_elem.querySelector("i").style.fontSize =
    parseInt(hero_logoBox_elem.style.height.split("p")[0]) / 2 + "px";

  hero_logoBox.appendChild(hero_logoBox_elem);

  var flag = false;
  hero_logoBox_elem.addEventListener("click", () => {
    hero_logoBox.removeChild(hero_logoBox_elem);
    flag = true;
  });

  setTimeout(() => {
    if (!flag) hero_logoBox.removeChild(hero_logoBox_elem);
  }, hero_logoBox_elem.style.animationDuration.split("s")[0] * 1000);
}

setInterval(createBubble, 650);

$("document").ready(function () {
  $(".navItem").click(function () {
    $(".navItem").removeClass("active");
    $(this).addClass("active");
    menuPopup();
  });
});

function scrollToUp() {
  window.scrollTo(0, 0);
}

function menuPopup() {
  $("#PopupMenu").toggleClass("active");
  $(".menu").toggleClass("active");
}

$("document").ready(function () {
  $(".menu").click(function () {
    menuPopup();
  });
});

const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.8,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting == true) {
      var Id = String(entry.target.id);
      Id = Id.trim();
      $(".navItem").removeClass("active");
      $("#" + Id + "nav").addClass("active");
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

const workSection = document.querySelector("#work");
const opt = {
  threshold: 0.6,
};
let observerTemp = new IntersectionObserver(navCheck, opt);

observerTemp.observe(workSection);

const loader = document.querySelector(".preloader");

setTimeout(() => {
  preloader();
}, 5000);

function preloader() {
  loader.style.transform = "translateY(-140vh)";
}
