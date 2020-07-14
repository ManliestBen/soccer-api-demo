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

export default BrazilPage;