let menu = document.getElementById("menu");
menu.style.display="none";

let setActive = (predicate) => {
    
    if(predicate){
        menu.style.display="block";
        menu.classList.remove("not__visiable");
        menu.classList.add("visiable")
        menu.style.opacity='1';
    }
    else{
        menu.classList.remove("visiable");  
        menu.classList.add("not__visiable");
        setTimeout(() => { 
            menu.style.opacity='0';
            menu.style.display="none";  
                
        }, 999);
    }

}

setActive(false);