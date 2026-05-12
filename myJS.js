// const usericon=document.getElementById("usericon");
// const accMenu=document.getElementById("accMenu");
//     usericon.addEventListener("click",()=>{
// if(accMenu.style.display=="block"){
//     accMenu.style.display="none";
// }
// else{
//     accMenu.style.display="block";
// }
// });
const usericon = document.getElementById("usericon");
const accMenu = document.getElementById("accMenu");
// OPEN & CLOSE MENU
usericon.addEventListener("click", (event) => {
    event.stopPropagation();
    if(accMenu.style.display === "block"){
        accMenu.style.display = "none";
    }
    else{

        accMenu.style.display = "block";
    }
});
// CLOSE MENU WHEN CLICKING BODY
document.addEventListener("click", (event) => {
    if(
        !accMenu.contains(event.target)
    ){
        accMenu.style.display = "none";
    }

});