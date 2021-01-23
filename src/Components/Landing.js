import React from 'react';
import Form from './Form';
import Results from './Results';

class Landing extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            searching: false,
            ac: [],
            poa: [],
            formData: {
                system_capacity: 0.05,
                module_type: 0,
                losses: 0,
                array_type: 0,
                tilt: 0,
                azimuth: 359,
                address: ""
            }
        }
    }

    handleFormChange = (e) => {
        const newData = {...this.state.formData};
        newData[e.target.name] = e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;        
        this.setState({
            formData: newData
        })
    }

    handleFormSubmit = () => {
        //fetch data here
        this.setState({
            searching: true
        }, () => {
            const fetchURL = this.buildFetchURL();
            fetch(fetchURL)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if(res.errors.length > 0) {
                    alert("There was an error, please check your info");
                    this.setState({
                        searching: false
                    })
                    return false;
                }                
                this.setState({
                    ac: res.outputs.ac,
                    poa: res.outputs.poa
                });                
            });
        })
    }

    buildFetchURL = () => {
        const { formData } = this.state;
        const start = new URL("https://developer.nrel.gov/api/pvwatts/v6.json");        
        const keys = Object.keys(formData);
        for (var i = 0; i < keys.length; i++) {
            start.searchParams.set(keys[i], formData[keys[i]]);
        }        
        start.searchParams.set("timeframe", "hourly");
        start.searchParams.set("api_key", process.env.REACT_APP_NRELKEY);
        return start;
    }

    backToForm = () => {
        this.setState({
            searching: false,
            ac: [],
            poa: []
        })
    }

    render() {
        const { formData, searching, ac, poa } = this.state;        
        return (
            <section className={"container-fluid"}>
                <div className={"row h-100 justify-content-center align-items-center"}>
                    <div className={"col-6 align-self-center"}>
                        <div className={"card"}>
                            <div className={"card-body"}>                                
                                {searching
                                    ? <Results backToForm={this.backToForm} ac={ac} poa={poa} />
                                    : <Form
                                        onSubmit={this.handleFormSubmit}
                                        onChange={this.handleFormChange}
                                        data={formData}
                                    />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing;