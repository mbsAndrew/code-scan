import React from 'react';

const Results = ({ac, poa, backToForm}) => {    

    const createRows = () => {       
        return ac.map((item, i) => {
            return <tr>
                <td>{item}</td>
                <td>{poa[i] ?? "-"}</td>
            </tr>
        })
    }

    return (
        <>
            <div className={"row"}>
                <div className={"col"}>
                    <button onClick={backToForm} className={"btn btn-secondary"}>
                        Back to Form
            </button>
                </div>
            </div>            
            <h2 className={"card-title"}>Results</h2> 
            {ac.length < 1 && poa.length < 1
            ? <div class="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            : 
                <table className={"table table-striped"}>
                    <thead className={"thead-dark"}>
                        <tr>
                            <th>
                                AC System Output
                            </th>
                            <th>
                                Plane of Array Irradiance
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {createRows()}
                    </tbody>
                </table>
            }           
        </>
    );
}

export default React.memo(Results);
