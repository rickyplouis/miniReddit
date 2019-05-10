import React from 'react';
import fetch from 'isomorphic-fetch';
import Container from '../components/Container';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: 'news',
      data: {}
    };
  }

  componentDidMount() {
    const { subreddit } = this.state;
    fetch(`https://www.reddit.com/r/${subreddit}.json`).then(res => {
      res.json().then(data => {
        this.setState(prevState => ({
          ...prevState,
          data
        }));
      });
    });
  }

  render() {
    const { data } = this.state;
    console.log('data', data);
    return (
      <Container>
        <h2>test</h2>
      </Container>
    );
  }
}
