function loginFunc(e)
{
    //event.preventDefault();

    var username = document.getElementById('user').value;
    var clave = document.getElementById('password').value;


    var urllogin = 'https://ServidorTest.carlos-reneren7.repl.co/login';
    var data = {user: username, password: clave};

    
    fetch(urllogin, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }

  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    //var mostrar = document.getElementById('mostrar');
}


document.getElementById("ingresar").onclick = function () {


    var username = document.getElementById('user').value;
    var clave = document.getElementById('password').value;


    var urllogin = 'https://ServidorTest.carlos-reneren7.repl.co/login';
    var data = {user: username, password: clave};
    
    fetch(urllogin, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }

      
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
                        if(response.login){
                          console.log('Success:', response);
                          localStorage.setItem("user", response.user);
                          localStorage.setItem("name", response.name);
                          window.location.href="dasboard.html";
                        }else{
                          alert("Los datos son invalidos");
                        }
                      }
         );
  }
  