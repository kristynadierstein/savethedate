// external libs
import React from "react";
import { Link } from 'gatsby';


class FormReturnCarpoolQty extends React.Component {

  render() {
    return(
     <div className="covoit-form hidden-input">
        <p> Combien de places tu auras besoin pour dimanche?   </p>
        <input name="returnPoolQty" type="text" placeholder="combien de personnes" ref="returnPoolQty" onChange={this.props.onChange}/>
      </div>
    )

  }
}



export default FormReturnCarpoolQty;