import React from 'react';
import fetch from 'isomorphic-fetch';
import { Avatar, Card, Skeleton, Menu, Layout, Icon, Input, } from 'antd';

const { Search } = Input;
const { Content, Header } = Layout;
const { Meta } = Card;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: 'news',
      data: {}
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.setSub = this.setSub.bind(this);
  }

  updateSub() {
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

  setSub(subreddit) {
    this.setState(prevState => ({
      ...prevState,
      subreddit,
      data: {} // Triggers skeleton loading
    }));
    this.updateSub();
  }

  componentDidMount() {
    this.updateSub();
  }

  renderPosts() {
    const { data } = this.state;
    return Object.keys(data).length === 0 ? (
      Array.apply(null, { length: 20 }).map(() => (
        <Card
          style={{ width: '80%', margin: '0 auto' }}
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon type="ellipsis" />
          ]}
        >
          <Skeleton loading={true} avatar active />
        </Card>
      ))
    ) : (
      <div>
        {data.data.children.map(post => (
          <Card
            title={<div style={{textAlign: 'left', whiteSpace: 'normal'}}>{post.data.title}</div>} style={{ width: '80%', margin: '0 auto' }}>
            <a href={post.data.url}>{post.data.url}</a>
          </Card>
        ))}
      </div>
    );
  }

  render() {
    const { subreddit } = this.state;
    return (
      <div style={{ width: '100vw' }}>
        <Header>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <Menu theme="dark" mode="horizontal" style={{ width: '100vw' }}>
            <Menu.Item>Search Subreddits</Menu.Item>
            <Search
              placeholder="news, mildlyInteresting, boring)"
              onSearch={value => this.setSub(value)}
              enterButton
              style={{ marginTop: '2%', width: '50%' }}
            />
          </Menu>
        </Header>
        <div style={{ textAlign: 'center', width: '100vw' }}>
          <h2>Current Subreddit: /r/{subreddit}</h2>
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}
