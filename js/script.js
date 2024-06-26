// Carousel menu
const mainCourseCarousel = document
  .querySelector(".main-course-carousel-slide")
  .cloneNode(true);
document.querySelector(".main-course-carousel").appendChild(mainCourseCarousel);

const drinksCarousel = document
  .querySelector(".drinks-carousel-slide")
  .cloneNode(true);
document.querySelector(".drinks-carousel").appendChild(drinksCarousel);

const snacksCarousel = document
  .querySelector(".snacks-carousel-slide")
  .cloneNode(true);
document.querySelector(".snacks-carousel").appendChild(snacksCarousel);

// Form reservation
const form = document.querySelector("#reservation-item-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tableName = document.querySelector("#table_name").value;
  const tableSize = document.querySelector("#table_capacity").value;
  const date = document.querySelector("#order_date").value;
  const order = document.querySelector("#order").value;

  const orderText = `Assalamualaikum wr.wb . Halo, Perkenalkan saya ${tableName} berasal dari ${tableSize}, saya ada keperluan mengenai ${date} dengan anda.
  
  Keterangan : 
  ${order}
  `;

  window.location.replace(`https://wa.me/62895330823300?text=${orderText}`);
});

// Hamburger icon animation
const hamburger = document.querySelector("#burger-navigation");
const mobileNavigation = document.querySelector(".nav-mobile-main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNavigation.classList.toggle("menu-active");
});
