import uniqid from 'uniqid';

const ProductCard = (src, title, price) => {
    let id = uniqid();
    return {
        src,
        title,
        price,
        id,
    }
}

export default ProductCard;

