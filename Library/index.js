function evaluateProject() {
  console.log()
  
}
  evaluateProject();




document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.getElementById('burger-icon');
  const crossIcon = document.querySelector('.cross-icon');
  const menuShow = document.getElementById('burger_show');
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


document.addEventListener('DOMContentLoaded', function () {
  const aboutImages = document.querySelectorAll('.about-image');
  const pageButtonsContainer = document.querySelector('.pagination');
  const pageButtons = document.querySelectorAll('.page-btn');
  const arrow1 = document.querySelector('.arrow1');
  const arrow2 = document.querySelector('.arrow2');

  let currentIndex = 0;
  let imagesPerPage = 3;

  function showImages(startIndex) {
    aboutImages.forEach(image => {
      image.style.display = 'none';
    });

    for (let i = startIndex; i < startIndex + imagesPerPage; i++) {
      if (i < aboutImages.length) {
        aboutImages[i].style.display = 'block';
      }
    }
  }

  function updatePageButtons() {
    pageButtonsContainer.innerHTML = '';

    // Изменяем количество кнопок пагинации в зависимости от imagesPerPage
    for (let i = 0; i <= aboutImages.length - imagesPerPage; i++) {
      const button = document.createElement('button');
      button.classList.add('page-btn');

      button.addEventListener('click', () => {
        currentIndex = i;
        showImages(currentIndex);
      });

      pageButtonsContainer.appendChild(button);
    }
  }

  function updateLayout() {
    if (window.innerWidth <= 768) {
      imagesPerPage = 1;
      updatePageButtons();
    } else {
      imagesPerPage = 3;
      updatePageButtons();
    }
    showImages(currentIndex);
  }

  // Обработчик изменения размера окна
  window.addEventListener('resize', updateLayout);

  // Обработчик для переключения на предыдущее изображение
  arrow1.addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = aboutImages.length - 1;
    }
    showImages(currentIndex);
  });

  // Обработчик для переключения на следующее изображение
  arrow2.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex >= aboutImages.length) {
      currentIndex = 0;
    }
    showImages(currentIndex);
  });

  // Первоначальное обновление макета
  updateLayout();
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
  const buttons = document.querySelectorAll('input[name="seasonGroup"]');
  const seasonBlocks = document.querySelectorAll('.season_block');
  const labels = document.querySelectorAll('.radio_btn label');

  // Функция для добавления и удаления классов анимации
  function toggleAnimationClasses() {
      seasonBlocks.forEach((block) => {
          block.classList.remove('fade-in');
          block.classList.add('fade-out');
      });
      
      setTimeout(() => {
          seasonBlocks.forEach((block) => {
              block.classList.remove('fade-out');
              block.classList.add('fade-in');
          });
      }, 200); // Время анимации 0.5 секунды
  }

  for (let i = 1; i < seasonBlocks.length; i++) {
      seasonBlocks[i].classList.add('hidden');
  }

  buttons[0].classList.add('active');
  labels[0].style.fontWeight = 'bold';

  buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
          toggleAnimationClasses();

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

// document.addEventListener('DOMContentLoaded', function () {
//   const profileIcon = document.querySelector('.profile');
//   const profileRegister = document.querySelector('.profile_register.Register');

//   // При нажатии на иконку профиля
//   profileIcon.addEventListener('click', function (event) {
//       // event.stopPropagation(); // Предотвращаем всплытие события

//       // Переключаем видимость элемента .profile_register.Register
//       profileRegister.classList.toggle('show');
//   });

//   // При нажатии за пределами элемента .profile_register.Register
//   document.addEventListener('click', function (event) {
//       // Если нажатие было за пределами .profile_register.Register
//       if (!profileRegister.contains(event.target) && !profileIcon.contains(event.target)) {
//           profileRegister.classList.remove('show'); // Скрываем элемент
//       }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const profileIcon = document.querySelector('.profile');
  const profileRegister = document.querySelector('.profile_register.Register');
  const loginLink = document.getElementById('loginLink'); // Получаем ссылку "Login"
  const registerLink = document.getElementById('registerLink'); // Получаем ссылку "Register"

  // При нажатии на иконку профиля
  profileIcon.addEventListener('click', function (event) {
    event.stopPropagation(); // Предотвращаем всплытие события

    // Переключаем видимость элемента .profile_register.Register
    profileRegister.classList.toggle('show');
  });

  // При нажатии за пределами элемента .profile_register.Register
  document.addEventListener('click', function (event) {
    // Если нажатие было за пределами .profile_register.Register
    if (!profileRegister.contains(event.target) && !profileIcon.contains(event.target)) {
      profileRegister.classList.remove('show'); // Скрываем элемент
    }
  });

  loginLink.addEventListener('click', function () {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    profileRegister.classList.remove('show'); // Скрываем элемент
});

// При нажатии на ссылку "Register"
registerLink.addEventListener('click', function () {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
    profileRegister.classList.remove('show'); // Скрываем элемент
});
});

document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");
  const loginForm = document.querySelector(".modal.Login_form");
  const registerForm = document.querySelector(".modal.register_form");
  const closeButtons = document.querySelectorAll(".close_button");
  const overlay = document.querySelector(".overlay");

  // Функция для открытия формы логина
  function openLoginForm() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    overlay.style.display = "block"; // Показываем подложку
  }

  // Функция для открытия формы регистрации
  function openRegisterForm() {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
    overlay.style.display = "block"; // Показываем подложку
  }

  // Открытие форм по клику на соответствующие ссылки
  loginLink.addEventListener("click", openLoginForm);
  registerLink.addEventListener("click", openRegisterForm);

  // Закрытие форм и подложки при клике на элементы с классом .close_button
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      loginForm.style.display = "none";
      registerForm.style.display = "none";
      overlay.style.display = "none"; // Скрываем подложку
    });
  });

  // Закрытие форм и подложки при клике вне формы
  // document.addEventListener("click", function (event) {
  //   if (!loginForm.contains(event.target) && !registerForm.contains(event.target)) {
  //     loginForm.style.display = "none";
  //     registerForm.style.display = "none";
  //     overlay.style.display = "none"; // Скрываем подложку
  //   }
  // });
});

document.addEventListener('DOMContentLoaded', function () {
  const signUpButton = document.querySelector('.get_card .buttons .Sign_Up'); // Получаем кнопку "Sign Up"
  const loginButton = document.querySelector('.get_card .buttons .Log_in'); // Получаем кнопку "Log in"
  const loginForm = document.querySelector('.modal.Login_form');
  const registerForm = document.querySelector('.modal.register_form');
  const closeButtons = document.querySelectorAll('.close_button');
  const overlay = document.querySelector(".overlay");

  // При нажатии на кнопку "Sign Up"
  signUpButton.addEventListener('click', function () {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
    overlay.style.display = "block";
  });

  // При нажатии на кнопку "Log in"
  loginButton.addEventListener('click', function () {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    overlay.style.display = "block";
  });

  // Закрытие формы при клике на элементы с классом .close_button
  closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      loginForm.style.display = 'none';
      registerForm.style.display = 'none';
      overlay.style.display = "none";
    });
  });

  // Закрытие формы при клике вне формы
  // document.addEventListener('click', function (event) {
  //   // Проверяем, является ли элемент, на который кликнули, частью формы или ее дочерним элементом
  //   if (!loginForm.contains(event.target) && !registerForm.contains(event.target)) {
  //     loginForm.style.display = 'none';
  //     registerForm.style.display = 'none';
  //   }
  // });
});







