const openModal = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const addContactBtn = document.querySelector("#addBtn");
const header = document.querySelector("header");
const inputs = document.querySelectorAll("input");
console.log([...inputs]);


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

addContactBtn.addEventListener("click", () => {
  console.log("added contact");
  modal.style.display = "none";
  const markUp = `<div class="contact-element__image">
     </div>
     <div class="contact-element__info">
     <h2>Nehal Shaikh</h2>
     <div class="iconbox">
     <p> nikesk@gmail.com</p> 
     </div>
     <div class="iconbox">
     <p>9137882648</p>
     </div>
     <div class="iconbox">
      <p>
   Family</bold></p>
     </div>
     <div class="edit-box">
     <div  class="btn--edit">✏️</div>
     <div  class="btn--delete">🗑️</div>
     </div>
     </div>`;
  addContactData.push({})
  header.insertAdjacentHTML("afterend", markUp);
});
