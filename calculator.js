let question = document.querySelector(".leftcalc");
let answer = document.querySelector(".rightcalc");
let button = Array.from(document.querySelectorAll("button"));

button.map(button => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "Clr":
        answer.innerText = " ";
        question.innerText = " ";
        break;

        case "=":
          
          if((answer.innerText).includes("/0")){
            answer.innerText = "Can't divide by Zero";
          }
          else{question.innerText = answer.innerText;
            try{         
               answer.innerText = eval(answer.innerText);
              }catch{
                answer.innerText = "Math Error";
            }}break;


      default:
        answer.innerText += e.target.innerText;
    }
  });
});
