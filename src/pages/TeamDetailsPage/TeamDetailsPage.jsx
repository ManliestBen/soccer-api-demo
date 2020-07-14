import React, { Component } from 'react';
import { getTeamInfo } from '../../services/api-search';
import { Link } from 'react-router-dom';

class TeamDetailsPage extends Component {
    state = {
        teamDetails: []
    }

    async componentDidMount() {
        const teamDetails = await getTeamInfo(this.props.match.params.id);
        this.setState({teamDetails})
    }

    render() {
        return (
            
            <>
                {this.state.teamDetails.manager ?
                <>
                    <div>Venue: {this.state.teamDetails.venue.name}</div><br></br>
                    <div>Location: {this.state.teamDetails.venue.city_name}</div><br></br>
                    <div>Capacity: {this.state.teamDetails.venue.capacity}</div><br></br><br></br>
                    <h5>Manager Name: {this.state.teamDetails.manager.name}</h5><br></br><br></br>
                    <h4>Players:</h4><br></br>
                    {this.state.teamDetails.players.map((player) =>
                        <div key={player.name}>
                            <Link
                                to={{
                                    pathname: `/details/player/${player.id}`,
                                    player: {player}
                                    }}
                            >Name: {player.name}</Link><br></br>
                            <div>Position: {player.type}</div><br></br>
                            <div>DOB: {player.date_of_birth}</div><br></br><br></br>
                        </div>
                        
                    )}
                </>
                :
                <div>Loading...</div>
                }
            </>
        )
    }
}

export default TeamDetailsPage;

