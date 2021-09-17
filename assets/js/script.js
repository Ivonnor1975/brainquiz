// Create your HTML Page via DOM Methods here!
var StartButtonEl= document.querySelector("#task-form");
var h1El = document.querySelector(".card h1");
var h3El = document.querySelector(".card h3");
var h4El = document.querySelector(".card-footer h4")
var cardbody=document.querySelector(".card-body");
var secondsEl=document.querySelector('#seconds');
var resp='';
var pageContentEl = document.querySelector(".page-content")
// create array to hold scores for saving
var saveScores = [];

// TODO: Create an array with five question objects
var questions=[{q:'Commonly used data types DO Not include:', a: '1. Strings',b: '2.	Booleans', c:'3. Alerts ',d: '4.	Numbers', r:'3'},
               {q:'The condition in and if / else statement is enclosed with___.', a:'1.	Quotes',b:'2. Curly brackets',c:'3.	Parenthesis', d:'4.	Square brackets', r:'3'},
               {q:'Array in Java Script can be used to store ____.', a:'1.	Numbers and strings  ',b: '2. Other arrays', c:'3.	Booleans',d:'4.	All the above', r: '4'},
               {q:'String Values must be enclosed within  ____.', a:'1.	Commas  ',b: '2.	Curly brackets ', c:'3.	Quotes',d:'4.	Parenthesis', r: '3'},
               {q:'A very useful tool used during development and debugging for printing content to the debugger is', a:'1.	JavaScript  ',b: '2.	Terminal/bash ', c:'3.	For loops',d:'4.	Console.log', r:'4'}]
    
  
// TODO: Create variables to keep track of the score and timer
var timeleft=0;
var score=0;

//load initial web page and reload it at the end ti start over
var loadpage=function(){
            h1El.textContent="Coding Quiz Challenge";
            h3El.textContent="Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.";
            StartButtonEl.addEventListener("submit", diplayquestions);
};

// TODO: Iterate over the questions array and display each question in a confirmation box
var diplayquestions= function(event){   
       event.preventDefault();
       StartButtonEl.removeEventListener("submit", diplayquestions);
       StartButtonEl.remove();
       h3El.textContent='';
       timeleft=75;
       secondsEl.textContent=timeleft;
       i=0;
       loadnextquestion(i);  //load the first question
       
        //for questions and answers list of button options
        pageContentEl.addEventListener("click", taskButtonHandler);
       // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function() {
                // As long as the `timeLeft` is greater than 1
                if (timeleft > 1) {
                    // Set the `textContent` of `timerEl` to show the remaining seconds
                    secondsEl.textContent = timeleft;
                    // Decrement `timeLeft` by 1
                    timeleft--;
                } else if (timeleft === 1) {
                    // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
                    secondsEl.textContent = timeleft;
                    timeleft--;
                } else {
                    // Once `timeLeft` gets to 0, set `timerEl` to an empty string
                    secondsEl.textContent = '0';
                    // Use `clearInterval()` to stop the timer
                    clearInterval(timeInterval);
                    // Call the record score function
                    showScore();
                }
                
        }, 1000);
     };

//display questions on card body area 
var loadnextquestion=function(c){
               // Display the question 
               resp=questions[c].r;
               //display options
               h1El.textContent = questions[c].q;
               h1El.textContent;
               var b1El = document.createElement('button');
               b1El.textContent= questions[c].a;
               b1El.className = "btn1";
               b1El.id="bt1"
               b1El.setAttribute("data-task-id", 1);
               var b2El = document.createElement('button');
               b2El.textContent = questions[c].b;
               b2El.className = "btn1";
               b2El.id="bt2"
               b2El.setAttribute("data-task-id", 2);
               var b3El = document.createElement('button');
               b3El.textContent = questions[c].c;
               b3El.className = "btn1";
               b3El.id="bt3"
               b3El.setAttribute("data-task-id", 3);
               var b4El = document.createElement('button');
               b4El.textContent = questions[c].d;
               b4El.className = "btn1";
               b4El.id="bt4"
               b4El.setAttribute("data-task-id", 4);
               cardbody.appendChild(b1El);
               cardbody.appendChild(b2El);
               cardbody.appendChild(b3El);
               cardbody.appendChild(b4El);
};
//remove buttons from card-body
var cleanbtns=function(){ 
    document.querySelector('#bt1').remove();
    document.querySelector('#bt2').remove();
    document.querySelector('#bt3').remove();
    document.querySelector('#bt4').remove();
};
//Show score after quiz is done
var showScore=function(){
    h1El.textContent="All Done!";
    h3El.textContent = "Your Final Score is: "+ score;
    h4El.textContent='';
    cleanbtns();
    pageContentEl.removeEventListener("click", taskButtonHandler);
    //create to capture initials  
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "initials");
    FN.setAttribute("id", "in");
    FN.setAttribute("placeholder", "Enter Your Initials");
    // create a submit button
    var s = document.createElement("button");
    s.textContent = "Submit";
    s.setAttribute("class", "btinit");
    s.setAttribute("value", "Submit");
    document.querySelector(".card-body").appendChild(FN);
    document.querySelector(".card-body").appendChild(s);
    //validate user entry before sending to the score page 
    s.addEventListener("click", ()=>{
        var strlengthEl = document.getElementById("in");
        if (strlengthEl.value.length < 1){
            alert("You need to enter initials");
            return false;
        }else{
           saveScores(); 
        }
    })
};



//waiting to capture answer for each quesion
var taskButtonHandler = function(event){
        // get target element from event what option was selected
        var targetEl = event.target;
        var taskId = targetEl.getAttribute("data-task-id");
        if (taskId=== resp){
            h4El.textContent = 'Your answer is Correct';
            h4El.textContent;
            score++;
        }else{
            h4El.textContent = 'Your answer is Wrong';
            h4El.textContent;
            timeleft-=10;
        }
        if (timeleft<0){
            timeleft=0;
        };
       i++;
       if(i < questions.length){
            cleanbtns();
            loadnextquestion(i); 
       }else{ 
            timeleft=0;
        }
 };

//Initial page
 loadpage();
