$(document).ready(function(){
  
  // event listeners
  $("#remaining-time").hide();
  $("#start").on('click', trivia.startGame);
  $(document).on('click' , '.option', trivia.guessChecker);
  
}) 

var trivia = {
  // trivia properties
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 20,
  timerOn: false,
  timerId : '',
  // questions options and answers data
  questions: {
    q1: 'Qué permiten realizar los casos de uso?',
    q2: 'Qué relacion de dependencia existe con los puntos de función?',
    q3: 'Qué son las transacciones de los casos de uso?',
    q4: 'Qué tipo de estimacion permite obtener los puntos de función?',
    q5: "Qué presenta un caso de uso?", 
    //q6: "Quién dijo que este trabajo era irrealizable en un mes?"
  },
  options: {
    q1: ['Documentar los requerimientos', 'Estimar el tamaño del sistema', 'Todas son correctas', 'Ninguna es correcta'],
    q2: ['Son independientes de las tecnologías, plataformas, metodologías', 'Son dependientes de las tecnologías, plataformas, metodologías', 'Son dependientes de las plataformas', 'Ninguna es correcta'],
    q3: ['Entradas externas', 'Salidas externas', 'Consultas externas', 'Todas las anteriores son correctas'],
    q4: ['Una estimación fina del tamaño del proyecto', 'Una estimación grosera del tamaño del proyecto', 'La estimación final del proyecto', 'Todas son correctas'],
    q5: ['Un escenario principal','Un escenario alternativo','Un escenario específico','Las primeras dos son correctas'],
    //q6: ['Tacchini','tacchini en minuscula','TACCHINI en mayusculas','Todas son correctas']
  },
  answers: {
    q1: 'Documentar los requerimientos',
    q2: 'Son independientes de las tecnologías',
    q3: 'Todas las anteriores son correctas',
    q4: 'Una estimación grosera del tamaño del proyecto',
    q5: 'Las primeras dos son correctas',
    //q6: 'Todas son correctas'
  }, 
  startGame: function(){ 
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId); 
    $('#game').show(); 
    $('#results').html(''); 
    $('#timer').text(trivia.timer); 
    $('#start').hide(); 
    $('#remaining-time').show(); 
    trivia.nextQuestion();
    
  }, 
  nextQuestion : function(){ 
    trivia.timer = 10;
     $('#timer').removeClass('last-seconds');
    $('#timer').text(trivia.timer); 
    if(!trivia.timerOn){
      trivia.timerId = setInterval(trivia.timerRunning, 1000);
    } 
    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $('#question').text(questionContent);
     
    var questionOptions = Object.values(trivia.options)[trivia.currentSet]; 
    $.each(questionOptions, function(index, key){
      $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
    })
    
  }, 
  timerRunning : function(){ 
    if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
      $('#timer').text(trivia.timer);
      trivia.timer--;
        if(trivia.timer === 4){
          $('#timer').addClass('last-seconds');
        }
    } 
    else if(trivia.timer === -1){
      trivia.unanswered++;
      trivia.result = false;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Se terminó el tiempo, la respuesta era: '+ Object.values(trivia.answers)[trivia.currentSet] +'</h3>');
    } 
    else if(trivia.currentSet === Object.keys(trivia.questions).length){ 
      $('#results')
        .html('<h3>Gracias por jugar ;)</h3>'+
        '<p>Correctas: '+ trivia.correct +'</p>'+
        '<p>Incorrectas: '+ trivia.incorrect +'</p>'+
        '<p>Sin responder: '+ trivia.unanswered +'</p>'+
        '<p>Juga de nuevo!</p>'); 
      $('#game').hide(); 
      $('#start').show();
    }
    
  }, 
  guessChecker : function() { 
    var resultId; 
    var currentAnswer = Object.values(trivia.answers)[trivia.currentSet]; 
    if($(this).text() === currentAnswer){  //respuesta correcta
      $(this).addClass('btn-success').removeClass('btn-info'); 
      trivia.correct++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Correcto!</h3>');
    } 
    else{ 
      $(this).addClass('btn-danger').removeClass('btn-info'); 
      trivia.incorrect++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>La respuesta era: '+ currentAnswer +'</h3>');
    }
    
  }, 
  guessResult : function(){ 
    trivia.currentSet++; 
    $('.option').remove();
    $('#results h3').remove(); 
    trivia.nextQuestion();
  }

}