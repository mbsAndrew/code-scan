import React from 'react';
import { validationMsg } from '../utils/validation';
import Input from './Input';
import Select from './Select';

const Form = ({ data, onSubmit, onChange }) => {

    const preSubmitFunction = (e) => {
        //validate all fields first;
        e.preventDefault();
        const keys = Object.keys(data);        
        const errorMsgs = keys.map(m => {            
            return validationMsg[m](data[m]);
        }).filter(f => f);

        if (errorMsgs.length > 0) {
            alert(errorMsgs[0]);
            return false;
        }
        onSubmit();
    }

    return (
        <>
        <h2 className={"card-title"}>
            Enter Your Information
        </h2>
        <form onSubmit={preSubmitFunction}>
            <Input
                label={"Address"}
                onChange={onChange}
                value={data.address}
                type={"text"}
                name={"address"}
            />
            <Input
                label={"System Capacity"}
                onChange={onChange}
                type={"number"}
                value={data.system_capacity}
                name={"system_capacity"}
            />
            <Select
                label={"Module Type"}
                onChange={onChange}
                type={"number"}
                value={data.module_type}
                name={"module_type"}
            >
                <option value={0}>Standard</option>
                <option value={1}>Premium</option>
                <option value={2}>Thin Film</option>
            </Select>
            <Input
                label={"Losses"}
                onChange={onChange}
                type={"number"}
                value={data.losses}
                name={"losses"}
            />
            <Select
                label={"Array Type"}
                onChange={onChange}
                value={data.array_type}
                name={"array_type"}
            >
                <option value={0}>Fixed - Open Rack</option>
                <option value={1}>Fixed - Roof Mounted</option>
                <option value={2}>1-Axis</option>
                <option value={3}>1-Axis Backtracking</option>
                <option value={4}>2-Axis</option>
            </Select>
            <Input
                label={"Tilt"}
                onChange={onChange}
                value={data.tilt}
                type={"number"}
                name={"tilt"}
            />
            <Input
                label={"Azimuth"}
                onChange={onChange}
                value={data.azimuth}
                type={"number"}
                name={"azimuth"}
            />
            <button type="submit" className={"btn btn-primary"}>
                Search
            </button>
        </form>
        </>
    );
};

export default React.memo(Form);
