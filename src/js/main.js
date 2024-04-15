let userName = prompt("Enter your username")
let lastName = prompt("Enter your last name")
const age = Number(prompt("Enter your age"))
if (age!= Number){
    console.error("Esto no es un número")
    alert("Esto no es un número")
}

const email = prompt("Enter your email")
let phoneNumber = prompt("Enter your phone number")
let address = prompt("Enter your address")

if (age!= Number){
    console.error("Esto no es un número")
    alert("Esto no es un número")
}

// Console Methods
// console.log(userName)
// console.info(lastName)
// console.warn(age)
// console.error(email)
// console.debug(phoneNumber)
// alert(address)
// console.log(`%c${address}`, "background-color:blue; color:white; border-radius: 50px; font-size: 50px")

// let timerInterval;
// Swal.fire({
//   title: "Auto close alert!",
//   html: "I will close in <b></b> milliseconds.",
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const timer = Swal.getPopup().querySelector("b");
//     timerInterval = setInterval(() => {
//       timer.textContent = `${Swal.getTimerLeft()}`;
//     }, 100);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */
//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log("I was closed by the timer");
//   }
// });

// console.info("Full name:" + userName + " " + lastName)
// console.info("Full name:", userName, lastName)
// console.info(`Full name: ${userName}       ${lastName}`)

// console.info("Name:" + userName + " " + "lastName:" + lastName + " " + "age:" + age + " " + "email:" + email + " " + "phoneNumber:" + phoneNumber + " " + "address" + address)
// console.info("Full information:", userName, lastName, age, email, phoneNumber, address)
// console.info(`Full name: ${userName} ${lastName}, Age: ${age}, email:${email}, phoneNumber:${phoneNumber}, address:${address}`)

// Agrupar varios console
// console.group("Data Basic")
//     console.info(userName)
//     console.info(lastName)
//     console.info(age)
// console.groupEnd()

// console.group("Data Contact")
//     console.info(email)
//     console.info(phoneNumber)
//     console.info(address)
// console.groupEnd()

// // Imprimir una lista
// const coders=["Lupe Ortiz","Mateo Duarte","Maria Antonieta"]
// console.info(coders)
// console.table(coders)