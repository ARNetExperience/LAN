//Question bank
var questionBank= [
    {
        question : 'What does ARP stand for?',
        option : ['Address Resolution Protocol','Advanced Routing Protocol',' Automated Routing Protocol','Address Retrieval Protocol'],
        answer : 'Address Resolution Protocol'
    },
    {
        question : 'Which layer of the OSI model does ARP primarily operate on?',
        option : ['Application layer',' Transport layer','Network layer','Data link layer'],
        answer : 'Data link layer'
    },
    {
        question : 'What is the main purpose of ARP?',
        option : ['To translate domain names to IP addresses','To discover the MAC address of a device on the same network given its IP address','To establish secure connections between devices','To manage network congestion'],
        answer : 'To discover the MAC address of a device on the same network given its IP address'
    },
    {
        question : 'Which command can be used to view the ARP cache in most operating systems?',
        option : ['arpconfig','ifconfig','arp -a','ipconfig /all'],
        answer : 'arp -a'
    },
    {
        question : 'How does ARP resolve IP addresses to MAC addresses?',
        option : [' By sending ARP Requests','By querying the DNS server','By broadcasting ARP Responses',' By using ICMP packets'],
        answer : ' By sending ARP Requests'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  //function to display questions
  function displayQuestion(){
      for(var a=0;a<span.length;a++){
          span[a].style.background='none';
      }
      question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
      var shuffledOptions = shuffleArray([...questionBank[i].option]); // Shuffle the options
      option0.innerHTML= shuffledOptions[0];
      option1.innerHTML= shuffledOptions[1];
      option2.innerHTML= shuffledOptions[2];
      option3.innerHTML= shuffledOptions[3];
      stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
  }

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();