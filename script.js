function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblem() {
  var num1 = getRandomNumber(1, 20);
  var num2 = getRandomNumber(1, 20);
  var operator = ['+', '-', '×', '÷'][getRandomNumber(0, 3)];
  var problemText;

  switch (operator) {
    case '+':
      problemText = num1 + ' ' + operator + ' ' + num2;
      break;
    case '-':
      problemText = num1 + ' ' + operator + ' ' + num2;
      break;
    case '×':
      problemText = num1 + ' ' + operator + ' ' + num2;
      break;
    case '÷':
      // Ensure num2 is not 0 to avoid division by zero
      if (num2 === 0) {
        num2 = 1; // Set num2 to 1 if it's 0
      }
      problemText = (num1 * num2) + ' ' + operator + ' ' + num2;
      break;
    default:
      break;
  }

  document.getElementById('problem').textContent = problemText;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}

function checkAnswer() {
  var answer = document.getElementById('answer').value;
  var problemText = document.getElementById('problem').textContent;
  var correctAnswer;

  switch (problemText.split(' ')[1]) {
    case '+':
      correctAnswer = parseInt(problemText.split(' ')[0]) + parseInt(problemText.split(' ')[2]);
      break;
    case '-':
      correctAnswer = parseInt(problemText.split(' ')[0]) - parseInt(problemText.split(' ')[2]);
      break;
    case '×':
      correctAnswer = parseInt(problemText.split(' ')[0]) * parseInt(problemText.split(' ')[2]);
      break;
    case '÷':
      correctAnswer = parseFloat(problemText.split(' ')[0]) / parseFloat(problemText.split(' ')[2]);
      break;
    default:
      break;
  }

  var result;
  if (parseFloat(answer) === correctAnswer) {
    result = '정답입니다!';
  } else {
    result = '틀렸습니다. 정답은 ' + correctAnswer + '입니다.';
  }

  document.getElementById('result').textContent = result;
}
