import React from 'react';

const Select = ({label, children, ...other}) => {
    return (
        <div className={"form-group"}>
            <label>{label}</label>
            <select className={"form-control"} {...other}>
                {children}
            </select>
        </div>
    )
};

export default React.memo(Select);
