const btnOpen = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const menu = document.querySelector(".menu");

const preloader = document.querySelector(".preloader");
const wrapper = document.querySelector(".wrapper");

btnOpen.addEventListener("click", function () {
  menu.classList.add("active");
});

btnClose.addEventListener("click", function () {
  menu.classList.remove("active");
});

setTimeout(() => {
  preloader.classList.add("active");
}, 2000);

setTimeout(() => {
  wrapper.classList.add("active");
}, 2800);

const quesItems = document.querySelectorAll(".ques__list-item");

quesItems.forEach((item) => {
  item.addEventListener("click", function () {
    const isActive = this.querySelector("span").classList.contains("active");

    quesItems.forEach((item) => {
      const spanBlock = item.querySelector("span");
      spanBlock.classList.remove("active");
    });

    if (!isActive) {
      const spanBlock = this.querySelector("span");
      spanBlock.classList.add("active");
    }
  });
});

const menuMobFr = document.querySelector(".menu__mob-fr");

menuMobFr.addEventListener("click", function () {
  const mobImgBt = document.querySelector(".menu__mob .h-bt");

  document.querySelector(".menu__mob__dropdonw").classList.toggle("active");
  mobImgBt.classList.toggle("active");
});

const menuMobItem = document.querySelectorAll(".menu__mob-item");
const menuMobLink = document.querySelectorAll(".header__list-link");

menuMobItem.forEach((mobLink) => {
  mobLink.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    if (menu) {
      menu.classList.remove("active");
    }
  });
});

menuMobLink.forEach((linkMob) => {
  linkMob.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    if (menu) {
      menu.classList.remove("active");
    }
  });
});

document
  .querySelector(".hero__content-btn")
  .addEventListener("click", function () {
    menu.classList.remove("active");
  });

  document
  .querySelector(".white")
  .addEventListener("click", function () {
    menu.classList.remove("active");
  });
