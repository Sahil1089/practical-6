const carousels = document.querySelectorAll(".carousel");
carousels.forEach((carousel)=>{
    carousel.addEventListener("mousemove",(e)=>{
        if(!isdragging)
            return
        carousel.scrollLeft =  startScrollLeft -(e.pageX-startX);
    });
carousel.addEventListener("mousedown",(e)=>{
    isdragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft =  carousel.scrollLeft;

});
document.addEventListener("mouseup",()=>{
    isdragging=false;
    carousel.classList.remove("dragging")
}
);


const cardwidth = carousel.querySelector(".card").offsetWidth;

var left = document.querySelectorAll(".btn1");
 var right = document.querySelectorAll(".btn2");
left.forEach((btn)=>{btn.addEventListener("click",()=>{
    carousel.scrollLeft += -cardwidth;
});})
 
right.forEach((rbt)=>{
    rbt.addEventListener("click",()=>{
        carousel.scrollLeft += cardwidth;
     });
})

});







