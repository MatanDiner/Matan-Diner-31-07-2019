import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Search from '../Search/Search';
import HomeContext from '../../Contexts/homeContext';
import DashboardContainer from '../Dashboard/DashboardContainer/DashboardContainer';
import { getCoordinates, getCurrentLocation } from '../../services/geolocation';
import Modal from '../../components/UI/Modal/Modal';

class Home extends Component {

    state = {
        location: {
            name: "",
            key: null
        },
        error: false,
        errorMassage: ""
    }

    async componentDidMount() {
        const { key, name } = this.props.match.params;
        if (key && name) {
            const location = { name, key };
            this.setState({
                location,
            })
        }
        else {
            try {
                const geoLocation = await getCoordinates();
                const currentLocation = await getCurrentLocation(geoLocation.lat, geoLocation.long);
                const { name, key } = currentLocation;
                const location = { name, key }
                this.setState({
                    location,
                    error: false,
                    errorMassage: ""
                })
            }
            catch (ex) {
                this.setError(`An error occurred while trying to get your current location`);
            }
        }
    }

    setLocation = loc => {
        const name = loc.name.split(",")[0];
        const location = { name, key: loc.key };
        this.setState({
            location,
        })
    }

    setError = massage => {
        this.setState({
            error: true,
            errorMassage: massage
        })
    }

    modalClosed = () => {
        this.setState({
            error: false
        })
    }

    render() {
        const { name, key } = this.state.location;

        let errorMassage = null;
        if (this.state.error) {
            errorMassage = <Modal show={this.state.error}
                modalClosed={this.modalClosed}>
                {this.state.errorMassage}</Modal>
        }

        return (
            <Aux>
                {errorMassage}
                <HomeContext.Provider
                    value={{ setLocation: this.setLocation, setError: this.setError }}
                >
                    <Search name={name}
                    />
                </HomeContext.Provider>
                <DashboardContainer locationName={name}
                    locationKey={key}
                />
            </Aux>
        )
    }


}

export default Home;