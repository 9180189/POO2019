const frmGame = document.querySelector("#frmGame")

frmGame.addEventListener("submit", function(){
const txtGameYear = document.querySelector("#txtGameYear").value
const currentYear= new Date().getFullYear()
if(txtGameYear > 1950 && txtGameYear <= currentYear){
alert("Validação Ok")
}else{
    alert("erro")
}
event.preventDefault()

})
function addGameTable(){
    const table = document.querySelector("table")
}