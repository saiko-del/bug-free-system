



const stars = document.querySelectorAll('.like-button');

let currentRating = 0;

stars.forEach(star => {
  star.addEventListener('click', (event) => {
    const ratingValue = event.target.getAttribute('data-value');
    currentRating = ratingValue;

    updateStars(currentRating);
  });

  star.addEventListener('mouseover', (event) => {
    const ratingValue = event.target.getAttribute('data-value');
    highlightStars(ratingValue);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(currentRating);
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    const starValue = star.getAttribute('data-value');

    if (starValue <= rating) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
}

function highlightStars(rating) {
  stars.forEach(star => {
    const starValue = star.getAttribute('data-value');

    if (starValue <= rating) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const likeBtn = document.getElementById("likeBtn");

  likeBtn.addEventListener("click", function () {
    this.classList.toggle("liked");

    if (this.classList.contains("liked")) {
      this.textContent = "♥";
    } else {
      this.textContent = "♡";
    }
  });
});