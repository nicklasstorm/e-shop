function mapStateToProps(state){
    return {
    products: state.products
  }
}
 let Container = connect(mapStateToProps, {fetchProducts})(App);
