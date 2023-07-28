import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ProductsCard from '../ProductsCard'
import Header from '../Header'

import './index.css'

class Products extends Component {
  state = {
    productsList: [],
    searchInput: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getAllProducts()
  }

  getAllProducts = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/products'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderProductsListView = () => {
    const {searchInput, productsList} = this.state

    return (
      <>
        <Header />
        <div className="products">
          <div className="products-container">
            <div className="search-products-container">
              <h1 className="product-heading">Products</h1>
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.changeSearchInput}
              />
            </div>
            <ul className="unordered-list">
              {productsList.map(product => (
                <ProductsCard key={product.id} productData={product} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="all-products-section">
        {isLoading ? this.renderLoadingView() : this.renderProductsListView()}
      </div>
    )
  }
}

export default Products
