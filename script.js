 /* external javascript for validation */
    
        function validation()
        {
            var Fname = document.forms["check"]["Fname"].value;
            var Lname = document.forms["check"]["Lname"].value;
            var Email = document.forms["check"]["Email"].value;
            var Num = document.forms["check"]["Num"].value;
            var text = document.forms["check"]["text"].value;

            if(Fname==""|| Lname==""|| Email==""|| Num==""|| text=="")
            {
                alert("First fill all the required details.");
            }
            else
            {
                alert("Thank you for your time. We will solve your problem within an hour");
            }
        }


