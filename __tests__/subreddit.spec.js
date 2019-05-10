const SubredditController = require('../controllers/SubredditController');

const { getSubreddit, pathIsValid } = SubredditController;

describe('fetchSubreddit()', () => {
  test('fetches mildlyInteresting', () => {
    let res = getSubreddit('https://www.reddit.com/r/MildlyInteresting.json');
    console.log('res', res);
    expect(res).toBeTruthy();
  });
});

describe('pathIsValid()', () => {
  test('validate path', () => {
    expect(pathIsValid('mildlyInteresting.json')).toBeTruthy();
  });
});
