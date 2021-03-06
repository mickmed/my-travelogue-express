import React, { Component } from 'react'
import Uploader from '../Uploader/Uploader'
import { Link, Redirect } from 'react-router-dom'
import './LocationAdd.scss'

class LocationAdd extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    data: null
  }
  async componentDidMount() {
       this.setState({ latitude: this.props.history.location.latitude, longitude: this.props.history.location.longitude })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.latitude !== prevState.latitude) {
      this.setState({ latitude: prevProps.latitude, longitude: prevProps.longitude })
    }
  }

  render() {
    let redirectFromRefresh = this.props.location.latitude === undefined && <Redirect to={'./'} />

    return (
      <div className={"add-location-wrapper"}>
        <section className="add-location">
          <div className='top'>
            <h1 className="title">Add a new location</h1>
            {redirectFromRefresh}
            <Link to="/">
              <button>
                close
              </button>
            </Link>
          </div>

          {true ?
            <Uploader getLocations={this.props.getLocations}/> :
            <p>Click a location on the map</p>
          }
        </section>
      </div>
    )
  }
}

export default LocationAdd
