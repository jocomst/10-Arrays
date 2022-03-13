'use strict';
/* 
function displayResults(type = 'array') {
  if (typeof type === 'string') {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  } else console.log(type);
}

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const choice = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}(Write option number)`
      )
    );
    typeof choice === 'number' &&
      choice < this.answers.length &&
      this.answers[choice]++;
    displayResults.call(poll, this.answers);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

  */

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
