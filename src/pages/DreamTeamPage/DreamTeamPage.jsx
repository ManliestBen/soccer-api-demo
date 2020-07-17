import React, { Component } from 'react';
import { getDreamTeam, removeFromDreamTeam } from '../../services/api-search';
import DreamLineup from '../../components/DreamLineup/DreamLineup';

class DreamTeamPage extends Component {
    state = {
        players: []
    }

    async componentDidMount() {
        const players = await getDreamTeam();
        this.setState({players});
    }

    handleRemoveFromDreamTeam = async playerId => {
        await removeFromDreamTeam(playerId);
        this.setState(state => ({
            players: state.players.filter(p => p._id !== playerId)
          }), () => this.props.history.push('/dreamteam'));
    }

    render() {
        return (
            <>
                {this.state.players.map((player) =>
                    <div key={player._id}> 
                        <div>{player.player.name} &nbsp;&nbsp;
                            <button className="red sm-btn" onClick={()=>this.handleRemoveFromDreamTeam(player._id)}>X</button>
                        </div>
                    </div>
                )}
                <DreamLineup 
                    players={this.state.players}
                />
            </>
        )
    }
}

export default DreamTeamPage;