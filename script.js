var x = window.matchMedia("(max-width: 550px)")
document.addEventListener("click",(e)=>{
    if(x.matches){
        if(e.target.id == "hamburger"){
            document.querySelector("#nav__ul").style.display = "flex";
            document.querySelector("#hamburger").style.display = "none";
        }else{
            document.querySelector("#nav__ul").style.display = "none";
            document.querySelector("#hamburger").style.display = "block";
        }
    }else{
        document.querySelector("#nav__ul").style.display = "flex";
            document.querySelector("#hamburger").style.display = "none";
    }
})