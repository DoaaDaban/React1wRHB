import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class HornedBeasts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            numOfLikes: 0,
            changeTitle: ''
        }    
    };

    incrementNumOfLikes =()=>{
        this.setState({
            numOfLikes: this.state.numOfLikes +1,
           
        })
    };

    getSelectedBeastDataFun=()=>{
      this.props.handleOpen(); 

      this.props.SelectedBeastDataFUN( this.props.title, 
        this.props.image_url,
        this.props.description
  );
     
    };

render(){
return (
  <>
{/* <h2>{this.props.title}</h2>
<img  src= {this.props.image_url} alt={'image'} />
<p>{this.props.description}</p> */}
 
<Col >
<Card>
  <Card.Img   onClick={this.incrementNumOfLikes} variant="top" src={this.props.image_url} />
  <Card.Body >
    <Card.Title onClick={this.changeTitleFun} >{this.props.title}</Card.Title>
    <Card.Text>
    Likes 💗 : {this.state.numOfLikes} 
    </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Button variant="primary" onClick={this.getSelectedBeastDataFun}>Display</Button>
  </Card.Body>
</Card>
</Col>

 </>
)
}

}
//  onClick={this.props.handleOpen}
// onClick={this.props.getSelectedBeastDataFun}
export default HornedBeasts;
