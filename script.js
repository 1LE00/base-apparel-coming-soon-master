
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var x = document.getElementsByTagName("input");

    var form = document.getElementsByTagName("form")[0];
    
    var err = document.getElementsByClassName("error")[0];

    var y = document.getElementById("errorDisplay");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const content = x[0].value;
        if(content.match(validRegex) == null){
            y.innerHTML = "Please provide a valid email."
            y.classList.add("show");
            err.classList.add("show");
            x[0].focus();
        }

        window.onclick = function(event){
            if(event.target.matches('#email') || !event.target.matches("#email")){
                if (y.classList.contains("show") && err.classList.contains("show")) {
                    y.classList.remove("show");
                    err.classList.remove("show");
                }
            }
        }
    });

    if (screen.width >= 1024) {
        var hero = document.querySelector(".heroImage");
        console.log(hero);
        hero.setAttribute("src", "images/hero-desktop.jpg");
    }

