
import {classificarRank} from './controller/ranking.js';
import { saidaDoHeroi } from './controller/ranking.js';

console.log('script carregado!');

/* identificar os inputs do usuário */
let inputXP = document.getElementById('input_xp');
let btnEnviar=document.getElementById('btnEnviar');
let inputHeroName = document.getElementById('inputName');

btnEnviar.addEventListener('click',()=>{
        var valueInputXp = inputXP.value;
        var inputName = inputHeroName.value;
        var classificacao = classificarRank(parseInt(valueInputXp));
        document.getElementById('resultado_heroi').innerText = saidaDoHeroi(classificacao,inputName);

} );



