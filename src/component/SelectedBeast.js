import React from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from 'react-bootstrap';


class SelectedBeast extends React.Component {


    render() {
        return (
            <>

                <Modal show={this.props.show} onHide={this.props.handleClose} >

                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                    <img src={this.props.image_url}
                     alt={this.props.title}
                     style={{width: "18rem"}}
                    />
                    <p>
                    {this.props.description}
                    </p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast;