import React from "react";
import Modal from "./Modal";

function DeleteBadgeModal(props){
    return<Modal isOpen={props.isOpen} onClose={props.onClose}> 
                <div className="DeleteBageModal">
                    <h1>Are you sure?</h1>
                    <p>you are about to delete this.</p>
                    <button className="btn btn-danger" onClick={props.onDeleteBadge}> Delete </button>
                    <button className="btn btn-primary" onClick={props.onClose}> Cancel</button>
                </div>

                </Modal>;
}


export default DeleteBadgeModal;