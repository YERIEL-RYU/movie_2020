import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state ={
    isLoading : true,
    movies:[]
  };
  getMovies = async () => {
    const {
      data:{
        data :{movies},
      },
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading:false});
  };
  componentDidMount () {
   this.getMovies();
  }
  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
  }
}

export default App;