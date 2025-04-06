const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

// funkcja strzałkowa
const handleNav = () => {
	nav.classList.toggle('nav--active');

	navBtnBars.classList.remove('black-bars-color');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});
	handleNavItemsAnimation();
};
// dla każdego itemu w klasie navitem mamy dodać wyszukiwanie

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animations');
		// animation-delay: 0.3s;
		item.style.animationDelay = '.' + delayTime + 's';
		// dla każdego nazego linku dodamy sobie .  0          s
		delayTime++;
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
// zmienia rok na aktualny na footerze
handleCurrentYear();

navBtn.addEventListener('click', handleNav);

const handleObserver = () => {
	const currentSection = window.scrollY;
	// ta zmienna będzie przechowywać ile zeskrolowaliśmy

	allSections.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

// burger btn zmienia kolor podczas skrolowania te 60 bo wcięcia mamy

window.addEventListener('scroll', handleObserver);
