const STORAGE_KEY = "feedback-form-state";

const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");


const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
} else {
  formData.email = "";
  formData.message = "";
  form.elements.email.value = "";
  form.elements.message.value = "";
}

form.addEventListener("input", handlerInput);

function handlerInput(event) {
  const name = event.target.name;
  const value = event.target.value.trim();

  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
};

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem("feedback-form-state");

  formData.email = "";
  formData.message = "";

  form.reset();
};
