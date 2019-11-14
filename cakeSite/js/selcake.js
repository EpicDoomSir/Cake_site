let display = document.getElementById("display");
let chocolate = document.getElementById("chocolate");
let velvet = document.getElementById("velvet");
let victoria = document.getElementById("victoria");
let chocolateFrosting = document.getElementById("chocolateFrosting");
let cheesecake = document.getElementById("cheesecake");
let smurf = document.getElementById("smurf");

function changePicture(element){
    display.setAttribute("src", element.getAttribute("src"))
}

chocolate.addEventListener("click", function(){
    changePicture(chocolate)
});
velvet.addEventListener("click", function(){
    changePicture(velvet)
});
victoria.addEventListener("click", function(){
    changePicture(victoria)
});
chocolateFrosting.addEventListener("click", function(){
    changePicture(chocolateFrosting)
});
cheesecake.addEventListener("click", function(){
    changePicture(cheesecake)
});
smurf.addEventListener("click", function(){
    changePicture(smurf)
});