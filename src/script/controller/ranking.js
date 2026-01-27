

export function classificarRank(value){

    if(value < 1000 ){
        return 'Ferro';
    }
    else if(value > 1000 && value <= 2000){
        return 'Bronze';
    }
    else if(value > 2000 && value <= 5000){
        return 'Prata';
    } 
    else if(value > 5000 && value <= 7000){
        return 'Ouro';
    }
    else if(value > 7000 && value <= 8000){
        return 'Platina';
    }
    else if(value > 8000 && value <= 9000) {
        return 'Ascendente';
    }
    else if(value > 9000 && value <= 10000){
        return 'Imortal';
    }
    else if(value > 10000){
        return 'Radiante';
    }
    else {
        return "indefinido";
    }
}

export function saidaDoHeroi(value,heroiName){
    return `O Herói de nome ${heroiName} está no nível de ${value}`;
}