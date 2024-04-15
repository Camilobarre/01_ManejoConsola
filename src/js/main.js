let userName="Camilo"
let lastName="Barreneche Escobar";
const age="27 años";
const email="barrecami@gmail.com"
let phoneNumber="+573015468063"
let address="Carrera 81 #32C 14"

// Console Methods
console.log(userName)
console.info(lastName)
console.warn(age)
console.error(email)
console.debug(phoneNumber)
alert(address)
console.log(`%c${address}`, "background-color:blue; color:white; border-radius: 50px; font-size: 50px")

let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});