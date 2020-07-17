import React, { Component } from 'react';
import { getDreamTeam } from '../../services/api-search';

class DreamTeamPage extends Component {
    state = {
        players: []
    }

    async componentDidMount() {
        const players = await getDreamTeam();
        this.setState({players});
    }

    render() {
        return (
            <>
            </>
        )
    }
}

export default DreamTeamPage;