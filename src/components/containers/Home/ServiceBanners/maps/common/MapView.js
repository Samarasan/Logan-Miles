import React, { useState } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
// import { ProfileIcon } from "../../../../assets/Icons"
import "../Maps.css";

export default function MapView(props) {
  const KEY = "AIzaSyDmWLF7ThVnAkVzH3uVBvb1n_FiGaUBKwc";
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${KEY}`;

  const { mapData } = props;

  function Map() {
    const [toLongitude, setLongitude] = useState(-82.54108);
    const [toLatitude, setLatitude] = useState( 37.471746);

    React.useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (position) {
          setLongitude(position.coords.toLongitude);
          setLatitude(position.coords.toLatitude);
        });
      }
    }, [toLongitude,toLatitude]);

    // useEffect(() => {
    //   const listener = (e) => {
    //     if (e.key === "Escape") {
    //       // setSelectedPark(null);
    //     }
    //   };
    //   window.addEventListener("keydown", listener);
    //   return () => {
    //     window.removeEventListener("keydown", listener);
    //   };
    // }, []);

    // const handleSelectedPark = (data) => {
    //   let selectedPark = {
    //     hubId: data.hubId,
    //     lat: parseFloat(data.toLatitude),
    //     lng: parseFloat(data.toLongitude),
    //     hubName: data.hubName,
    //   };
    //   if (isRider) {
    //     selectedPark = {
    //       name: data.name,
    //       ...selectedPark,
    //     };
    //   }
    //   // setSelectedPark(selectedPark);
    // };

    // const pathCoordinates = [
    //   {lat:setLatitude,lng:setLongitude},
    //   { lat: 13.0248773, lng: 80.207397 },
    //   { lat: 13.020000, lng: 80.151000 }
    // ];

   

    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: toLatitude, lng: toLongitude }}
       // defaultOptions={{ styles: mapStyles }}
      >
        {mapData?.map((park,index) => (

          <Marker
            key={index}
            // icon={Warehouse}
            position={{ 
              lat: park.lat,
              lng: park.lang,
            }}
            // onClick={() => handleSelectedPark(park)}
          />
        ))}
        {/* {mapData?.map((park) => (
          <Marker
            key={park.key}
            // icon={Warehouse}
            position={{
              lat: parseFloat(park.lat),
              lng: parseFloat(park.lang),
            }}
            // onClick={() => handleSelectedPark(park)}
          />
        ))} */}

        {/* {lineCoordinates.map((coordinates) => {
          console.log("wer", coordinates); */}
          {/* < Polyline
            path={lineCoordinates}
            geodesic={true}
            options={{
              strokeColor: "#60C8FF",
              strokeOpacity: 0.75,
              strokeWeight: 3,
              icons: [
                {
                  icon: ProfileIcon,
                  offset: "0",
                  repeat: "20px"
                }
              ]
            }}
          /> */}
        {/* })
        } */}



        {/* {selectedPark && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedPark(null);
            }}
            position={{
              lat: selectedPark.lat,
              lng: selectedPark.lng,
            }}
          >
            <div>
              {isRider ? (
                <h6>RiderID : {selectedPark?.userId}</h6>
              ) : (
                <>
                  <h5>HubId: {selectedPark.hubId}</h5>
                  <h6>HubName: {selectedPark.hubName}</h6>
                </>
              )}
            </div>
          </InfoWindow>
        )} */}
      </GoogleMap>
    );
  }

  const MapWrapped = withScriptjs(withGoogleMap(Map));

  return (
    <div className="mapsStyle"
      style={{
        height: "20em",
        width: "70%",
        marginLeft:"10em"
      }}
    >
      <MapWrapped
        googleMapURL={googleMapURL}
        positions={GoogleMap}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
