import React from 'react'
import { Helmet } from "react-helmet";

const mapStyle = {
    width: "800px",
    height: "800px"
}
export default class MyPosition extends React.Component {

    initMap = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    let position = { lat: pos.coords.latitude, lng: pos.coords.longitude };

                    var map = new window.google.maps.Map(document.getElementById('map'), {
                        center: position,
                        zoom: 19
                    })

                    new window.google.maps.Marker({
                        position: position,
                        map: map,
                    });

                },
                (errorCallback) => {
                    alert("Error")
                    switch (errorCallback) {
                        case errorCallback.PERMISSION_DENIED:
                            alert("User denied the request for Geolocation.")
                            break;
                        case errorCallback.POSITION_UNAVAILABLE:

                            alert(
                                "Location information is unavailable."
                            )
                            break;
                        case errorCallback.TIMEOUT:
                            alert(
                                "The request to get user location timed out."
                            )
                            break;
                        case errorCallback.UNKNOWN_ERROR:
                            alert("An unknown error occurred.")
                            break;
                        default:
                            break;
                    }

                });
        }
        else {
            alert(
                "Geolocation is not supported by this browser."
            )
        }
    }

    componentDidMount() {
        this.initMap()
    }

    render() {
        return (
            <>
                <Helmet>
                    <script src={"https://maps.googleapis.com/maps/api/js?key=" + process.env.GOOGLE_API} async defer />
                </Helmet>
                <div style={mapStyle} id="map" />
            </>
        )
    }

}
