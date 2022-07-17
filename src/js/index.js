const burgerBtn = document.querySelector('.header__burger-btn');
const navigation = document.querySelector('.navigation');

// toggles class on click on burger menu to open mobile navigation
if (!!burgerBtn && !!navigation) {
  burgerBtn.addEventListener('click', () => {
    navigation.classList.toggle('navigation--open');
  });
}

let darkModeSettings = JSON.parse(window.localStorage.getItem('darkModeState'));

if (darkModeSettings) {
  document.documentElement.classList.add('darkmode--on');
}

// null is been returned if darkmode toggle is been never used
if (darkModeSettings === null) {
  darkModeSettings = false;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('darkmode--on');
    darkModeSettings = true;
  }
}

const darkModeButton = document.querySelector('.header__icon--darkmode');
darkModeButton.addEventListener('click', () => {
  console.log(darkModeSettings);
  darkModeSettings = !darkModeSettings;
  window.localStorage.setItem('darkModeState', darkModeSettings);
  document.documentElement.classList.toggle('darkmode--on');
});
