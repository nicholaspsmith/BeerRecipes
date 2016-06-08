import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Accordion, Collapsible, Panel } from 'react-bootstrap'

class BeerList extends Component {
  renderIngredients(beer) {
    return beer.ingredients.map( ingredient => {
      return <div key={ingredient.name}>{ingredient.amount.number} {ingredient.amount.units}&nbsp;{ingredient.name}</div>
    })
  }

  renderList() {
    return this.props.beers.map( beer => {
      return (
        <Panel header={beer.name} eventKey={beer.id} key={beer.id}>
          {this.renderIngredients(beer)}
        </Panel>
      )
    })
  }

  render() {
    return (
      <Accordion>
        {this.renderList()}
      </Accordion>
    )
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps)(BeerList)
