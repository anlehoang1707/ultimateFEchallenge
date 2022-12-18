function show_contact() 
        { var message = 1;
          document.getElementById("btn-contact").innerHTML = "<h1>ok</h1>";
          alert ("wow" + message);
          document.getElementById("btn-contact").style.background = 'green';

        }

        var x = document.querySelector(".hamburger").addEventListener('click',
        function () {
        // e.preventDefault()
        console.log(x);
        // alert("ok");
        document.querySelector(".navbar").style.cssText ='flex-direction:column;'
        document.querySelector(".nav-links-desktop").style.cssText='display:none;'
        document.querySelector(".nav-links-block-mobile").style.cssText='display:flex;'
        // document.querySelector(".nav-links-block-mobile").style.cssText ='flex-direction:column;'
        document.querySelector(".nav-links-mobile").style.cssText='display:flex;'
        document.querySelector("#service").style.cssText ='display:flex;'
        document.querySelector("#contact").style.cssText ='display:flex;'
        document.querySelector("#wagtail").style.cssText ='display:flex;'
    }
        )


    
      