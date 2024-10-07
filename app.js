const openModal = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const addContactBtn = document.querySelector("#addBtn");
const header = document.querySelector("header");

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
  const markUp = `<div class="new-element">
    <h1>Contact added</h1>                
  </div>`;
  header.insertAdjacentHTML("afterend", markUp);
});
