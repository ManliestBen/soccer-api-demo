import React, { Component } from 'react';
import { getTeamInfo, addToDreamTeam, getDreamTeam, removeFromDreamTeam } from '../../services/api-search';
import { getImg } from '../../services/team-lists';
import { Link } from 'react-router-dom';

class TeamDetailsPage extends Component {
    state = {
        teamDetails: [],
        teamImg: '',
        favePlayerIds: [],
        lookup: {}
    }
    
    async componentDidMount() {
        const teamDetails = await getTeamInfo(this.props.match.params.id);
        const teamImg = getImg(this.props.match.params.id);
        const players = await getDreamTeam();
        const favePlayerIds = [];
        const lookup = {};
        players.forEach((player)=> {
            favePlayerIds.push(player.player.id);
            lookup[player.player.id] = player._id;
        })
        this.setState({teamDetails, teamImg, favePlayerIds, lookup})
    }

    handleAddToDreamTeam = (playerId) => {
        const newLookup = this.state.lookup;
        let jsonData = {};
        addToDreamTeam(playerId)
        .then((data) => {jsonData = data})
        .then(()=>{newLookup[playerId] = jsonData._id; console.log(jsonData._id)})
        .then(this.setState({favePlayerIds: [...this.state.favePlayerIds, playerId], lookup: newLookup}))
    }

    idLookup = (playerId) => {
        return this.state.lookup[playerId];
    }

    handleRemoveFromDreamTeam = async playerId => {
        const idToRemove = this.idLookup(playerId);
        const newLookup = this.state.lookup;
        delete newLookup[playerId];
        await removeFromDreamTeam(idToRemove)
        this.setState(state => ({
            favePlayerIds: state.favePlayerIds.filter(p => p !== playerId), lookup: newLookup
          })
        )
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
                            >Name: {player.name}</Link>
                            {this.state.favePlayerIds.includes(player.id) ? 
                            <><button onClick={()=>this.handleRemoveFromDreamTeam(player.id)}>Remove</button><br></br></>
                            :
                            <><button onClick={()=>this.handleAddToDreamTeam(player.id)}>Favorite</button><br></br></>
                            }
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

