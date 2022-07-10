const projectItems = document.querySelectorAll('.project-item');

for (const project of projectItems) {
  project.addEventListener('click', (e) => {
    e.currentTarget.classList.add('project-item__popup--visible');
  });
}
