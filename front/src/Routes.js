import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "./history";
import { AuthenticatedRoute } from "./Components/AuthenticatedRoute";
import { AuthenticatedRouteSales } from "./Components/AuthenticatedRouteSales";

import Home from "./Views/Home";
import ProfileView from "./Views/ProfileView";
import ConsultantSkillsAutoSuggestions from "./Containers/ConsultantSkillsAutoSuggestions";
import ViewNonEditableProfile from "./Containers/ViewNonEditableProfile";
import PositionsList from "./Containers/PositionsList";
import PositionSelection from "./Containers/PositionSelection";
import AddNewPosition from "./Containers/AddNewPosition";
import Login from './Views/Login';

export default class Routes extends Component {

    render() {

        const childProps = {
            isAuthenticated: this.props.isAuthenticated,
            role: this.props.role
        }
        
        return (
            <Router history={history}>
                <Switch>
                <Route exact path="/login" render={(props) => (<Login {...props} />)} />
                    <AuthenticatedRoute
                        exact path="/"
                        component={Home}
                        props={this.props.isAuthenticated}
                    />
                    <AuthenticatedRoute
                        exact path="/positions"
                        component={PositionsList}
                        props={this.props.isAuthenticated}
                    />
                    <AuthenticatedRoute
                        path="/position-details/:positionId"
                        exact component={PositionSelection}
                        name="position-details"
                        props={this.props.isAuthenticated}
                    />
                    <AuthenticatedRouteSales
                       exact path="/positions/add"
                        component={AddNewPosition}
                        props={this.props.role}
                    />
                    <AuthenticatedRoute
                        path="/auto-suggest"
                        exact component={ConsultantSkillsAutoSuggestions}
                        props={this.props.isAuthenticated}
                    />
                    <AuthenticatedRoute
                        path="/profile"
                        exact component={ProfileView}
                        props={this.props.isAuthenticated}
                    />
                    <AuthenticatedRoute
                        path="/view-profile/:id"
                        exact component={ViewNonEditableProfile}
                        name="view-profile"
                        props={this.props.isAuthenticated}
                    />
                    
                </Switch>

            </Router>
        )
    }
}