function checkAnswer(){
    const rightAnswer = 'Liefde Samenkomen';
    const Answer = document.getElementById('answer').value.trim();
    const question = document.getElementById('question');

    if (Answer.toLowerCase() === rightAnswer.toLowerCase()){
        question.className = 'backgroundcorrect'
    }
}