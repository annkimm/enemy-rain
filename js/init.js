/*let bg = document.getElementById("bg");
let ghostCnt = 0;

let out=setInterval(function(){

    let div = document.createElement("div");
    div.id = `ghost${ghostCnt}`;
    ghostCnt += 1; 
    div.className = `ghost`;
    bg.prepend(div);
    let random = parseInt(Math.random()*(0 + 755) + 0);
    div.style.left = `${random}px`

},5000)

let creat = setInterval(function(){ 

    for (let i = 0, tag = document.getElementsByClassName('ghost'), len = tag.length; i< len; i++) {

        let ghostCss=window.getComputedStyle(tag[i],null);

        if(parseInt(window.getComputedStyle(tag[i]).top) < 541){

            tag[i].style.top = `${parseInt(ghostCss.top) + 10}px`;

        }else{
            tag[i].classList.add("die");

            setTimeout(() => {

                tag[i].remove();

            },490)            
        }

            let heroCss=window.getComputedStyle(hero,null);

         
            
        if(parseInt(window.getComputedStyle(tag[i]).top) > 493){    
    
            if(parseInt(heroCss.left)-61.5 <= parseInt(tag[i].style.left) && parseInt(tag[i].style.left) <= parseInt(heroCss.left)+17.5){

                    tag[i].classList.add("die");                   
    
                    setTimeout(() => {                 
                        tag[i].remove();
        
                    },400)  
    
            }
        
        }
        
    }

}, 500);

ghostCnt = 0;
*/
/*
let bg = document.getElementById("bg");
let ghostCnt = 0;
function makeGhost() {
    let div = document.createElement("div");
    div.id = `ghost${ghostCnt}`;
    div.className = `ghost`;
    bg.prepend(div);
    let random = parseInt(Math.random()*(0 + 755) + 0);
    div.style.left=random+"px"
}
let creat = setInterval(function(){

    if (ghostCnt < 4) {
        makeGhost();
        ghostCnt += 1;

    }

    for (let i = 0, tag = document.getElementsByClassName('ghost'), len = tag.length; i< len; i++) {

        if(parseInt(window.getComputedStyle(tag[i]).top) !== 540){

            tag[i].style.top = `${parseInt(window.getComputedStyle(tag[i]).top) + 15}px`;
        }else{
            tag[i].style.top=0;
        }
        
    }

}, 500);

ghostCnt = 0;
*/

/*
let bg = document.getElementById("bg");
let ghostCnt = 0;

let out=setInterval(function(){

    let div = document.createElement("div");
    div.id = `ghost${ghostCnt}`;
    ghostCnt += 1; 
    div.className = `ghost`;
    bg.prepend(div);
    let random = parseInt(Math.random()*(0 + 755) + 0);
    div.style.left = `${random}px`

},5000)

let creat = setInterval(function(){ 

    for (let i = 0, tag = document.getElementsByClassName('ghost'), len = tag.length; i< len; i++) {

        if(parseInt(window.getComputedStyle(tag[i]).top) < 540){

            tag[i].style.top = `${parseInt(window.getComputedStyle(tag[i]).top) + 10}px`;

            console.log(window.getComputedStyle(hero,null).left);

            if(){
                
            }

        }else{

            tag[i].classList.add("die");

            setTimeout(() => {

                tag[i].remove();

            },480)
        }
        
    }



}, 500);

ghostCnt = 0;
*/

/*

마지막 실행 버전

let bg = document.getElementById("bg");
let ghostCnt = 0;

let out=setInterval(function(){

    let div = document.createElement("div");
    div.id = `ghost${ghostCnt}`;
    ghostCnt += 1; 
    div.className = `ghost`;
    bg.prepend(div);
    let random = parseInt(Math.random()*(0 + 755) + 0);
    div.style.left = `${random}px`

},5000)

let creat = setInterval(function(){ 

    for (let i = 0, tag = document.getElementsByClassName('ghost'), len = tag.length; i< len; i++) {

        let ghostCss=window.getComputedStyle(tag[i],null);

        if(parseInt(window.getComputedStyle(tag[i]).top) < 541){

            tag[i].style.top = `${parseInt(ghostCss.top) + 10}px`;

            //console.log(window.pageYOffset + tag[i].getBoundingClientRect().left);

        }else{
            tag[i].classList.add("die");

            setTimeout(() => {

                tag[i].remove();

            },490)            
        }

            let heroCss=window.getComputedStyle(hero,null);

         
            
        if(parseInt(window.getComputedStyle(tag[i]).top) > 493){    
    
            if(parseInt(heroCss.left)-61.5 <= parseInt(tag[i].style.left) && parseInt(tag[i].style.left) <= parseInt(heroCss.left)+17.5){

                    console.log("뒷: ",parseInt(heroCss.left),parseInt(tag[i].style.left));

                    tag[i].classList.add("die");                   
    
                    setTimeout(() => {                 
                        tag[i].remove();
        
                    },400)  
    
            }
        
        }

           
        
        
    }



}, 500);

ghostCnt = 0;

*/