var topheading = " "
            var u = document.getElementById("userinput")
            var b = document.getElementById("mybutton")
            var out = document.getElementById("output")
            var m;
            u.onkeyup=function()
            {
                m=""
                out.innerHTML=topheading+""

                for(var i=1;i<=10;i++)
            {
                m+=u.value+"*"+i+"="+i*u.value+"<br/>"
            }
            out.innerHTML+=m
            }

            /*  ==================  */

            u.onchange=function()
            {
                m=""
                out.innerHTML=topheading+""

                for(var i=1;i<=10;i++)
            {
                m+=u.value+"*"+i+"="+i*u.value+"<br/>"
            }
            out.innerHTML+=m
            }

              /*  ==================  */

             

