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
const products = document.querySelectorAll('.nav-desktop__search-list-li');
const productsList = document.querySelector('.nav-desktop__search-list');
const searchLink = document.querySelectorAll('.search-link');

//serch mobile input

const mBtn = document.querySelector('.nav-mobile__search-btn');
const mInput = document.querySelector('.nav-mobile__search-input');
const mProducts = document.querySelectorAll('.nav-mobile__search-list-li');
const mProductsList = document.querySelector('.nav-mobile__search-list');
const mSearchLink = document.querySelectorAll('.mobile-search-link');

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
const faqIcons = document.querySelectorAll('.faq-icon')

// COOKIE-ALERT

const cookieBox = document.querySelector('.cookie-box');
const cookieBtn = document.querySelector('.cookie-box__btn');

// ADVE WRD ANIMATION
const adveWrd = document.querySelectorAll('.adve-wrd');

// Order
const offersBtn = document.querySelectorAll('.offers__card-btn');
const orderClose = document.querySelector('.order__box-btn-close');
const orderWindow = document.querySelector('.order');
const orderConsole = document.querySelector('.order__box-console');
const orderTitle = document.querySelectorAll('.offers__card-title');
const cardBody = document.querySelectorAll('.offers__card-body');
const orderImg = document.querySelectorAll('.order-img');
const orderNewImg = document.querySelector('.order__box-img');

// fa brands observer

const brands = document.querySelectorAll('.brand');

/// fa brands- observer

const brandsObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('brands--active', entry.isIntersecting);

			if (entry.isIntersecting) {
				brandsObserver.unobserve(entry.target);
			}
		});
	},
	{
		rootMargin: '200px 0px -300px 0px',
		
		
	}
);

brands.forEach((brand) => {
	brandsObserver.observe(brand);
});

///ADVE WRD ANIMATION

const observeAdweWrd = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('adve-wrd--active', entry.isIntersecting);

			if (entry.isIntersecting) {
				observeAdweWrd.unobserve(entry.target);
			}
		});
	},
	{
		rootMargin: '100px 0px -100px 0px',
	}
);

adveWrd.forEach((adv) => {
	observeAdweWrd.observe(adv);
});

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
		this.firstChild.nextElementSibling.classList.add('fa-plus');

		this.firstChild.nextElementSibling.classList.remove('fa-minus');
		
	
		

	
	} else {
		closeFaqItems();
		this.nextElementSibling.classList.toggle('faq__info--active');
		this.firstChild.nextElementSibling.classList.remove('fa-plus');
        this.firstChild.nextElementSibling.classList.add('fa-minus');

	

		

	}
}

const closeFaqItems = () => {
	const allActiveItems = document.querySelectorAll('.faq__info');
	allActiveItems.forEach((item) => item.classList.remove('faq__info--active'));

	faqIcons.forEach((icon) => {
		icon.classList.remove('fa-minus')
		icon.classList.add('fa-plus')

	})


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
	clearSearchList();
};

const arrProducts = [...products];

// console.log(arrProducts);

const searchWord = (e) => {
	const currentWord = e.target.value;
	let result = arrProducts;

	productsList.textContent = '';

	result = result.filter((arrProducts) =>
		arrProducts.textContent.toLowerCase().includes(currentWord)
	);

	result.forEach((product) => productsList.append(product));

	if (currentWord == 0) {
		productsList.textContent = '';
		productsList.style.visibility = 'hidden';
	} else {
		productsList.style.visibility = 'visible';
	}
};

const clearSearchList = () => {
	productsList.style.visibility = 'hidden';
};

searchLink.forEach((link) => {
	link.addEventListener('click', () => {
		productsList.style.visibility = 'hidden';
	});
});

btn.addEventListener('click', showSearchBar);

input.addEventListener('input', searchWord);

/// mobile search box

const mArrProducts = [...mProducts];

const mSearchWord = (e) => {
	const currentWord = e.target.value;
	let mResult = mArrProducts;

	mProductsList.textContent = '';

	mResult = mResult.filter((mArrProducts) =>
		mArrProducts.textContent.toLocaleLowerCase().includes(currentWord)
	);

	mResult.forEach((product) => {
		mProductsList.append(product);
	});

	if (currentWord == 0) {
		mProductsList.textContent = '';
		mProductsList.style.display = 'none';
	} else {
		mProductsList.style.display = 'block';
	}
};

mSearchLink.forEach((link) => {
	link.addEventListener('click', () => {
		mProductsList.style.display = 'none';
		nav.classList.remove('nav-mobile--active');
		barOne.classList.remove('active__bar--one');
		barTwo.classList.remove('active__bar--two');
		barThree.classList.remove('active__bar--three');
	});
});

mInput.addEventListener('input', mSearchWord);

// console.log(orderImg[1].attributes[1].textContent);

const orderOn = () => {
	orderWindow.style.display = 'flex';
};

const orderOff = () => {
	orderWindow.style.display = 'none';
};

offersBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const newImg =
			e.target.parentElement.parentElement.firstChild.nextElementSibling
				.attributes[1].textContent;

		orderNewImg.attributes[1].textContent = newImg;

		const newTitle =
			e.target.parentElement.firstChild.nextElementSibling.textContent;

		orderConsole.textContent = `Wybrałeś ${newTitle}`;

		orderOn();
	});
});

orderClose.addEventListener('click', orderOff);
