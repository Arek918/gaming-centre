const burgerBtn = document.querySelector('.burger-btn');
const barOne = document.querySelector('.burger-btn__bar-one');
const barTwo = document.querySelector('.burger-btn__bar-two');
const barThree = document.querySelector('.burger-btn__bar-three');

const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.menu');
const allNavItems = document.querySelectorAll('.link');
const sessionList = document.querySelector('.roll');
const dropdown = document.querySelector('.dropdown');
const dropdownLink = document.querySelectorAll('.dropdown-link');

// search input

const btn = document.querySelector('.nav-desktop__search-btn');
const input = document.querySelector('.nav-desktop__search-input');

//  HIDE BAR

const navDesktop = document.querySelector('.nav-desktop');

// SCROLL-SPY

const sectionLeft = document.querySelectorAll('.section-left');
const scrollSpySections = document.querySelectorAll('section');

// footer year

const footerYear = document.querySelector('.footer__year');

// FAQ

const faq = document.querySelector('.faq__box');
const faqBtns = document.querySelectorAll('.faq__btn');

// COOKIE-ALERT

const cookieBox = document.querySelector('.cookie-box');
const cookieBtn = document.querySelector('.cookie-box__btn');


// ADVE WRD ANIMATION 
const adveWrd = document.querySelectorAll('.adve-wrd')


// OFFERS CARD ANIMATION 

const offersCard = document.querySelectorAll('.offers__card')



/// OFFERS CARD ANIMATION 

const observeOffersCard = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('offers__card--active', entry.isIntersecting)

			if(entry.isIntersecting) {
				observeOffersCard.unobserve(entry.target)
			}
		})
	},

	{
		rootMargin: '100px 0px -100px 0px',
		// threshold: 1,
	}
)

offersCard.forEach((card) => {
	observeOffersCard.observe(card)
})


///ADVE WRD ANIMATION 


const observeAdweWrd = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('adve-wrd--active', entry.isIntersecting)

			if(entry.isIntersecting){
				observeAdweWrd.unobserve(entry.target)
			}

		})
	},
	{
		rootMargin: '100px 0px -100px 0px'
	}

)

adveWrd.forEach((adv) => {
	observeAdweWrd.observe(adv)
})









/// COOKIE-ALERT

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie');
	if (cookieEaten) {
		cookieBox.classList.add('hide');
	}
};

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true');
	cookieBox.classList.add('hide');
};

cookieBtn.addEventListener('click', handleCookieBox);
showCookie();

///FAQ

//----faq button animation

const observeFaqBtns = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('faq__btn--active', entry.isIntersecting);

			if (entry.isIntersecting) {
				observeFaqBtns.unobserve(entry.target);
			}
		});
	},

	{
		rootMargin: '100px 0px -100px 0px',
		// threshold: 1,
	}
);

faqBtns.forEach((btns) => {
	observeFaqBtns.observe(btns);
});

//------ faq accordion

function openFaqItems() {
	if (this.nextElementSibling.classList.contains('faq__info--active')) {
		this.nextElementSibling.classList.remove('faq__info--active');
	} else {
		closeFaqItems();
		this.nextElementSibling.classList.toggle('faq__info--active');
	}
}

const closeFaqItems = () => {
	const allActiveItems = document.querySelectorAll('.faq__info');
	allActiveItems.forEach((item) => item.classList.remove('faq__info--active'));
};

const clickOutsideFaq = (e) => {
	if (
		e.target.classList.contains('faq__btn') ||
		e.target.classList.contains('faq__info') ||
		e.target.classList.contains('faq__info-text')
	)
		return;

	closeFaqItems();
};

faqBtns.forEach((btn) => btn.addEventListener('click', openFaqItems));

window.addEventListener('click', clickOutsideFaq);

/// footer year

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

// / SCROLL SPY

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle(
				'section-left--active',
				entry.isIntersecting
			);
		});
	},
	{
		rootMargin: '200px 0px -300px 0px',
		threshold: 1,
	}
);

sectionLeft.forEach((section) => {
	observer.observe(section);
});

//// HIDE BAR

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
	if (lastScrollY < window.scrollY) {
		navDesktop.classList.add('nav--hidden');
	} else {
		navDesktop.classList.remove('nav--hidden');
	}

	lastScrollY = window.scrollY;
});

burgerBtn.addEventListener('click', () => {
	barOne.classList.toggle('active__bar--one');
	barTwo.classList.toggle('active__bar--two');
	barThree.classList.toggle('active__bar--three');
});

const handleNav = () => {
	nav.classList.toggle('nav-mobile--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-mobile--active');
			barOne.classList.remove('active__bar--one');
			barTwo.classList.remove('active__bar--two');
			barThree.classList.remove('active__bar--three');
		});
	});
};

sessionList.addEventListener('click', () => {
	dropdown.classList.toggle('dropdown--active');
	nav.classList.toggle('dropdown--height');
});

dropdownLink.forEach((item) => {
	item.addEventListener('click', () => {
		nav.classList.remove('nav-mobile--active');
		barOne.classList.remove('active__bar--one');
		barTwo.classList.remove('active__bar--two');
		barThree.classList.remove('active__bar--three');
		// nav.classList.remove('dropdown--height');
		// dropdown.classList.remove('dropdown--active');
	});
});
burgerBtn.addEventListener('click', handleNav);

///  search-box  /////

const showSearchBar = () => {
	input.classList.toggle('active');
};

btn.addEventListener('click', showSearchBar);
