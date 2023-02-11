const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const userList = document.querySelector("#users")

myForm.addEventListener("submit", onsubmit)

function onsubmit(e){
  e.preventDefault()
  
  if(nameInput.value === ''|| emailInput.value === '') {
    msg.classList.add("error")
    msg.innerHTML = "Please enter all fields"
    setTimeout(() => msg.remove(), 3000)
  } else{
  msg.classList.add("error")
    msg.innerHTML = "Thank you for Filling the Form"
    setTimeout(() => msg.remove(), 3000)
 userList.appendChild(li)
 //clear fields
 nameInput.value =''
 emailInput.value = ''
}
}
