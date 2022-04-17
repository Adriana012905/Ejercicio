document.getElementById("Registrar").onclick = function () {


    
var username = document.getElementById('user').value;
var clave = document.getElementById('password').value; 
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;


    var urlregister = 'https://ServidorTest.carlos-reneren7.repl.co/register';
    var data = {user: username, password: clave, name: name,email: email };
    
    fetch(urlregister, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }

  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    //console.log(this.responseText);
    if (this.readyState == 4 && this.status == 200) {
        //console.log(this.status);
        localStorage.setItem('user', vuser);
        window.location.href = "index.html";
    }else{
        console.log("error..");
    }
  };

  xhttp.open("POST", url);
  xhttp.send(formData);
}







