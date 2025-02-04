// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//import heroImg from '../imgs/hero.jpg'
//document.getElementById('card-img-1').src = heroImg


import card1Url from '../imgs/lepra logo.jpg'
//document.getElementById('card-img-1').src = card1Url


let cards = document.querySelectorAll('#Sluzby .card img')
for (let i = 0; i < cards.length; i++) {
	//console.log(i); // index
	//console.log(cards[i]); // value
	cards[i].src = card1Url
}


//////////////////////////////////////////////
const navbar = new bootstrap.Collapse('#navbarNav', {
	toggle: false
  })
  //navbar._config.toggle = true
//////////////////////////////////////////////////////
function ovladac(){
	let links = document.querySelectorAll('.nav-link')
	let navbar = document.querySelector('#navbarNav')
	let clickEvent = () => {
		if (menuJeZatvorene !== null) {
			switcher.click()
		}
	}
	links.forEach((item) => {
		item.addEventListener('click', clickEvent)
	});
}
ovladac()

//////////////////////////////////// 
const switcher = document.querySelector('[data-bs-target="#navbarNav"]')
const navigation = document.querySelector("#navigation")
const menuJeZatvorene = document.querySelector(".navbar-toggler.collapsed")


switcher.addEventListener('click', function () {
	if (menuJeZatvorene !== null) {
		navigation.classList.add("moved")
	}
})

//////////zachytavanie scrollingu okna
/// tu oprav čiernu na top mobile
window.addEventListener('scroll', function () {
	let poloha = window.pageYOffset
	if (poloha < 1 && window.innerWidth > 992 && menuJeZatvorene !== null) {
		navigation.classList.remove("moved")
		
	} else {
		navigation.classList.add("moved")
	}
});