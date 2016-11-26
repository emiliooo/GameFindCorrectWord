

var ha = ["Będą takie mrozy, że przymarznie cap do kozy",

    "Biedny kupuje jedną kapotę, ale na całe życie",
    "Bierz nogi za pas, póki jeszcze czas",
    "Bogatemu to i byk się ocieli",

    "Bo pić trzeba umieć",
    "Brał i Napoleon czasem po tabinkach",
    "Budować zamki na lodzie",
    "Byłoby dłuższe lato, gdyby nie zima",
    "Byś zupełnie był mądry, wiek ci nie wystarczy",

    "Co jednemu swawola, to drugiemu niewola",
    "Co komu pisane, to go nie minie",
    "Co lato odkłada, to zima przejada",
    "Co łysemu po grzebieniu!?",
    "Co ma piernik do wiatraka?",
    "Co nie siłą, to rozumem"];

var hasl= 'ha[Math.floor((Math.random() * 14) + 1)]  )';


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


var litery = new Array(24);

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
litery[12] = 'M';
litery[13] = 'N';
litery[14] = 'O';
litery[15] = 'P';
litery[16] = 'R';
litery[17] = 'S';
litery[18] = 'T';
litery[19] = 'U';
litery[20] = 'V';
litery[21] = 'W';
litery[22] = 'X';
litery[23] = 'Y';
litery[24] = 'Z';


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


