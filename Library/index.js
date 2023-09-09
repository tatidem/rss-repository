function evaluateProject() {
  console.log(
    "Самооценка по пунктам:\n" +
    "блок <header> +2\n" +
    "секция Welcome +2\n" +
    "секция About +4\n" +
    "секция Favorites +2\n" +
    "секция CoffeShop +4\n" +
    "секция Contacts +4\n" +
    "секция LibraryCard +4\n" +
    "блок <footer> +2\n" +
    "Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n" +
    "нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.\n" +
    "элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.\n" +
    "элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4.\n" +
    "На ширине экрана 768рх реализовано адаптивное меню +12\n" +
    "при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n" +
    "при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +2\n" +
    "ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2\n" +
    "размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2"
  );
}
  evaluateProject();

  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('input[name="seasonGroup"]');
    const seasonBlocks = document.querySelectorAll('.season_block');
    const labels = document.querySelectorAll('.radio_btn label');

    for (let i = 1; i < seasonBlocks.length; i++) {
    seasonBlocks[i].classList.add('hidden');
    }

    buttons[0].classList.add('active');
    labels[0].style.fontWeight = 'bold';

    buttons.forEach((button, index) => {
    button.addEventListener('click', () => {

        seasonBlocks.forEach((block) => {
        block.classList.add('hidden');
        });

        seasonBlocks[index].classList.remove('hidden');

        buttons.forEach((btn) => {
        btn.classList.remove('active');
        });

        button.classList.add('active');

        labels.forEach((label) => {
        label.style.fontWeight = 'normal';
        });

        labels[index].style.fontWeight = 'bold';
    });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const buyButtons = document.querySelectorAll('.buy');
  const ownButtons = document.querySelectorAll('.Own');

  buyButtons.forEach((buyButton, index) => {
      buyButton.addEventListener('click', () => {
          buyButton.style.display = 'none';
          ownButtons[index].style.display = 'block';
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.getElementById('burger-icon');
  const crossIcon = document.querySelector('.cross-icon');
  const menuShow = document.getElementById('show');
  const menuItems = document.querySelectorAll('.menu_mob li');

  burgerIcon.addEventListener('click', () => {
      menuShow.classList.add('active');
      burgerIcon.style.display = 'none';
      crossIcon.style.display = 'block';
  });

  crossIcon.addEventListener('click', () => {
      menuShow.classList.remove('active');
      burgerIcon.style.display = 'flex';
      crossIcon.style.display = 'none';
  });
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuShow.classList.remove('active');
      burgerIcon.style.display = 'flex';
      crossIcon.style.display = 'none';
    });
  });
  document.addEventListener('click', (e) => {
    if (
      !menuShow.contains(e.target) &&
      e.target !== burgerIcon &&
      e.target !== crossIcon
    ) {
      // Если клик был вне меню, бургера и крестика
      menuShow.classList.remove('active');
      burgerIcon.style.display = 'flex';
      crossIcon.style.display = 'none';
    }
  });
});