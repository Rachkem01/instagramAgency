imageRow = document.querySelector(".imagerow");
arrow= document.querySelector(".arrow");
Imgscroll = document.querySelector(".imgclients");
Prev = document.querySelector(".prev1");
Next = document.querySelector(".next1");
accordions = document.querySelectorAll(".accordion-item-body-content")
icon = document.querySelector("#brandnext");
form = document.querySelector(".form")
submit = document.getElementById("submit");

submit.addEventListener("click", ()=>{
    form.innerHTML = `Thanks for submitting the form`
    form.style.backgroundColor ="green"
    form.style.color= "white"
    form.style.height="100px"
    form.style.fontWeight ="bold"
    form.style.padding= "2rem"
})



imageRow.addEventListener("wheel", (evt) =>{
evt.preventDefault();
imageRow.scrollLeft += evt.deltaY;
})

arrow.addEventListener("click", () =>{
    imageRow.scrollLeft -= 900;
});



Imgscroll.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    Imgscroll.scrollLeft += evt.deltaY;
    })
    
    Prev.addEventListener("click", () =>{
        imageRow.scrollLeft -= 900;
    });

    Next.addEventListener("click", () =>{
        imageRow.scrollLeft += 900;
    });

