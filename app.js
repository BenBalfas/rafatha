// Navigasi scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigasi").style.top = "0";
  } else {
    document.getElementById("navigasi").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const nav = document.querySelector("#navigasi");
let isNavVisible = true;

window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  const treshold = 100;

  if (scrollPosition > treshold && isNavVisible) {
    isNavVisible = false;
    nav.classList.remove("active");
  } else if (scrollPosition < treshold && !isNavVisible) {
    isNavVisible = true;
    nav.classList.add("active");
  }
});

// scroll Up
window.addEventListener("scroll", function () {
  const scrollUp = document.querySelector(".scrollup");
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

// Nav Button

window.addEventListener("scroll", function () {
  const navHome = document.querySelector("#nav-home");
  const navPaketWisata = document.querySelector("#nav-paket-wisata");
  const navPricing = document.querySelector("#nav-pricing");

  if (this.scrollY <= 500) {
    navHome.classList.add("active");
    navPaketWisata.classList.remove("active");
    navPricing.classList.remove("active");
  } else if (this.scrollY >= 500 && this.scrollY < 1100) {
    navHome.classList.remove("active");
    navPaketWisata.classList.add("active");
    navPricing.classList.remove("active");
  } else if (this.scrollY >= 1100) {
    navHome.classList.remove("active");
    navPaketWisata.classList.remove("active");
    navPricing.classList.add("active");
  }
});

// Review
const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    let click = 0;
    ratingValue.value = idx + 1;

    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});

// Fungsi untuk menangani perubahan ukuran layar
function handleWindowResize() {
  const lebarReview = document.querySelector("#review-customer-container");
  const lebarLayar = window.innerWidth;

  if (lebarLayar <= 768) {
    lebarReview.classList.remove("w-50");
  } else {
    lebarReview.classList.add("w-50");
  }
}

// Panggil fungsi ketika halaman dimuat dan saat ada perubahan ukuran layar
window.addEventListener("DOMContentLoaded", handleWindowResize);
window.addEventListener("resize", handleWindowResize);

// Intercept submit button
window.addEventListener("load", function () {
  const form = document.getElementById("form-review");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert(
        "Ulasan anda terkirim!, Ulasan akan di update paling lambat 24 jam kedepan"
      );
    });
  });
});
