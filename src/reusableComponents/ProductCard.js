import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const ProductCard = ({ product, addToCart }) => {
  const { isFreeShipping, title, installments, price, sku, id } = product;

  let totalPrice = price
    .toFixed(2)
    .toString()
    .split(".");
  let totalInstallments = (price / installments).toFixed(2);

  return (
    <div className="product-box">
      <Card>
        {isFreeShipping && <Badge variant="secondary">Free Shipping</Badge>}
        <Card.Img
          variant="top"
          src={require(`../static/products/${sku}_1.jpg`)}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <small>
              <strong>$</strong>
            </small>
            <strong>{totalPrice[0]}</strong>
            <small>.{totalPrice[1]}</small>
            <span className="price">
              or {installments} x $ {totalInstallments}
            </span>
          </Card.Text>
          <Button variant="primary" block onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
