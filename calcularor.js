let formCalculator = document.querySelector(".form__calculator");
let obj = new Object();
const table = document.querySelector("table");
let allObject = []
for (let i = 0; i < localStorage.length; i++) {
	 key = localStorage.key(i);
      allObject.push(obj[obj] = JSON.parse(localStorage.getItem(key)));
    
}
for (let i = 0; i < allObject.length; i++) {
     allObject[i].inloan = undefined;
     allObject[i].dpay = undefined
           
}
let arrayname = []
let resultsBank = []
let option
const makeUniq = (arr) => [...new Set(arr)];
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

select.addEventListener('change', (event) => {
     option = select.value;
     return function() {
    return option
  };
     
          
})
     

formCalculator.addEventListener("submit", addInformation);
function addInformation(event) {
     event.preventDefault();
     const {
          elements: { initialLoan, downPayment }
     } = event.currentTarget;
     
     for (let i = 0; i < allObject.length; i++) {
          if (allObject[i].name === option) {
               allObject[i].inloan = `${initialLoan.value}`;
               allObject[i].dpay = `${downPayment.value}`
                   
          }
          
     }
     for (let i = 0; i < allObject.length; i++) {
      if (allObject[i]["inloan"] != undefined && allObject[i]["dpay"] != undefined) {
       resultsBank.push(allObject[i])
                    
               }
          }
     
               
     
     
      calculate(resultsBank)
     
}   
           

function calculate() {
     let arr = makeUniq(resultsBank);
     let neededSum = (Number(arr[arr.length - 1].inloan) * Number(arr[arr.length - 1].down) / 100)
          if (neededSum > Number(arr[arr.length - 1].dpay)) {
              table.insertAdjacentHTML('beforeend',
          `<tr>
           <th>${arr[arr.length - 1].name}</th>
           <th>sorry, but the  down payment is not enough</th>
           </tr>`)
          }
          else if (Number(arr[arr.length - 1].loan) < arr[arr.length - 1].inloan) {
               table.insertAdjacentHTML('beforeend',
                `<tr>
                 <th>${arr[arr.length - 1].name}</th>
                 <th>sorry, but the initial loan more than bank can offer you</th>
           </tr>`)
               
          }
          else {
               let correctRate = arr[arr.length - 1].rate.replace(/,/, '.')
               let numberSum = Number(arr[arr.length - 1].inloan)
               let nuberDpay = Number(arr[arr.length - 1].dpay)
               let ammountBorrowed = numberSum - nuberDpay
               let month = Number(arr[arr.length - 1].term) * 12
               let parth = Number(correctRate) / 100
               let monthpayment = ammountBorrowed * (parth / 12) * (1 + parth / 12)** month 
               let c = (1 + parth / 12) ** month - 1
               let result = Math.round(monthpayment / c)
               if (result !== Number) {
                    table.insertAdjacentHTML('beforeend',
                         `<tr>
                 <th>${arr[arr.length - 1].name}</th>
                 <th>sorry, but something went wrong</th>
           </tr>`)
               }
               else {
                    table.insertAdjacentHTML('beforeend',
                         `<tr>
                 <th>${arr[arr.length - 1].name}</th>
                 <th>${result}</th>
           </tr>`)
               }          
             
          }

     }
