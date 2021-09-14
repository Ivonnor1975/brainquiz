// Create your HTML Page via DOM Methods here!
var body = document.body;
var StartButtonEl = document.createElement("button");

// TODO: Create an array with five question objects
var questions=[{q:'Commonly used data types DO Not include:', a: '1. Strings',b: '2.	Booleans', c:'3. Alerts ',d: '4.	Numbers', r:3},
               {q:'The condition in and if / else statement is enclosed with___.', a:'1.	Quotes',b:'2. Curly brackets',c:'3.	Parenthesis', d:'4.	Square brackets', r:3},
               {q:'Array in Java Script can be used to store ____.', a:'1.	Numbers and strings  ',b: '2. Other arrays', c:'3.	Booleans',d:'4.	All the above', r: 4},
               {q:'String Values must be enclosed within  ____.', a:'1.	Commas  ',b: '2.	Curly brackets ', c:'3.	Quotes',d:'4.	Parenthesis', r: 3},
               {q:'A very useful tool used during development and debugging for printing content to the debugger is', a:'1.	JavaScript  ',b: '2.	Terminal/bash ', c:'3.	For loops',d:'4.	Console.log', r: 4}]
    
  
    // TODO: Create variables to keep track of the score and timer
    var time=0;
    var score=0;

var loadpage=function(){
        // TODO: Add a centered h1
        var h1 = document.createElement("h1");
        h1.textContent= "Coding Quiz Challenge";
        h1.style.textAlign= "center";
        body.appendChild(h1)
        // TODO: Add a centered h2
        var h2 = document.createElement("h2");
        h2.textContent= "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.";
        body.appendChild(h2)
        // create start quiz button
        StartButtonEl.textContent = "Start Quiz";
        StartButtonEl.className = "button";
        body.appendChild(StartButtonEl);
    };

    // TODO: Iterate over the questions array and display each question in a confirmation box
 var diplayquestions= function(){
        
       for ( i=0; i < questions.length; i++){
          var pregunta=questions[i].q;
          var option1=questions[i].a;
          var option2=questions[i].b;
          var option3=questions[i].c;
          var option4=questions[i].d;
          // Add  a question and list of options
            var preguntaEl = document.createElement('div');
            var listEl = document.createElement('ol');
            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            var li4 = document.createElement('li');
            preguntaEl.textContent = pregunta;
            li1.textContent = option1;
            li2.textContent = option2;
            li3.textContent = option3;
            li4.textContent = option4;
            body.appendChild(preguntaEl);
            preguntaEl.appendChild(listEl);
            listEl.appendChild(li1);
            listEl.appendChild(li2);
            listEl.appendChild(li3);
            listEl.appendChild(li4);
                       
       }
    };
    
        //     if (useranswer===questions[i].a){
    //         alert("your answer is correct");
    //         score++;
    //     }
    //     else{
    //        alert("your answer is wrong");
    //     }
    //   };
    //   alert("You got "+ score +"/" + questions.length);
loadpage();

//Section for listeners
StartButtonEl.addEventListener("click", diplayquestions);
// Start the quiz
