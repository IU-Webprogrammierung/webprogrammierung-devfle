const projectItems = document.querySelectorAll('.project-item');
for (const project of projectItems) {
  project.addEventListener('click', (e) => {
    e.currentTarget.firstElementChild.classList.add('project-item-popup--visible');
    e.stopPropagation();
  });
}

const closeButtons = document.querySelectorAll('.project-item-popup__button');
for (const button of closeButtons) {
  button.addEventListener('click', (e) => {
    e.target.parentElement.classList.remove('project-item-popup--visible');
    e.stopPropagation();
  });
}
