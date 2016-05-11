var current_question

var audio = document.createElement('audio');
audio.src = 'music/new_question_final.mp3'


function display_question(question) {
  change_elements_text(question)
  create_events_for_question(question)
}

function change_elements_text(question) {
  $("#title").text(question.title)
  var alternatives = question.alternatives
  for(var i=0; i < alternatives.length; i++) {
    $("#alternative_" + i + " em").text(alternatives[i].text)
  }
}

function create_events_for_question(question) {
  var alternatives = question.alternatives
  for(var i=0; i < alternatives.length; i++) {
    var alternative = alternatives[i]
    if(alternative.correct == true) {
      $("#alternative_" + i).on("click", correct)
    } else {
      $("#alternative_" + i).on("click", wrong)
    }
  }
}

function correct(e) {
  // effects
  next_question();
}

function wrong(e) {
  // effect
  next_question();
}

function next_question(old_question) {
  var id = old_question.id + 1
  if (questions[id].length > 0) {
    current_question = questions[id]
  } else {
    current_question = questions[0]
  }
  return current_question
}


function key_press(){
  $(document).on("keypress", function(e){

    if(e.keyCode == 49){
      // 1
      $(".options li").removeClass("selected");
      $("#alternative_0").addClass("selected");
    }

    if(e.keyCode == 50){
      // 2
      $(".options li").removeClass("selected");
      $("#alternative_1").addClass("selected");
    }

    if(e.keyCode == 51){
      // 3
      $(".options li").removeClass("selected");
      $("#alternative_2").addClass("selected");
    }

    if(e.keyCode == 52){
      // 4
      $(".options li").removeClass("selected");
      $("#alternative_3").addClass("selected");
    }

    if(e.keyCode == 13){
      // saber resposta
      var alternatives = current_question.alternatives;
      for(var i=0; i < alternatives.length; i++) {
        if (alternatives[i].type == true) {
          $(".options li").removeClass("correct");
          $("#alternative_" + i).addClass("correct");
        }
      }
    }

    if(e.keyCode == 110){
      // n
      $(".options li").removeClass("correct");
      $(".options li").removeClass("selected");
      start();
    }

  });
}


function start() {
  var id_question = Math.floor( Math.random() * (questions.length))
  current_question = questions[id_question]
  console.log(current_question)
  display_question(current_question)
  audio.play();
}


$(window).load(function(){
  start()

  key_press();

});