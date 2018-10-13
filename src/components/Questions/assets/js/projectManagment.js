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
    q1: '¿Cuál de las siguientes opciones es una fase de planificación en la implementación de GQM?',
    q2: '¿Cuál de las siguientes opciones es una fase de interpretación en la implementación de GQM?',
    q3: '¿Cuál de las siguientes opciones es una fase de Recopilación de datos en la implementación de GQM?',
    q4: '¿Cuál de las siguientes opciones es una fase de definición en la implementación de GQM?',
    q5: 'El proceso de GQM comienza con el establecimiento de objetivos de ….',
    q6: '¿Cuál de las siguientes opciones es una faceta de información de “Objeto”?',
    q7: '¿Cuál de las siguientes opciones es una faceta de información de “Propósito”?',
    q8: '¿Cuál de las siguientes opciones NO es una fase de definición en los Fundamentos de GQM?',
    q9: '¿Cuál de las siguientes opciones NO es una fase de mejora de toma de decisiones en los Fundamentos de GQM?',
    q10: '¿A qué nivel refiere la siguiente oración? “El equipo identifica las métricas que proporcionarán respuestas a las preguntas planteadas anteriormente?',
},
options: {
    q1: ['Entrevistas GQM','Producir el Plan de Medición','Sesiones de Realimentación','Seleccionar las áreas de mejora'],
    q2: ['Comprobar Consistencia y Completitud de las Métricas','Preparación de las Sesiones de Realimentación','Modelos de proceso de software','Formación y Arranque'],
    q3: ['Construcción  de un Sistema de Soporte a la Medición','Producir el Plan GQM','Definir las Métricas','Preguntas e Hipótesis (definición y revisión)'],
    q4: ['Definir los objetivos de la medición','Establecer el Equipo GQM','Generación de informes de interpretación de los resultados de la medición'],
    q5: ['Objetivos de Negocios','Objetivos de Medida'],
    q6: ['El producto o el proceso bajo estudio','Los atributos de calidad del objeto bajo estudio','Alcance o contexto del programa de medidas'],
    q7: ['Alcance o contexto del programa de medidas','Motivación detrás del objetivo','Perspectiva de las metas'],
    q8: ['Generación de Preguntas','Especificación de Medidas','Preparar Recolección de datos'],
    q9: ['Recolectar y Validar','Establecer las Metas','Analizar'],
    q10: ['Nivel Conceptual','Nivel Operacional','Nivel Cuantitativo'],
},
answers: {
    q1:'Seleccionar las áreas de mejora',
    q2:'Preparación de las Sesiones de Realimentación',
    q3:'Construcción  de un Sistema de Soporte a la Medición',
    q4:'Establecer el Equipo GQM',
    q5:'Objetivos de Medida',
    q6:'El producto o el proceso bajo estudio',
    q7:'Motivación detrás del objetivo',
    q8:'Preparar Recolección de datos',
    q9:'Establecer las Metas',
    q10:'Nivel Operacional',
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