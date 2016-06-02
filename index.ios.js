/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
  MapView,
  StyleSheet,
    AlertIOS,
} = React;

var reactMixin = require('react-mixin');
var TimerMixin = require('react-timer-mixin');
// with class definition syntax we extend Component instead of calling createClass
class Waypoint extends React.Component {
  // Don't need the function keyword when defining functions.
  // The constructor function is executed when a new instance of the Waypoint is being created
  // Props is the object passed new Waypoint(), e.g., new Waypoint({ prop1: value, prop2: value })
  constructor(props) {
    // super(props) creates a new instance of the superclass
    // In this case the superclass is React.Component
    // super(props) does the same thing that SuperClass.call(this, props) does in pseudoclassical style
    // super() MUST be called beforing refering to the 'this' of the Waypoint subclass
    super(props);
    this.state = {
      position: {
        coords: {
            latitude: 45.506725,
            longitude: -122.517024
        }
      },
      markers: [{
        latitude: 45.506725,
        longitude: -122.517024,
        title: 'Howe is here!',
        subtitle: 'Come see us!',
        description: 'Come see us!'
      }]
    };
  } // look ma, no commas!

  // getInitialState() {
  //   return {
  //     annotations: [{
  //       // latitude: this.state.position.coords.latitude,
  //       // longitude: this.state.position.coords.longitude,
  //       // title: 'Hack Reator',
  //       // subtitle: 'you are here'
  //     }]
  //   }
  // }

  //Add title and current location to map
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} type="text">
          Waypoint
        </Text>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.position.coords.latitude,
            latitudeDelta: 0.001,
            longitude: this.state.position.coords.longitude,
            longitudeDelta: 0.001
          }}
          type= "MapView"
          ref="theMap"
          annotations={this.state.markers}
         >
         </MapView>
         <Text style={styles.coords}>
           {this.state.position.coords.latitude}, {this.state.position.coords.longitude}
         </Text>
      </View>
    );
  }

  // this function will execute after rendering on the client occurs
  componentDidMount() {

    // navigator is available via the Geolocation polyfill in React Native
    // http://facebook.github.io/react-native/docs/geolocation.html#content
    //
    // navigator is the object through which you interact with the Geolocation interface
    //
    // *** Polyfill definition needs to be verified
    // React Native allows for polyfills--code that provides functionality available in the browser, but
    // that is not currently available in the runtime environment on mobile devices ***
    // Geolocation is enabled by default when you create a project with react-native init.
    //
    // getCurrentPosition() and watchPostion() take a success callback, error callback, and options object
    navigator.geolocation.getCurrentPosition(
      (position) => this._putLocation(position),
      //(position) => this.setState({position}),
      (error) => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    //navigator.geolocation.watchPosition((position) => {
    //  this.setState({position});
    //});

    // this.refs.theMap.showCallout();
     this._getLocation()
    // this.setInterval(
    //   this._getLocation,
    //   6000
    // )

  }
  _getLocation() {
    fetch("http://howes.dev/node/1?_format=json", {
      method: "GET",
      headers: {
        'Authorization': 'Bearer xFTGGGT2-EdxuntljXP_Ed8oPCAWJftxYBCeuzcm6-g',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': ''
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((responseData) => {

      console.log(responseData);
        this.setState({
          position : {
            coords : {
              latitude : parseFloat(responseData.field_lat[0].value),
              longitude : parseFloat(responseData.field_long[0].value)
            }
          },
          markers : [{
            latitude : parseFloat(responseData.field_lat[0].value),
            longitude : parseFloat(responseData.field_long[0].value),
            title: "Howe is now here!"
            // ref: "howemarker"
          }]
        });
        //this.refs.theMap.showCallout();

    })
    .done();
  }

  _putLocation(position) {
    console.log(JSON.stringify({
      "type": [{"target_id": "location"}],
      "title": [{"value": "New Location"}],
      "body": [{"value": "Howe is here"}],
      "field_lat": [{"value": position.coords.latitude}],
      "field_long": [{"value": position.coords.longitude}],
    }));
    fetch("http://howes.dev/node/1", {
      method: "PATCH",
      headers: {
        'Authorization': 'Bearer xFTGGGT2-EdxuntljXP_Ed8oPCAWJftxYBCeuzcm6-g',
        //'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'Origin': ''
      },
      body: JSON.stringify({
        'type': [{'target_id': 'location'}],
        'title': [{'value': 'New Location'}],
        'body': [{'value': 'Howe is here'}],
        'field_lat': [{'value': position.coords.latitude}],
        'field_long': [{'value': position.coords.longitude}],
      })
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      //.then((responseData) => {
      //  this.setState({
      //    position: {
      //      coords: {
      //        latitude: parseFloat(responseData.field_lat[0].value),
      //        longitude: parseFloat(responseData.field_long[0].value)
      //      }
      //    },
      //    markers: [{
      //      latitude: parseFloat(responseData.field_lat[0].value),
      //      longitude: parseFloat(responseData.field_long[0].value),
      //      title: "Howe is now here!"
      //      // ref: "howemarker"
      //    }]
      //  });
      //  //this.refs.theMap.showCallout();
      //
      //})
      .done();
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    position: 'absolute',
    top: 10,
    right: 0,
    left: 0,
    padding: 15,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-end',
    textAlign: 'center'
    // marginTop: 20,
  },
  coords: {
    // fontWeight: 'bold',
    fontSize: 20,
    // color: '#dddddd',
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginBottom: 24
  },
  map: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 60,
    bottom: 60,
    margin: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5
  }
});
reactMixin(Waypoint.prototype, TimerMixin);
AppRegistry.registerComponent('howesicecream', () => Waypoint);
