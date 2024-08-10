function previewImage(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var img = document.createElement('img');
        img.src = reader.result;
        img.width = 150;
        img.height = 150;
        document.querySelector('.profilePictureIcon').src = reader.result;
    };
    reader.readAsDataURL(input.files[0]);
}
function updateProfile() {

    var firstName = document.getElementById("account-fn").value;
    var lastName = document.getElementById("account-ln").value;
    var email = document.getElementById("account-email").value;
    var UserName = document.getElementById("account-UserName").value;
    var password = document.getElementById("account-pass").value;
    var confirmPassword = document.getElementById("account-confirm-pass").value;


    if (UserName === "") {
        alert("Please enter your User Name.");
        return;
    }
    if (!/[a-zA-Z]/.test(UserName)) {
        alert('User Name must contain at least one letter.');
        return;
    }

    if (UserName.length < 3) {

        alert('The length of User Name must be more than 3 letters ');
        return;
    }
    if (UserName.length > 15) {
        alert('The length of username must be less than 15 letters  ')
        return;
    }

    if (firstName === "") {
        alert("Please enter your First Name.");
        return;
    }
    if (!/[a-zA-Z]/.test(firstName)) {
        alert('First Name must contain at least one letter.');
        return;
    }

    if (firstName.length < 3) {

        alert('The length of First Name must be more than 3 letters ');
        return;
    }
    if (lastName === "") {
        alert("Please enter your Last Name.");
        return;
    }
    if (lastName.length < 3) {

        alert('The length of Last Name must be more than 3 letters ');
        return;
    }
    if (!/[a-zA-Z]/.test(lastName)) {
        alert('Last Name must contain at least one letter.');
        return;
    }
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email');
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    if (confirmPassword === "") {
        alert("Please enter confirm password.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }


    alert("Profile updated successfully!");

}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};



// 
