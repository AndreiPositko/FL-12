let email = prompt("Please, enter your e-mail address");
let password;
let replacePass;
let previousPass;
let newPassword;
let tryPass;
const MINIMAL_EMAIL_LENGTH = 5;
const MINIMAL_PASS_LENGTH = 6;

if (email === "" || email === null) {
  alert("Canceled");
} else if (email.length < MINIMAL_EMAIL_LENGTH) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (email === "user@gmail.com" || email === "admin@gmail.com") {
  password = prompt("Please, enter your password");
  if (password === "" || password === null) {
    alert("Canceled");
  } else if (
    (email === "user@gmail.com" && password !== "UserPass") ||
    (email === "admin@gmail.com" && password !== "AdminPass")
  ) {
    alert("Wrong password");
  } else {
    tryPass = confirm("Do you want to change your password?");
    if (tryPass) {
      previousPass = prompt("Write the old password");
      if (previousPass === "" || previousPass === null) {
        alert("Canceled");
      } else if (previousPass === password) {
        newPassword = prompt("Please, write the new password");
        if (newPassword === "" || newPassword === null) {
          alert("Canceled");
        } else if (newPassword.length < MINIMAL_PASS_LENGTH) {
          alert("It's to short password. Sorry.");
        } else {
          tryPass = prompt("Please, write the password again");
          if (tryPass !== newPassword) {
            alert("You wrote the wrong password.");
          } else {
            alert("You have successfully changed your password.");
          }
        }
      } else {
        alert("Wrong password");
      }
    } else {
      alert("You have failed the change");
    }
  }
} else {
  alert("I don't know you");
}
