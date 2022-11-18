'use strict'
const calculation=document.querySelector('.calc_edition');
const btnGroups=document.querySelector('.btn_groups');
const btn=document.querySelectorAll('.btn');
const transformArrBtn= Array.from(btn);

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        if(this.innerHTML == '='){
           calculation.innerHTML = eval(calculation.innerHTML);
           
    }else{
        if(this.innerHTML==='AC'){
            calculation.innerHTML='';
            console.log('i am ac');
        }else if(this.innerHTML === 'Del'){
            calculation.innerHTML = `${calculation.innerHTML}`.slice(0,-1);
        }
        else
            calculation.innerHTML += this.innerHTML;
        }
    })
}
