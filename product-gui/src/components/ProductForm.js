import React, { Component } from 'react'

class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        title: this.props.product.title || '',
        price: this.props.product.price || '',
        art_nr: this.props.product.art_nr || '',
        description: this.props.product.description || '',
        img_src: this.props.product.img_src || '',
        }

  }

  updateField = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  inUpdate = (e) => {

      const product = {
          title: this.state.title,
          price: this.state.price,
          art_nr: this.state.art_nr,
          description: this.state.description,
          img_src: this.state.img_src,
          id: this.props.product.id
      }
      e.preventDefault();
      this.props.updateProduct(product);
    }
    closedUpdate = () => {
        this.props.closedEditing();
      }

  render() {
    return (
      <div className="product backdrop" >
        <span className="userMessage"></span>
        <form className="form" onSubmit={this.inUpdate.bind(this)}>
            <div className="closeModal" onClick={this.closedUpdate.bind(this)}> x </div>
            <div className="inputContainer">
                <label> Produktnamn </label>
                <input required  className='input' type="text" name="title" placeholder='Produktnamn' onChange={this.updateField} value={this.state.title} />
            </div>
            <div className="inputContainer">
                <label> Pris </label>
                <input required className='input' type="number" name="price" placeholder='Pris' value={this.state.price} onChange={this.updateField} />
            </div>
            <div className="inputContainer">
                <label> Artikelnummer </label>
                <input required  className='input' type="number" name="art_nr" placeholder='Artikelnummer'  onChange={this.updateField} value={this.state.art_nr} />
            </div>
            <div className="inputContainer">
                <label> Produktbeskrivning </label>
                <textarea className='input' name="description" placeholder='Produktbeskrivning' value={this.state.description} onChange={this.updateField}></textarea>
            </div>
            <div className="inputContainer">
                <label> Bildkälla </label>
                <input className='input' name="img_src" placeholder='Bildkälla' value={this.state.img_src} onChange={this.updateField} />
            </div>
            <button className="newProduct" id="submit"
          value="Spara">Spara produkt </button>
        </form>

      </div>
    );
  }
}

export default ProductForm
