// external libs
import React from "react";

// internal stuff
import Header from "../components/header";
import SEO from '../components/seo';

//form-components
import FormHasACar from "../components/form-covoit/form-has-a-car";
import FormHowMany from "../components/form-covoit/form-how-many";
import FormCarPool from "../components/form-covoit/form-car-pool";
import FormComeWhen from "../components/form-covoit/form-come-when";
import FormPickupPlace from "../components/form-covoit/form-pickup-place";
import FormReturn from "../components/form-covoit/form-return";
import FormHasACarMain from "../components/form-covoit/form-hasacar-main";
import FormNoCarMain from "../components/form-covoit/form-nocar-main";

// style & assets
import "../styles/main.scss"

const Airtable = require('airtable');
// const ApiKey = process.env.AIRTABLE_API;

class Covoiturage extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      name: "",
      hasACar: null,
      howMany: null,
      comeWhen: null,
      placePickUp: null,
      returnWay: null,
      carPool: null,
      howManyPool: null,
      comeWhenPool: null,
      returnWayPool: null,
      returnWhen: null,
      returnHowMany: null,
      returnPoolQty: null,
      returnPoolWhen: null
  }

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
}

createAirtableRecord = (covoiturage) => {
  // for each new rsvp received, create a new record
  const ApiKey = process.env.GATSBY_AIRTABLE_API_KEY;
  const base = new Airtable({apiKey: ApiKey}).base('appvBah3imDtdNXOz');

  base('covoiturage').create({
    // create new record in airtable base
    // using key/value pairs
    // based on columns name in airtable sheet
    name: this.state.name,
    driver: this.state.hasACar,
    qty: this.state.howMany,
    date: this.state.comeWhen,
    pickup_place: this.state.placePickUp,
    return: this.state.returnWay,
    carpool: this.state.carPool,
    car_pool_qty: this.state.howManyPool,
    car_pool_when:this.state.comeWhenPool,
    car_pool_return: this.state.returnWayPool,
    car_pool_ret_qty: this.state.returnPoolQty,
    car_pool_ret_when:this.state.returnPoolWhen,
    returnQty: this.state.returnHowMany,
    returnWhen: this.state.returnWhen,

  }, function(err, record) {
      if (err) { console.error(err); return; }
      // redirect to a yay or not yay page
      // depending on the given answer

  });
}

  handleSubmit = (event) => {
    event.preventDefault();
    this.createAirtableRecord(this.state);
  }

  handleChanges = (e) => {
    if (e.target.value === "oui") {
      this.setState({[e.target.name] : true })
    } else if (e.target.value === "non") {
      this.setState({[e.target.name] : false})
    } else {
      this.setState({
      [e.target.name]: e.target.value
    })
    }
  }

  handleReset = () => {
    this.setState({
      name: "",
      hasACar: null,
      howMany: null,
      comeWhen: null,
      placePickUp: null,
      returnWay: null,
      carPool: null,
      howManyPool: null,
      comeWhenPool: null,
      returnWayPool: null,
      returnWhen: null,
      returnHowMany: null,
      returnPoolQty: null,
      returnPoolWhen: null
    })
  }

  render() {
    if(this.state.hasACar === null) {
      return(
        <React.Fragment>
          <div className="container-fullpage" id="covoit-container">
            <SEO
              title="RSVP"
              keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
            />
            <Header
              color="light"
              position="regular"
              navbarColor="yellow"
            />
            <div className="small-container">
              <h2 className="page-title white"><span>transports</span></h2>
              <p className="page-content white"> texte á venir</p>
              <form onSubmit={this.handleSubmit} action="/success" id="form" className="form-stroked form-white">
                <input type="text" placeholder="nom, prénom, etc" name="name" onChange={this.handleChanges} value={this.state.name} />
                <div className="covoit-form-container">
                  <FormHasACar onChange={this.handleChanges} />
                </div>
                <button type="button" className="button-reset-form" onClick={this.handleReset}>j’ai fait une boulette : mettre à jour le formulaire</button>
              </form>
            </div>
          </div>
        </React.Fragment>
      );
    }

    if(this.state.hasACar) {
      return(
        <React.Fragment>
          <div className="container-fullpage" id="covoit-container">
            <SEO
              title="RSVP"
              keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
            />
            <Header
              color="light"
              position="regular"
              navbarColor="yellow"
            />
            <div className="small-container">
              <h2 className="page-title white"><span>transports</span></h2>
              <p className="page-content white"> texte á venir</p>
              <form onSubmit={this.handleSubmit} action="/success" className="form-stroked form-white" id="form">
                <input type="text" placeholder="nom, prénom, etc" name="name" onChange={this.handleChanges} value={this.state.name} />
                <div className="covoit-form-container">
                  <FormHasACar onChange={this.handleChanges} />
                  <FormHowMany onChange={this.handleChanges} />
                  {this.state.howMany > 0  && (<FormComeWhen onChange={this.handleChanges} />)}
                  {this.state.comeWhen !== null && (<FormPickupPlace onChange={this.handleChanges} />)}
                  {this.state.placePickUp !== null && (<FormReturn onChange={this.handleChanges} />)}
                  <FormHasACarMain onChange={this.handleChanges} value={this.state} />
                </div>
                <button type="button" className="button-reset-form" onClick={this.handleReset}>j’ai fait une boulette : mettre à jour le formulaire</button>
              </form>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return(
        <React.Fragment>
          <div className="container-fullpage" id="covoit-container">
            <SEO
              title="RSVP"
              keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
            />
            <Header
              color="light"
              position="regular"
              navbarColor="yellow"
            />
            <div className="small-container">
              <h2 className="page-title white"><span>transports</span></h2>
              <p className="page-content white"> texte á venir</p>
              <form onSubmit={this.handleSubmit} action="/success" className="form-stroked form-white">
                <input type="text" placeholder="nom, prénom, etc" onChange={this.handleChanges} value={this.state.name}/>
                <div className="covoit-form-container">
                  <FormHasACar onChange={this.handleChanges} />
                  <FormCarPool onChange={this.handleChanges} />
                  <FormNoCarMain onChange={this.handleChanges} value={this.state} />
                </div>
                <button type="button" className="button-reset-form" onClick={this.handleReset}>j’ai fait une boulette : mettre à jour le formulaire</button>
              </form>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Covoiturage;
