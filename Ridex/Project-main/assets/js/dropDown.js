const profileIcon = document.getElementById("profile-icon");
const dropDownCard = document.getElementById("dropDownCard");
profileIcon.addEventListener("click", () => {
  dropDownCard.style.display === "block"
    ? (dropDownCard.style.display = "none")
    : (dropDownCard.style.display = "block");
});
