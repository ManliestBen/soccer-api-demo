import React, { Component } from 'react';
import { getTeamInfo } from '../../services/api-search';
import { getImg } from '../../services/team-lists';
import { Link } from 'react-router-dom';

class TeamDetailsPage extends Component {
    state = {
        teamDetails: [],
        teamImg: ''
    }

    async componentDidMount() {
        const teamDetails = await getTeamInfo(this.props.match.params.id);
        const teamImg = getImg(this.props.match.params.id)
        this.setState({teamDetails, teamImg})
    }

    render() {
        return (
            
            <>
                {this.state.teamDetails.manager ?
                <>
                    <h3>{this.state.teamDetails.team.name}</h3>
                    <img width="300" src={this.state.teamImg} alt=""/><br></br><br></br>
                    <div>Venue: {this.state.teamDetails.venue.name}</div><br></br>
                    <div>Location: {this.state.teamDetails.venue.city_name}</div><br></br>
                    <div>Capacity: {this.state.teamDetails.venue.capacity}</div><br></br><br></br>
                    <div>Home Colors:</div>
                        <button style={{backgroundColor:`#${this.state.teamDetails.jerseys[0].base}`}} className="color"></button> Base<br></br>
                        <button style={{backgroundColor:`#${this.state.teamDetails.jerseys[0].sleeve}`}} className="color"></button> Sleeve<br></br>
                        <button style={{backgroundColor:`#${this.state.teamDetails.jerseys[0].number}`}} className="color"></button> Number<br></br><br></br>
                    <div>Away Colors:</div>
                        <button style={{backgroundColor:`#${this.state.teamDetails.jerseys[1].base}`}} className="color"></button> Base<br></br>
                        <button style={{backgroundColor:`#${this.state.teamDetails.jerseys[1].sleeve}`}} className="color"></button> Sleeve<br></br>
                        <button style={{backgroundColor:`#${this.state.teamDetails.jerseys[1].number}`}} className="color"></button> Number<br></br><br></br>
                    <div>Goalkeeper Colors:</div>
                        <button style={{backgroundColor:`#${this.state.teamDetails.jerseys[2].base}`}} className="color"></button> Base<br></br>
                        <button style={{backgroundColor:`#${this.state.teamDetails.jerseys[2].sleeve}`}} className="color"></button> Sleeve<br></br>
                        <button style={{backgroundColor:`#${this.state.teamDetails.jerseys[2].number}`}} className="color"></button> Number<br></br><br></br>

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

