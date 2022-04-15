let formCalculator = document.querySelector(".form__calculator");
let k = document.querySelector(".k")
let obj = new Object();
let allObject = []
for (let i = 0; i < localStorage.length; i++) {
	 key = localStorage.key(i);
      allObject.push(obj[obj] = JSON.parse(localStorage.getItem(key)));
    
}
let arrayname = []
let relultsBank =[]


let select = document.querySelector("select")
for (let i = 0; i < allObject.length; i++) {
   arrayname.push(allObject[i].name)
}
for (let i = 0; i < arrayname.length; i++) {
     select.insertAdjacentHTML('afterbegin',
          `<option>
          ${arrayname[i]}
      </option>`)
}

let valueSelect = select.value;

   


formCalculator.addEventListener("submit", addInformation);
function addInformation(event) {
     event.preventDefault();
     const {
          elements: { initialLoan, downPayment }
     } = event.currentTarget;
     for (let i = 0; i < allObject.length; i++) {
          if (allObject[i].name === valueSelect) {
               allObject[i].inloan = `${initialLoan.value}`;
               allObject[i].dpay = `${downPayment.value}`
           
          }
     }
      for (let i = 0; i < allObject.length; i++) {
          if (allObject[i]["inloan"] != undefined && allObject[i]["dpay"] != undefined) {
               relultsBank.push(allObject[i])
          }
     }
           
}
function calculate() {
     for (let i = 0; i < relultsBank.length; i++) {
          let neededSum = (Number(relultsBank[i].inloan) * Number(relultsBank[i].down) / 100)
          if (neededSum > Number(relultsBank[i].dpay)) {
               alert('sorry, but the  down payment is not enough')
          }
          else {
               let numberSum = Number(relultsBank[i].inloan)
               let nuberDpay = Number(relultsBank[i].dpay)
               let ammountBorrowed = numberSum - nuberDpay
               let month = Number(relultsBank[i].term)
               let parth = Number(relultsBank[i].rate)
               
               
               for (let i = 0; i <= month; i++) {
                         let monthpayment = ammountBorrowed * (parth / 12) *  (1 + parth / 12) ** i / (1 + parth / 12) ** i -1
                    console.log(monthpayment)
               }
             
          }

     }
}
k.addEventListener('click', calculate)