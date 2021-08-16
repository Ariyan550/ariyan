const reviews =[

{
    id:1,
    img:'./img/photo1.jpg',
    title:'Ariyan Rumi',
    job:'Web Designer',
    info:'Hi  I am a Profestional web designer and ui and ux also.',
    link:'https://www.facebook.com/profile.php?id=100006095925909'

},


{
    id:2,
    img:'./img/photo2.jpg',
    title:'Pappu Hassan',
    job:'Web Developer',
    info:'Hi  I am a Profestional web developer.so you can hire me.',
    link:'https://www.youtube.com/channel/UCfQW60O1Yys1ekapxNCm-7g'
},



{
    id:3,
    img:'./img/photo3.jpg',
    title:'Rabby',
    job:'MERN Developer',
    info:'Hi  I am a Profestional MERN developer.i have 4 years exprience',
    link:''
},


]


// start review section

let img =document.getElementById('img');
let title =document.getElementById('title');
let job =document.getElementById('job');
let info =document.getElementById('info');

//button click

let prevBtn =document.getElementById('prev-btn');
let nextBtn =document.getElementById('next-btn');
let link=document.getElementById('link');
let currentItem =0;


function person(){

let item =reviews[currentItem];

img.src=item.img;
title.textContent=item.title;
job.textContent=item.job
info.textContent=item.info
link.href=item.link
}

window.addEventListener('DOMContentLoaded', function(){
person();
})

nextBtn.addEventListener('click',function(){
currentItem++;

if(currentItem > reviews.length -1){
    currentItem=0;
}

person();
});

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem=reviews.length -1;
    }
    person();

})

// end review section

