import React from "react";

import SEO from "../components/seo";
import Dropdown from '../components/dropdown';
import Header from '../components/header';
import SaveTheDate from '../components/savethedate';

import '../styles/main.scss';
import BlobOne from '../images/blobs-1.svg';
import BlobTwo from '../images/blob-2.svg';


class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      flags: []
    }
  }

  componentDidMount() {
    // set the language accordingly with the browsers language
    this.setLanguageVersion(window.navigator.language);
  }

  //changes languages depending on the browser preferences
  setLanguageVersion = (language) => {
      this.setState({
        language: language,
        flags: navigator.languages
      })
  };

  render() {

    return (
      <div id="container">
        <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Header language={this.state.language} flags={this.state.flags} />

        <div id="main-content">

          {/* blob one */}
          <BlobOne id="blob-one"/>
          <BlobTwo id="blob-two"/>

          <SaveTheDate language={this.state.language} />


        </div>
        {/* /#main-content */}

      </div>
    )
  }
}



export default IndexPage
