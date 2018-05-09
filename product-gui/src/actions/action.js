import axios from 'axios'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

//CREATE PRODUCT
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';


//Edit PRODUCT
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAILURE = 'EDIT_PRODUCT_FAILURE';

//Delete PRODUCT
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

const ROOT_URL = 'http://localhost:3001'

const createProduct = () => {
    return (dispatch) => {
        const product = {
            title: '',
            img_src: '',
            art_nr: '',
            description: '',
            price: ''
        }
        dispatch({ type: 'CREATE_PRODUCT' });
        axios.post(`${ROOT_URL}/products`,{product: product})
            .then(res => {
                dispatch({ type: 'CREATE_PRODUCT_SUCCESS', payload: { product: res.data } });
            })
            .catch(e => {
                dispatch({ type: 'CREATE_PRODUCT_FAILURE', error: e.message })
            })
    }
};

const updateProduct = (product) => {

    return (dispatch) => {
        if(!product.id) {
            return dispatch({type: 'EDIT_PRODUCT_FAILURE'})
        }

            dispatch({ type: 'EDIT_PRODUCT' });
                axios.put(`http://localhost:3001/products/${product.id}`,{product: product})
            .then(res => {
                dispatch({ type: 'EDIT_PRODUCT_SUCCESS', payload: { product: product } });
            })
            .catch(e => {
                dispatch({ type: 'EDIT_PRODUCT_FAILURE', error: e.message })
            })
        }

};

const editProduct = (id) => {
    return (dispatch) => {
        dispatch({type: 'EDIT_SINGLE_PRODUCT', payload: {isEditingId: id}})
    }
}

const closedEditing = () => {
    return (dispatch) => {
        dispatch({type: 'CLOSED_EDITING', payload: {isEditingId: false}})
    }
}


const fetchProducts = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_PRODUCTS' });
        axios.get(`${ROOT_URL}/products.json`)
            .then(res => {
                dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: { products: res.data } });
            })
            .catch(e => {
                dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: e.message })
            })
    }
};



const deleteProduct = (id) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_PRODUCT' });

        axios.delete(`${ROOT_URL}/products/${id}`)

            .then(res => {
                dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: { product: id } });
            })
            .catch(e => {
                dispatch({ type: 'DELETE_PRODUCT_FAILED', error: e.message })
            })
    }
}





export {
    createProduct,
    deleteProduct,
    fetchProducts,
    updateProduct,
    closedEditing,
    editProduct
 }
