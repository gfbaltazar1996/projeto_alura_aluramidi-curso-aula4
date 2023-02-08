function tocaSom (id) {
    document.querySelector('#'+id).play();
}

let list=document.querySelectorAll('.tecla');
for(let x=0;x<list.length;x++){
    list[x].onclick=function(){
            tocaSom('som_'+list[x].classList[1]);
    }
    list[x].onkeydown = function(event){
        switch(event.code){
            case "Enter":
            case "Space":
                list[x].classList.add('ativa');
            break;       
        }
    }
    list[x].onkeyup = function(event){
        list[x].classList.remove('ativa');       
    }
}

