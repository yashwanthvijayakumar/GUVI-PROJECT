function login(){
    $(document).ready(function() {
        var data ={username:$("#username").val(),
                  password:$("#password").val()};
    console.log(data);
      $.ajax({
        url: 'http://localhost:80/GUVI/php/login.php',
        type: 'POST',
        data: data,
        success:function(response){
          console.log('response',response);
          alert(response)
          if(response == "Login Successful"){
            window.location.href='http://localhost/GUVI/profile.html'
          }
        }
      })
    });
    }