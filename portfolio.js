const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendemail(){
    const bodymessage = `Full Name: ${fullName.value}<br>
    Email:${email.value}<br>`;

    email.send({
        host: "pranalihedau10@gmail.com",
        
    }).then(
        message => alert(message)
    );
}