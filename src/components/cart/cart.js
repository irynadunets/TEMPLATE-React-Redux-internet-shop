import React from 'react';
import './cart.css'
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  goodsAddedToCart,
  goodsRemovedFromCart,
  allgoodsRemovedFromCart
} from '../../actions';

const Cart = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  return (
    <div>
    <h2>Order</h2>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Count</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
      items.map((item, idx) => {
        const { id, name, count, total} = item;
        return (
          <tr key={id} >
            <td>{idx+1}</td>
            <td>{name}</td>
            <td>{count}</td>
            <td>{total} $</td>
          <td>
        <Button
        onClick={() => onIncrease(id)}
        variant="outline-success"> <i className="fa fa-plus-circle"></i> </Button>
        <Button
        onClick={() => onDecrease(id)}
        variant="outline-danger"> <i className="fa fa-minus-circle"></i> </Button>
        <Button
        onClick={() => onDelete(id)}
        variant="outline-warning"> <i className="fa fa-trash-o"></i> </Button>
        </td>
      </tr>
    );
  })
}
  </tbody>
  </Table>
  <div className='total'>
  Total: ${total}
  </div>
    </div>
  )
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
        onIncrease: goodsAddedToCart,
        onDecrease: goodsRemovedFromCart,
        onDelete: allgoodsRemovedFromCart
  };


export default  connect(mapStateToProps,mapDispatchToProps)(Cart);
