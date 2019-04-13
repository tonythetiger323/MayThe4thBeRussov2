import React, { Component }  from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';

const Marker = ({ text }: any) => {
  return(
  <div style={{
    color: 'white',
    background: 'transparent',
    padding: 'auto',
    display: 'inline-flex',
    textAlgin: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    }}>
    {text}
  </div>
  )
}

interface MapProps {
  APIKey: any,
  center: Coords,
  zoom: number,
  lat: number,
  lng: number,
  text: string
}

class Map extends Component<MapProps, any>{
  constructor(props: MapProps){
    super(props)
  }

  render(){
    return(
      <GoogleMapReact
        bootstrapURLKeys={this.props.APIKey}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          text={this.props.text}
        />
      </GoogleMapReact>
    )
  }
}

export default Map