import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import data from './data.json';
import SelectedBeast from './component/SelectedBeast'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArr: data,
      show:false,
      title:'',
      image_url:'',
      description:''
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


  render() {
    return (
      <>
        <Header />
        <Main

          dataArr={data}
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
