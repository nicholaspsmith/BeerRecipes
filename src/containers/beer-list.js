import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Accordion, Collapsible, Panel } from 'react-bootstrap'

class BeerList extends Component {
  renderList() {
    return this.props.beers.map( beer => {
      return (
        <Panel header={beer.name} eventKey={beer.id} key={beer.id}>
          Beer ingredients ...
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
