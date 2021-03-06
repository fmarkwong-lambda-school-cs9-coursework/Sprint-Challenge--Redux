import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';


class Smurf extends Component{

  handleDelete = (id) => {
    this.props.deleteSmurf(id);
  };

  render() {
    const {id, name, age, height} = this.props.smurf;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{height}</td>
        <td style={{ width: '1px' }}>
          <Button color='primary' onClick={() => this.props.toggleModal(this.props.smurf)}>Update </Button>
        </td>
        <td style={{ width: '1px' }}>
          <Button color='danger' onClick={ () => this.handleDelete(id) }>Delete</Button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf);
