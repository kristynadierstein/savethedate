// external libs
import React from "react";
import { Link } from 'gatsby';

class FormCarPool extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p>Es-tu intéressé par le covoiturage?</p>
        <div className="covoit-radio-btn">
          <label className="radio-btn-style"> oui
            <input type="radio" ref="carPool"name="carPool" value="oui" onChange={this.props.onChange}/>
            <span className="radio-btn-span"></span>
          </label>
        </div>
        <div className="covoit-radio-btn">
          <label className="radio-btn-style"> non
            <input type="radio" ref="carPool" name="carPool" value="non" onChange={this.props.onChange}/>
            <span className="radio-btn-span"></span>
          </label>
        </div>
      </div>
    )
  }
}


export default FormCarPool;
