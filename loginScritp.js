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
function inputCheck()
{
    let email = document.getElementById("email").value;
    let cleanEmail = email.trimEnd().toLowerCase();
    let password = document.getElementById("password").value;

    
    if ( email == "" || email == null)
    {
        alert("Email Field Can't Be Empty !");
    } 
    else if( password == "" || password == null)
    {
        alert("Password Field Can't Be Empty !");
    } else
    {
        if ( cleanEmail.slice(-10) != "@gmail.com")
        {
            alert("kindly Recheck Your Email !");
        }
        else if ( password.length < 4)
        {
            alert(" password should be more than 3 character !");
        }
        else
        {
            alert("sucsessfully submited!");
            console.log("hi");
            document.getElementById("form").reset();
            alert("Go Back And Enjoy Shopping !")
        }
    }
}

function toggleForm(isLogin) {
    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');
    const formHeader = document.getElementById('formHeader');
    const toggleButton = document.getElementById('toggleButton');

    if (isLogin) {
        signUpForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        formHeader.textContent = 'Login';
        toggleButton.textContent = "Don't have an account? Sign up";
        toggleButton.setAttribute('onclick', 'toggleForm(false)');
    } else {
        signUpForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        formHeader.textContent = 'Sign up';
        toggleButton.textContent = 'Already have an account? Login';
        toggleButton.setAttribute('onclick', 'toggleForm(true)');
    }
}