function evaluateProject() {
  console.log()
  
}

evaluateProject();
var MYDATA;

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



document.addEventListener('DOMContentLoaded', function () {
  const profileIcon = document.querySelector('.profile');
  const profileRegister = document.querySelector('.profile_register.Register');
  const loginLink = document.getElementById('loginLink'); // Получаем ссылку "Login"
  const registerLink = document.getElementById('registerLink'); // Получаем ссылку "Register"
  const logOutLink = document.getElementById('LogOut');

  // При нажатии на иконку профиля
  profileIcon.addEventListener('click', function (event) {
    event.stopPropagation(); // Предотвращаем всплытие события

    // Переключаем видимость элемента .profile_register.Register
    profileRegister.classList.toggle('show');
  });

  // При нажатии за пределами элемента .profile_register.Register
  document.addEventListener('click', function (event) {
    // Если нажатие было за пределами .profile_register.Register
    if (!profileRegister.contains(event.target) || !profileIcon.contains(event.target) || !document.querySelector('.Login').contains(event.target) ) {
      profileRegister.classList.remove('show'); // Скрываем элемент
	  document.querySelector('.Login').style.display = 'none';
    } 
  });

  loginLink.addEventListener('click', function () {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    profileRegister.classList.remove('show'); // Скрываем элемент
});

 document.getElementById('LogOut').addEventListener('click', function (event) {
	MYDATA = {};
	localStorage.setItem("MYDATA_LB", "");
	location.reload();
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
  const signUpButton = document.querySelector('.get_card .buttons .Sign_Up'); // Получаем кнопку "Sign Up"
  const loginButton = document.querySelector('.get_card .buttons .Log_in');
  const buyButton = document.querySelectorAll('.season_block .buy');
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
  
    // При нажатии на кнопку "buy"
    buyButton.forEach(function (button) {
      button.addEventListener('click', function () {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        overlay.style.display = "block";
      });
     });
  // Закрытие форм и подложки при клике на элементы с классом .close_button
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      loginForm.style.display = "none";
      registerForm.style.display = "none";
	  document.querySelector('.modal.profile').style.display = "none";
      overlay.style.display = "none"; // Скрываем подложку
    });
  });

  // Закрытие форм и подложки при клике вне формы
  document.addEventListener("click", function (event) {
    if (event.target == overlay) {
      loginForm.style.display = "none";
      registerForm.style.display = "none";
	  document.querySelector('.modal.profile').style.display = "none";
      overlay.style.display = "none"; // Скрываем подложку
    }
  });
  document.querySelectorAll('.Have_account ').forEach(function (x) {x.addEventListener("click", function (event) {
    if (loginForm.style.display == "none") {
     openLoginForm();
    } else {
     openRegisterForm();
    }
     });
    });
	
	
	
	document.querySelector('#register_btn').addEventListener('click', function () {
		var firstName = document.getElementById("first-name").value;
		var lastName = document.getElementById("last-name").value;
		var email = document.getElementById("email").value;
		var pass = document.getElementById("password").value;
		var nameInput = document.getElementById('name_a').value;
		var cardNumberInput = document.getElementById('card_number_a').value;
		const profileCardNumber = document.querySelector('.profile_right .card_number');

    // Проверьте, что поля не пустые
    if (firstName && lastName && validateEmail(email) && pass.length > 7) {//&& lastName && email && pass
			regin({
				firstName: firstName,
				lastName:  lastName,
				email: email,
				pass: pass,
				card_number: randomString(9)
			});
		} else {
			alert("Введите данные");
		}
	});

// Добавьте обработчик события для иконки профиля

document.getElementById("initialInput").addEventListener('click', function () {

  // const profileRegister = document.querySelector('.profile_register.Register');
  //const profileLogin = document.querySelector('.profile_register.Login');
    // При клике на иконку профиля показать форму .profile_register.Login
    document.querySelector('.profile_register.Register').classList.remove('show');
    document.querySelector('.profile_register.Login').style.display = "block";
});

document.getElementById('login_btn').addEventListener('click', function () {
	var email = document.getElementById("email2").value;
	var pass = document.getElementById("password2").value;
	if (validateEmail(email) && pass) {//&& lastName && email && pass
			regin({
				firstName: MYDATA ? MYDATA.firstName : 'Tatiana',
				lastName:  MYDATA ? MYDATA.lastName : 'Demianova',
				email: email,
				pass: pass, 
				card_number: randomString(9)
			});
			loginForm.style.display = "none";
            overlay.style.display = "none"; 
	} else {
		alert("Введите данные");
	}
});

function openProfile() {
  overlay.style.display = "block";
  document.querySelector('.modal.profile').style.display = "block";
  document.querySelector('.modal.profile').style.zIndex = "2000";
  document.querySelector('.profile_register.Login').style.display = "none";
  document.querySelector('.profile_logo').innerHTML = MYDATA.firstName.charAt(0) + MYDATA.lastName.charAt(0);
  document.querySelector('.profile_name').innerHTML = MYDATA.firstName + " " + MYDATA.lastName;
  document.querySelector('.card_number').innerHTML = MYDATA.card_number;
  
}

// Добавляем обработчик для .MyProfile
document.querySelector('.MyProfile').addEventListener("click", openProfile);

// Добавляем обработчик для .Visit_your_profile .Profile
document.querySelector('.Visit_your_profile .Profile').addEventListener("click", openProfile);

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

  document.addEventListener('DOMContentLoaded', function () {
    // Получите ссылку на элемент с id "LogOut"
    const logOutLink = document.getElementById('LogOut');

    // Добавьте обработчик события клика для ссылки "LogOut"
    logOutLink.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвратите стандартное действие ссылки (переход по ссылке)

        // Выполните выход из аккаунта (например, отправьте запрос на сервер)
        // ...

        // После успешного выхода из аккаунта, перенаправьте пользователя на дефолтную страницу
        window.location.href = "index.html"; // Замените "default.html" на URL вашей дефолтной страницы
    });
});

});

function regin(data) {
	if (data){
		MYDATA = data;
		localStorage.setItem("MYDATA_LB", JSON.stringify(data));
		document.getElementById("initialInput").innerHTML = data.firstName.charAt(0) + data.lastName.charAt(0);
        document.querySelector('.profile_icon').style.display = "none";
		document.querySelector('.user_authorised').style.display = "flex";
        document.querySelector('.find_card').style.display = "none";
        document.querySelector('.get_card').style.display = "none";
        document.querySelector('.Your_library_card').style.display = "block";
        document.querySelector('.Visit_your_profile').style.display = "flex";
        document.querySelector(".modal.register_form").style.display = "none";
		document.querySelector(".overlay").style.display = "none";
		document.querySelector('#name_a').value = MYDATA.firstName + " " + MYDATA.lastName;;
		document.querySelector('#name_a').disabled = true;
		document.querySelector('#card_number_a').value = data.card_number;
		document.querySelector('#card_number_a').disabled = true;
		document.getElementById('card_number_a').value.placeholder = document.querySelector('.profile_right .card_number').textContent;
		document.querySelector(".MyProfileNumber").innerHTML = '<div style="font-size: 12px;">'+data.card_number+'</div>';
	}
}

function validateEmail(email){ 
     var re = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
     return re.test(email); 
}

function randomString(i) {
    var rnd = '';
    while (rnd.length < i) 
        rnd += Math.random().toString(16).substring(2);
    return rnd.substring(0, i).toUpperCase();
};


!function(){
	MYDATA = localStorage.getItem("MYDATA_LB");
	if (MYDATA)  document.addEventListener('DOMContentLoaded', function () { regin(JSON.parse(MYDATA));});
}();