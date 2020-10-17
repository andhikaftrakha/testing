import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/appointments/ProjectDetails'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn';
import CreateAppointment from './components/appointments/CreateAppointment'
import Schedule from './components/schedule/MySchedule';
import TeamMember from './components/Team/team';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/myschedule' component={Schedule} />
            <Route path='/team' component={TeamMember} />
            <Route path='/create' component={CreateAppointment} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
