gsap.from("#yoyo",{
    y:"20px",
    yoyo:true,
    repeat:-1,
    duration:1
})

let tl1 = gsap.timeline()


tl1.from("#fontchange",{
    opacity:0,
    delay:-1,
    onStart:function(){
        $('#fontchange').textillate({
            in:{
                effect:'flash',
                reverse:true
              
            },
            
          
        })
    }
})

.from("#txtl2",{
    opcacity:0,
    onStart:function(){
        $('#txtl2').textillate({
            in:{
                effect:'flash',
                sequence:true
              
            }
          
        })
    },
    delay:-1,
    
})
.from("#txtl3",{
    opacity:0,
    onStart:function(){
        $('#txtl3').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:10
              
            }
          
        })
    },
    delay:1
    
})
.from(".txtbox button",{
    y:'20px',
    opacity:0,
    duration:1,
    delay:1
})
.from('.navbar nav ul li',{
    opacity:0,
    duration:1,
    stagger:0.1,

})

let tl2 = gsap.timeline()


tl2.to('.aboutopen',{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"end center",
        end:"end center",
        scrub:4
    },
    bottom:'0%',
    borderRadius:'0%'
})
.from("#abtxt",{
    opacity:0,
    onStart:function(){
        $("#abtxt").textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:30,
                markers:true
              
            }
          
        })
    },
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top center",
        end:"top center",
        
    },
    // delay:1
    
})


let tl3 = gsap.timeline()

tl3.to('.overlay',{
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top center",
        end:"center center",
      
        scrub:5,
        
    },
    y:'-1000px'
    
})
.from('.skillset h1',{
    opacity:0,
    onStart:function(){
        $('.skillset h1').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:30
              
            }
          
        })
    },
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top center",
        end:"top center",
        
        
    },

  
})
.from('#firstp',{
    opacity:0,
    onStart:function(){
        $('#firstp').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:1
                
              
            }
          
        })
    },
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top center",
        end:"top center",
        
    },
  
})

gsap.to('.col1img',{
    scrollTrigger:{
        trigger:".design",
        scroller:"body",
        start:"top center",
        end:"center top",
        scrub:8,
        // markers:true
    },

    y:'-300px'
  
})
gsap.to('.col2img',{
    scrollTrigger:{
        trigger:".design",
        scroller:"body",
        start:"top center",
        end:"center top",
        scrub:8,
        // markers:true
    },

    y:'100px'
  
})
