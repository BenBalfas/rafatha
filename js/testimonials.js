const testimonialsData = [
  {
    name: "Papa Udi",
    email: "@Papa_Udi",
    rating: 5,
    review: "Pelayanan sangat baik.",
    imageUrl: "/images/testimonial/1.JPG", // Tambahkan URL gambar di sini
  },
  {
    name: "Raka hilal",
    email: "@rakahilal",
    rating: 4,
    review: "Pilihan mobil kurang banyak.",
    imageUrl: "/images/testimonial/2.JPG", // Tambahkan URL gambar di sini
  },
  // Tambahkan testimonial lain di sini
];

function addTestimonialsToHTML() {
  const testimonialContainer = document.querySelector(
    ".testimonial-box-container"
  );

  testimonialsData.forEach((testimonial) => {
    const testimonialBox = document.createElement("div");
    testimonialBox.classList.add("testimonial-box");

    // Buat struktur HTML untuk testimonial box sesuai dengan data
    testimonialBox.innerHTML = `
          <div class="box-top">
            <div class="profile">
              <div class="profile-img">
                <img src="${testimonial.imageUrl}" alt="${
      testimonial.name
    }" /> <!-- Tampilkan gambar -->
              </div>
              <div class="name-user">
                <strong>${testimonial.name}</strong>
                <a href="https://www.instagram.com/${
                  testimonial.email
                }"><span>${testimonial.email}</span></a>
              </div>
            </div>
            <div class="reviews">
              ${getStarRatingHTML(testimonial.rating)}
            </div>
          </div>
          <div class="client-comment">
            <p>${testimonial.review}</p>
          </div>
        `;

    testimonialContainer.appendChild(testimonialBox);
  });
}

function getStarRatingHTML(rating) {
  const starIcons = ["far fa-star", "fas fa-star-half-alt", "fas fa-star"];

  let ratingHTML = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingHTML += `<i class="${starIcons[2]}"></i>`;
    } else if (i - rating <= 0.5) {
      ratingHTML += `<i class="${starIcons[1]}"></i>`;
    } else {
      ratingHTML += `<i class="${starIcons[0]}"></i>`;
    }
  }

  return ratingHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  addTestimonialsToHTML();
});
