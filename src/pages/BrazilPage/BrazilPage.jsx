import React, { Component } from 'react';
import { getAllBrazil } from '../../services/team-lists';
import { Link } from 'react-router-dom';

class BrazilPage extends Component {
    state = {
        teams: getAllBrazil()
    }

    render() {
        return (
            <>
                <h4>Brazil Teams</h4>
                {this.state.teams.map((team) =>
                    
                    <div key={team.name}>
                    <img width="150" src={team.img} alt=""/><br></br>
                        <Link
                            to={{
                            pathname: `/details/team/${team.id}`,
                            team: {team}
                            }}
                        >{team.name}</Link><br></br><br></br><br></br>
                    </div>
                    
                )}
            </>
        )
    }
}

export default BrazilPage;