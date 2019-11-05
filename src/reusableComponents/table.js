import React from "react";
import Table from "react-bootstrap/Table";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

const CartTable = props => {
  return (
    <Table striped hover size="lg" className="cartTable">
      <tbody>
        {props.item.map(product => (
          <tr key={product.id}>
            <td>
              <img src={require(`../static/products/${product.sku}_2.jpg`)} />
            </td>
            <td>{product.title}</td>
            <td>{product.style}</td>
            <td>
              {product.currencyFormat}
              {product.price}
            </td>
            <td>{product.quantity}</td>
            <td>
              <ButtonToolbar>
                <Button
                  variant="primary"
                  size="sm"
                  disabled={product.quantity <= 1}
                  onClick={() => props.removeFromCart(product)}
                >
                  -
                </Button>{" "}
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => props.addToCart(product)}
                >
                  +
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => props.deleteFromCart(product)}
                >
                  x
                </Button>
              </ButtonToolbar>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CartTable;
