


var hasl= "NIE LUBIE PONIEDZIAŁKÓW"


var d = '';

var skuha = 0;


for (i = 0; i < hasl.length; i++) {

    if (hasl.charAt(i) == " ") {

        d += " "
    }
    else {


        d += "-"
    }
}


var litery = new Array(25);

litery[0] = 'A';
litery[1] = 'B';
litery[2] = 'C';
litery[3] = 'D';
litery[4] = 'E';
litery[5] = 'F';
litery[6] = 'G';
litery[7] = 'H';
litery[8] = 'I';
litery[9] = 'J';
litery[10] = 'K';
litery[11] = 'L';
litery[12] = 'Ł';
litery[13] = 'M';
litery[14] = 'N';
litery[15] = 'O';
litery[16] = 'Ó';
litery[17] = 'P';
litery[18] = 'R';
litery[19] = 'S';
litery[20] = 'T';
litery[21] = 'U';
litery[22] = 'V';
litery[23] = 'W';
litery[24] = 'X';
litery[25] = 'Y';
litery[26] = 'Z';


function Buttons() {


    document.getElementById('button').style.display = "none";

    var tresc_diva = ' ';
    for (i = 0; i < litery.length; i++) {
        var lit = 'lit' + i;
        tresc_diva += '<div class="litera" onclick="sprawdz(' + i + ')" id="' + lit + '" style="text-align:center;color:white;font-size:30px;">' + litery[i] + '</div>'

    }
    document.getElementById('alf').innerHTML += tresc_diva;
    document.getElementById('in').innerHTML = d;


}


String.prototype.ustawZnak = function (miejsce, znak) {

    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1)

}

function sprawdz(nr) {

    //console.log(litery[nr]);


    var trafiona;


    for (i = 0; i < hasl.length; i++) {
        if (hasl.charAt(i) == litery[nr]) {
            d = d.ustawZnak(i, litery[nr]);
            trafiona = true;

        }


    }

    if (trafiona == true) {


        document.getElementById('play').play()


    }
    else {

        skuha += 1;
        var element = 'lit' + nr;
        document.getElementById(element).style.background = "#FF0027";
        document.getElementById(element).style.opacity = "1";

    }


    document.getElementById('in').innerHTML = d;
    document.getElementById('sk').innerHTML = "Ilość pomyłek:" + skuha

};


