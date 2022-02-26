let todos =document.getElementById("bub");

//  target: büyük bir grup içinde div/button/input gibi yspılsrds hsngi elementin/öğenin tıklsnmsdı ys ds öxelliği çslıştırmsk isteniyorsa onu seçmemize yarar.




    todos.addEventListener("click", (e)=> {
        // console.log(e.target.parentElement);
        if(e.target.tagName === "LI"){

            // pointerin nereyi işaretleyeceği ve nerenin nasıl etkileyeceğini belirtiyoruz. tagName/className ile nereyi işaretlediğimizi yazdık

            e.target.parentElement.remove();

            // sadece e.target yazılırsa yukarıda seçilen için istenilen işlem yapılır. parentElement verildiğinde ise seçilen yere tıklanıldığında parent etkilenir.
        }

    })