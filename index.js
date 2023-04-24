// const showAnketa = (surname, name, patronomic, age, gender, pension) => {
//   alert(`
//   Ваше ФИО: ${surname} ${name} ${patronomic} \n
//   Ваш возраст в годах: ${age} \n
//   Ваш возраст в днях: ${age * 365} \n
//   Через 5 лет вам будет: ${+age + 5} \n
//   Ваш пол: ${gender} \n
//   Вы на пенсии: ${pension ? "Yes" : "No"} \
// `);
// };

// const getPension = (genderBoolean) => {
//   return (genderBoolean && age >= 65) || (!genderBoolean && age >= 55);
// };

// const getValidation = (text, type = "string") => {
//   if (type === "string") {
//     let result = prompt(text).trim();
//     // while (!result) {
//     while (result === "" || result === null) {
//       result = prompt(`Try again: ${text}`);
//     }

//     return result;
//   } else {
//     let result = +prompt(text);
//     // while (!result) {
//     while (result === "" && isNaN(result) && result === 0) {
//       result = +prompt(`Try again: ${text}`);
//     }

//     return result;
//   }
// };

// const init = () => {
//   const name = getValidation("Enter your name");
//   const surname = prompt("Enter your surname");
//   const patronomic = prompt("Enter your patronomic");
//   const age = getValidation("Enter your Age", "number");
//   const genderBoolean = confirm("Choose your Gender - Male");
//   const gender = genderBoolean ? "Male" : "Female";
//   const pension = getPension(genderBoolean);

//   showAnketa(surname, name, patronomic, age, gender, pension);
// };

// init();

// ====================> task 3

const name = document.querySelector("#inputName");
const surname = document.querySelector("#inputSurname");
const age = document.querySelector("#inputAge");
const submitButton = document.querySelector("#submitButton");
const tableBody = document.querySelector("#tableBody");
const clearAll = document.querySelector("#clearAll");

let data = [
  {
    name: "Vasya",
    surname: "Pupkin",
    age: 25,
  },
  {
    name: "Vasya",
    surname: "Pupkin",
    age: 22,
  },
];

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const user = {
    name: name.value,
    surname: surname.value,
    age: age.value,
  };

  data.push(user);

  tableBody.innerHTML = "";
  data.forEach((item, index) => {
    tableBody.innerHTML += `
      <tr>
        <td># ${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.age}</td>
      </tr>
    `;
  });
});

// clearAll.addEventListener("click", () => {
//   // data = [];
//   tableBody.innerHTML = "";
// });

// console.log("click");

// ====================> 2
// Событие – это сигнал от браузера о том, что что-то произошло.

// for(let elem of document.querySelectorAll('*')) {
//   elem.addEventListener("click", e => alert(`Погружение: ${elem.tagName}`), true);
//   elem.addEventListener("click", e => alert(`Всплытие: ${elem.tagName}`));
// }

/* делегирование событий */

/* действие браузера по умолчанию */
/* event.preventDefault */

// const todoList = document.querySelector(".todoList");

// todoList.addEventListener("click", (event) => {
//   if (event.target.classList.contains("delete")) {
//     const listItem = event.target.closest(".listItem");
//     const title = listItem.querySelector("span").textContent;

//     console.log("delete");
//     console.log("title", title);
//   }

//   if (event.target.textContent === "Edit") {
//     const listItem = event.target.closest(".listItem");
//     const title = listItem.querySelector("span").textContent;

//     console.log("edit");
//     console.log("title", title);
//   }
// });
