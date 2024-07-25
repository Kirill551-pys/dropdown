const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
  const valueElement = dropdown.querySelector('.dropdown__value');
  const listElement = dropdown.querySelector('.dropdown__list');
  const listItems = dropdown.querySelectorAll('.dropdown__item');

  valueElement.addEventListener('click', () => {
    listElement.classList.toggle('dropdown__list_active');
  });

  listItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const newValue = event.target.textContent;
      valueElement.textContent = newValue;
      listElement.classList.remove('dropdown__list_active');
    });
  });
});
