import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import data from './data.json';
import SelectedBeast from './component/SelectedBeast';
import Form from "react-bootstrap/Form";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      image_url: '',
      description: '',
      filteredData: data
    };
  }

  SelectedBeastDataFUN = (title, image_url, description) => {
    this.setState({
      title: title,
      image_url: image_url,
      description: description
    })
  };

  handleOpen = () => {
    this.setState({
      show: true,
    })
  };

  handleClose = () => {
    this.setState({
      show: false

    })
  };

  getTheNumberOfHorns = (event) => {
    //console.log(event.target.value)
    let numberOfHorns = event.target.value;

    let filteredData1 = data.filter((item) => {
      if (item.horns == numberOfHorns) {
        return true;
      }
      
      if (numberOfHorns === 'all') {
        return true;
      }
    })

    this.setState({
      filteredData: filteredData1

    })

  }

  render() {
    return (
      <>
        <Header />

        <Form>
          <Form.Label>Select Number of Honers</Form.Label>
          <Form.Select aria-label="Default select example" onChange={this.getTheNumberOfHorns}>
            <option value="all">ALL</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">WOW!</option>
          </Form.Select>
        </Form>

        <Main

          data={this.state.filteredData}
          handleOpen={this.handleOpen}
          SelectedBeastDataFUN={this.SelectedBeastDataFUN}

        />

        <SelectedBeast

          show={this.state.show}
          handleClose={this.handleClose}

          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}


        >
        </SelectedBeast>


        <Footer />

      </>
    )
  }

}
export default App;
