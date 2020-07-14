import React, { Component } from 'react';
import { getAllSpain } from '../../services/team-lists';
import { Link } from 'react-router-dom';

class SpainPage extends Component {
    state = {
        teams: getAllSpain()
    }

    render() {
        return (
            <>
                <h4>Spain Teams</h4>
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

export default SpainPage;