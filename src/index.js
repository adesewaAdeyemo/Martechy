const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const faqicon = item.querySelector(".faq-icon");
  question.addEventListener("click", () => {
    faqicon.innerHTML = answer.style.display === "block" ? "+" : "-";
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});




// const countdownElement = document.getElementById("countdown");
// const a = document.querySelector(".a");

// let seconds = 59;

// const countdownInterval = setInterval(() => {
// seconds--;

// const minutesText = Math.floor(seconds / 60)
//     .toString()
//     .padStart(2, "0");
// const secondsText = (seconds % 60).toString().padStart(2, "0");
// const timeText = `${minutesText}:${secondsText}`;

// countdownElement.textContent = timeText;

// if (seconds === 0) {
//     clearInterval(countdownInterval);
//     countdownElement.style.color = "#000";
// }
// }, 1000);






function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      const text = element.textContent;

      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text copied to clipboard');
        })
        .catch((error) => {
          console.error('Error copying text to clipboard:', error);
        });
    }
  }


  
const cards = document.querySelectorAll(".float-card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.style.filter = "blur(10px)";
      }
    });
  });
  card.addEventListener("mouseleave", () => {
    cards.forEach((otherCard) => {
      otherCard.style.filter = "none";
    });
  });
});


