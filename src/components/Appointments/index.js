import React from 'react';
import './appintments.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionsAppointments from '../../actions/appointments';
import { getListAppointments } from '../../services/AppointmentsServiceAPI';

class Appoointments extends React.Component {
  state = {
    appointments: [],
  };

  async componentDidMount() {
    const arrTemp = await this.getListAppoints();
    this.setState({
      appointments: arrTemp,
    });
  }

  getListAppoints = async () => {
    const arrAppintments = await getListAppointments();
    return arrAppintments;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container" style={{ paddingTop: '10px', paddingBottom: '100px' }}>
          <Link to="/add-appointments">
            <button
              type="button"
              className="btn btn-primary btn-circle btn-xl"
              onClick={this.onClick}
              style={{ float: 'right' }}
            >
              <i className="fas fa-plus-circle" />
            </button>
          </Link>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-header text-center">
              <h4>
                Appointments List:
                {' '}
                <span>{this.props.session.user.userName}</span>
                {' '}
              </h4>
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
                {this.state.appointments.map(element => (
                  <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.remark}</td>
                    <td>{element.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  session: state.session,
  appointments: state.appointments,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionsAppointments, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Appoointments);
