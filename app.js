AOS.init();

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
