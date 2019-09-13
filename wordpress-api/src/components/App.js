// src/App.js

import React, { Component } from 'react';
import Posts from './Posts';
import Post from './Post';
import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      posts: [],
      current: null,
      dataRoute: "https://www.websiteonwheels.com/wp-json/wp/v2/posts"
    }
    this.triggerSinglePostState = this.triggerSinglePostState.bind(this);
  }
  componentDidMount() {
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts: data })
      })
      .catch(console.log)

  }
  triggerSinglePostState(post) {
   this.setState({
      isOpen: true,
      current: post.currentTarget.id
    });
    
  }
  render() {
    if (this.state.isOpen) {
      return (
        <Container>
          <Post post={this.state.current} />
        </Container>
      );
    } else {
      return (
        <Container>
          <Posts goToPost={this.triggerSinglePostState} posts={this.state.posts} />
        </Container>
      );
    }

  }
}

export default App;