import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);

    onchange = (e) => {
      this.setState({ value: e.target.value });
    };
  }
  recaptchaLoaded() {
    console.log('captcha sucessfylly loaded');
  }
  render() {
    const { value } = this.state;

    return (
      <div>
        <form>
          <h3>Halaman Masuk</h3>

          <div className="form-group">
            <label>PIC Name</label>
            <input type="text" className="form-control" placeholder="PIC Name" />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" className="form-control" placeholder="Company Name" />
          </div>
          <div className="form-group">
            <label>Email/Username</label>
            <input type="text" className="form-control" placeholder="Email/Username" />
          </div>
          <div>
            <label>Service Group</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="ServiceGroup" id="Shared" value="2" onChange={this.onchange} />
            <label class="form-check-label" for="inlineRadio1" htmlFor="shared">
              Shared
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="ServiceGroup" id="Dedicatif" value="0" onChange={this.onchange} />
            <label class="form-check-label" for="inlineRadio2" htmlFor="dedicated">
              Dedicated
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="ServiceGroup" id="Onprem" value="0" onChange={this.onchange} />
            <label class="form-check-label" for="inlineRadio3" htmlFor="onprem">
              Onprem
            </label>
          </div>
          <div>
            <label>Service Type</label>
          </div>
          <label>FAQ</label>
          <div class="input-group mb-3">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          {value == '0' && (
            <div class="input-group mb-3">
              <label>Transactional</label>
              <select class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          )}

          <div>
            <label>Channel</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="3" />
            <label class="form-check-label" for="inlineRadio1">
              Whatsapp
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="4" />
            <label class="form-check-label" for="inlineRadio2">
              Telegram
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="5" />
            <label class="form-check-label" for="inlineRadio3">
              Slack{' '}
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="1" onChange={this.onchange} />
            <label class="form-check-label" for="inlineRadio3">
              Custom{' '}
            </label>
          </div>
          {value == '1' && (
            <div className="form-group">
              <label>Channel Name</label>
              <input type="text" className="form-control" placeholder="Channel Name" />
            </div>
          )}

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <Recaptcha sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" render="explicit" onloadCallback={this.recaptchaLoaded} />
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    );
  }
}
