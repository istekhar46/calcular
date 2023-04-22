let buttons = document.querySelectorAll(".btn");
let s = ""
Array.from(buttons).forEach((item) => {
    
    item.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            s = eval(s)
            document.querySelector("input").value = s;

        }

        else if (e.target.innerHTML == "AC") {
            s = ""
            document.querySelector("input").value = s;
            
        }
        
        else if(e.target.innerHTML == "DEL"){
            
            document.querySelector("input").value = s.substring(0,s.length-1);
            s= s.substring(0,s.length-1)
        }

        else {

            s = s + e.target.innerHTML;
            document.querySelector("input").value = s;

        }
    })
})

