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

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
