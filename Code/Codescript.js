document.addEventListener('DOMContentLoaded', () => {


    const rightAnswerOne = 'kerst verbindt';
    const rightAnswerTwo ='Ons';
    const rightAnswerThree = 'Met warmte';
    const rightAnswerFour = 'en respect';
    const rightAnswerFive = 'waar vertrouwen';
    const rightAnswerSix = 'hoop en';
    const rightAnswerSeven = 'liefde samenkomen';
    const rightAnswerEight = 'kerst verbindt ons met warmte en respect waar vertrouwen hoop en liefde samenkomen';

    window.checkAnswer = function() {
        let one = false;
        let two = false;
        let three = 0;
        let four = 0;
        let five = 0;
        let six = 0;
        let seven = 0
        let eight = 0;
        const Answerone = document.getElementById('answerone').value.trim();
        const question = document.getElementById('question');
        const message = document.getElementById('winmessage');
        const checkOne = document.getElementById('checkone');
        const checkTwo = document.getElementById('checktwo');
        const checkThree = document.getElementById('checkthree');
        const checkFour = document.getElementById('checkfour');
        const checkFive = document.getElementById('checkfive');
        const checkSix = document.getElementById('checksix');
        const checkSeven = document.getElementById('checkseven');
        const checkEight = document.getElementById('checkeight');
        const xOne = document.getElementById('xone');
        const xTwo = document.getElementById('xtwo');
        const xThree = document.getElementById('xthree');
        const xFour = document.getElementById('xfour');
        const xFive = document.getElementById('xfive');
        const xSix = document.getElementById('xsix');
        const xSeven = document.getElementById('xseven');
        const xEight = document.getElementById('xeight');
        const Answertwo = document.getElementById('answertwo').value.trim();
        const Answerthree = document.getElementById('answerthree').value.trim();
        const Answerfour = document.getElementById('answerfour').value.trim();
        const Answerfive = document.getElementById('answerfive').value.trim();
        const Answersix = document.getElementById('answersix').value.trim();
        const Answerseven = document.getElementById('answerseven').value.trim();
        const Answereight = document.getElementById('answereight').value.trim();

        if (Answerone.toLowerCase() === rightAnswerOne.trim().toLowerCase()){
            one = true;
            checkOne.style.opacity = '1';
            xOne.style.opacity = '0';
        }

        if (Answertwo.toLowerCase() === rightAnswerTwo.trim().toLowerCase()) {
            two = true;
            checkTwo.style.opacity = '1';
            xTwo.style.opacity = '0';
        }

        if (Answerthree.toLowerCase() === rightAnswerThree.trim().toLowerCase()) {
            three = 1;
            checkThree.style.opacity = '1';
            xThree.style.opacity = '0';
        }

        if (Answerfour.toLowerCase() === rightAnswerFour.trim().toLowerCase()) {
            four = 1;
            checkFour.style.opacity = '1';
            xFour.style.opacity = '0';
        }

        if (Answerfive.toLowerCase() === rightAnswerFive.trim().toLowerCase()) {
            five = 1;
            checkFive.style.opacity = '1';
            xFive.style.opacity = '0';
        }

        if (Answersix.toLowerCase() === rightAnswerSix.trim().toLowerCase()) {
            six = 1;
            checkSix.style.opacity = '1';
            xSix.style.opacity = '0';
        }

        if (Answerseven.toLowerCase() === rightAnswerSeven.trim().toLowerCase()) {
            seven = 1;
            checkSeven.style.opacity = '1';
            xSeven.style.opacity = '0';
        }

        if (Answereight.toLowerCase() === rightAnswerEight.trim().toLowerCase()) {
            eight = 1;
            checkEight.style.opacity = '1';
            xEight.style.opacity = '0';
        }

        if (one === false){
            console.log("Answerone is " + rightAnswerOne)
            console.log("User put " + Answerone)
            xOne.style.opacity = '1';
        }
        if (two === false){
            console.log("Answertwo is " + rightAnswerTwo)
            console.log("User put " + Answertwo)
            xTwo.style.opacity = '1';
        }
        if (three === 0){
            console.log("Answerthree is " + rightAnswerThree)
            console.log("User put " + Answerthree)
            xThree.style.opacity = '1';
        }
        if (four === 0){
            console.log("Answerfour is " + rightAnswerFour)
            console.log("User put " + Answerfour)
            xFour.style.opacity = '1';
        }
        if (five === 0){
            console.log("Answerfive is " + rightAnswerFive)
            console.log("User put " + Answerfive)
            xFive.style.opacity = '1';
        }
        if (six === 0){
            console.log("Answersix is " + rightAnswerSix)
            console.log("User put " + Answersix)
            xSix.style.opacity = '1';
        }
        if (seven === 0){
            console.log("Answerseven is " + rightAnswerSeven)
            console.log("User put " + Answerseven)
            xSeven.style.opacity = '1';
        }
        if (eight === 0){
            console.log("Answereight is " + rightAnswerEight)
            console.log("User put " + Answereight)
            xEight.style.opacity = '1';
        }

        if (one === true){
            console.log("One is correct.")
        }
        if (two === true){
            console.log("Two is correct.")
        }
        if (three === 1){
            console.log("Three is correct.")
        }
        if (four === 1){
            console.log("Four is correct.")
        }
        if (five === 1){
            console.log("Five is correct.")
        }
        if (six === 1){
            console.log("Six is correct.")
        }
        if (seven === 1){
            console.log("Seven is correct.")
        }
        if (eight === 1){
            console.log("Eight is correct.")
        }

        console.log("Button Pressed")
        if (one === true) {
            if (two === true) {
                if (three === 1) {
                    if (four === 1) {
                        if (five === 1) {
                            if (six === 1) {
                                if (seven === 1) {
                                    if (eight === 1) {
                                        console.log("All correct.")
                                        question.style.opacity = '0'
                                        message.style.opacity = '1';
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});