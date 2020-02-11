let bg = document.getElementById("bg");
let ghostCnt = 0;

class Enemy {
  constructor(){

    this.enemy = document.createElement("div");
    this.enemy.id = `ghost${ghostCnt}`;
    ghostCnt += 1; 
    this.enemy.className = `ghost`;
    bg.prepend(this.enemy);
    let random = parseInt(Math.random()*755);
    this.enemy.style.left = `${random}px`;
    this.classEnemy=document.getElementsByClassName('ghost');
    this.move();

  }

  move(){
    setInterval(() => { 

        if(parseInt(window.getComputedStyle(this.enemy).top) < 541){

            this.enemy.style.top = `${parseInt(window.getComputedStyle(this.enemy).top) + 5}px`;

        }else{

          this.isDead();  
        
        }

        let heroCss=window.getComputedStyle(hero,null);
              
        if(parseInt(window.getComputedStyle(this.enemy).top) > 493){    
    
            if(parseInt(heroCss.left)-61.5 <= parseInt(this.enemy.style.left) && parseInt(this.enemy.style.left) <= parseInt(heroCss.left)+17.5){

              this.isDead();   
    
            }
        
        }
  
    }, 200);
  }

  isDead(){

    this.enemy.classList.add("die");
  
    setTimeout(() => {

        this.enemy.remove();

    },190) 
  }
}

setInterval(() =>{
  const enemy= new Enemy();
},5000)
