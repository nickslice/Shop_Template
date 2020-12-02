$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 500,
		centerMode: true,
      infinite: true,
	});
	$( 'a' ).click(function(event) {
  		event.preventDefault();
	});
	$('.category__title').click(function(event) {
		$(this).toggleClass('_active').next().slideToggle(300);
		const $current = $(this).text();
		$('.path__category').text($current);
	});
	   $('.list__item').click(function(e) {
	      if($(this).hasClass('active')) {
	         $(this).removeClass('active');
	      } else {
	         $(".list__item").removeClass("active");
	         $(this).addClass('active');
	      }
	   });
		$('.paginator__list a').click(function(){
			if($(this).hasClass('pactive')) {
				$(this).removeClass('pactive');
			} else {
				$('.paginator__list a').removeClass('pactive');
				$(this).addClass('pactive');
			}
		});
});

const popupLink = document.querySelector('.popup-link');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const body = document.querySelector('body');
const closePopup = document.querySelector('.close-popup');

popupLink.addEventListener('click', function(){
	popup.classList.add('open');
	popupForm.classList.add('formopened');
	body.classList.add('lock');
	closePopup.style.zIndex = '500';
});

closePopup.addEventListener('click', function(){
	popup.classList.remove('open');
	popupForm.classList.remove('formopened');
	body.classList.remove('lock');
	closePopup.style.zIndex = '500';
});

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', () => {
	iconMenu.classList.toggle('active');
	menuBody.classList.toggle('menu-active');
	body.classList.toggle('lock');
	closePopup.style.zIndex = null;
	console.log(closePopup.style.zIndex);
});
