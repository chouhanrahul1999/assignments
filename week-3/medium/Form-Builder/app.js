const fieldType = document.getElementById("field-type");
const fieldLabel = document.getElementById("field-label");
const addFieldBtn = document.getElementById("add-field");
const formPreview = document.getElementById("form-preview");

addFieldBtn.addEventListener("click", () => {
  const type = fieldType.value;
  const label = fieldLabel.value.trim();
  if (!label) return;

  let field;

  if (type === "text") {
    field = document.createElement("div");
    field.innerHTML = `<label>${label}</label><input type="text" name="${label}">`;
  } else if (type === "checkbox") {
    field = document.createElement("div");
    field.innerHTML = `<label><input type="checkbox" name="${label}"> ${label}</label>`;
  } else if (type === "radio") {
    field = document.createElement("div");
    field.innerHTML = `<label><input type="radio" name="${label}"> ${label}</label>`;
  }

  formPreview.appendChild(field);

  fieldLabel.value = '';
});
