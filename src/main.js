// ! Variables

const navBar = document.querySelector("#nav");
const toggleButton = document.querySelector(".menu-bar");
const header = document.querySelector("#header");
const headerHeight = header.offsetHeight;
const sections = document.querySelectorAll(".section");
let lastScrollTop = 0;

// * Codding

const a = document.querySelector("#header #nav .menu a");
a.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Menu responsive

toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("show");
  toggleButton.classList.toggle("show");
});

// Close menu on click

const linksHeader = document.querySelectorAll("#header .menu a");
linksHeader.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("show");
    toggleButton.classList.remove("show");
  });
});

// Active Link from Sections

const activeLink = () => {
  const windowScroll = scrollY;
  let heightSections = [
    sections[0].offsetHeight,
    sections[1].offsetHeight,
    sections[2].offsetHeight,
    sections[3].offsetHeight,
  ];
  const checkpoint = 1.3;

  const interSection1e2 = heightSections[0] / checkpoint;
  const interSection2e3 = heightSections[0] + heightSections[1] / checkpoint;
  const interSection3e4 =
    heightSections[0] + heightSections[1] + heightSections[3] / checkpoint;

  linksHeader[0].classList.add("active");
  linksHeader[1].classList.remove("active");
  linksHeader[2].classList.remove("active");
  linksHeader[3].classList.remove("active");

  if (windowScroll >= interSection1e2) {
    linksHeader[0].classList.remove("active");
    linksHeader[1].classList.add("active");
    linksHeader[2].classList.remove("active");
    linksHeader[3].classList.remove("active");
  }
  if (windowScroll >= interSection2e3) {
    linksHeader[0].classList.remove("active");
    linksHeader[1].classList.remove("active");
    linksHeader[2].classList.add("active");
    linksHeader[3].classList.remove("active");
  }
  if (windowScroll >= interSection3e4) {
    linksHeader[0].classList.remove("active");
    linksHeader[1].classList.remove("active");
    linksHeader[2].classList.remove("active");
    linksHeader[3].classList.add("active");
  }
};

// Header ShrinkHeader

const shrinkHeader = () => {
  const header = document.querySelector("#header");
  const scrollPosition = window.scrollY;

  const section = document.querySelector(".section");
  const firstSection = section.offsetHeight;

  let scrollingWindow =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > firstSection / 3) {
    if (scrollingWindow > lastScrollTop) {
      header.classList.add("header-shrink");
    } else {
      header.classList.remove("header-shrink");
    }

    lastScrollTop = scrollingWindow <= 0 ? 0 : scrollingWindow;
  }
};

window.addEventListener("scroll", () => {
  activeLink();
});

// Swiper

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ScrollReveal

const options = {
  origin: top,
  reset: true,
  delay: 200,
};

const scrollReveal = ScrollReveal({
  origin: "top",
  duration: 500,
});

scrollReveal.reveal(
  `
  #home .description h1, #home .description h2, #home .description p,
  #home .description .avatar, #home .info-job, 
  #about .image, #about .about-me,
  #skills .skills__descriptions, #skills .skills,
  .swiper,
  .start-new-project,
  footer .creator, footer .social-media, footer .links-nav
  `,
  { interval: 100 }
);
