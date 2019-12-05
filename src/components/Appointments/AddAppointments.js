import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Input, FormGroup, Label } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';
import * as actionsAppointments from '../../store/actions/appointments';

class AddAppointments extends Component {
  state = {
    id: '',
    date: '',
    remark: '',
    patientName: '',
  };

  componentDidMount() {
    if (this.props.session.user.kindUser === 'patient') {
      this.setState({
        patientName: this.props.session.user.name,
      });
    }
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      id, date, remark, patientName,
    } = this.state;

    const newAppointment = {
      id,
      date,
      remark,
      patientName,
    };

    newAppointment.id = uuid();

    const { addAppointment } = this.props;

    addAppointment(newAppointment);
    console.log(newAppointment);

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
                  <strong>Remark:</strong>
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
