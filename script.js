// Tambahkan kode JavaScript kalian di file ini
const handleGetFormData = () => ({
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  city: document.getElementById("city").value,
  zipCode: document.getElementById("zip-code").value,
  status: document.getElementById("status").checked,
});

function isNumber(str) {
  if (isNaN(str)) {
    return false;
  } else {
    return true;
  }
}

function checkboxIsChecked() {
  let remember = document.getElementById("status");
  if (remember.checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(obj) {
  if (!obj) {
    return false;
  }

  if (isNaN(parseInt(obj.zipCode))) {
    return false;
  }

  const statusCheckbox = document.querySelector("#status");
  if (!statusCheckbox.checked) {
    return false;
  }

  return true;
}

function submit() {
  // event.preventDefault();
  if (validateFormData(handleGetFormData()) === false) {
    document.getElementById("warning").innerHTML =
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").innerHTML = "";
  }
}

// document.querySelector("form").addEventListener("submit-form", submit); //memanggil fungsi submit saat form disubmit.

document
  .getElementById("form")
  .addEventListener("submit-form", function (event) {
    event.preventDefault();
    submit();
  });
