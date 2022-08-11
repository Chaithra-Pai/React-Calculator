import React from "react";
import './ClearButton.css';

const ClearButton = props => <div className="clear-btn" onClick={props.clearHandler}>{props.children}</div>

export default ClearButton;