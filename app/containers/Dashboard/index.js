import React from 'react'
import {Grid, Cell} from 'react-mdl'
import Card from 'components/Card'
import {connect} from 'react-redux'

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <Card />
          </Cell>
          <Cell col={4}>
            <Card />
          </Cell>
          <Cell col={4}>
            <Card />
          </Cell>
        </Grid>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapDispatchToProps)(Dashboard)
