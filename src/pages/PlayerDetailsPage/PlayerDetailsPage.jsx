import React, { Component } from 'react';
import { getPlayerInfo } from '../../services/api-search';

class PlayerDetailsPage extends Component {
    state = {
        playerDetails: [],
        role: []
    }

    async componentDidMount() {
        const playerDetails = await getPlayerInfo(this.props.match.params.id);
        const role = playerDetails.roles.filter((role => role.active === "true"));
        this.setState({playerDetails, role});
    }


    render() {
        return (
            
            <>
                {this.state.playerDetails.player ?
                <>
                  <h3>{this.state.playerDetails.player.name}</h3>
                  <br></br>
                  <div>Height: </div><div>{this.state.playerDetails.player.height} cm</div><br></br>
                  <div>Weight: </div><div>{this.state.playerDetails.player.weight} kg</div><br></br>
                  <div>DOB: </div><div>{this.state.playerDetails.player.date_of_birth}</div><br></br>
                  <div>Nationality: </div><div>{this.state.playerDetails.player.nationality}</div><br></br>
                  <div>Team: </div><div>{this.state.role[0].team.name}</div><br></br>
                  <div>Position: </div><div className='capitalize'>{this.state.playerDetails.player.type}</div><br></br>
                  <div>Jersey Number: </div><div>{this.state.role[0].jersey_number}</div><br></br>
                  <h4>Career Totals:</h4><br></br>
                  <div>Matches Played: </div><div>{this.state.playerDetails.statistics.totals.matches_played}</div><br></br>
                  <div>Goals Scored: </div><div>{this.state.playerDetails.statistics.totals.goals_scored}</div><br></br>
                  <div>Own Goals: </div><div>{this.state.playerDetails.statistics.totals.own_goals}</div><br></br>
                  <div>Assists: </div><div>{this.state.playerDetails.statistics.totals.assists}</div><br></br>
                  <div>Yellow Cards: </div><div>{this.state.playerDetails.statistics.totals.yellow_cards}</div><br></br>
                  <div>Red Cards: </div><div>{this.state.playerDetails.statistics.totals.red_cards}</div><br></br>
                </>
                :
                <div>Loading...</div>
                }
            </>
        )
    }
}

export default PlayerDetailsPage;

