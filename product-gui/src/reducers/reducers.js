export default (state={
    products: [],
}, action) => {

    switch (action.type) {

        case 'CREATE_PRODUCT':
            return {...state, isCreating: true};
        case 'CREATE_PRODUCT_SUCCESS':
            const newProduct = [...state.products, action.payload.product]
            return {...state, products:newProduct,isCreating: false, isEditingId:action.payload.product.id, error: null};
        case 'CREATE_PRODUCT_FAILED':
            return {...state, error: action.error};

        case 'FETCH_PRODUCTS':
            return {...state, isFetching: true};
        case 'FETCH_PRODUCTS_SUCCESS':
            return {...state, products: action.payload.products};
        case 'FETCH_PRODUCTS_FAILED':
            return {...state, products: [], isFetching:false, error: action.payload};
        case 'DELETE_PRODUCT':
            return {...state, isDeleting: true};
        case 'DELETE_PRODUCT_SUCCESS':
            const remainingProducts = state.products.filter(product => {
                return product.id !== action.payload.product
            })
            return {...state, products: remainingProducts, error: null};
        case 'DELETE_PRODUCT_FAILED':
            return {...state, isDeleting:false, error: action.payload};

        case 'EDIT_PRODUCT': {
            return {...state, isUpdating: true};
        }
        case 'CLOSED_EDITING': {
            return {...state, isUpdating: false, isEditingId: false};
        }
        case 'EDIT_PRODUCT_SUCCESS': {
            const newProducts = state.products.map((product) => {
                if( product.id === action.payload.product.id )
                    return action.payload.product
                else {
                    return product
                }
            })

            return {...state, products: newProducts,isEditingId:false, error: null};
        }
        case 'EDIT_PRODUCT_FAILED':
            return {...state, isUpdating:false, error: action.payload};
        case 'EDIT_SINGLE_PRODUCT':
            return {...state, isUpdating:false, isEditingId: action.payload.isEditingId};

        default:
            return state;
    }
}
