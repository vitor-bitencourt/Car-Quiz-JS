 const correctAnswers = ['A', 'B', 'A', 'C', 'D'];
 const form = document.querySelector('.quiz-form');
 const result = document.querySelector('.result');

 form.addEventListener('submit', e =>{
     e.preventDefault();
    //Answer Check
     let score = 0;
     const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

     userAnswer.forEach((answer, index) =>{
         if(answer === correctAnswers[index]){
             score += 20;
         }
     });
    //Return to the page top
     scrollTo(0, 0);
    //Reveal the answer percentage
     result.classList.remove('d-none');
    //Animation of the answer
     let output = 0;
     const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
     }, 10);
 });