import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { EditTechniqueModal } from'../components/techniques/edit_technique_modal';

export class Header extends Component {
    showEditTechniqueButton() {
        if(createBrowserHistory().location.pathname.includes("technique")) {
            return true;
        }
    }

    render() {
        return(
            <div className="header-nav">
                <Menu size='huge' pointing secondary fluid>
                    <Link to="/" className="item">
                        JJ Guide
                    </Link>
                    <Link to="/beltlist" className="item">
                        Belt List
                    </Link>
                    <Link to="/seminars" className="item">
                        Seminars
                    </Link>
                    <Link to="/planner" className="item">
                        Lesson Planner
                    </Link>
                    <a className="item">
                        Login
                    </a>
                    <Menu.Menu position="right">
                        <Dropdown icon="ellipsis vertical" className="item">
                            <Dropdown.Menu>
                                { (this.showEditTechniqueButton()) ?
                                    <Dropdown.Item>
                                        <EditTechniqueModal />
                                    </Dropdown.Item>
                                    : '' 
                                }                             
                                <Dropdown.Item>    
                                    <Icon name='settings' />
                                    Admin Console
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}