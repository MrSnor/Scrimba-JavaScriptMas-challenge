/** uncomment one of these **/
// import OpenAI from "openai"
// import { HfInference } from '@huggingface/inference'
import { HfInference } from './node_modules/@huggingface/inference'

console.log('🚀 ~ file: index.js:query');
document
  .getElementById('window-container')
  .addEventListener('click', function () {
    /**
     * 🎄 Challenge:
     * 1. When clicked, the doors should open
     *    to reveal a festive joke.
     *
     * 🎁 hint.md for help!
     **/
    document.querySelector('.left-door').style =
      'animation: left-open 0.3s forwards';
    document.querySelector('.right-door').style =
      'animation: right-open 0.3s forwards';
    document.querySelector('.joke-display').style =
      'animation: display-joke 0.3s forwards';
  });

async function query(data) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta',
    {
      headers: {
        Authorization: 'Bearer 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',
      },
      method: 'POST',
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query({ inputs: 'Can you please let us know more  about your ' }).then(
  (response) => {
    console.log(JSON.stringify(response));
  }
);
