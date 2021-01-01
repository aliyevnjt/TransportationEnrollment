<!DOCTYPE html>
<html>
   <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script async src="https://pay.google.com/gp/p/js/pay.js"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
   </head>
   <body>
       <div class="container">
         <div class="row">
           <div class="col s12 center">
              <img width="650" src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg" class="responsive-img" alt="Responsive Image">
           </div>
         </div>
       </div>
      <div class="container">
        <div class="row">
          <div class="col s12">
        <h1 class="yellow-text text-darken-2 center-align csshook">Transportation Form</h1>
      </div>
       </div>
        </div>
    <form action="studentWeb" method="post" name="studentInfo">
        <input type="text" name="fname"/>
        <input type="text" name="lname"/>
        <input type="text" name="address"/>
        <input type="submit"/>
    </form>

   </body>
</html>