


///////

let cloud = document.getElementById('cloud-one');
let cloudTwo = document.getElementById('cloud-two');
let cloudTree = document.getElementById('cloud-tree');
let planetHomeSide = document.getElementById('planet-home');
let planetHome = document.getElementById('bg-stars');
let planetBgHome = document.getElementById('planet-bg');
let containerHome = document.getElementById('container-home')
console.log(cloud);

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    
    
    cloud.style.left = value * 0.05 + 'px';
    cloud.style.bottom = value * 2.3 + 'px';
    cloudTwo.style.bottom = value * 1 + 'px';
    cloudTwo.style.left = value * 0.3 + 'px';
   planetHomeSide.style.top = value * 2.2 + 'px'; 
   //containerHome.style.bottom = value * 1.0 + 'px';  
   //planetBgHome.style.bottom = value + 2.02 + 'px'
  

    let rotationValue = value * 0.2; 
    planetHomeSide.style.transform = `rotate(${rotationValue}deg)`;
    // planetHomeSide.style.transition = 'transform 222ms ease-in';
    const opacity = 1 - (value / 250);
    const opacityTwo = 1 - (value / 270);
    const opacityTree = 1 - (value / 470);

    const limitedOpacity = Math.max(0, Math.min(1, opacity));
    const limitedOpacityTwo = Math.max(0, Math.min(1, opacityTwo));

    cloud.style.opacity = limitedOpacity;
    cloudTwo.style.opacity = limitedOpacityTwo;
    planetHomeSide.style.opacity = limitedOpacityTwo;
   // containerHome.style.opacity = limitedOpacity;
   if (window.innerWidth > 1024) {
    containerHome.style.bottom = value * 1.0 + 'px';
    containerHome.style.opacity = limitedOpacity;
}
if (window.innerWidth < 720) {
    // containerHome.style.bottom = value * 0.5 + 'px';
    containerHome.style.opacity = opacityTree;
}
if (window.innerWidth > 720 && window.innerWidth < 1024) {
    //containerHome.style.bottom = value * 0.2 + 'px';
   // containerHome.style.opacity = limitedOpacity;
   
}

});

const btnBackHome = document.getElementById('btn-back-home')

btnBackHome.addEventListener('click',()=>{
window.location.href = '/';
console.log('prout')
})
  
  