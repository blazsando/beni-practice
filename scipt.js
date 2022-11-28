const codemon = 1;

function attack(){
    const attackInput = document.querySelector(`#attack-${codemon}`);
    const attackStr = attackInput.value;
    const attack = parseInt(attackStr);
    const hpSpan = document.querySelector(`#hp-${(codemon+1) % 2}+1`);
    const hpStr = hpSpan.innerHTML;
    const hp = parseInt(hpStr);
    hpSpan.innerHTML = Number(hp - attack).toString();

}


document.querySelector('button').addEventListener('click', attack)
