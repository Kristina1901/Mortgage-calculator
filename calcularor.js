let formCalculator = document.querySelector(".form__calculator");
let obj = new Object();
let allObject = []
for (let i = 0; i < localStorage.length; i++) {
	 key = localStorage.key(i);
      allObject.push(obj[obj] = JSON.parse(localStorage.getItem(key)));
    
}
let arrayname = []


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
    console.log (allObject)
     
}

  
 

