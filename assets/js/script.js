// Create your HTML Page via DOM Methods here!
var StartButtonEl= document.querySelector("#task-form");
var h1El = document.querySelector(".card h1");
var h3El = document.querySelector(".card h3");
var h4El = document.querySelector(".card-footer h4")
var cardbody=document.querySelector(".card-body");
var secondsEl=document.querySelector('#seconds');
var resp='';
var pageContentEl = document.querySelector(".page-content")

// TODO: Create an array with five question objects
var questions=[{q:'Commonly used data types DO Not include:', a: '1. Strings',b: '2.	Booleans', c:'3. Alerts ',d: '4.	Numbers', r:'3'},
               {q:'The condition in and if / else statement is enclosed with___.', a:'1.	Quotes',b:'2. Curly brackets',c:'3.	Parenthesis', d:'4.	Square brackets', r:'3'},
               {q:'Array in Java Script can be used to store ____.', a:'1.	Numbers and strings  ',b: '2. Other arrays', c:'3.	Booleans',d:'4.	All the above', r: '4'},
               {q:'String Values must be enclosed within  ____.', a:'1.	Commas  ',b: '2.	Curly brackets ', c:'3.	Quotes',d:'4.	Parenthesis', r: '3'},
               {q:'A very useful tool used during development and debugging for printing content to the debugger is', a:'1.	JavaScript  ',b: '2.	Terminal/bash ', c:'3.	For loops',d:'4.	Console.log', r:'4'}]
    
  
// TODO: Create variables to keep track of the score and timer
var timer=0;
var score=0;

// TODO: Iterate over the questions array and display each question in a confirmation box
var diplayquestions= function(event){   
       event.preventDefault();   
       StartButtonEl.remove();
       h3El.remove();
       timer=75;
       secondsEl.textContent=timer;
       secondsEl.textContent;
       i=0;
     
          // Display a question and list of options
            resp=questions[i].r;
            //display question
            h1El.textContent = questions[i].q;
            h1El.textContent;
            var b1El = document.createElement('button');
                    b1El.textContent= questions[i].a;
                    b1El.className = "btn1";
                    b1El.id="bt1"
                    b1El.setAttribute("data-task-id", 1);
                    var b2El = document.createElement('button');
                    b2El.textContent = questions[i].b;
                    b2El.className = "btn1";
                    b2El.id="bt2"
                    b2El.setAttribute("data-task-id", 2);
                    var b3El = document.createElement('button');
                    b3El.textContent = questions[i].c;
                    b3El.className = "btn1";
                    b3El.id="bt1"
                    b3El.setAttribute("data-task-id", 3);
                    var b4El = document.createElement('button');
                    b4El.textContent = questions[i].d;
                    b4El.className = "btn1";
                    b4El.id="bt1"
                    b4El.setAttribute("data-task-id", 4);
                    cardbody.appendChild(b1El);
                    cardbody.appendChild(b2El);
                    cardbody.appendChild(b3El);
                    cardbody.appendChild(b4El);
    };

 var taskButtonHandler = function(event) {
        // get target element from event
        var targetEl = event.target;
        var taskId = targetEl.getAttribute("data-task-id");
        if (taskId=== resp){
            h4El.textContent = 'Your answer is Correct';
            h4El.textContent;
            score++;
        }else{
            h4El.textContent = 'Your answer is Wrong';
            h4El.textContent;
            timer-=10;
            if (timer<0){
                timer=0;
            }
            
       }
   };

//Section for listeners
//start the quiz1
StartButtonEl.addEventListener("submit", diplayquestions);
//for list of button options
pageContentEl.addEventListener("click", taskButtonHandler);