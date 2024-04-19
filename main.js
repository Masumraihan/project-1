import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import EmblaCarousel from "embla-carousel";

const emblaNode = document.querySelector(".embla");
const options = { loop: false, autoplay: true, speed: 10 };
const emblaApi = EmblaCarousel(emblaNode, options);

//console.log(emblaApi.slideNodes()); // Access API

// NAVBAR CATEGORIES
const categories = [
  "All",
  "Sci-fi",
  "Drama",
  "Action",
  "Horror",
  "All",
  "Sci-fi",
  "Drama",
  "Action",
  "Horror",
  "All",
  "Sci-fi",
  "Drama",
  "Action",
  "Horror",
  "All",
  "Sci-fi",
  "Drama",
  "Action",
  "Horror",
];

const emblaContainer = document.getElementById("emblaContainer");
categories.forEach((category) => {
  const div = document.createElement("div");
  div.classList.add("embla__slide");
  div.innerHTML = `<a href="#" class="text-center text-sm font-semibold">${category}</a>`;
  emblaContainer.appendChild(div);
});
