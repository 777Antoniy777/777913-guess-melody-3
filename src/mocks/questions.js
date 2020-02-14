export default [
  {
    id: 1,
    type: `artist`,
    question: `What is artist?`,
    answers: [
      {
        id: 1,
        answer: `answer 1`
      },
      {
        id: 2,
        answer: `answer 2`
      },
      {
        id: 3,
        answer: `answer 3`
      },
    ],
    correctAnswer: `answer 2`,
  },
  {
    id: 2,
    type: `genre`,
    question: `What is genre?`,
    correctAnswer: [true, false, true, true],
  },
];
