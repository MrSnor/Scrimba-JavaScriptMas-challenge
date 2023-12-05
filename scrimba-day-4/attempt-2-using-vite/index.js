/** uncomment one of these **/
// import OpenAI from "openai"
import { HfInference } from '@huggingface/inference';

const windowDiv = document.querySelector('#window-container');
// div of doors
const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector('.right-door');

const jokeDisplayDiv = document.getElementById('joke-display');

// document
//   .getElementById('window-container')
//   .addEventListener('click', function () {
//     /**
//      * 🎄 Challenge:
//      * 1. When clicked, the doors should open
//      *    to reveal a festive joke.
//      *
//      * 🎁 hint.md for help!
//      **/
//     document.querySelector('.left-door').style =
//       'animation: left-open 0.3s forwards';
//     document.querySelector('.right-door').style =
//       'animation: right-open 0.3s forwards';
//     document.querySelector('.joke-display').style =
//       'animation: display-joke 0.3s forwards';
//   });

// function to open doors when clicked and joke is loaded for display:
function openDoors() {
  document.querySelector('.left-door').style =
    'animation: left-open 0.3s forwards';
  document.querySelector('.right-door').style =
    'animation: right-open 0.3s forwards';
  document.querySelector('.joke-display').style =
    'animation: display-joke 0.3s forwards';

  leftDoor.classList.add('red-glow-wide-left');
  rightDoor.classList.add('red-glow-wide-right');
  windowDiv.classList.remove('red-glow');
}

const hf = new HfInference('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');

function getRandomKeyword() {
  const keywords = [
    'recursion',
    'null pointer exception',
    'Java vs JavaScript',
    'YOLO push to production',
    'crypto',
    'CSS is a programming language',
    "it's not a bug, it's a feature",
    "the cloud is just someone else's computer",
    'stack overflow is my mentor',
    'Error 404: sense of humor not found',
  ];
  const randomIndex = Math.floor(Math.random() * keywords.length);
  return keywords[randomIndex];
}

const randomKeyword = getRandomKeyword();
console.log(randomKeyword);

let prompt = `Tell me a sick one-liner Christmas Joke about ${randomKeyword} that will make my family laugh out loud. Make it funny, but not too crude or critically incorrect.`;

document.getElementById('window-container').addEventListener('click', () => {
  // check for data-visible attribute on joke-display
  if (jokeDisplayDiv.getAttribute('data-visible') === 'false') {
    windowDiv.classList.add('red-glow');

    // using .then and .catch
    hf.textGeneration({
      model: 'tiiuae/falcon-7b-instruct',
      inputs: prompt,
      output_scoring: 'bertscore',
      max_length: 200,
      num_beams: 100,
      early_stopping: false,
    })
      .then((response) => {
        console.log(response);
        // split on new line
        jokeDisplayDiv.textContent = response['generated_text'].split('\n')[1];
      })
      .then((response) => {
        setTimeout(() => {
          openDoors();
          jokeDisplayDiv.setAttribute('data-visible', 'true');
        }, 1000);
      });
  }
});
