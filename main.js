const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map((char, i) =>
    `<span style="transform: rotate(${i * 6.6}deg)">${char}</span>`
).join("")


const text1 = document.querySelector(".text1 p");
text1.innerHTML = text1.innerText.split("").map((char, i) =>
    `<span style="transform: rotate(${i * 6.6}deg)">${char}</span>`
).join("")

const head = document.querySelector(".head h1");
head.innerHTML = head.innerText
  .split("")
  .map((char, i) => {
    const translateY = i * 10; // Adjust the value to control the vertical position
    return `<span style="transform: translateY(${translateY}px)">${char}</span>`;
  })
  .join("");
