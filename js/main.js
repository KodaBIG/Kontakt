const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
// funkcja strzałkowa
const handleNav = () => {
	nav.classList.toggle('nav--active');

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

navBtn.addEventListener('click', handleNav);
