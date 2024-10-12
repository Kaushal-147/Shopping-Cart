var pop_up = document.getElementById("about_us");
var content = document.getElementById("content");

function aboutus()
{
    pop_up.style.visibility = "visible";
    pop_up.style.display = "flex"
    
    content.style.filter = "blur(50px)";
}

//to close pop-up
function closeabtus()
{
    
    pop_up.style.visibility = "hidden";
    pop_up.style.display = "none"
    content.style.filter = "blur(0px)";
}