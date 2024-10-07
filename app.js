const addBtn = document.querySelector(".add-btn");
const openModal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

// opening the modal
addBtn.addEventListener("click", () => {
  console.log("open");
  openModal.style.display = "block";
});

// closing the modal
closeModal.addEventListener("click", () => {
  console.log("closed");
  openModal.style.display = "none";
});
