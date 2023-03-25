
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

.to('.crtcurtain',{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"center 60%",
        end:"center 60%",
        // markers:true,
        scrub:3
        
    },
    left:"-100%",
    repeat:0
})


let tl3 = gsap.timeline()


tl3.from('.skillset h1',{
    opacity:0,
    onStart:function(){
        $('.skillset h1').textillate({
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

tl3.to('.poster img',{
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

    y:'-400px'
  
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

    y:'100px'
  
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
.from('.worktxt p',{
    opacity:0,
    onStart:function(){
        $('.worktxt p').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:1
                
              
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
        trigger:".page5",
        scroller:"body",
        start:"30% 60%",
        end:"30% 60%",
        scrub:3,
        // markers:true
        
    },
    left:'-100%'
})
.to('.workcurtain2',{
    scrollTrigger:{
        trigger:".page5",
        scroller:"body",
        start:"60% 60%",
        end:"60% 60%",
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
.from('.conLeft p',{
    opacity:0,
    onStart:function(){
        $('.conLeft p').textillate({
            in:{
                effect:'fadeInUp',
                sequence:true,
                delay:8
                
              
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

