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


tl2.from('.about h1',{
    opacity:0,
    onStart:function(){
        $('.about h1').textillate({
            in:{
                effect:'fadeInLeft',
                sequence:true,
                delay:10
              
            }
          
        })
    },
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"end end",
        end:"end end",
        
    },
})
.from('.about p',{
    opacity:0,
    onStart:function(){
        $('.about p').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:1
              
            }
          
        })
    },
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"end end",
        end:"end end",
        
    },
  
})
.from('.about button',{
    y:'20px',
    opacity:0,
    delay:2,

})
