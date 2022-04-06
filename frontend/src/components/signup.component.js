import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div style={{ marginTop: '150px' }}>
          <div className="form-group">
            <label>PIC Name</label>
            <input type="text" className="form-control" placeholder="PIC name" />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input type="text" className="form-control" placeholder="Company name" />
          </div>

          <div className="form-group">
            <label>Email/Username</label>
            <input type="email" className="form-control" placeholder="Email/username" />
          </div>

          <div className="form-group">
            <label>Service Group</label>
            <input type="password" className="form-control" placeholder="Service group" />
          </div>
          <div className="form-group">
            <label>Service Type</label>
            <input type="password" className="form-control" placeholder="Service type" />
          </div>
          <div className="form-group">
            <label>Channels</label>
            <input type="password" className="form-control" placeholder="Channels" />
          </div>
          <div className="form-group">
            <label>Channel Name</label>
            <input type="password" className="form-control" placeholder="Channle name" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}
