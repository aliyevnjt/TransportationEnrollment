<script>

        document.getElementById("btn").addEventListener("click",buttonClick);
        document.addEventListener('DOMContentLoaded', function() {
         var elems = document.querySelectorAll('select');
         var instances = M.FormSelect.init(elems);
         });
        function buttonClick(){
          var toValidate = {
            fn: "First Name is required field",
            ln: "Last Name is required field",
            street: "Street is required field",
            city: "City is required field",
            state: "State is required field"
          }

          var idKeys = Object.keys(toValidate);
          var allValid = true;
          idKeys.forEach(function(id){
            var isValid = checkIfValid(id,toValidate[id]);
            if(!isValid){
              allValid = false;
            }
          });

          if(allValid){
             add();
            //  document.getElementById("fn").value = "";
            //  document.getElementById("ln").value = "";
            //  document.getElementById("street").value = "";
            //  document.getElementById("state").value = "";
            //  document.getElementById("city").value = "";
            //  document.getElementById("unit").value = "";
            //  var sc = document.getElementById("schoolName")
            //  sc.selectedIndex = 0
            //  M.FormSelect.init(sc);
            //  var st = document.getElementById("state")
            //  sc.selectedIndex = 0
            //  M.FormSelect.init(st);
          }
        }

        function checkIfValid(elID, message){
          var isValid = document.getElementById(elID).checkValidity();
          if(!isValid){
             M.toast({html: message});
             return false;
          }return true;
        }

        function fields(){
            var fn = document.getElementById("fn").value;
            var ln = document.getElementById("ln").value;
            var street = document.getElementById("street").value;
            var state = document.getElementById("state").value;
            var city = document.getElementById("city").value;
            var schoolName = document.getElementById("schoolName").value;
            var address = street + " " + city + " " + state;
            var flds = {
            fn: fn,
            ln: ln,
            street: street,
            city: city,
            state: state,
            address: address,
            schoolName: schoolName
            }
            return flds;
        }


</script>

