const scriptURL =
  "https://script.google.com/macros/s/AKfycbxn-eAuEB5UuLv2-bw0hVdPUKq71SQ6bpil9sanQz_2Ot2mYxMNShopE_58So5vRxHq/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POSt", body: new FormData(form) })
    .then((response) => alert("Thankyou ! uour form is submitted successfully"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
