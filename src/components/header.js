import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, Dropdown, Icon } from 'semantic-ui-react';

const Header = () => {
    return(
        <div>
            <Menu size='large' pointing secondary>
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
                            <Dropdown.Item>
                                <Icon name='edit' />
                                Edit Technique
                            </Dropdown.Item>
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

export default Header;