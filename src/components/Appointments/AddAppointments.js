import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Input, FormGroup, Label } from 'reactstrap';

class AddAppointments extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h4>New Appointment</h4>
          </div>
          <div className="card-body mb-3">
            <FormGroup>
              <Label for="kinduser" key="kindLabel">
                your name
              </Label>
              <Input
                type="select"
                name="kindUser"
                id="kinduser"
                value=""
                key=""
                onChange={this.onChange}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    );
  }
}
export default AddAppointments;
