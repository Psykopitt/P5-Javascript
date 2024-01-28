const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*** Compteur ***/
let count = 0;

/*** Bannière ***/
const bannerSlides = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");

/*** Flèches ***/
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

/*** Bullet Points ***/
const dotsSlides = document.querySelector(".dots");

/*** Event Listeners ***/
arrowLeft.addEventListener("click", previousSlide)
/*** Test via ***/ console.log("clic flèche gauche fonctionnel"); 

arrowRight.addEventListener("click", nextSlide)
/*** Test via ***/ console.log("clic flèche droite fonctionnel"); 

/*** Création Bullet Points ***/
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add("dot")
	dotsSlides.appendChild(dot);
}

/*** Déclaration de variable et attribution du point sélectionné ***/
let dotSelected = document.querySelectorAll(".dot");
dotSelected[count].classList.add("dot_selected");

/*** Fonction d'ajout des images ***/
function showSlide() {
	bannerSlides.src = `./assets/images/slideshow/${slides[count].image}`;
	bannerTagLine.innerHTML = slides[count].tagLine;
}

/*** Fonction flèche gauche ***/
function previousSlide() {
	dotSelected[count].classList.remove("dot_selected");
	if (count <= 0) {
		count = slides.length - 1;
	}
	else {
		count--;
	}
	dotSelected[count].classList.add("dot_selected");
	showSlide()
}

/*** Fonction flèche droite ***/
function nextSlide() {
	dotSelected[count].classList.remove("dot_selected");
	if (count >= slides.length - 1) {
		count = 0;
	}
	else {
		count++;
	}
	dotSelected[count].classList.add("dot_selected");
	showSlide()
}
