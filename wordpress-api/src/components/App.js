    // src/App.js

    import React, {Component} from 'react';
    import Posts from './Posts';
    import Container from 'react-bootstrap/Container';

    class App extends Component {
      constructor() {
        super();
        this.state = {
          isOpen: false,
          posts: [],
          current: null,
          dataRoute: "http://localhost/wow-theme/wp-json/wp/v2/posts"
        }
      }
     
      componentDidMount() {
        fetch(this.state.dataRoute)
          .then(res => res.json())
          .then((data) => {
            this.setState({posts: data})
          })
          .catch(console.log)

      }
      render () {
        return (
          <Container>
              <Posts posts={this.state.posts}/>
          </Container>
          );
      }
    }

    export default App;