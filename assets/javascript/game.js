$(document).ready(function() {
    questions = [
        ["<button type = 'button' class='btn-lg btn-primary' id = 'start'>Start</button>", "<button type = 'button' class = 'btn-lg btn-primary' id = 'restart'>Restart</button>"],
        ["What is the name of Poe Dameron's driod in Star Wars The Force Awakens?", "R2-D2","C-3PO", "BB-9E", "BB-8", "D"],
        ["In Beauty and the Beast, how many eggs does Gaston say he eats in order to stay roughly the size of barge?", "Seven Dozen", "Four Dozen", "Five Dozen", "Six Dozen", "C"],
        ["In Aladdin, what does Aladdin, and a reluctant Abu, give to the poor children to eat?", "Apples", "Bread", "Cheese", "Orange", "B"],
        ["What charcter does Tom Hanks voice in the movie Toy Story?", "Woody", "Slink", "Buzz Lightyear", "Rex", "A"],
        ["In 101 Dalmations, how many puppies does Perdita give birth to?", "101", "12", "15", "20", "C"],
        ["In Toy Story, what is the name of the new toy that Andy gets for his birthday?", "Buzz Lightyear", "Woody", "Toy Soldiers", "Potato Head", "A"],
        ["What is the name of the movie where Owen Wilson is the voice of the main character?", "Planes", "Cars", "Toy Story", "The Lion King", "B"],
        ["In Beauty and the Beast, who is the voice of Belle?", "Jodi Benson", "Paige O'Hara", "Angela Lansbury", "Emma Watson", "B"],
        ["In Aladdin, how many years does the Genie say that he has been trapped in the lamp?", "2,000 years", "5,000 years", "8,000 years", "10,000 years", "D"],
        ["What is the name of the first animated movie released by Disney?", "Snow White", "Dumbo", "Pinocchio", "Bambi", "A"]
    ];
    answers = [
        [],
        ["Your answer is <br>","BB-8 <br>", "<img src = './assets/images/bb-8.gif' />"],
        ["Your answer is <br>", "Five Dozen <br>", "<img src = './assets/images/gaston.gif' />"],
        ["Your answer is <br>", "Bread <br>", "<img src = './assets/images/aladdin.gif' />"],
        ["Your answer is <br>", "Woody", "<img src = './assets/images/woody.gif' />"],
        ["Your answer is <br>", "15", "<img src = './assets/images/puppies.gif' />"],
        ["Your answer is <br>", "Buzz Lightyear", "<img src = './assets/images/buzz.gif' />"],
        ["Your answer is <br>", "Cars", "<img src = './assets/images/cars.gif' />"],
        ["Your answer is <br>", "Paige O'Hara", "<img src = './assets/images/beauty.gif' />"],
        ["Your answer is <br>", "10,000 years", "<img src = './assets/images/genie.gif' />"],
        ["Your answer is <br>", "Snow White", "<img src = './assets/images/snowwhite.gif' />"]
    ];
    
    var timeLeft = 15;
 
    var choice, timerId, chA, chB, chC, chD, answer, question;
    count = timeLeft;
    function countDown() {
        clearInterval(timerId);
        timerId = setInterval(countDown, 1000);
        if (count === 0) {
            clearTimeout(timerId);
            noTime();
        } else {
            $("#time").html("Time Remaining: " + count);
            count--;
        };

    };
    


    function displayStart(){
        incorrect = 0;
        correct = 0;
        pos = 0;
        $("#time").hide();
        $("#answer").hide();
        $("#button").show();
        $("#button").html(questions[pos][0]);
        pos++
        $("#start").on("click", function(){
            displayQuestion();
        });
    };
            function displayQuestion(){
                $("#time").show();
                $("#button").hide();
                $("#answer").hide();
                countDown();
                $("#question").show();
                $("#a").show();
                $("#b").show();
                $("#c").show();
                $("#d").show();
                $("#image").show();
                question = questions[pos][0];
                chA = questions[pos][1];
                chB = questions[pos][2];
                chC = questions[pos][3];
                chD = questions[pos][4];
                $("#question").html(question);
                $("#a").html(chA);
                $("#b").html(chB);
                $("#c").html(chC);
                $("#d").html(chD + "<br> <br>");
                $("#image").html(" ");
                $("#a").off("click")
                $("#a").on("click", function(){
                    checkAnswer(this);
                });
                $("#b").off("click")
                $("#b").on("click", function(){
                    checkAnswer(this);
                });
                $("#c").off("click")
                $("#c").on("click", function(){
                    checkAnswer(this);
                });
                $("#d").off("click")
                $("#d").on("click", function(){
                    checkAnswer(this);
                });
            };
        

    function checkAnswer(chooser){
        choice= chooser.getAttribute("value");
        clearInterval(timerId);
        count = timeLeft;
            console.log(choice);
            console.log(questions[pos][5]);
        
        if(choice === questions[pos][5]){
            correct ++;
            right();
            
        }
        else{
            incorrect ++;
            wrong();
        };
        
    };
    function noTime(){
        clearInterval(timerId);
        count = timeLeft;
        incorrect ++;
        $("#answer").show()
        $("#answer").html("You ran out of Time <br>" + answers[pos][1]);
        $("#question").hide();
        $("#a").hide();
        $("#c").hide();
        $("#b").hide();
        $("#d").hide();
        $("#image").html(answers[pos][2]);
        setTimeout(function(){pos ++}, 500);
        console.log(pos);
        console.log(questions.length);
        if (pos < (questions.length - 1)){
            setTimeout(function(){displayQuestion()},(1000 * 5));
        }
        else{
            complete();
        };
        
    };
    function right(){
        answer = "Right Congratulatons"
        $("#answer").show();
        $("#answer").html("<br>" + answers[pos][0] + answer + "<br>" + answers[pos][1] + "<br>");
        $("#question").hide();
        $("#a").hide();
        $("#c").hide();
        $("#b").hide();
        $("#d").hide();
        $("#image").html(answers[pos][2]);
        setTimeout(function(){pos ++}, 500);
        if (pos < (questions.length - 1)){
            setTimeout(function(){displayQuestion()},(1000 * 5));
        }
        else{
            complete();
        };
        
    };
    function wrong(){
        answer = "Wrong Sorry"
        $("#answer").show();
        $("#answer").html("<br>" + answers[pos][0] + answer + "<br>" + answers[pos][1] + "<br>");
        $("#question").hide();
        $("#a").hide();
        $("#c").hide();
        $("#b").hide();
        $("#d").hide();
        $("#image").html(answers[pos][2]);
        setTimeout(function(){pos ++}, 500);
        if (pos <  (questions.length - 1)){
        
            setTimeout(function(){displayQuestion()},(1000 * 5));
        }
        else{
            complete();
        };
        
    };
    function complete(){
        clearInterval(timerId);
        ($("#answer"), $("#button")).show();
        $("#answer").html("Congratulations on Completing the Quiz <br> <br> You got " + correct + " Correct <br> <br> You got " + incorrect + " Wrong <br> <br> You got a " + (correct*10) + "% <br>");
        $("#button").html("<br> <br>" + questions[0][1]);
        $("#a").hide();
        $("#b").hide();
        $("#c").hide();
        $("#d").hide();
        $("#image").hide();
        
        $("#restart").on("click", function(){
            console.log("help");
            displayStart();
            
            
        });
    };
  
    displayStart();
});