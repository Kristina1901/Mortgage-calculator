let formCalculator = document.querySelector(".form__calculator");
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
     console.log(allObject)
     for (let i = 0; i < allObject.length; i++) {
          if (allObject[i]["inloan"] != undefined && allObject[i]["dpay"] != undefined) {
               relultsBank.push(allObject[i])
          }
     }
     for (let i = 0; i < relultsBank.length; i++) {
          let neededSum = (Number(relultsBank[i].inloan) * Number(relultsBank[i].down )/ 100)
          if (neededSum > Number(relultsBank[i].dpay)) {
               alert('sorry, but the  down payment is not enough')
          }
          else {
               let numberSum =  Number(relultsBank[i].inloan)
               let nuberDpay = Number(relultsBank[i].dpay)
               let ammountBorrowed = numberSum - nuberDpay
               let month = Number(relultsBank[i].term) * 12
               let parth = Number(relultsBank[i].rate) / 12
               let formulaParth = Number(parth) + 1
               let myltyParth = Number((formulaParth) ** month)
               let anotherParth = Number((formulaParth) ** month) - 1
               for (let i = 0; i <= month; i++) {
                    let monthpayment = ammountBorrowed * parth * myltyParth / anotherParth
                    console.log(monthpayment)
               }
             
     } 

}
 
}
