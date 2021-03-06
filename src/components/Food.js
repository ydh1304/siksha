import React,{Component} from 'react';

import Rating from '../dialog/Rating';

class Food extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

  }
  rateMeal () {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { food } = this.props
    return (
      <div onClick={this.rateMeal.bind(this)}>
        <li>
          <a>{food.price + " "}</a>
          <a>{food.name + " "}</a>
          <a>{food.rating}</a>
          <Rating
            show={this.state.isOpen}
            onClose={() => this.rateMeal.bind(this)}
            name={food.name}
            rate={food.rating}
          />
        </li>
      </div>
    )
  }
}

export default Food
