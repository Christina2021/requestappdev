import React from 'react';
import QR from "../QRCode";
import { Row } from "../Grid";


function QRModal(props) {

    return(
        <div className="modal fade" id="qr-code-modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                {/* <div className="modal-header">
                    <h5 className="modal-title">{props.djName}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div> */}
                <div className="modal-body">
                    <div className="conatiner-fluid">
                        <Row classes="justify-content-center mt-5">
                            <img src="https://i.ibb.co/bdJNc5g/Noi-Logo-200x200.png" alt="Noi-Logo-200x200" border="0" width="150" height="150" />
                        </Row>
                        <Row classes="justify-content-center">
                            <h1 className="qr-modal-name mt-5">{props.djName}</h1>
                        </Row>
                        <Row classes="d-flex align-items-center justify-content-center qr-code">
                            <QR djCode={props.djCode} />                            
                        </Row>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default QRModal;