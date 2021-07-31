import React from 'react';
import HornedBeasts from './HornedBeasts';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {
    render() {
        return (
            
            <>
                <main>
                    <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                       this.props.data.map((item) =>{
                            return <div>
                                <HornedBeasts

                                    title={item.title}
                                    image_url={item.image_url}
                                    description={item.description}

                                    handleOpen={this.props.handleOpen}

                                    SelectedBeastDataFUN={this.props.SelectedBeastDataFUN}
                                    
                                />
                            </div>


                        })

                    }
                    </Row>
                    </Container>
                    
                </main>
            </>
        )
    }

}
export default Main;
