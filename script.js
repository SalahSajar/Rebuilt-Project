const menuBtn = document.querySelector('.menu_Btn');
const menuWrapper = document.querySelector('ul');

let menuTl = gsap.timeline();
let mainSectionTl = gsap.timeline();
let blocksTl = gsap.timeline({
        scrollTrigger:{
        trigger:'.ss_main_rb',
        start:'top 80%',
    }
})

menuBtn.addEventListener('click' , ()=> {
    menuBtn.classList.toggle('close-Btn');

    if(menuBtn.classList.contains('close-Btn')){
        menuTl.to('.menu_Btn span:nth-child(2)' , {duration:.3,width:0})
              .addLabel('rotateAnimation')
              .to('.menu_Btn span:nth-child(1)' , {duration:.7,rotate:40}, 'rotateAnimation')
              .to('.menu_Btn span:nth-child(3)' , {duration:.7,rotate:-41}, 'rotateAnimation')
    } else {
        menuTl.fromTo('.menu_Btn span:nth-child(2)',{duration:.3,width:'0%', opacity:0} , {duration:.5,width:'100%',opacity:1})
              .addLabel('btn' , '-=.7')
              .to('.menu_Btn span:nth-child(1)' , {duration:.7,rotate:0}, 'btn')
              .to('.menu_Btn span:nth-child(3)' , {duration:.7,rotate:0}, 'btn')
 
    }

});

menuBtn.addEventListener('click' , ()=>{
    menuWrapper.classList.toggle('toggleMenu');
});


mainSectionTl.fromTo('.main_lb' , {x:-120 , opacity:0} , {duration:.5 , x:0 , opacity:1})
             .fromTo('.main_rbb' , {x:120 , opacity:0} , {duration:.5 , x:0 , opacity:1})
             .fromTo('.main_rb__Typos' , {opacity:0} , {duration:.8 ,opacity:1})

blocksTl.fromTo('.ss_main_rb__block',{opacity:0},{duration:1,opacity:1,stagger:.5,color:'#ff5858'})
