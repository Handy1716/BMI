function szamit(){

    let suly = document.getElementById("sulybox").value;
    let magassag = document.getElementById("magassagbox").value;

    let eredmeny = suly / (magassag/100) ** 2;
    document.getElementById('eredmenybox').value = eredmeny;

}

document.getElementById('gomb').addEventListener('click' , szamit);