const form = document.getElementById("registerForm");
const message = document.getElementById("message");

// FORM VALIDATION
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if(password.length < 6){
        message.innerText = "Password must be at least 6 characters!";
        message.style.color = "red";
    } else {
        message.innerText = "Registration Successful!";
        message.style.color = "green";
    }
});


// ASYNCHRONOUS + AJAX (FETCH)
async function loadProfit(){
    try {
        const response = await fetch("profit.json");
        const data = await response.json();

        document.getElementById("profit").innerText = data.amount;

    } catch(error){
        console.log("Error loading profit");
    }
}