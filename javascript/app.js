$('#start').on('click',function(){
    game.start();
})

var questions = [{
    question: "Whose the Boss?",
    answers:["I'm the Boss","Tony Danza","Mathew Broderick","Seal",],
    correctAnswer: "Tony Danza"
},  {
    question:"What's it all about?",
    answers:["Pursuit of Enlightenment","Goin Hard","Nothing","Sports Scores",],
    correctAnswer:"Sports Scores"
}, {
    question:"What is today if yesterday's tomorrow?",
    answers:["Today","Tomorrow","Yesterday","A Bad Riddle",],
    correctAnswer:"A Bad Riddle"
}, {
    question:"Is this question four?",
    answers:["Yes","No","Maybe","These Aren't Numbered",],
    correctAnswer:"These Aren't Numbered"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 5,

    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
            if(game.counter===0){
            game.done();
            }
    },

     start: function(){
         timer = setInterval(game.countdown,1000);
         $('#subwrapper').prepend('<h2>Time Remaining:<span id="counter">5</span> Seconds</h2>');
        $('#start').remove();
            for(var i=0;i<questions.length;i++){
                $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
                    for(var j=0;j<questions[i].answers.length;j++){
                        $("#subwrapper").append("<input type= 'radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
                    }
            }
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            } 
        });

        $.each($("input[name='question-1']:checked"),function () {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            } 
        });

        $.each($("input[name='question-2']:checked"),function () {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            } 
        });

        $.each($("input[name='question-3']:checked"),function () {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
               game.incorrect++;
            } 
        });

        this.result();
    },
    
    result: function(){
        clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html("<h2>Results!</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}   

