var attempt = 3;

function checkPswd(form , e) {
    e.preventDefault();
    var confirm ="admin";

    var password = document.getElementById("pswd").value;
    if (password == confirm || password == confirm) {;


        window.location = "ccm.html";
        return false;
    } else {
        attempt--;
        document.getElementById("errorMessage").textContent = "Incorrect password 😕";

        if (attempt == 0) {
            document.getElementById("disableMessage").textContent = " Please reach out to me for the password";
            document.getElementById("errorMessage").style.display = "none";
            document.getElementById("pswd").disabled = true;
            document.getElementById("confirm").disabled = true;
            
            return false;
        }
    }
}