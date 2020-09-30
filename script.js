const current=document.querySelector('#current');
const imgs=document.querySelectorAll('.imgs img');
const opacity=0.3;

imgs[0].style.opacity=opacity;


// you can use any methode down

// imgs.forEach(img => img.addEventListener('click',e=>(current.src=e.target.src)));

imgs.forEach(img => img.addEventListener('click',imgClick));
function imgClick(e){
//style for each images opacity to normal
imgs.forEach(img=>(img.style.opacity=1));

current.src=e.target.src;
//add fade animation
current.classList.add('fade-in');

//remove fade animation

setTimeout(()=> current.classList.remove('fade-in'),500); 

e.target.style.opacity=opacity;
}

