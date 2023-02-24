var question = [
    {
      question: "Html Stands For ________________________________________________________________________________________________________________________________________________________________________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]
var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');
var ques = document.getElementById('ques');
var option = document.getElementById('option');
var displayMarks = document.getElementsByClassName('result');
var percentage = document.getElementsByClassName('percentage');
var displayStatus = document.getElementsByClassName('status')
var currentIndex = 0;
var marks = 0;


function init(){
    option.innerHTML= "";
    totalQuestion.innerHTML = question.length;
    currentQuestion.innerHTML = currentIndex + 1;
    ques.innerHTML = question[currentIndex].question;
    for(var i = 0; i < question[currentIndex].options.length; i++){
        // console.log(question[currentIndex].options[i]);
        option.innerHTML +=`<button name ="${question[currentIndex].options[i]}" class="col btn btn-outline-warning">${question[currentIndex].options[i]}</button>`
    }

}
init();
function next(){
    if(currentIndex + 1 == question.length){

    }else{
        currentIndex++;
        init();
    }
}

function checking(event){
  if(event.target.name == question[currentIndex].correctAns){
    marks++;
  }
  else{
    marks = marks;  
  }
  console.log(marks)
}
option.addEventListener('click', (event) =>{
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  console.log(event.target.name)
  checking(event)
})
 
function showResult(){
  displayMarks.innerHTML = `<h3 class="result">${displayMarks.innerHTML = marks}</h3>`;
  console.log(  displayMarks.innerHTML = `<h3 class="result">${displayMarks.innerHTML = marks}</h3>`)
  document.write("Result :" +" "+ marks);
  var percentage = marks / question.length * 100; 
  document.write("<br>"+ "Percentage: " + percentage +'%');
  if (marks > 3){
    document.write("<br>" + "Grade: " + "Pass")
  }
  else{
    document.write("<br>" + "Grade: " + "Fail")
  }
}