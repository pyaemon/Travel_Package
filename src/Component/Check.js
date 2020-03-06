import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

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
                        <div  className="btn shadow-lg rounded-pill w-100">
                            <select id="Adult" className="selectAdult" style={{ border:'none', width:'80px' }}>
                            <option value="Adult">Adult</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                        </div>           
                    </div>
                    <div className="p-2 flex-fill" >
                        <h6 className="pb-2">Children</h6>
                        <div  className="btn shadow-lg rounded-pill w-100">
                            <select id="Children" className="selectAdult" style={{ border:'none', width:'80px' }}>
                            <option value="Children">Children</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
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

const options = [
    'one', 'two', 'three'
  ]

export default Check;