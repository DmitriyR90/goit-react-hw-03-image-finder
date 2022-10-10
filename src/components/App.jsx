import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29525143-9c76bb8aba39698f94cc40e50';
const PER_PAGE = 12;

export class App extends Component {
  state = {
    images: [],
    query: null,
    currentPage: 1,
    showLoadMore: false,
    showModal: false,
    isLoading: false,
    largeImgUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    this.setState({ isLoading: true });
    const response = await axios.get(
      `/?q=${this.state.query}&page=${this.state.currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    const imagesArray = response.data.hits;
    const totalHits = response.data.total;
    const showedHits = this.state.images.length;

    if (imagesArray.length !== 0) {
      this.setState(prevState => ({
        images: [...prevState.images, ...imagesArray],
      }));
      this.setState({ showLoadMore: true });
      this.setState({ isLoading: false });
    }

    if (totalHits <= showedHits) {
      this.setState({ showLoadMore: false });
    }
  }

  handleSearch = searchData => {
    if (this.state.query !== searchData) {
      this.setState({ query: searchData.trim(), images: [], currentPage: 1 });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  getLargeImgUrl = url => {
    this.setState({ largeImgUrl: url });
  };

  toggleModal = () => {
    console.log('toggle');
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 16,
          paddingBottom: 24,
        }}
      >
        <Searchbar onSearch={this.handleSearch} />

        {this.state.images && (
          <ImageGallery
            gallery={this.state.images}
            onImgClick={this.toggleModal}
          />
        )}
        <Loader status={this.state.isLoading} />
        {this.state.showLoadMore && !this.state.isLoading && (
          <Button loadMore={this.handleLoadMore} />
        )}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src="https://cdn.pixabay.com/user/2022/10/03/02-16-32-176_250x250.jpg"
              alt=""
            />
          </Modal>
        )}
      </div>
    );
  }
}
