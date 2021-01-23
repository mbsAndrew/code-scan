import React from 'react';

const Inputs = ({ label, ...other }) => {
    return (
        <div className={"form-group"}>
            <label>{label}</label>
            <input className={"form-control"} {...other} />
        </div>
    );
}

export default React.memo(Inputs);
