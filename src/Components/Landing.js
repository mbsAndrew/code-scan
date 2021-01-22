import React from 'react';
import Form from './Form';
import Results from './Results';

class Landing extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            searching: false,
            results: [],
            formData: {
                system_capacity: 0,
                module_type: 0,
                losses: 0,
                array_type: 0,
                tilt: 0,
                azimuth: 360
            }
        }
    }

    render() {
        const { formData } = this.state;
        return (
            <section className={"container-fluid"}>
                <div className={"row h-100 justify-content-center align-items-center"}>
                    <div className={"col-6 align-self-center"}>
                        <div className={"card"}>
                            <div className={"card-body"}>
                                {searching ? <Results /> : <Form data={this.state.formData} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing;