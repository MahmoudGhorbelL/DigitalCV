function corrigerQuiz(){
  var score = 0;
  var total = 15;

  for(var i=1;i<=total;i++){
    var radios = document.getElementsByName("q"+i);
    for(var j=0;j<radios.length;j++){
      if(radios[j].checked && radios[j].value == "1"){
        score++;
      }
    }
  }
    // var resultat = "Votre note : " + score + " / " + n;
    // var rep = "Réponses correctes :\n" + "1) IIT Sfax\n 2) Génie Informatique\n 3) ISET Sfax\n 4) 2022\n 5) Flutter & PHP\n 6) VISS-Tunisie\n 7) Flutter\n 8) Node.js\n 9) Event Area 0.2\n 10) Dart\n 11) JavaScript (Node.js)\n12) Angular\n13) Flutter, Angular, Spring Boot, IA\n 14) Application mobile intelligente de collecte\n 15) MySQL & MongoDB";
    // alert(resultat + "\n\n" + rep);
    
  document.getElementById("resultat").innerHTML =
    "<h3>Votre note : " + score + " / " + total + "</h3>";

  document.getElementById("reponses").innerHTML =
    "<h4>Réponses correctes :</h4>" +
    "<p>1) IIT Sfax<br>2) Génie Informatique<br>3) ISET Sfax<br>4) 2022<br>5) Flutter & Node.js<br>6) VISS-Tunisie<br>7) Flutter<br>8) Node.js<br>9) Event Area 0.2<br>10) Dart<br>11) JavaScript (Node.js)<br>12) Angular<br>13) Flutter, Angular, Spring Boot, IA<br>14) Application mobile intelligente de collecte<br>15) MySQL & MongoDB</p>";
}
function verifierQuiz(){
  var total = 15;

  for(var i=1;i<=total;i++){
    var question = document.getElementsByName("q"+i);
    var rep = false;

    for(var j=0;j<question.length;j++){
      if(question[j].checked){
        rep = true;
      }
    }

    if(!rep){
      alert("Veuillez répondre à la question " + i);
      return false;
    }
  }

  corrigerQuiz();
}