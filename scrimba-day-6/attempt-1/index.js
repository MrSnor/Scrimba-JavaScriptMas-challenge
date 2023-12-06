const people = ['Alice', 'Bob', 'Carly', 'Dan', 'Ed', 'Ferdinand', 'Ginny'];

function randomizeArray(arr) {
  const randomizedArray = arr.slice();
  for (let i = randomizedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedArray[i], randomizedArray[j]] = [
      randomizedArray[j],
      randomizedArray[i],
    ];
  }
  return randomizedArray;
}

function generateSecretSantaPairs(arr) {
  const peopleAtRandom = randomizeArray(arr);

  const objPpl = {};

  for (let index = 0; index < peopleAtRandom.length; index++) {
    const element = peopleAtRandom[index];

    // using modulus to get the next person in a cycle
    objPpl[element] = peopleAtRandom[(index + 1) % peopleAtRandom.length];
  }

  return objPpl;
}

console.log(generateSecretSantaPairs(people));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
