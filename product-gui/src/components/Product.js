import React, {Component} from 'react'

class Product extends Component {

    handleClick = () => {
      this.props.onClick(this.props.product.id)
    }

    deleteProduct = () => {
      this.props.onDelete(this.props.product.id)
    }

render() {
    return (
            <div className="product"   key={this.props.product.id} >
            <span className="deleteProduct" onClick={this.deleteProduct}>Ta bort produkt </span>
              <img src={this.props.product.img_src} alt="" onError={(e)=>{e.target.style="display:none"}} />
              <h4> {this.props.product.title}</h4>
              <div className="infoContainer">
                  <label> Pris </label>
                  <span className="price"> {this.props.product.price}</span>
                  <label> Produktbeskrivning </label>
                  <span className="desc">{this.props.product.description}</span>
                  <label> Artikelnummer </label>
                  <span className="art_nr">{this.props.product.art_nr}</span>
              </div>
              <span className="editProduct" onClick={this.handleClick}> Editera produkt </span>
            </div>
            )
        }
}


export default Product
