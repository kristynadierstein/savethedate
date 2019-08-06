// external libs
import React from 'react';
import { Link } from 'gatsby'

// internal stuff
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from '../components/footer';

import { defineContentLanguage } from '../helpers/helpers'

// style & assets
import Blob from '../images/resa-blob-1.svg';

import '../styles/main.scss';

class SuccessPage extends React.Component {

  render() {
    const numOfPeople = this.props.location.state.people
    return(
      <React.Fragment>
        <SEO  title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <div id="page-payer" className="container-fullpage">

        <div className="page-container">

          <h1>todo bueno</h1>
          <h5>et merci mucho mucho !<br/>on prend note et on vous réserve {numOfPeople} places.</h5>
          <p>afin d'être tout à fait tranquilles jusqu'au jour J, vous pouvez payer tout de suite vos places (que la technologie est pratique).</p>
          <a href="https://www.paypal.me/CamilleVillard" className="button-green">mais oui, payer maintenant</a>
          <Link to="/">retour à l'accueil</Link>
        </div>


        </div>
      </React.Fragment>
    )
  }
}

export default SuccessPage;
