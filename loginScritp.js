//For Loading Animation
function removeLoader()
{
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#content").style.visibility = "visible";
}

//To change password visibility
function changeVisibility()
{
    if(document.getElementById("password").type == "password")
    {
        document.getElementById("show").src = "./images/hide.png";
        document.getElementById("password").type = "text";
    }else
    {
        document.getElementById("password").type = "password";
        document.getElementById("show").src = "./images/show.png";
    }
}

//To check Email 
function emailCheck()
{
    let input = document.getElementById("email").value;
    let cleanInput = input.trimEnd().toLowerCase();
    if ( cleanInput.slice(-10) != "@gmail.com")
    {
        alert("kindly Recheck Your Email");
        console.log("hi")
    }
    else
    {
        alert("sucsessfully submited ");
    }
}