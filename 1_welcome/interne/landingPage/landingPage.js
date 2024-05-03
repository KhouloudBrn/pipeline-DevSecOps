let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');

let mountains4=document.getElementById('mountains4');

let mountains7=document.getElementById('mountains7');

let mountains5=document.getElementById('mountains5');

let boat=document.getElementById('boat');

let river=document.getElementById('river');

let novil=document.getElementById('novil');

window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value + 'px' ;
    
    moon.style.top=value*3 + 'px' ;
    
    mountains3.style.top=value*1.5 + 'px' ;
    
    mountains4.style.top=value*1.2+ 'px' ;
    
    river.style.top=value + 'px' ;
    
   boat.style.top=value + 'px' ;
   
   boat.style.left=value*3 + 'px' ;
   
   novil.style.fontSize=value*0.13 + 'px' ;
   if(scrollY >= 67){
    
   novil.style.fontSize=40+ 'px' ;
   
   novil.style.position='fixed';
   if(scrollY >= 478){
    
   novil.style.display='none' ;

   }
   else {
    
   novil.style.display='block' ;
   }
   if(scrollY >=127){
    document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';
   }
   else {
    document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';

   }

   }
}




const footerText = document.querySelector('footer p');
let fontSize = 16; 

function animateFooterText() {
    fontSize += 1; 
    footerText.style.fontSize = fontSize + 'px'; 
    if (fontSize >= 20) {
        clearInterval(footerAnimation); 
    }
}

const footerAnimation = setInterval(animateFooterText, 1000);




document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
  
    this.classList.add("scrolling");
  
    setTimeout(() => {
        this.classList.remove("scrolling");
    }, 1000); 
});
