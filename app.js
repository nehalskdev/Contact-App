const openModal = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const addContactBtn = document.querySelector("#addBtn");
const header = document.querySelector("header");
const inputs = [...document.querySelectorAll("input")];
const container = document.querySelector(".container");

console.log(inputs);
const resetModalInputs = function () {
  inputs.forEach((input) => {
    if (input.type === "radio") {
      input.checked = false;
    } else {input.value = ""};
  });
};
// const editModalInputs = function (inputs) {
//   inputs.forEach((input) => {
//     input.value = "Hi";
//   });
// };

// opening the modal
openModal.addEventListener("click", () => {
  console.log("open");
  modal.style.display = "block";
});

// closing the modal
closeModal.addEventListener("click", () => {
  console.log("closed");
  modal.style.display = "none";
});

addContactBtn.addEventListener("click", (e) => {
  console.log("added contact");
  modal.style.display = "none";

  const randomNumber = Math.round(Math.random() * 100000);
  console.log(randomNumber);

  const userData = {
    id: randomNumber,
  };
  console.log(userData);

  inputs.forEach((input) => {
    if (input.type === "radio" && input.checked) {
      userData[input.name] = input.value;
    } else if (input.type !== "radio") {
      userData[input.id] = input.value;
    }
  });

  const contactCard = `
     <div class="contact-element__info">
     <h2>${userData.name}</h2>
     <div class="iconbox">
     <p> ${userData.email}</p> 
     </div>
     <div class="iconbox">
     <p>${userData.mobile}</p>
     </div>
     <div class="iconbox">
      <p>
   ${userData.type}</bold></p>
     </div>
     <div class="edit-box">
     <div  class="btn--edit">✏️</div>
     <div  class="btn--delete">🗑️</div>
     </div>
     </div>`;

  container.insertAdjacentHTML("afterbegin", contactCard);

  resetModalInputs();
  const btnEdit = document.querySelector(".btn--edit");
  btnEdit.addEventListener("click", () => {
    modal.style.display = "block";
  });
});
