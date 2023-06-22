function validateform(){
    var fname=document.foodlens.fname.value;
    var lname=document.foodlens.lname.value;
    var emailph=document.foodlens.emailph.value;
    var password=document.foodlens.password.value;

    if (fname==null || fname=="") {
        alert("First name can't be blank");
        return false;
    } else if (lname==null || lname=="") {
        alert("Last name can't be blank");
        return false;
    } else if (emailph==null || emailph=="") {
        alert("Email/Phone number can't be blank");
        return false;
    } else if (password.length<6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}