//like section

let like =document.getElementById('like');
let audio =document.querySelector('.likeAudio');
let showCount =document.getElementById('likeCount');
let unlikeAudio=document.getElementById('unlikeAudio');
let unlike =document.getElementById('unlike');
let dislike =document.getElementById('dislikeCount');

let count =0;

like.addEventListener('click',()=>{
    let countValue =count +=1;
audio.play();
showCount.innerHTML=countValue;
like.style.color='blue';
unlike.style.color='initial';
plus();
});

const sub =()=>{
    count -=1;
    showCount.innerHTML=count;
}



 let discount =0;
unlike.addEventListener('click',()=>{
   sub();
    let dislikeValue =discount +=1;
    unlikeAudio.play();
    dislike.innerHTML=dislikeValue;
    like.style.color='initial';
    unlike.style.color='blue';
    });