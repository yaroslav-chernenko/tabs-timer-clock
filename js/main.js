// ================ TABS ===================

let header = document.querySelector(".info-header"),
   tab = document.querySelectorAll(".info-header-tab"),
   tabContent = document.querySelectorAll(".info-tabcontent");

function hide(x) {
   for (let i = x; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
   }
}
hide(1);

function show(x) {
   for (let i = x; i < tabContent.length; i++) {
      tabContent[i].classList.remove("hide");
      tabContent[i].classList.add("show");
      break;
   }
}

header.addEventListener("click", function (event) {
   let target = event.target;

   if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
         if (tab[i] == target) {
            hide(0);
            show(i);
            break;
         }
      }
   }
});

// =================== CLOCK`S =====================

function clockUpdate() {
   let time = new Date();
   let hours = time.getHours();
   let minutes = time.getMinutes();
   let seconds = time.getSeconds();

   return {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
   };
}

function clockOn() {
   let timer = document.querySelector("#timer"),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds");

   let timeProperty = clockUpdate();

   hours.textContent = timeProperty.hours < 10 ? "0" + timeProperty.hours : timeProperty.hours;
   minutes.textContent = timeProperty.minutes < 10 ? "0" + timeProperty.minutes : timeProperty.minutes;
   seconds.textContent = timeProperty.seconds < 10 ? "0" + timeProperty.seconds : timeProperty.seconds;

   setTimeout(clockOn, 1000);
}

clockOn();

// --------------TIMER --------------

// let finalDate = new Date(2021, 2, 28),
//   timeProperty = {};

// function timerUpdate() {
//   let total = Date.parse(finalDate) - Date.parse(new Date());

//   timeProperty.total = total;
//   timeProperty.seconds = Math.floor(total / 1000) % 60;
//   timeProperty.minutes = Math.floor(total / 1000 / 60) % 60;

//   function scan() {
//     let x = Math.floor(total / 1000 / 60 / 60);

//     if (x <= 24) {
//       timeProperty.hours = x;
//     } else {
//       timeProperty.hours = x % 24;
//       timeProperty.days = Math.floor(x / 24);
//       timeProperty.checkDays = true;
//     }
//   }
//   scan();

//   return timeProperty;
// }

// function timerOn() {
//   let timer = document.getElementById("timer"),
//     seconds = timer.querySelector(".seconds"),
//     minutes = timer.querySelector(".minutes"),
//     hours = timer.querySelector(".hours");

//   let sum = timerUpdate();

//   seconds.textContent = sum.seconds > 9 ? sum.seconds : "0" + sum.seconds;
//   minutes.textContent = sum.minutes > 9 ? sum.minutes : "0" + sum.minutes;
//   hours.textContent = sum.hours > 9 ? sum.hours : "0" + sum.hours;

//   if (sum.checkDays) {
//     addDays();
//   }

//   function addDays() {
//     let dayCheck = timer.querySelector(".days");

//     if (!dayCheck) {
//       let day = document.createElement("span");

//       day.classList.add("days");
//       timer.prepend(day);
//       dayCheck = timer.querySelector(".days");
//       dayCheck.textContent = sum.days + "д" + ". ";
//     }

//     dayCheck.textContent = sum.days + "д" + ". ";
//   }

//   if (sum.total <= 0) {
//     seconds.textContent = "00";
//     minutes.textContent = "00";
//     hours.textContent = "00";
//     return true;
//   }

//   setTimeout(timerOn, 1000);
// }
// timerOn();

// ============================Знакомство с КОНСТРУКТОР + this !

class Car {
   constructor(model, name, color, liter, number) {
      this.model = model;
      this.name = name;
      this.color = color;
      this.places = 5;
      this.fuel = "petrol";
      this.liter = liter;
      this.number = number;
   }
   beep() {
      console.log(`FA - FA ${this.name}`);
   }
   stop() {
      console.log(`stop the end on way ${this.name}`);
   }
   tre(a, b) {
      console.log("a + b");
   }
}

Car.prototype.exit = function () {
   console.log(`привет мир меян зовут ${this.name}`);
};

let Daewoo = new Car("Daewoo", "lanos", "black", 10);

//  =============знакомство с МОДАЛЬНЫМИ ОКНАМИ ===========

// let moreBtn = document.querySelector(".more"),
//    popup = document.querySelector(".overlay"),
//    popupClose = document.querySelector(".popup-close");

// moreBtn.addEventListener("click", function () {
//    console.log(this);
//    this.classList.add("more-splash");
//    popup.style.display = "block";
// });

// popupClose.addEventListener("click", () => {
//    popup.style.display = "none";
// });

// =====================================================================

let container = document.querySelector(".content .container"),
   popup = document.querySelector(".overlay"),
   popupClose = document.querySelector(".popup-close");

container.addEventListener("click", function (event) {
   let target = event.target;

   if ((target && target.classList.contains("more")) || target.classList.contains("description-btn")) {
      popup.style.display = "block";
   }
});
popupClose.addEventListener("click", () => {
   popup.style.display = "none";
});

// ========================================================================
// let popup = document.querySelector(".overlay"),
//    container = document.querySelector(".content .container"),
//    popupClose = document.querySelector(".popup-close");

// function modalWindow() {
//    popup.style.display = "block";
// }
// function closeModal() {
//    popup.style.display = "none";
// }

// container.addEventListener("click", function (event) {
//    let target = event.target;

//    if ((target && target.classList.contains("more")) || target.classList.contains("description-btn")) {
//       console.log(this);

//       modalWindow();
//    }
// });
// popupClose.addEventListener("click", () => {
//    closeModal();
// });

// ================================== HW #11======

{
   /* <input id="age" value="30">

let age = document.getElementById('age');

	function showUser(surname, name) {
		alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	}

showUser.apply(age, ['chernenko', 'yaroslav']); */
}

let form = document.querySelector(".main-form"),
   input = form.getElementsByTagName("input"),
   statusMessage = document.createElement("div");
statusMessage.style.cssText = `
		width : 150px;
		height : 150px;
		background-color : red;
		margin : 0 auto; 
	`;

let message = {
   loading: "идет загрузка",
   success: "спасибо , мы вам презвоним",
   error: "что-то пошло не так!",
};

form.addEventListener("submit", function (event) {
   event.preventDefault();

   let request = new XMLHttpRequest();

   let formData = new FormData(form);

   request.open("POST", "server.php");
   request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   request.send(formData);

   request.addEventListener("readystatechange", function () {
      if (this.readyState < 4) {
         statusMessage.textContent = message.loading;
      } else if (this.readyState == 4 && this.status == 200) {
         statusMessage.textContent = message.success;

         for (let i = 0; i < input.length; i++) {
            input[i].value = "";
         }
         setTimeout(() => {
            form.style.display = "none";
            document.querySelector(".popup-form").appendChild(statusMessage);
            setTimeout(() => {
               form.style.display = "block";
               statusMessage.remove();
            }, 2000);
         }, 6000);
      } else {
         statusMessage.textContent = message.error;
      }
   });
});
