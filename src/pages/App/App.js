import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import SearchPage from '../SearchPage/SearchPage';
import LeaguePage from '../LeaguePage/LeaguePage';
import BrazilPage from '../BrazilPage/BrazilPage';
import EnglandPage from '../EnglandPage/EnglandPage';
import SpainPage from '../SpainPage/SpainPage';
import TeamDetailsPage from '../TeamDetailsPage/TeamDetailsPage';
import PlayerDetailsPage from '../PlayerDetailsPage/PlayerDetailsPage';

class App extends Component {
  state = {
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleSearch = (query) => {
    // This is where a player search would go, if you can find one.
  }

  render () {
    return (
      <>
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/search' render={({ history }) =>
          <SearchPage 
            history={history}
            handleSearch={this.handleSearch}
          />
        }/>
        <Route exact path='/leagues' render={({ history }) =>
          <LeaguePage 
            history={history}
          />
        }/>
        <Route exact path='/brazil' render={({ history }) =>
          <BrazilPage 
            history={history}
          />
        }/>
        <Route exact path='/england' render={({ history }) =>
          <EnglandPage 
            history={history}
          />
        }/>
        <Route exact path='/spain' render={({ history }) =>
          <SpainPage 
            history={history}
          />
        }/>
        <Route exact path='/details/team/:id' render={({ history, location, match}) =>
          <TeamDetailsPage 
            history={history}
            location={location}
            match={match}
          />
        }/>
        <Route exact path='/details/player/:id' render={({ history, location, match}) =>
          <PlayerDetailsPage 
            history={history}
            location={location}
            match={match}
          />
        }/>

      </>
    );
  }
}

export default App;
