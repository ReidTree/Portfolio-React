import React, { Component } from 'react';
import Rt from '../../route';
import './styles.css';

class MadLib extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick() {
    return "";
  }

  render() {
    console.log(this.state.value)
    return (
      <div>

        <div className="header">
          <h2>
            <span className="mad">MAD</span>
            <div className="libDiv">
              <span className="lib">lib</span>
            </div>
          </h2>
        </div>

        <div className="formContainer">

          <form className="" method="post">
            <p>enter words below</p>
            <input type="text" placeholder="City" value={this.state.value} onChange={this.handleChange} />
            <input type="text" placeholder="Noun" />
            <input type="text" placeholder="Verb ending in -ing" />
            <input type="text" placeholder="Celeberity" />
            <input type="text" placeholder="Noun" />
            <input type="text" placeholder="Emotion" />
            <input type="text" placeholder="Verb" />
            <input type="text" placeholder="Noun" />
            <input type="text" placeholder="Noun" />
            <input type="text" placeholder="Verb" />
            <input type="text" placeholder="Noun" />

            <button className="button" name="add" onClick={this.handleClick}>Add my Libs</button>
          </form>

        </div>

      </div>
    );
  }
}

export default MadLib;
