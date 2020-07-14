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
                    <img width="150" src={team.img} alt=""/><br></br>
                        <Link
                            to={{
                            pathname: `/details/team/${team.id}`,
                            team: {team},
                            img: {team}
                            }}
                        >{team.name}</Link><br></br><br></br><br></br>
                    </div>
                )}
            </>
        )
    }
}

export default EnglandPage;