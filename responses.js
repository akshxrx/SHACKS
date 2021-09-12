let y = 0;

function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        // y=1;
        // saving();
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Have a good day!";
    } else if (input == "Goodbye!"){
        return "Bye : )";
    }  else if (input == "send 10 to my chequing account"){
        return "Done! anything else?";
    }  else if (input == "send 50 to my grandson"){
        return "Sorry, there is no one with that name in your contact";
    }   else if (input == "send 50 to charlie"){
        return "Done! anything else xD";
    }    else if (input == "nothing, thank you"){
        return "your welcome";
    }     else if (input == "nothing, ty"){
        return "yw <3";
    }
     else {
        return "I dont understand : (";
    }
}

function saving(){
    if(y=1){
        document.getElementById("sav").value = "Saving Acc Balance: $90";  
    }
}