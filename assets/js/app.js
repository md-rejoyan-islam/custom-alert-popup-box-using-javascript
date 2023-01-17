const popup = document.getElementById("popup");
const clickBtn = document.getElementById("clickBtn");
const confirmationDiv = document.getElementById("confirmationDiv");

// show popup box by click
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

//cancel popup box by click
const cancelPopup = () => {
  popup.classList.add("hidden");
  result = false;
};

// delete confirmation box
const deleteConfirmation = () => {
  confirmationDiv.classList.remove("hidden");
};

// cancel confirmation box
const cancelConfirmation = () => {
  confirmationDiv.classList.add("hidden");
};

// items deleted button
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
