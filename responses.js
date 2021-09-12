let y = 0;

function getBotResponse(input) {
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    } else if (input == "lets play!") {
        return "I can play rock, paper and scissors!";
    } else if (input == "okay") {
        return "Say it on shoot! Rock, paper, scissors, SHOOT!";
    }


    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Have a good day!";
    } else if (input == "Goodbye!"){
        return "Bye : )";
    }  else if (input == "send 10 to my chequing account"){
        y=1;
        saving();
        chequing();
        return "Check phone for fingerprint or enter your birthday (dd/mm)";
    } else if (input == ""){
        return "Done! anything else?";
    } else if (input == "0410"){
        return "Done! anything else?";

    } else if (input == "1412"){
        return "Done! anything else?";

    }  else if (input == "send 50 to my grandson"){
        return "Sorry, there is no one with that name in your contact";
    }   else if (input == "send 50 to charlie"){
        y=2;
        chequing();
        return "check phone for fingerprint or enter your birthday (dd/mm)";
    }    else if (input == "nothing, thank you"){
        return "your welcome";
    }     else if (input == "nothing, ty"){
        return "yw <3";
    }     else if (input == "invest 400"){
        return "Which company would you like to invest in?";
    }     else if (input == "AQN"){
        return "Done : ) anything else?";
    }      else if (input == "no"){
        return "Bye, good day <3";
    }
     else {
        return "I dont understand : (";
    }
}

function biometrics(){
    return "check phone for fingerprint or enter your birthday";
}

function saving(){
    let kep = 100;
    if(y==1){
        kep = kep - 10;
        return document.getElementById("sav").innerHTML = "Saving Acc Balance: $" + kep;
    }
}

function chequing(){
    let kep = 100;
    if(y==1){
        kep = kep + 10;
        return document.getElementById("cheq").innerHTML = "Chequing Acc Balance: $" + kep;
    }
    else if(y==2){
        kep = kep - 50;
        return document.getElementById("cheq").innerHTML = "Chequing Acc Balance: $" + kep;
  
    }
}