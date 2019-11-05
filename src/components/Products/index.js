import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Paper from "../../reusableComponents/Paper";
import ProductCard from "../../reusableComponents/ProductCard";
import Loading from "../../reusableComponents/Loading";

const Product = ({
  getProducts,
  products,
  addProduct,
  filterSize,
  orderBy,
  isLoading
}) => {
  React.useEffect(() => {
    getProducts(filterSize, orderBy);
  }, [filterSize, orderBy]);

  const addToCart = product => {
    addProduct(product);
  };

  return (
    <Paper>
      <div className="total-product">
        {isLoading && <Loading />} {products.length} Product(s) found.
      </div>
      <Row>
        {products &&
          products.map(product => (
            <Col md={4} key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </Col>
          ))}
      </Row>
    </Paper>
  );
};

export default Product;
