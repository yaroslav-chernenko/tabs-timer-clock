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

header.addEventListener("click", function(event) {
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
    seconds: seconds
  };
}

function clockOn() {
  let timer = document.querySelector("#timer"),
    hours = timer.querySelector(".hours"),
    minutes = timer.querySelector(".minutes"),
    seconds = timer.querySelector(".seconds");

  let timeProperty = clockUpdate();

  hours.textContent =
    timeProperty.hours < 10 ? "0" + timeProperty.hours : timeProperty.hours;
  minutes.textContent =
    timeProperty.minutes < 10
      ? "0" + timeProperty.minutes
      : timeProperty.minutes;
  seconds.textContent =
    timeProperty.seconds < 10
      ? "0" + timeProperty.seconds
      : timeProperty.seconds;

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

// Знакомство с КОНСТРУКТОР + this !

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

Car.prototype.exit = function() {
  console.log(`привет мир меян зовут ${this.name}`);
};

let Daewoo = new Car("Daewoo", "lanos", "black", 10);

console.log(this);

function test(a, b, d, c, t) {
  console.log(this.name);
  console.log(a + b + d + c - t);

  function test2() {
    console.log(
      `меня зовут ${this.name} моя марка ${this.model} и я езжу на ${this.fuel}`
    );
  }
  test2.call(Daewoo);
}
