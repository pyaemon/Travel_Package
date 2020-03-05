import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Check extends React.Component {

    state = {
        startDate: new Date(),
        endDate: new Date()
    };
    handleChange = date => {
        this.setState({
            startDate: date,
        });
    };
    handleEndChange = date => {
        this.setState({
            endDate: date,
        });
    };


    render() {
        console.log("Date===>", this.state);
        return (
            <div className="container shadow-lg p-5 bg-white rounded position-relative" style={{ marginTop: '-290px' }} >
                <div className="d-flex flex-wrap flex-row justify-content-center">
                    <div className="p-2 flex-fill">
                        <h6 className="pb-2">Arrival Date</h6>
                        <DatePicker className="btn shadow-lg rounded-pill w-100"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="p-2 flex-fill" >
                        <h6 className="pb-2"> Departure Date</h6>
                        <DatePicker className="btn shadow-lg rounded-pill w-100"
                            selected={this.state.endDate}
                            onChange={this.handleEndChange}
                        />
                    </div>
                    <div className="p-2 flex-fill" >
                        <h6 className="pb-2">Adults</h6>
                        <div className="dropdown">
                            <button className="btn shadow-lg rounded-pill dropdown-toggle w-100" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ width: '160px', height: '40px' }}>
                                Adult
                                </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Adult</button>
                                <button className="dropdown-item" type="button">2</button>
                                <button className="dropdown-item" type="button">4</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex-fill">
                        <h6 className="pb-2">Children</h6>
                        <div className="dropdown">
                            <button className="btn shadow-lg rounded-pill dropdown-toggle w-100" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ width: '160px', height: '40px' }}>
                                Children
                                </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Children</button>
                                <button className="dropdown-item" type="button">1</button>
                                <button className="dropdown-item" type="button">2</button>
                                <button className="dropdown-item" type="button">3</button>
                                <button className="dropdown-item" type="button">4</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex-fill  align-self-end">
                        <button type="button" className="btn btn-warning rounded-pill w-100">Check Available</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Check;