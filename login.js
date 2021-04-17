function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="admin"&&password=="admin"){
        alert("login successfully");
        return false;
    }else{
        alert("username or password are incorrect, please try again");
    }
}