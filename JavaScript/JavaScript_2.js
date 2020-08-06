function validateForm() {
    var fnform = document.forms["sample_form"]["fname"].value;
    var lnform = document.forms["sample_form"]["lname"].value;
    if (fnform == "") {
        alert("Please enter your first name or you will be unable to continue.");
        return false;
    }
    if (lnform == "") {
        alert("Please enter your last name or you will be unable to continue.");
        return false;
    }
}