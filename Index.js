<!DOCTYPE html>
<html>
<body>
    <form>
        Username: <input type="text" name="username" /> 
         
        Password:<input type="text" name="password" />
        
        Email:<input type="text" name="email" />
          
        <button>submit</button>
    </form>

    <script>
        let form = document.getElementsByTagName("form")[0];

        form.onsubmit = function() {
            // check all rules
        };
    </script>
</body>

</html>