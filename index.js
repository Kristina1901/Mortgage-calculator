const bankName = document.querySelector(".name");
const form = document.querySelector("form");
const table = document.querySelector("table");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { name, rate, loan, down, term }
  } = event.currentTarget;
  
    table.insertAdjacentHTML('beforeend',
      `<tr class=${name.value}>
      <th>${name.value}</th>
      <th>${rate.value}</th>
      <th>${loan.value}</th>
      <th>${down.value}</th>
      <th>${term.value}</th>
      <th class="cellDelete"><button class="delete"><img src="../img/trash.Png" width="20" heigth="20"alt="delete"></button></th>
      <th class="cellEdit"><button class="edit"><img src="../img/pen.Png" width="20" heigth="20" alt="edit"></button></th>
      <th class="cellConfirm"><button class="confirm"><img src="../img/gavel.Png" width="20" heigth="20" alt="confirm"></button></th>
      </tr>`)
    let obj = new Object();
    obj.name = name.value;
    obj.rate = rate.value;
    obj.loan = loan.value;
    obj.down = down.value;
    obj.term = term.value;
    localStorage.setItem(`${obj.name}`, JSON.stringify(obj));
    obj.name = JSON.parse(localStorage.getItem("obj"));
    
  // for one bank 
  if (localStorage.length === 1) {
    // function for delete
    let btn = document.querySelector(".cellDelete")
    let button = document.querySelector(".delete")
      button.addEventListener("click", () => {
      localStorage.clear();
       btn.parentNode.innerHTML = ""
      })
    // function for edit
    let cellEdit = document.querySelector(".cellEdit")
    let buttonEdit = document.querySelector(".edit")
      buttonEdit.addEventListener("click", () => {
      let parentlist = cellEdit.parentNode.children
      let newChildren = [...parentlist]
      let parentNew = newChildren.slice(0, 5)
        for (let i = 0; i < parentNew.length; i++) {
          parentNew[i].setAttribute("contenteditable", "true")
          parentNew[i].classList.add('activecell')
        }    
      })
    // function for confirm
    let buttonConfirm = document.querySelector(".confirm");
    let cellConfirm = document.querySelector(".cellEdit")
    buttonConfirm.addEventListener("click", () => {
          let parentlist = cellConfirm.parentNode.children
          let newChildren = [...parentlist]
          let parentNew = newChildren.slice(0, 5)
          let firstValue = newChildren.slice(0, 1)
         localStorage.removeItem(`${firstValue[0].innerHTML}`)
          let obj = new Object();
          obj.name = parentNew[0].innerHTML;
          obj.rate = parentNew[1].innerHTML;
          obj.loan = parentNew[2].innerHTML;
          obj.down = parentNew[3].innerHTML;
          obj.term = parentNew[4].innerHTML;
          localStorage.setItem(`${obj.name}`, JSON.stringify(obj));
          obj.name = JSON.parse(localStorage.getItem("obj"));
        for (let i = 0; i < parentNew.length; i++) {
          parentNew[i].removeAttribute("contenteditable", "true")
          parentNew[i].classList.remove('activecell')
        }   
     })
  }

// for many banks  
  else {
    // function for delete
    let arraybtnDelete = document.querySelectorAll(".delete");
    let newarraybtnDelete = [...arraybtnDelete]
    for (let i = 0; i < newarraybtnDelete.length; i++) {
      newarraybtnDelete[i].addEventListener("click", () => {
        let parent = newarraybtnDelete[i].parentNode
        let AllParent = parent.parentNode;
        let children = AllParent.children
        let newChildren = [...children]
        let newChildrenarray = newChildren.slice(0, 1)
        localStorage.removeItem(`${newChildrenarray[0].innerHTML}`)
        AllParent.innerHTML = ""
      })
    }

    // function for edit
    let arraybtnEdit = document.querySelectorAll(".edit");
    let newarraybtnEdit = [...arraybtnEdit]
    for (let i = 0; i < newarraybtnEdit.length; i++) {
        newarraybtnEdit[i].addEventListener("click", () => {
        let parent = newarraybtnEdit[i].parentNode
        let AllParent = parent.parentNode;
        let children = AllParent.children
        let newChildren = [...children]
        let parentNew = newChildren.slice(0, 5)
        for (let i = 0; i < parentNew.length; i++) {
          parentNew[i].setAttribute("contenteditable", "true")
          parentNew[i].classList.add('activecell')
        }           
      }
        
      )
    }

     // function for confirm
    let arraybtnConfirm = document.querySelectorAll(".confirm");
    let newarraybtnConf = [...arraybtnConfirm]
      for (let i = 0; i < newarraybtnConf.length; i++) {
        newarraybtnConf[i].addEventListener("click", () => {
        let parent = newarraybtnConf[i].parentNode
        let AllParent = parent.parentNode;
        let children = AllParent.children
        let newArray = [...children]
        parentNew = newArray.slice(0, 5)
        let firstValue = newArray.slice(0, 1)
        localStorage.removeItem(`${firstValue[0].innerHTML}`)
          let obj = new Object();
          obj.name = parentNew[0].innerHTML;
          obj.rate = parentNew[1].innerHTML;
          obj.loan = parentNew[2].innerHTML;
          obj.down = parentNew[3].innerHTML;
          obj.term = parentNew[4].innerHTML;
          localStorage.setItem(`${obj.name}`, JSON.stringify(obj));
          obj.name = JSON.parse(localStorage.getItem("obj"));
        for (let i = 0; i < parentNew.length; i++) {
          parentNew[i].removeAttribute("contenteditable");
          parentNew[i].classList.remove('activecell')
          }           
      })
    }
    
  }
  
}