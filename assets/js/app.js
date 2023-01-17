const popup = document.getElementById("popup");
const clickBtn = document.getElementById("clickBtn");
const confirmationDiv = document.getElementById("confirmationDiv");

let result = false;
const openPopup = () => {
  if (!result) {
    popup.classList.remove("hidden");
    result = true;
  } else {
    popup.classList.add("hidden");
    result = false;
  }
};

const cancelPopup = () => {
  popup.classList.add("hidden");
  result = false;
};

const deleteConfirmation = () => {
  confirmationDiv.classList.remove("hidden");
};

const cancelConfirmation = () => {
  confirmationDiv.classList.add("hidden");
};

const deleted = () => {
  confirmationDiv.classList.add("hidden");
  popup.classList.add("hidden");
  clickBtn.innerHTML = "Deleted Successfully";
  clickBtn.disabled = true;
  setTimeout(() => {
    clickBtn.disabled = false;
    clickBtn.innerHTML = "Click Me";
    result = false;
  }, 1000);
};
