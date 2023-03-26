
const hamburger = document.querySelector('.hamburger i')
const hammenu = document.querySelector('.hammenu')

hamburger.addEventListener('click',()=>{
    if(hammenu.style.left === '-100%'){
        hammenu.style.left = '0'
    }
    else{
        hammenu.style.left = '-100%'
    }
})


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



tl2.from("#abtxt",{
    opacity:0,
    onStart:function(){
        $("#abtxt").textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:20,
              
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


.to('.crtcurtain',{
    scrollTrigger:{
        trigger:".crtcurtain",
        scroller:"body",
        start:"top 60%",
        end:"top 60%",
        scrub:3
        
    },
    left:"-100%",
    repeat:0
})


let tl3 = gsap.timeline()


tl3.from('.skltxt h1',{
    opacity:0,
    onStart:function(){
        $('.skltxt h1').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:20
              
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


tl3.to('#page3img',{
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top bottom",
        end:"bottom top",
        scrub:2,
       
    },
    rotate:'-110deg'
})

gsap.to('.col1img',{
    scrollTrigger:{
        trigger:".design",
        scroller:"body",
        start:"top center",
        end:"bottom top",
        scrub:2,
        
    },

    y:'-200px'
  
})
gsap.to('.col2img',{
    scrollTrigger:{
        trigger:".design",
        scroller:"body",
        start:"top center",
        end:"bottom top",
        scrub:2,
        // markers:true
    },

    y:'150px'
  
})

let tl4 = gsap.timeline()

tl4.from('.worktxt h1',{
    opacity:0,
    onStart:function(){
        $('.worktxt h1').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:20
                
              
            }
          
        })
    },
    scrollTrigger:{
        trigger:".page5",
        scroller:"body",
        start:"top center",
        end:"top center",
        
    },
})


.to('.workcurtain1',{
    scrollTrigger:{
        trigger:".workcurtain1",
        scroller:"body",
        start:"top 60%",
        end:"top 60%",
        scrub:3,
        // markers:true
        
    },
    left:'-100%'
})
.to('.workcurtain2',{
    scrollTrigger:{
        trigger:".workcurtain2",
        scroller:"body",
        start:"top 60%",
        end:"top 60%",
        scrub:3,
        // markers:true
        
    },
    left:'-100%'
})


let tl5 = gsap.timeline()

tl5.to('.conLeft img',{
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        start:"top bottom",
        end:"bottom top",
        scrub:2,
       
    },
    rotate:'-90deg'
})


let tl6 = gsap.timeline()

tl6.from('.conLeft h1',{
    opacity:0,
    onStart:function(){
        $('.conLeft h1').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:20
                
              
            }
          
        })
    },
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        start:"top center",
        end:"top center",
        
    },
})
.from('.conLeft h2',{
    opacity:0,
    onStart:function(){
        $('.conLeft h2').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:20
                
              
            }
          
        })
    },
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        start:"top center",
        end:"top center",
        
    },
})


