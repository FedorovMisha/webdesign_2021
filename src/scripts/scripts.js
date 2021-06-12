let menu = document.getElementById("menu");

let setActive = (predicate) => {
    
    if(predicate)
        menu.classList.remove("not__visiable");
    else
        menu.classList.add("visiable");

}