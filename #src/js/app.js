(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector("html").classList.add("webp");
      } else {
         document.querySelector("html").classList.add("no-webp");
      }
   });
})();
const body = document.querySelector("body");
window.addEventListener("DOMContentLoaded", () => {
   // header
   workBurger();
   // footer
   footerSpoilers();
   // home
   accordion(".faq-item__header", ".faq-item__content");
   homeViewCalc();
   // services
   tabs('input[name="services"]', ".services__wrapper");
   // service
   serviceActions();
   serviceRepair();
   // portfolio
   portfolioFilter();
   portfolioDropdown();
   // materials
   moreDetailed();
   materialsFilter();
   // materials detail
   tabs('input[name="materialInfo"]', ".material-hero__item");
   //trends
   tabs('input[name="trends"]', ".trend");
   // articles
   tabs('input[name="articlesType"]', ".articles-tab");
   // about
   tabs('input[name="aboutInfo"]', ".about-tab");
   readMore();
});
// materials detail
function readMore() {
   const link = document.querySelector(".material-hero__description a");
   const text = document.querySelector(".material-hero__description p");
   if (link) {
      link.addEventListener("click", (e) => {
         e.preventDefault();
         if (text.classList.contains("full")) {
            text.classList.remove("full");
            link.innerHTML = "Читать все";
         } else {
            link.innerHTML = "Спрятать";
            text.classList.add("full");
         }
      });
   }
}
//sliders --------------------------------------------------------------------------------------------
if (document.querySelector(".production-swiper")) {
   new Swiper(".production-swiper", {
      navigation: {
         nextEl: ".production-swiper__btn_next",
         prevEl: ".production-swiper__btn_prev",
      },
      spaceBetween: 16,
      slidesPerView: "auto",
      speed: 500,
   });
}
//home view hero
if (document.querySelector(".hero-swiper")) {
   new Swiper(".hero-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: true,
      speed: 3000,
      pagination: {
         el: ".hero-swiper__pagination",
         type: "custom",
         renderCustom: function (swiper, current, total) {
            return `
               <span class="current caption">0${current} –</span>
               <span class="total caption">0${total}</span>
            `;
         },
      },
   });
}
// home view reviews
if (document.querySelector(".home-reviews__swiper")) {
   new Swiper(".home-reviews__swiper", {
      spaceBetween: 16,
      slidesPerView: "auto",
      navigation: {
         nextEl: ".reviews-swiper__btn_next",
         prevEl: ".reviews-swiper__btn_prev",
      },
   });
}
// home view trust
if (document.querySelector(".home-trust__swiper")) {
   new Swiper(".home-trust__swiper", {
      spaceBetween: 16,
      slidesPerView: "auto",
   });
}
// article detail slider
if (document.querySelector(".article-read__swiper")) {
   new Swiper(".article-read__swiper", {
      spaceBetween: 16,
      breakpoints: {
         993: {
            slidesPerView: 3,
         },
         320: {
            slidesPerView: "auto",
         },
      },
   });
}
// portfolio detail view
if (document.querySelector(".portfolio-detail__swiper")) {
   new Swiper(".portfolio-detail__swiper", {
      navigation: {
         nextEl: ".portfolio-swiper__btn_next",
         prevEl: ".portfolio-swiper__btn_prev",
      },
      spaceBetween: 16,
      slidesPerView: "auto",
   });
}
// materials detail view
if (document.querySelector(".material-slider__swiper")) {
   let swiper = new Swiper(".material-slider__swiper", {
      navigation: {
         nextEl: ".material-slider__btn_next",
         prevEl: ".material-slider__btn_prev",
      },
      spaceBetween: 0,
      loop: true,
      allowTouchMove: false,
      watchSlidesProgress: true,
      keyboard: true,
      breakpoints: {
         1920: {
            slidesPerView: 16,
         },
         1440: {
            slidesPerView: 12,
         },
         1200: {
            slidesPerView: 12,
         },
         1024: {
            slidesPerView: 12,
         },
         992: {
            slidesPerView: 12,
         },
         768: {
            slidesPerView: 10,
         },
         650: {
            slidesPerView: 9,
         },
         450: {
            slidesPerView: 8,
         },
         320: {
            slidesPerView: 7,
         },
      },
   });
   let zoomedthumbs = new Swiper(".material-modal__swiper_thumbs", {
      slidesPerView: "auto",
      watchSlidesProgress: true,
      spaceBetween: 8,
      mousewheel: true,
      breakpoints: {
         651: {
            direction: "vertical",
         },
         320: {
            direction: "horizontal",
         },
      },
   });
   let zoomedMain = new Swiper(".material-modal__swiper", {
      spaceBetween: 12,
      watchSlidesProgress: true,
      thumbs: {
         swiper: zoomedthumbs,
      },
      navigation: {
         nextEl: ".material-modal__btn_next",
         prevEl: ".material-modal__btn_prev",
      },
      breakpoints: {
         651: {
            direction: "vertical",
            slidesPerView: 1,
         },
         320: {
            direction: "horizontal",
            slidesPerView: "auto",
         },
      },
   });
   function zoomedSlider() {
      const slides = document.querySelectorAll(".material-slider__slide");
      if (slides.length) {
         console.log(slides.length);
         slides.forEach((slide, index) => {
            slide.addEventListener("click", () => {
               let i = slide.getAttribute("data-slide") - 1;
               // console.log(slide.getAttribute("data-slide"));
               zoomedMain.slideTo(i, 500);
            });
         });
      }
   }
   zoomedSlider();
}
// articles view
if (document.querySelector(".articles-all__small.swiper")) {
   new Swiper(".articles-all__small.swiper", {
      spaceBetween: 12,
      slidesPerView: 2,
      breakpoints: {
         650: {
            slidesPerView: 2,
         },
         320: {
            slidesPerView: "auto",
         },
      },
   });
}
// about advantages view
if (document.querySelector(".about-advantages__slider")) {
   new Swiper(".about-advantages__slider", {
      navigation: {
         nextEl: ".about-advantages__btn_next",
         prevEl: ".about-advantages__btn_prev",
      },
      spaceBetween: 16,
      slidesPerView: "auto",
   });
}
// about advantages view
if (document.querySelector(".about-team__slider")) {
   new Swiper(".about-team__slider", {
      navigation: {
         nextEl: ".about-team__btn_next",
         prevEl: ".about-team__btn_prev",
      },
      spaceBetween: 16,
      slidesPerView: "auto",
   });
}
// reviews view
if (document.querySelector(".reviews-slider__swiper")) {
   new Swiper(".reviews-slider__swiper", {
      navigation: {
         nextEl: ".reviews-slider__btn_next",
         prevEl: ".reviews-slider__btn_prev",
      },
      spaceBetween: 16,
      slidesPerView: "auto",
   });
}
// header --------------------------------------------------------------------------------
function workBurger() {
   const btn = document.querySelector(".header__burger");
   const menu = document.querySelector(".header-menu");
   if (btn) {
      btn.addEventListener("click", () => {
         btn.classList.toggle("active");
         body.classList.toggle("lock");
         menu.classList.toggle("active");
      });
   }
}
// footer
function footerSpoilers() {
   if (window.innerWidth <= 450) {
      const lists = document.querySelectorAll(".footer__list");
      if (lists.length) {
         lists.forEach((item) => {
            item.classList.add("collapse");
            accordion(".footer__subtitle", ".footer__list");
         });
      }
   }
}
// home page ------------------------------------------------------------------------------
function homeViewCalc() {
   let activeSlideIndex = 0;
   const pagination = document.querySelectorAll(".home-calc__subtitle");
   const slides = document.querySelectorAll(".calc-content__wrapper");
   const nav = document.querySelector(".home-calc__navigation");
   const sliderWrapper = document.querySelector(".calc-content");

   if (sliderWrapper) {
      navigation();
      setHeight();
      function paginationWork() {
         pagination.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("data-calc-link") == activeSlideIndex) {
               item.classList.add("active");
            }
         });
      }
      function navigation() {
         nav.addEventListener("click", (e) => {
            let where = e.target.getAttribute("data-calc-nav");
            if (where == "next" && activeSlideIndex < slides.length) {
               slideNext();
               showLink();
            }
            if (where == "prev" && activeSlideIndex > 0) {
               slidePrev();
               showLink();
            }
            paginationWork();
         });
      }
      function showLink() {
         const btn = nav.querySelector(".btn-next");
         const link = nav.querySelector(".link");
         if (activeSlideIndex === slides.length - 1) {
            btn.style.display = "none";
            link.style.display = "flex";
         } else {
            btn.style.display = "flex";
            link.style.display = "none";
            // console.log("asd");
         }
      }
      function slideNext() {
         activeSlideIndex++;
         setHeight();
         sliderWrapper.style.transform = `translateX(-${
            activeSlideIndex * 100
         }%)`;
      }
      function slidePrev() {
         activeSlideIndex--;
         setHeight();
         sliderWrapper.style.transform = `translateX(-${
            activeSlideIndex * 100
         }%)`;
      }
      function setHeight() {
         let activeSlideHeight = slides[activeSlideIndex].offsetHeight;
         sliderWrapper.style.height = activeSlideHeight + 1 + "px";
      }
   }
}
// input mask
const maskOptions = {
   mask: "+{7} (000) 000-00-00",
   // lazy: false,  // make placeholder always visible
   // placeholderChar: '0'     // defaults to '_'`
};
if (document.getElementById("homeViewPhone")) {
   const mask = IMask(document.getElementById("homeViewPhone"), maskOptions);
}
if (document.getElementById("feedbackModalPhone")) {
   const mask = IMask(
      document.getElementById("feedbackModalPhone"),
      maskOptions
   );
}
if (document.getElementById("orderDesignModalPhone")) {
   const mask = IMask(
      document.getElementById("orderDesignModalPhone"),
      maskOptions
   );
}
if (document.getElementById("orderDesignModalMaterialsPhone")) {
   const mask = IMask(
      document.getElementById("orderDesignModalMaterialsPhone"),
      maskOptions
   );
}
if (document.getElementById("homePricePhone")) {
   const mask = IMask(document.getElementById("homePricePhone"), maskOptions);
}
if (document.getElementById("servicesPhone")) {
   const mask = IMask(document.getElementById("servicesPhone"), maskOptions);
}
if (document.getElementById("servicePhone")) {
   const mask = IMask(document.getElementById("servicePhone"), maskOptions);
}
if (document.getElementById("portfolioDetailPhone")) {
   const mask = IMask(
      document.getElementById("portfolioDetailPhone"),
      maskOptions
   );
}
if (document.getElementById("typePhone")) {
   const mask = IMask(document.getElementById("typePhone"), maskOptions);
}
if (document.getElementById("calculatorPhone")) {
   const mask = IMask(document.getElementById("calculatorPhone"), maskOptions);
}
if (document.getElementById("articlePhone")) {
   const mask = IMask(document.getElementById("articlePhone"), maskOptions);
}
if (document.getElementById("statusPhone")) {
   const mask = IMask(document.getElementById("statusPhone"), maskOptions);
}
// service page --------------------------------------------------------
function serviceActions() {
   const links = document.querySelectorAll(".service-actions__item");
   const images = document.querySelectorAll(".service-actions__image");
   if (links.length) {
      links.forEach((link) => {
         link.addEventListener("mouseenter", () => {
            let attr = link.getAttribute("data-action");
            links.forEach((item) => {
               item.classList.remove("active");
            });
            link.classList.add("active");
            images.forEach((item) => {
               item.classList.remove("active");
               if (item.getAttribute("data-action") == attr) {
                  item.classList.add("active");
               }
            });
         });
      });
   }
}
function serviceRepair() {
   const title = document.querySelector(".header");
   // const title = document.querySelector('.service-repair__title')
   const items = document.querySelectorAll(".service-repair__item");
   if (title) {
      window.addEventListener("scroll", () => {
         // let titleTop = title.getBoundingClientRect().top + 20
         let titleTop = title.getBoundingClientRect().height + 150;
         items.forEach((item) => {
            if (item.getBoundingClientRect().top <= titleTop) {
               // if (item.getBoundingClientRect().top + item.getBoundingClientRect().height < title.getBoundingClientRect().height) {
               //    item.classList.remove("active")
               //    slideHide(item.querySelector(".service-repair__text"))
               // }
               item.classList.add("active");
               let text = item.querySelector(".service-repair__text");
               slideShow(text);
            } else {
               item.classList.remove("active");
               slideHide(item.querySelector(".service-repair__text"));
            }
         });
      });
   }
}
// portfolio page ---------------------------------------------------------------
function portfolioFilter() {
   const sections = document.querySelectorAll(".portfolio-filter__section");
   const openBtn = document.querySelector(".portfolio-filter__open");
   const closeBtn = document.querySelector(".portfolio-filter__close");
   const madeBtn = document.querySelector(".portfolio-filter__made");
   const clearBtns = document.querySelectorAll(".portfolio-filter__clear");
   const filter = document.querySelector(".portfolio-filter");
   const checked = document.querySelector(".portfolio-content__filters");
   const checkedList = document.querySelector(".portfolio-content__checked");

   if (sections.length) {
      if (window.innerWidth <= 768) {
         const dropdowns = document.querySelectorAll(
            ".portfolio-filter__dropdown"
         );
         dropdowns.forEach((item) => {
            item.classList.add("collapse");
            item.classList.add("collapse_show");
         });
         sections.forEach((section, index) => {
            section.addEventListener("click", (e) => {
               if (e.target.closest(".portfolio-filter__subheader")) {
                  let currentDrop = section.querySelector(
                     ".portfolio-filter__dropdown"
                  );
                  if (currentDrop.classList.contains("collapsing")) {
                     return;
                  } else if (currentDrop.classList.contains("collapse_show")) {
                     slideHide(currentDrop);
                     section.classList.remove("active");
                  } else {
                     slideShow(currentDrop);
                     section.classList.add("active");
                  }
               }
            });
         });
      } else {
         sections.forEach((section, index) => {
            section.addEventListener("click", (e) => {
               if (e.target.closest(".portfolio-filter__subheader")) {
                  sections.forEach((item, i) => {
                     if (i !== index) {
                        item.classList.remove("active");
                     }
                  });
                  section.classList.toggle("active");
               }
            });
         });
         // document.querySelectorAll("input[name='service']").forEach(item =>
         //    item.addEventListener("change", renderCheckedFilters))
         // document.querySelectorAll("input[name='price']").forEach(item =>
         //    item.addEventListener("change", renderCheckedFilters))
         // document.querySelectorAll("input[name='brand']").forEach(item =>
         //    item.addEventListener("change", renderCheckedFilters))
      }
      document
         .querySelectorAll("input[name='service']")
         .forEach((item) =>
            item.addEventListener("change", renderCheckedFilters)
         );
      document
         .querySelectorAll("input[name='price']")
         .forEach((item) =>
            item.addEventListener("change", renderCheckedFilters)
         );
      document
         .querySelectorAll("input[name='brand']")
         .forEach((item) =>
            item.addEventListener("change", renderCheckedFilters)
         );
      openBtn.addEventListener("click", () => {
         filter.classList.add("active");
         body.classList.add("lock");
      });
      closeBtn.addEventListener("click", () => {
         filter.classList.remove("active");
         body.classList.remove("lock");
      });
      madeBtn.addEventListener("click", () => {
         filter.classList.remove("active");
         body.classList.remove("lock");
      });
      clearBtns.forEach((item) => {
         item.addEventListener("click", clearInputs);
      });

      function renderCheckedFilters() {
         const servicesInputs = document.querySelectorAll(
            "input[name='service']:checked"
         );
         const priceInputs = document.querySelectorAll(
            "input[name='price']:checked"
         );
         const brandsInputs = document.querySelectorAll(
            "input[name='brand']:checked"
         );
         if (
            servicesInputs.length ||
            priceInputs.length ||
            brandsInputs.length
         ) {
            checked.classList.remove("hidden");
            let inner = "";
            servicesInputs.forEach((item) => {
               inner += `
               <li data-delete="${item.id}">
                  <span class="body">${item.value}</span>
                  <button class="icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 7.25L7.25 0.75L0.75 7.25Z"
                           fill="#423C39" />
                        <path d="M0.75 7.25L7.25 0.75" stroke="#423C39" stroke-width="0.8125"
                           stroke-linecap="square" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.75L7.25 7.25L0.75 0.75Z"
                           fill="#423C39" />
                        <path d="M0.75 0.75L7.25 7.25" stroke="#423C39" stroke-width="0.8125"
                           stroke-linecap="square" />
                     </svg>
                  </button>
               </li>
               `;
            });
            priceInputs.forEach((item) => {
               inner += `
               <li data-delete="${item.id}">
                  <span class="body">${item.value}</span>
                  <button class="icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 7.25L7.25 0.75L0.75 7.25Z"
                           fill="#423C39" />
                        <path d="M0.75 7.25L7.25 0.75" stroke="#423C39" stroke-width="0.8125"
                           stroke-linecap="square" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.75L7.25 7.25L0.75 0.75Z"
                           fill="#423C39" />
                        <path d="M0.75 0.75L7.25 7.25" stroke="#423C39" stroke-width="0.8125"
                           stroke-linecap="square" />
                     </svg>
                  </button>
               </li>
               `;
            });
            brandsInputs.forEach((item) => {
               inner += `
               <li data-delete="${item.id}">
                  <span class="body">${item.value}</span>
                  <button class="icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 7.25L7.25 0.75L0.75 7.25Z"
                           fill="#423C39" />
                        <path d="M0.75 7.25L7.25 0.75" stroke="#423C39" stroke-width="0.8125"
                           stroke-linecap="square" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.75L7.25 7.25L0.75 0.75Z"
                           fill="#423C39" />
                        <path d="M0.75 0.75L7.25 7.25" stroke="#423C39" stroke-width="0.8125"
                           stroke-linecap="square" />
                     </svg>
                  </button>
               </li>
               `;
            });
            checkedList.innerHTML = inner;
            const removeBtns = document.querySelectorAll(
               ".portfolio-content__checked .icon"
            );
            removeBtns.forEach((item) => {
               item.addEventListener("click", (e) => {
                  let id = e.target.closest("li").getAttribute("data-delete");
                  document.getElementById(id).checked = false;
                  renderCheckedFilters();
               });
            });
         } else {
            checked.classList.add("hidden");
         }
      }
      function clearInputs() {
         const servicesInputs = document.querySelectorAll(
            "input[name='service']:checked"
         );
         const priceInputs = document.querySelectorAll(
            "input[name='price']:checked"
         );
         const brandsInputs = document.querySelectorAll(
            "input[name='brand']:checked"
         );
         servicesInputs.forEach((item) => {
            item.checked = false;
         });
         priceInputs.forEach((item) => {
            item.checked = false;
         });
         brandsInputs.forEach((item) => {
            item.checked = false;
         });
         renderCheckedFilters();
      }
   }
}
function portfolioDropdown() {
   const lists = document.querySelectorAll(".portfolio-filter__list");
   if (lists.length) {
      lists.forEach((list) => {
         if (list.children.length > 8) {
            list.classList.add("columns");
         }
      });
   }
}
// materials page
function moreDetailed() {
   const btns = document.querySelectorAll(".materials-section__btn");
   if (btns.length) {
      btns.forEach((btn) => {
         btn.addEventListener("click", (e) => {
            let section = e.target.closest(".materials-section");
            let dropdown = section.querySelector(
               ".materials-section__dropdown"
            );
            if (dropdown.classList.contains("collapsing")) {
               return;
            } else if (dropdown.classList.contains("collapse_show")) {
               slideHide(dropdown);
               btn.classList.remove("active");
            } else {
               slideShow(dropdown);
               btn.classList.add("active");
            }
         });
      });
   }
}
function materialsFilter() {
   const filter = document.querySelector(".materials-filter");
   const content = document.querySelector(".materials-content__main");
   const closeBtn = document.querySelector(".materials-filter__close");
   const madeBtn = document.querySelector(".materials-filter__made");
   const clearBtns = document.querySelectorAll(".materials-filter__remove");
   const checked = document.querySelector(".materials-content__filters");
   const checkedList = document.querySelector(".materials-content__checked");
   let gap = 58;
   let filterWidth;
   if (filter) {
      openFilter();
      spoilerSection();
      renderCheckedFilters();
      if (window.innerWidth <= 992) {
         filter.classList.remove("collapse");
      }
      closeBtn.addEventListener("click", closeFilter);
      madeBtn.addEventListener("click", closeFilter);
      clearBtns.forEach((item) => {
         item.addEventListener("click", clearFilters);
      });
      document
         .querySelectorAll("input[name='color']")
         .forEach((item) =>
            item.addEventListener("change", renderCheckedFilters)
         );
      document
         .querySelectorAll("input[name='type']")
         .forEach((item) =>
            item.addEventListener("change", renderCheckedFilters)
         );
      document
         .querySelectorAll("input[name='price']")
         .forEach((item) =>
            item.addEventListener("change", renderCheckedFilters)
         );
      document
         .querySelectorAll("input[name='country']")
         .forEach((item) =>
            item.addEventListener("change", renderCheckedFilters)
         );
      document
         .querySelectorAll("input[name='params']")
         .forEach((item) =>
            item.addEventListener("change", renderCheckedFilters)
         );
   }
   function spoilerSection() {
      const subHeaders = document.querySelectorAll(
         ".materials-filter__subheader"
      );
      subHeaders.forEach((item) => {
         item.addEventListener("click", (e) => {
            let section = e.target.closest(".materials-filter__section");
            let drop = section.querySelector(".materials-filter__dropdown");
            if (drop.classList.contains("collapsing")) {
               return;
            } else if (drop.classList.contains("collapse_show")) {
               slideHide(drop);
               item.classList.remove("active");
            } else {
               slideShow(drop);
               item.classList.add("active");
            }
         });
      });
   }
   function resizeContent() {
      if (window.innerWidth > 992) {
         if (filterWidth) {
            content.style.maxWidth = `calc(100% - ${filterWidth + gap}px)`;
         } else {
            content.style.maxWidth = `calc(100% - ${filterWidth}px)`;
         }
      }
   }
   function openFilter() {
      const openBtn = document.querySelector(".materials-filter__open");

      openBtn.addEventListener("click", () => {
         if (window.innerWidth > 992) {
            if (filter.classList.contains("collapsing")) {
               return;
            } else if (filter.classList.contains("collapse_show")) {
               slideHide(filter);
               openBtn.classList.remove("active");
               filterWidth = 0;
               resizeContent();
            } else {
               slideShow(filter);
               openBtn.classList.add("active");
               filterWidth = filter.getBoundingClientRect().width;
               resizeContent();
            }
         } else {
            filter.classList.add("active");
            body.classList.add("lock");
         }
      });
   }
   function closeFilter() {
      filter.classList.remove("active");
      body.classList.remove("lock");
   }
   function clearFilters() {
      const checkedColorFilters = document.querySelectorAll(
         'input[name="color"]:checked'
      );
      const checkedTypeFilters = document.querySelectorAll(
         'input[name="type"]:checked'
      );
      const checkedPriceFilters = document.querySelectorAll(
         'input[name="price"]:checked'
      );
      const checkedCountryFilters = document.querySelectorAll(
         'input[name="country"]:checked'
      );
      const checkedParamsFilters = document.querySelectorAll(
         'input[name="params"]:checked'
      );
      checkedColorFilters.forEach((item) => {
         item.checked = false;
      });
      checkedTypeFilters.forEach((item) => {
         item.checked = false;
      });
      checkedPriceFilters.forEach((item) => {
         item.checked = false;
      });
      checkedCountryFilters.forEach((item) => {
         item.checked = false;
      });
      checkedParamsFilters.forEach((item) => {
         item.checked = false;
      });
      renderCheckedFilters();
   }
   function renderCheckedFilters() {
      const checkedColorFilters = document.querySelectorAll(
         'input[name="color"]:checked'
      );
      const checkedTypeFilters = document.querySelectorAll(
         'input[name="type"]:checked'
      );
      const checkedPriceFilters = document.querySelectorAll(
         'input[name="price"]:checked'
      );
      const checkedCountryFilters = document.querySelectorAll(
         'input[name="country"]:checked'
      );
      const checkedParamsFilters = document.querySelectorAll(
         'input[name="params"]:checked'
      );
      if (
         checkedTypeFilters.length ||
         checkedPriceFilters.length ||
         checkedCountryFilters.length ||
         checkedParamsFilters.length ||
         checkedColorFilters.length
      ) {
         checked.classList.remove("hidden");
         let inner = "";
         checkedColorFilters.forEach((item) => {
            inner += `
            <li data-delete="${item.id}">
               <span class="body">${item.value}</span>
               <button class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                     fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 7.25L7.25 0.75L0.75 7.25Z"
                        fill="#423C39" />
                     <path d="M0.75 7.25L7.25 0.75" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.75L7.25 7.25L0.75 0.75Z"
                        fill="#423C39" />
                     <path d="M0.75 0.75L7.25 7.25" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                  </svg>
               </button>
            </li>
            `;
         });
         checkedTypeFilters.forEach((item) => {
            inner += `
            <li data-delete="${item.id}">
               <span class="body">${item.value}</span>
               <button class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                     fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 7.25L7.25 0.75L0.75 7.25Z"
                        fill="#423C39" />
                     <path d="M0.75 7.25L7.25 0.75" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.75L7.25 7.25L0.75 0.75Z"
                        fill="#423C39" />
                     <path d="M0.75 0.75L7.25 7.25" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                  </svg>
               </button>
            </li>
            `;
         });
         checkedPriceFilters.forEach((item) => {
            inner += `
            <li data-delete="${item.id}">
               <span class="body">${item.value}</span>
               <button class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                     fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 7.25L7.25 0.75L0.75 7.25Z"
                        fill="#423C39" />
                     <path d="M0.75 7.25L7.25 0.75" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.75L7.25 7.25L0.75 0.75Z"
                        fill="#423C39" />
                     <path d="M0.75 0.75L7.25 7.25" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                  </svg>
               </button>
            </li>
            `;
         });
         checkedCountryFilters.forEach((item) => {
            inner += `
            <li data-delete="${item.id}">
               <span class="body">${item.value}</span>
               <button class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                     fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 7.25L7.25 0.75L0.75 7.25Z"
                        fill="#423C39" />
                     <path d="M0.75 7.25L7.25 0.75" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.75L7.25 7.25L0.75 0.75Z"
                        fill="#423C39" />
                     <path d="M0.75 0.75L7.25 7.25" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                  </svg>
               </button>
            </li>
            `;
         });
         checkedParamsFilters.forEach((item) => {
            inner += `
            <li data-delete="${item.id}">
               <span class="body">${item.value}</span>
               <button class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                     fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 7.25L7.25 0.75L0.75 7.25Z"
                        fill="#423C39" />
                     <path d="M0.75 7.25L7.25 0.75" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.75L7.25 7.25L0.75 0.75Z"
                        fill="#423C39" />
                     <path d="M0.75 0.75L7.25 7.25" stroke="#423C39" stroke-width="0.8125"
                        stroke-linecap="square" />
                  </svg>
               </button>
            </li>
            `;
         });
         checkedList.innerHTML = inner;
         const removeBtns = document.querySelectorAll(
            ".materials-content__checked .icon"
         );
         removeBtns.forEach((item) => {
            item.addEventListener("click", (e) => {
               let id = e.target.closest("li").getAttribute("data-delete");
               document.getElementById(id).checked = false;
               renderCheckedFilters();
            });
         });
      } else {
         checked.classList.add("hidden");
      }
   }
}

// slideToggle functions
function slideShow(el, duration = 300) {
   // завершаем работу метода, если элемент содержит класс collapsing или collapse_show
   if (
      el.classList.contains("collapsing") ||
      el.classList.contains("collapse_show")
   ) {
      return;
   }
   // удаляем класс collapse
   el.classList.remove("collapse");
   // сохраняем текущую высоту элемента в константу height (это значение понадобится ниже)
   const height = el.offsetHeight;
   // устанавливаем высоте значение 0
   el.style["height"] = 0;
   // не отображаем содержимое элемента, выходящее за его пределы
   el.style["overflow"] = "hidden";
   // создание анимации скольжения с помощью CSS свойства transition
   el.style["transition"] = `height ${duration}ms ease`;
   // добавляем класс collapsing
   el.classList.add("collapsing");
   // получим значение высоты (нам этого необходимо для того, чтобы просто заставить браузер выполнить перерасчет макета, т.к. он не сможет нам вернуть правильное значение высоты, если не сделает это)
   el.offsetHeight;
   // установим в качестве значения высоты значение, которое мы сохранили в константу height
   el.style["height"] = `${height}px`;
   // по истечении времени анимации this._duration
   window.setTimeout(() => {
      // удалим класс collapsing
      el.classList.remove("collapsing");
      // добавим классы collapse и collapse_show
      el.classList.add("collapse");
      el.classList.add("collapse_show");
      // удалим свойства height, transition и overflow
      el.style["height"] = "";
      el.style["transition"] = "";
      el.style["overflow"] = "";
   }, duration);
}
function slideHide(el, duration = 300) {
   // завершаем работу метода, если элемент содержит класс collapsing или collapse_show
   if (
      el.classList.contains("collapsing") ||
      !el.classList.contains("collapse_show")
   ) {
      return;
   }
   // установим свойству height текущее значение высоты элемента
   el.style["height"] = `${el.offsetHeight}px`;
   // получим значение высоты
   el.offsetHeight;
   // установим CSS свойству height значение 0
   el.style["height"] = 0;
   // обрежем содержимое, выходящее за границы элемента
   el.style["overflow"] = "hidden";
   // добавим CSS свойство transition для осуществления перехода длительностью this._duration
   el.style["transition"] = `height ${duration}ms ease`;
   // удалим классы collapse и collapse_show
   el.classList.remove("collapse");
   el.classList.remove("collapse_show");
   // добавим класс collapsing
   el.classList.add("collapsing");
   // после завершения времени анимации
   window.setTimeout(() => {
      // удалим класс collapsing
      el.classList.remove("collapsing");
      // добавим класс collapsing
      el.classList.add("collapse");
      // удалим свойства height, transition и overflow
      el.style["height"] = "";
      el.style["transition"] = "";
      el.style["overflow"] = "";
   }, duration);
}
// shared
function accordion(linkSelector, contentSelector) {
   // получаем линки
   const openLinks = document.querySelectorAll(`${linkSelector}`);
   // контенты
   const contents = document.querySelectorAll(`${contentSelector}`);
   if (openLinks.length > 0) {
      for (let i = 0; i < openLinks.length; i++) {
         let openLink = openLinks[i];
         openLink.addEventListener("click", () => {
            // все прячем
            for (let j = 0; j < contents.length; j++) {
               // если хоть один открывается - return
               if (contents[j].classList.contains("collapsing")) {
                  return;
               } // Иначе
               // все прячем
               slideHide(contents[j]);
            }
            for (let j = 0; j < openLinks.length; j++) {
               openLinks[j].classList.remove("active");
            }
            // записываем в переменную нужный таб
            let content = openLink.nextElementSibling;
            // работаем с классами линка
            if (content.classList.contains("collapsing")) {
               return;
            } else if (content.classList.contains("collapse_show")) {
               openLink.classList.remove("active");
            } else {
               openLink.classList.add("active");
            }
            // показываем нужный
            slideShow(content);
         });
      }
   }
}
function tabs(linkSelector, contentSelector) {
   const inputs = document.querySelectorAll(linkSelector);
   const contents = document.querySelectorAll(contentSelector);
   let value;
   if (inputs.length) {
      console.log(inputs);
      inputs.forEach((item) => {
         item.addEventListener("change", () => {
            if (item.checked) {
               value = item.value;
            }
            contents.forEach((item) => {
               item.classList.remove("active");
               if (item.getAttribute("data-tab") == value) {
                  item.classList.add("active");
               }
            });
         });
      });
   }
}

// Popup
const popupLinks = document.querySelectorAll(".modal__link");
const lockPadding = document.querySelectorAll(".lock-padding");
const popupCloseIcon = document.querySelectorAll(".modal__close");

let unlock = true;

const timeout = 500;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute("href").replace("#", "");
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function (e) {
         popupClose(el.closest(".modal"));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector(".modal.open");
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add("open");
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest(".modal__content")) {
            popupClose(e.target.closest(".modal"));
         }
      });
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add("lock");

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
         }
      }
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener("keydown", function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector(".modal.open");
      popupClose(popupActive);
   }
});
