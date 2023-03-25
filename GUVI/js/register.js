// function validatePassword() {
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("registerpassword").value;
    
//     if (password != confirmPassword) {
//         document.getElementById("registerpassword").setCustomValidity("Passwords do not match");
//     } else {
//         document.getElementById("registerpassword").setCustomValidity("");
//     }
// }
// document.getElementById("password").addEventListener("change", validatePassword);
// document.getElementById("registerpassword").addEventListener("change", validatePassword);

		   function validatePassword() {
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirm-password").value;
            
            if (password != confirmPassword) {
                document.getElementById("confirm-password").setCustomValidity("Passwords do not match");
            } else {
                document.getElementById("confirm-password").setCustomValidity("");
            }
        }
        // document.getElementById("password").addEventListener("change", validatePassword);
        // document.getElementById("confirm-password").addEventListener("change", validatePassword);
        // $(document).ready(function() {
        //     $('#registrationForm').on('submit', function(event) {
        //         event.preventDefault();
        //         $.ajax({
        //             url: 'register.php',
        //             type: 'POST',
        //             data: $(this).serialize(),
        //             success: function(response) {
        //                 $('#result').html(response);
        //             }
        //         });
        //     });
        // });
        

function submit() {

$(document).ready(function() {

    var data ={name:$("#username").val(),
              email:$("#Email").val(),
              password:$("#password").val()}
console.log(data);
  $.ajax({
    url: 'http://localhost:80/GUVI/php/register.php',
    type: 'POST',
    data: data,
    success:function(response){
      alert(response);
      if(response == "Registration Successful"){
        window.location.reload();
      }
    }
  })
});
}