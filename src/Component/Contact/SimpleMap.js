import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
    <div className="border p-1" style={{ position: "relative" }}>
        <i class="fa fa-circle-o-notch" style={{ fontSize: 19, color: "#a5b5b5", position: "absolute", top: 20 }}></i>
        <i className="text-danger fa fa-map-marker" title="Kumo Solutin" style={{fontSize:30,  position: "absolute", top: 0 }}></i>

    </div>
);

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 21.942823,
            lng: 96.10766
        },
        zoom: 17
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "50vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyB1l4DzDJIqx7bWONddvw1IKDCkL-k9PcM"
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent lat={21.942783} lng={96.10766}  text="My Marker" />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
