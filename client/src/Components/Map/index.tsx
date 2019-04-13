require('dotenv').config()
import React, { Component }  from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';

const Marker = ({ text }: any) => {
  return(
  <div style={{
    color: 'black',
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
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY} as any}
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