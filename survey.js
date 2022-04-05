const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question1 = 'What is your name? Nicknames are also acceptable.'
const question2 = 'What is an activity you like doing?'
const question3 = 'What do you listen to while doing that?'
const question4 = 'Which meal is your favourite (eg: dinner, brunch, etc.)'
const question5 = 'What is your favourite thing to eat for that meal?'
const question6 = 'Which sport is your absolute favourite?'
const question7 = 'What is your superpower? In a few words, tell us what you are amazing at!'

const answers = {};

rl.question(question1, (answer) => {
  answers.name = answer
  rl.question(question2, (answer) => {
    answers.activity = answer
    rl.question(question3, (answer) => {
      answers.listenWhileWorking = answer
      rl.question(question4, (answer) => {
        answers.favoriteMeal = answer
        rl.question(question5, (answer) => {
          answers.favoriteFood = answer
          rl.question(question6, (answer) => {
            answers.favoriteSport = answer
            rl.question(question7, (answer) => {
              answers.superPower = answer
              console.log(answers)
              console.log(`Your name is "${answers.name}" and your favorite activity is "${answers.activity}". You like to listen to $"{answers.listenWhileWorking}" while doing that. Your favorite meal is "${answers.favoriteMeal}" and your favorite food is ${answers.favoriteFood}. You're a sporty kinda person so your favorite sport is "${answers.favoriteSport}". Finally your favorite superpower is "${answers.superPower}"`)
              rl.close()
            });
        });
      });
    });
  });
});
});