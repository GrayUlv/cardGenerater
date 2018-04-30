/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
// import '../style/index.scss';

window.onload = function(){
    function pinta(){
        let suits= Math.floor(Math.random()*5)+1;
        return suits;
    }
    function numbers(){
        let num = Math.floor(Math.random()*14)+1;
        return num;
    }
    var pin= pinta();
    let str=0;
    let img=0;
    switch (pin) {
        case 1:
            // console.log("dimond");
            img="https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/743px-Card_diamond.svg.png";
            document.querySelector(".suits").src=img;
        break;
        case 2:
            // console.log("Heart");
            img="https://vignette.wikia.nocookie.net/thehungergames/images/8/8f/Red-heart.png/revision/latest?cb=20120821195650";
            document.querySelector(".suits").src=img;
        break;
        case 3:
            // console.log("Spade");
            img="http://pngimages.net/sites/default/files/spade-png-image-19559.png";
            document.querySelector(".suits").src=img;
        break;
        case 4:
            // console.log("Club");
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/2000px-SuitClubs.svg.png";
            document.querySelector(".suits").src=img;
        break;
        
    }
    let Num= numbers();
    switch (Num) {
        case 1:
            // console.log("A");
            str = "A";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 2:
            // console.log("2");
            str = "2";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 3:
            // console.log("3");
            str = "3";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 4:
            // console.log("4");
            str = "4";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 5:
            // console.log("5");
            str = "5";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 6:
            // console.log("6");
            str = "6";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 7:
            // console.log("7");
            str = "7";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 8:
            // console.log("8");
            str = "8";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 9:
            // console.log("9");
            str = "9";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 10:
            // console.log("10");
            str = "10";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 11:
            // console.log("J");
            str = "J";
            document.querySelector(".numC").innerHTML=str;
        break;
        case 12:
            // console.log("Q");
            str = "Q";
            document.querySelector(".numC").innerHTML=str;
        break;
         case 13:
            // console.log("K");
            str = "K";
            document.querySelector(".numC").innerHTML=str;
        break;
        
    }
    
};