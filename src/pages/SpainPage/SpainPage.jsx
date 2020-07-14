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
                        <Link
                            to={{
                            pathname: `/details/team/${team.id}`,
                            team: {team}
                            }}
                        >{team.name}</Link><br></br>
                    </div> 
                )}
            </>
        )
    }
}

export default SpainPage;