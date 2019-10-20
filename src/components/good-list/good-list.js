import React, { Component } from 'react';
import GoodItem from '../good-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { getGoodstoreService } from '../hoc';
import { fetchGoods, goodsAddedToCart } from '../../actions';
import './good-list.css';
import CardGroup from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';

const GoodList = ({goods, onAddedToCart}) => {
return (
    <CardGroup>
    {
      goods.map((good) => {
        return (
          <GoodItem
           key={good.id}
           good={good}
           onAddedToCart = {() => onAddedToCart(good.id)}
          />
        )
      })
    }
    </CardGroup>
  );
};

class GoodListContainer extends Component {

componentDidMount(){
  this.props.fetchGoods();
  }

  render(){
      const { goods, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

      return <GoodList goods = {goods} onAddedToCart = {onAddedToCart} />
  }
};
const mapStateToProps = ({ goods, loading, error }) => {
  return { goods, loading, error};
};

const mapDispatchToProps = (dispatch, { goodstoreService }) => {
    return{
    fetchGoods: fetchGoods(goodstoreService, dispatch),
    onAddedToCart: (id) => dispatch(goodsAddedToCart(id))
  };
  };


export default getGoodstoreService()(
  connect(mapStateToProps,mapDispatchToProps)(GoodListContainer)
);
