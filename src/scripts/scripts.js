let menu = document.getElementById("menu");
menu.style.display="none";
let t = 0;
let setActive = (predicate) => {
    
    if(predicate){
        menu.style.display="block";
        menu.classList.add("visiable");
        menu.classList.remove("not__visiable");
        menu.style.opacity='1';
        menu.style.zIndex = '1000';
        if(t!= null)
        {
            clearTimeout(t);
            t = null;
        }
    }
    else{
        menu.classList.remove("visiable");  
        menu.classList.add("not__visiable");
        t = setTimeout(() => { 
            menu.style.opacity='1';
            menu.style.display = "none";
            // menu.style.zIndex = '-1100';  
        }, 900);
    }

}

