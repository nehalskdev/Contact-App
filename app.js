const addBtn = document.querySelector(".add-btn");
const openModal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

addBtn.addEventListener("click", () => {
  console.log("open");
  openModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  console.log("closed");
  openModal.style.display = "none";
});
