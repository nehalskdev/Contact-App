const openModal = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const addContactBtn = document.querySelector("#addBtn");
const header = document.querySelector("header");
const inputs = [...document.querySelectorAll("input")];
const container = document.querySelector(".container");

const resetModalInputs = function () {
   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("mobile").value = "";
   document.getElementById("radio").value = "";
}
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
  const userData = {};
  inputs.forEach((input) => {
    userData[input.id] = input.value;
  });
  const contactCard =`
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
   ${userData.radio}</bold></p>
     </div>
     <div class="edit-box">
     <div  class="btn--edit">✏️</div>
     <div  class="btn--delete">🗑️</div>
     </div>
     </div>`;
  container.insertAdjacentHTML("afterbegin",contactCard);
  resetModalInputs();
});
