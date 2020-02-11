let hero=document.getElementById("hero");

document.addEventListener("keydown", function(e){

    if(e.keyCode === 37 ){

        hero.classList.remove("right-face");    
        hero.classList.add("left-face");        

        let cssStyle = window.getComputedStyle(hero,null);   
        let left = parseInt(cssStyle.left);
        
        let num = left-10;

        num <18 ? hero.style.left = "18px":hero.style.left=num+"px"
                    
    }else if(e.keyCode === 39){

        hero.classList.remove("left-face"); 
        hero.classList.add("right-face");  

        let heroCssStyle = window.getComputedStyle(hero,null);   
        let right = parseInt(heroCssStyle.left);
        
        let num = right+10;

        hero.style.left = num+"px"

        num < 780 ? hero.style.left = num+"px":hero.style.left="780px"

    }
});

document.addEventListener("keyup",function(e){
    hero.classList.remove("left-face"); 
    hero.classList.remove("right-face");
})

/*
class Hero {
  
}
*/