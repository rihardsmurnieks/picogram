import React, { Component } from 'react';
import Checkbox from './checkbox';
import Menu from './menu';

const items = [
  '1 room',
  '2 rooms',
  '3 rooms',
  '4 rooms',
  '5 rooms'
];
const items2 = [
  'less than 300 Eur',
  '300-600 Eur',
  '600-1000 Eur',
  'more than 1000 Eur'
];
const items3 = [
  '1',
  '2',
  '3',
  '4'
];
class Application extends Component {
  constructor(props) {
    super();
    this.state={
      value: ''
    };
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
      this.setState({value: checkbox});
    }
  }

  createCheckbox = (label) => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )
  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )
  createCheckboxes2 = () => (
    items2.map(this.createCheckbox)
  )
  createCheckboxes3 = () => (
    items3.map(this.createCheckbox)
  )


  render() {
    const is1room = this.state.value;
    let div, heading, requestp, div2 = null;
    if (is1room == '1 room'){
      div = <img src="http://www.adcstudio.cz/wp-content/uploads/2015/08/interier-final-hd-1920x1080.jpg" alt="interier"/>;
      heading = <h1 className="setuph1">See your requested result</h1>;
      requestp = <p className="req">1. StreetName 5</p>;
      div2 = <img src="https://zahradnitipy.cz/wp-content/uploads/byt-terasa.jpg" alt="interier"/>;
    }
    return (
      <div className="container">
        <Menu />
       <h2>Setup your needs</h2>
        <div className="row">
          <div className="col-sm-12">

            <form id="webcheck" onSubmit={this.handleFormSubmit}>
              <h3>How many rooms you want?</h3>
              {this.createCheckboxes()}
              <br></br>
              <button className="btn1 btn-default" type="submit">Save</button>
              <h3>What would be the price?</h3>
              {this.createCheckboxes2()}
              <br></br>

              <button className="btn2 btn-default" type="submit">Save</button>
                <h3>How many people will live?</h3>
              {this.createCheckboxes3()}
              <br></br>
              <button className="btn3 btn-default" type="submit">Save</button>
            </form>
            {heading}
            {requestp}
            {div}
            {requestp}
            {div2}
            <div id="foots">


            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Application;
