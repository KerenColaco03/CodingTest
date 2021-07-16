"use strict";

//CHECKS TO SEE IF BOTH PASSWORDS MATCH
const checkConfirmation = (ev) => {
 if (myPassword.value != myConfirmation.value) {
  myConfirmation.setCustomValidity("Wait. What? This doesn't match the password field!");
 } else {
  myConfirmation.setCustomValidity('');
 }
};

myConfirmation.addEventListener('input', checkConfirmation);
myPassword.addEventListener('input', checkConfirmation);



//DECLARING THE VARIABLE
let user = {}
signin.addEventListener('submit', ev => {

//ASSIGNING VALUE TO THE PROPERTY
    user.firstName = myFirstName.value;
    user.lastName = myLastName.value;
    user.email = myEmail.value;
    user.phoneNumber = myPhoneNo.value;
    user.currentJobTitle = myCurrentJobTitle.value;
    user.password = myPassword.value;
    user.confirmPassword = myConfirmation.value;
    user.howDidYouFindAboutUs = myOptions.value;

console.log(user)


 signin.reset();
 ev.preventDefault();
});
