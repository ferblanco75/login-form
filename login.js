//valida si el usuario y pass son correctos 
function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username = "admin" && password == "lala") {
        window.location.href = "home.html"; 
        return false; 
    } else {
        alert("usuario o password incorrectos");
    }
}


let button = document.getElementById("button");

button.addEventListener("click", (e)=> {
    e.preventDefault();
    validate();
})



