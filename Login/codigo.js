let loginform = document.querySelector("mi-form");

loginform.addEventListener("submit", (e) =>{
    e.preventDefault();
    let email = document.getElementById("email");
    let constraseña = document.getElementById("contraseña");

    console.log("Email:", email.value);
    console.log("Contraseña:",constraseña.value);
}
);