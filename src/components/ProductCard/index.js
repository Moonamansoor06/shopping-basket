import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { addProduct } from './../../redux/Cart/cart.actions';
import Buttons from './../forms/Buttons';
import './styles.scss';
import Product from './../ProductResults/Product/index';
import Card from 'react-bootstrap/Card'

const mapState = state => ({
  product: state.productsData.product
});

const ProductCard = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productThumbnail,
    productName,
    productPrice,
    productDesc,
  } = product;

  useEffect(() => {
    dispatch(
      fetchProductStart(productID)
    )

    return () => {
      dispatch(
        setProduct({})
      )
    }

  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  }

  const configAddToCartBtn = {
    type: 'button'
  }

  return (
    <Card style={{ maxWidth: '80.0rem'}}>
  <Card.Img variant="top"  src={productThumbnail} />
  <Card.Body>
    <Card.Title> {productName}</Card.Title>
    <Card.Text>
    £{productPrice}
    </Card.Text>
    <Card.Text>
    dangerouslySetInnerHTML={{ __html: productDesc }}
    </Card.Text>
    <Buttons {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Buttons>
  </Card.Body>
</Card>
   /*  <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>
              {productName}
            </h1>
          </li>
          <li>
            <span>
              £{productPrice}
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Buttons {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Buttons>
            </div>
          </li>
          <li>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }} />
          </li>
        </ul>
      </div>
    </div> */
  );
}

export default ProductCard;