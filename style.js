
const scroll = new LocomotiveScroll({
    el:document.querySelector(".wrapper"),
    smooth:true,
    lerp:0.1
 });


 

    

    let spans = document.querySelectorAll("#spn");
    spans.forEach(span =>{
        span.addEventListener("mousemove",(dets)=>{
                    gsap.to(circle,{
                        scale:3.5
                    });
                
                    gsap.to(span,{
                        color:"white",
                        
                    })
                });
                     span.addEventListener("mouseleave",(dets)=>{
            gsap.to(circle,{
                scale:1
                
            });
        
            gsap.to(span,{
                color:"rgb(8, 173, 238)",
                
            });
        });
    })
    var h1 = document.querySelectorAll(".textdiv h1")
    var hero = document.querySelector(".heropart2");
    var textver= document.querySelector(".verticle-text");

    var small= document.querySelector(".small-img");
    console.log(hero.getBoundingClientRect());

    
    let tl = gsap.timeline();
    tl.fromTo(h1,
        {opacity:0},
        {
        x:80,
        duration:1.4,
        opacity:1,
        delay:.2,
        stagger:0.5,
        repeat:-1,
    });
    tl.fromTo(hero,{
        width:0},
    {width:400.53125,
        duration:3.4,
        repeat:-1,
        ease:Expo,
        
    });
   
    
    var navbottom = document.querySelector(".nav-bottom");
    var nav = document.querySelector(".nav");
    nav.addEventListener("mouseenter",()=>{
        var tl = gsap.timeline();
        tl.to(navbottom,{
            height:"20vh",
            position:"absolute",
            bottom:"-20vh",
            ease:Expo
        })
    });
    nav.addEventListener("mouseleave",()=>{
        var tl = gsap.timeline();
        tl.to(navbottom,{
            height:0,
            position:"absolute",
            bottom:0,
            ease:Expo
            
        })
    });

    var bookitem = document.querySelectorAll(".bookitems");
    bookitem.forEach((book)=>{
        book.addEventListener("mousemove",(dets)=>{
            diff = dets.clientX-book.getBoundingClientRect().x-50;
            gsap.to(book.querySelector(".bookitems img"),{
                opacity:1.5,
                scale:1,
                x:dets.x - book.getBoundingClientRect().x-50,
                y:dets.y - book.getBoundingClientRect().y-10
            });
            });

            book.addEventListener("mouseleave",(dets)=>{
                
                gsap.to(book.querySelector(".bookitems img"),{
                    opacity:0,
                    scale:0
   
                });
                });


        });
       









        

  
 
    









