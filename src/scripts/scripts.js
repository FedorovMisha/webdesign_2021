let menu = document.getElementById("menu");

let setActive = (predicate) => {
    
    if(predicate){
        menu.classList.remove("not__visiable");
        menu.classList.add("visiable")
    }
    else{
        menu.classList.add("not__visiable");        
        menu.classList.remove("visiable");
    }

}