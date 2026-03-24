var inputPass = document.getElementById('inp-pass');
inputPass.style.display = 'block';
inputPass.style.marginLeft = 'auto';
inputPass.style.marginRight = 'auto';

function passChecker() {

    let message = "";
    let input = document.getElementById('inp-pass').value;
    let num = /[0-9]/;
    let sc = /[!@#$%^&*(),.?":{}|<>]/;
    let day = /(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i;
    let up3 = /[A-Z]{3}/;
    let mems = /(tamira|akisha|jacob|maryel)/i;

    if(input.length < 5){
        message = "Password must contain atleast five(5) characters";
    }  
    else if(!num.test(input)){
        message = "Password must contain a number";
    }
    else if(!sc.test(input)){
        message = "Password must contain a special character";
    }
    else if(!day.test(input)){
        message = "Password must contain a day of the week";
    }
    else if(!up3.test(input)){
        message = "Password must contain three(3) uppercase letters";
    }
    else if(!mems.test(input)){
        message = "Password must contain the name of a MAMAMOBLUE member [AKISHA, TAMIRA, JACOB, MARYEL]";
    }
    else{
        window.location.href= "congrats.html"
        return;
    }

    document.getElementById('output').innerText = message;

}
