import { getShoppingCart } from "../../utilities/fakedb";

const CardProductsLoader = async() => {
    const loadedProducts = await fetch("products.json")
    const products = await loadedProducts.json();
    // console.log(products);
    const storedCart = getShoppingCart();
    const savedCart = [];
    for ( const id in storedCart){
        const addedProducts = products.find(pd => pd.id ===  id);
        if(addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity = quantity
            savedCart.push(addedProducts)
        }
    }
    console.log(storedCart);
    //if you need to send two things
    //return [porducts, savedCart];
    //another options 
    // return {products, savedCart}
    return savedCart;

}
export default CardProductsLoader;