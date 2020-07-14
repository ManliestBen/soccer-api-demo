import React, { Component } from 'react';
import { getAllEngland } from '../../services/team-lists';
import { Link } from 'react-router-dom';

class EnglandPage extends Component {
    state = {
        teams: getAllEngland()
    }

    render() {
        return (
            <>
                <h4>England Teams</h4>
                {this.state.teams.map((team) =>
                    <div key={team.name}>
                        <Link
                            to={{
                            pathname: `/details/${team.id}`,
                            team: {team}
                            }}
                        >{team.name}</Link><br></br>
                    </div> 
                )}
            </>
        )
    }
}

export default EnglandPage;