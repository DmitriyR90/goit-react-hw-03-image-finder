import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29525143-9c76bb8aba39698f94cc40e50';

export class App extends Component {
  state = {
    images: null,
    query: null,
  };

  // async componentDidMount() {
  //   const response = await axios.get(
  //     `/?q=${this.state.query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //   );

  //   this.setState({ images: response.data.hits });
  // }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const response = await axios.get(
        `/?q=${this.state.query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ images: response.data.hits });
    }
  }

  handleSearch = searchData => {
    console.log(searchData);
    this.setState({ query: searchData });
  };

  render() {
    return (
      <>
        <Searchbar onSearch={this.handleSearch} />
        {this.state.images && <ImageGallery galery={this.state.images} />}
      </>
    );
  }
}
