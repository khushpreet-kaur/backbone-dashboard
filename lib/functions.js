function showPhase(str)
{

    if (str == "")
    {
        document.getElementById("phase").innerHTML = "";
        return;
    } 
    else 
    {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("phase").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","getphase.php",true);
        xmlhttp.send();
    }

}

function showTechnologies(str)
{

    if (str == "")
    {
        document.getElementById("technologies").innerHTML = "";
        return;
    } 
    else 
    {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("technologies").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","gettechnologies.php",true);
        xmlhttp.send();
    }

}

function showDevelopers(str)
{

    if (str == "")
    {
        document.getElementById("developers").innerHTML = "";
        return;
    } 
    else 
    {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("developers").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","getdevelopers.php",true);
        xmlhttp.send();
    }

}
function showLabs(str) 
{
    if (str == "")
    {
        document.getElementById("labs").innerHTML = "";
        return;
    } 
    else 
    {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("labs").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","getlabs.php",true);
        xmlhttp.send();
    }
}
function showInstitutes(str) 
{
    if (str == "")
    {
        document.getElementById("institutes").innerHTML = "";
        return;
    } 
    else 
    {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("institutes").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","getinstitutes.php",true);
        xmlhttp.send();
    }
}

function showdisplay(str)
{
        if (str == "")
    {
        document.getElementById("labs").innerHTML = "";
        return;
    } 
    else 
    {
        var x = document.forms["myform"]["selectbyinstitute"].value;
        var y = document.forms["myform"]["selectbydiscipline"].value;
        var z = document.forms["myform"]["selectbystatus"].value;
        var w = document.forms["myform"]["selectbyintegrationlevel"].value;
               
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("test").innerHTML = xmlhttp.responseText;
              
            }
        }   
        xmlhttp.open("POST", "display_info.php", true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("p=" + x + "&q=" + y + "&r=" + z + "&s=" + w); 
    }

}

function showDisciplines(str) 
{
    if (str == "")
    {
        document.getElementById("disciplines").innerHTML = "";
        return;
    } 
    else 
    {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("disciplines").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","getdisciplines.php",true);
        xmlhttp.send();
    }
}

