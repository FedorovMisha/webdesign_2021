let commentsTag = document.getElementById("comments");

let comments = commentsTag.getElementsByClassName("comment");

let visiableItems = [];

let maxItems = function(){

    if(window.screen.width < 800)
    {
        return 1;
    }
    if(window.screen.width < 1400 & window.screen.width> 800)
    {
        return 2;
    }
    return 3;
}();

function InitSlider(){
    for(let i = 0; i < comments.length;i++)
    {
        if(i < maxItems)
        {
            visiableItems.push(i);
            continue;
        }
        displayNone(comments[i]);
    }
}

function displayNone(item){
    console.log(maxItems);
    item.style.display = "none";
}



function setCommentsNonActive(){
    for(let i = 0; i < comments.length;i++)
    {
        displayNone(comments[i]);
    }
}

function setCommentsActive(){
    for(let i = 0; i < visiableItems.length;i++)
    {
        comments[visiableItems[i]].style.display = "flex";
    }
}

function swipeCommentToLeft(){
    if(visiableItems[0] != 0)
    {
        for(let i = 0; i < visiableItems.length;i++){
            let k = (visiableItems[i] - 1) % comments.length;
            if(k < 0)
            {
                k = comments.length - 1;
            }
            visiableItems[i] = k;
        }
    }
    console.log(visiableItems);
    setCommentsNonActive();
    setCommentsActive();
}
function swipeCommentToRight(){
    if(visiableItems[visiableItems.length - 1] != comments.length - 1)
    {
        for(let i = 0; i < visiableItems.length;i++){
            visiableItems[i] = (visiableItems[i] + 1) % comments.length;  
        }
        // console.log(visiableItems);
    }
    console.log(visiableItems);
    setCommentsNonActive();
    setCommentsActive();
}
InitSlider();