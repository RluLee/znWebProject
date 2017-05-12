import React , {Component} from 'react';
import {Map , Marker} from 'react-amap';

const styleA = {
    border:'0.5rem solid #fff',
    borderRadius:'1rem',
    width: '60%',
    height: '20rem',
}

const styleC = {
    background: `url('http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '2rem',
    height: '2rem',
    color: '#000',
    textAlign: 'center',
    lineHeight: '2rem'
}

class HMap extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const {id} = this.props;
        const params={
            center:{longitude:120.172451,latitude:30.258401},
            zoomEnable:false,
            zoom:15,
            amapkey:'5076f1948da4bcf74fcdb341bebc6f23',
        }


        return <div  id={id} style={styleA}>
            <Map {...params}>

                <Marker position={params.center} >
                    <div style={styleC}></div>
                </Marker>
            </Map>
        </div>
    }
}


export default HMap;