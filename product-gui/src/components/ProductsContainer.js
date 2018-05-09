import React, {Component} from 'react'
import Product from './Product'
import ProductForm from './ProductForm'
import  { fetchProducts, createProduct, updateProduct, deleteProduct, editProduct, closedEditing } from '../actions/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'




class ProductsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            editingProductId: null,
            dontAdd:false
        }
    }

    componentDidMount() {
        this.props.actions.fetchProducts()
    }
    addProduct = () => {
        this.props.actions.createProduct()
    }
    updateProduct = (product, dontAdd) => {
        this.props.actions.updateProduct(product, dontAdd)
    }
    enableEditing = (id) => {
        this.props.actions.editProduct(id)
    }

    deleteProduct = (id) => {
        this.props.actions.deleteProduct(id)
    }
    closedEditing = () => {
        this.props.actions.closedEditing()
    }
    render() {
        return (
            <div>
                <button className="newProduct" onClick={this.addProduct}>
                  Ny produkt
                </button>
                <div className="productContainer">
                    {this.props.products.map((product) => {
                        if(this.props.isEditingId === product.id) {
                            return(<ProductForm titleRef= {input => this.title = input} product={product} key={product.id} closedEditing={this.closedEditing.bind(this)} updateProduct={this.updateProduct.bind(this)} />)
                          }
                          else {
                            return (<Product product={product} key={product.id} onClick={this.enableEditing} onDelete={this.deleteProduct}/>)
                          }
                    })}

                 </div>
             </div>
        )
    }
}

const reduxComponent = connect((store) => {
    return {
        products: store.products,
        isEditingId: store.isEditingId
    }
}, (dispatch) => {
    const actions = bindActionCreators({
        fetchProducts: fetchProducts,
        createProduct: createProduct,
        deleteProduct: deleteProduct,
        updateProduct: updateProduct ,
        closedEditing: closedEditing ,
        editProduct: editProduct }, dispatch);
    return {
        actions: { ...actions, dispatch }
    };
})(ProductsContainer);
export default reduxComponent;
