import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Input, FormGroup, Label } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsAppointments from '../../actions/appointments';

class AddAppointments extends Component {
  state = {
    date: '',
    remark: '',
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { date, remark } = this.state;

    const newAppointment = {
      date,
      remark,
    };

    const { addAppointment } = this.props;

    addAppointment(newAppointment);

    this.props.history.push('/appointments');
  };

  render() {
    const { date, remark } = this.state;
    return (
      <div className="container col-8">
        <div className="card">
          <div className="card-header">
            <h4>New Appointment</h4>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="kinduser" key="kindLabel">
                  <strong>
                    Appointment to:
                    {this.props.session.user.userName}
                  </strong>
                </Label>

                <FormGroup>
                  <Label for="date" key="dateAppointment">
                    <strong>Date:</strong>
                  </Label>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    key="date"
                    onChange={this.onChange}
                  />
                </FormGroup>

                <Label for="date" key="dateAppointment">
                  <strong>Date:</strong>
                </Label>
                <Input
                  type="text"
                  name="remark"
                  id="remark"
                  value={remark}
                  key="remark"
                  onChange={this.onChange}
                />
              </FormGroup>
              <input type="submit" value="Confirm" className="btn btn-primary btn-block" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionsAppointments, dispatch);
const mapStateToProps = state => ({
  session: state.session,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddAppointments);
