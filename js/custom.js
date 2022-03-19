
// glightbox

const lightbox = GLightbox({
 

    'href': 'https://youtu.be/G_2tCU8zrp0',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
    'draggable':true,
    'openEffect':'zoom'

});



// text Animation

$(function() {
    $('.animate-rotate-1').animatedHeadline({
        animationType: 'rotate-1'
    });

    $('.animate-type').animatedHeadline({
        animationType: 'type'
    });

    $('.animate-rotate-2').animatedHeadline({
        animationType: 'rotate-2'
    });

    $('.animate-loading-bar').animatedHeadline({
        animationType: 'loading-bar'
    });

    $('.animate-slide').animatedHeadline({
        animationType: 'slide'
    });

    $('.animate-clip').animatedHeadline({
        animationType: 'clip'
    });

    $('.animate-zoom').animatedHeadline({
        animationType: 'zoom'
    });

    $('.animate-rotate-3').animatedHeadline({
        animationType: 'rotate-3'
    });

    $('.animate-scale').animatedHeadline({
        animationType: 'scale'
    });

    $('.animate-push').animatedHeadline({
        animationType: 'push'
    });
});



// logo slider

$('.owl-carousel').owlCarousel({
    loop:true,
    video:true,
    autoplay:true,
    autoplayTimeOut:1000,
    center:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// end logo slider

// scroll to top

let topTo = document.querySelector(".scrollTo");

window.addEventListener("scroll", () =>{

if(window.pageYOffset >100){
    topTo.classList.add("active");
}else{
    topTo.classList.remove("active");
}

});


// end scroll to top






// start preloader

var preloader = document.getElementById('preloader');

function myFunction(){

preloader.style.display ="none";

}


// end preloader



// jquery

$(document).ready(function(){


function showWindo(){
$('.main-popup').show();
// $("html body").css("overflow","hidden");

}

setTimeout(showWindo,00000);


function hideWindow(){
    $(".main-popup").hide();
    $("html body").css("overflow","scroll");
}


$(".close").click(function(){

    hideWindow();
});


$(".closeNow").click(function(){
    hideWindow();
})




});


// end jquery



// pasword show hide option



const pinput =document.getElementById('password');


function toggle(){
    const state =false;

    if(state){
        pinput.setAttribute('type','password');
        state =false;

    }else{
        pinput.setAttribute('type','text');
        state =true;
    }

}


//end pasword show hide option




// countdown Selection

const d =document.getElementById('days');
const h =document.getElementById('houres');
const m =document.getElementById('minites');
const s =document.getElementById('sconds');

setInterval(()=>{

    const des =new Date('sept 5, 2021 10:00:00').getTime();
    const nowdate =new Date().getTime();
    const cur =des-nowdate;
    
    const day =Math.floor(cur/(1000*60*60*24));
    const houre =Math.floor((cur %(1000*60*60*24))/(1000*60*60));
    const minite =Math.floor((cur % (1000*60*60)) /(1000*60));
    const scond =Math.trunc((cur %(1000*60)) /1000);

    
    d.innerHTML=day +'D';
    h.innerHTML=houre +'H';
    m.innerHTML=minite +'M';
    s.innerHTML=scond+ 'S';

},1000);





// start star rating Selection

let stars =document.querySelectorAll('.stars');
let thanks =document.getElementById('thanks');

for(let x =0; x<stars.length; x++){

    stars[x].values =(x+1);

  
    ['click','mouseover','mouseout'].forEach(function(e){

        stars[x].addEventListener(e, ratingFun);

    })

}

function ratingFun(e){

let type =e.type;

let values =this.values;

stars.forEach(function(ele,ind){

    if(type ==='click'){

        if(ind <values){
            ele.classList.add('yellowColor');
            thanks.play();
           
        }else{
            ele.classList.remove('yellowColor');
        }
    }




    if(type ==='mouseover'){

        if(ind <values){
            ele.classList.add('Ratehover');
           
        }else{
            ele.classList.remove('Ratehover');
        }
    }

    if(type ==='mouseout'){

        ele.classList.remove('Ratehover');

        
    }

})


}
