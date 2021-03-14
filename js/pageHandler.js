function checkLogin(){
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;
   if(username != '' && password != ''){
      window.location.href = "about.html";
   }
   else{
      alert("Please enter credentials");
   }
}