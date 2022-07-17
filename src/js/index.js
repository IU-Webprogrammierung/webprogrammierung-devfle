const burgerBtn = document.querySelector('.header__burger-btn');
const navigation = document.querySelector('.navigation');

// toggles class on click on burger menu to open mobile navigation
if (!!burgerBtn && !!navigation) {
  burgerBtn.addEventListener('click', () => {
    navigation.classList.toggle('navigation--open');
  });
}

const darkModeButton = document.querySelector('.header__icon--darkmode');
darkModeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('darkmode--on');
});
