const burgerBtn = document.querySelector('.header__burger-btn');
const navigation = document.querySelector('.navigation');

// toggles class on click on burger menu to open mobile navigation
if (!!burgerBtn && !!navigation) {
  burgerBtn.addEventListener('click', () => {
    navigation.classList.toggle('navigation--open');
  });
}

let darkModeSettings = JSON.parse(window.localStorage.getItem('darkModeState')) ?? window.matchMedia('(prefers-color-scheme: dark)').matches;

/** Helper function to set the darkmode.
 *
 * @param {boolean} darkModeState - the new darkmode state
 * @return {void}
 */
const setDarkMode = (darkModeState) => {
  if (darkModeState) {
    document.documentElement.classList.add('darkmode--on');
    darkModeSettings = true;
    return;
  }

  document.documentElement.classList.remove('darkmode--on');
  darkModeSettings = false;
};

if (darkModeSettings) {
  setDarkMode(true);
}

const darkModeButton = document.querySelector('.header__icon--darkmode');
darkModeButton.addEventListener('click', () => {
  setDarkMode(!darkModeSettings);
  window.localStorage.setItem('darkModeState', darkModeSettings);
});
