import React from 'react';
import './appintments.css';

class Appoointments extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="container" style={{ paddingTop: '10px', paddingBottom: '100px' }}>
          <button
            type="button"
            className="btn btn-primary btn-circle btn-xl"
            onClick={this.onClick}
            style={{ float: 'right' }}
          >
            <i className="fas fa-plus-circle" />
          </button>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-header text-center">
              <h4>Appointments List</h4>
            </div>

            <div className="card-body mb-3" />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Patient name</th>
                  <th>Appointment remark</th>
                  <th>Date appointment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marcus Pianco</td>
                  <td>very pain in body</td>
                  <td>12/12/2014</td>
                </tr>
                <tr>
                  <td>Marcus Pianco</td>
                  <td>very pain in body</td>
                  <td>12/12/2014</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Appoointments;
