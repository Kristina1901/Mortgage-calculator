let formCalculator = document.querySelector(".form__calculator");
let obj = new Object();
const table = document.querySelector("table");
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
     calculate()
           
}
function calculate() {
     for (let i = 0; i < relultsBank.length; i++) {
          let neededSum = (Number(relultsBank[i].inloan) * Number(relultsBank[i].down) / 100)
          if (neededSum > Number(relultsBank[i].dpay)) {
              table.insertAdjacentHTML('beforeend',
          `<tr>
           <th>${relultsBank[i].name}</th>
           <th>sorry, but the  down payment is not enough</th>
           </tr>`)
          }
          if (Number(relultsBank[i].loan) < relultsBank[i].inloan) {
               table.insertAdjacentHTML('beforeend',
                `<tr>
                 <th>${relultsBank[i].name}</th>
                 <th>sorry, but the initial loan mote than bank can offer you</th>
           </tr>`)
               
          }
          else {
               let numberSum = Number(relultsBank[i].inloan)
               let nuberDpay = Number(relultsBank[i].dpay)
               let ammountBorrowed = numberSum - nuberDpay
               let month = Number(relultsBank[i].term) * 12
               let parth = Number(relultsBank[i].rate) / 100
               let monthpayment = ammountBorrowed * (parth / 12) * (1 + parth / 12)** month 
               let c = (1 + parth / 12) ** month - 1
               let result = Math.round(monthpayment / c)
               table.insertAdjacentHTML('beforeend',
                `<tr>
                 <th>${relultsBank[i].name}</th>
                 <th>${result}</th>
           </tr>`)
                      
             
          }

     }
}
