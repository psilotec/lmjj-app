import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, Dropdown } from 'semantic-ui-react';

const Header = () => {
    return(
        <div>
            <Menu pointing secondary>
                <Link to="/" className="item">
                    JJ Guide
                </Link>
                <Link to="beltlist" className="item">
                    Belt List
                </Link>
                <Link to="seminars" className="item">
                    Seminars
                </Link>
                <Link to="planner" className="item">
                    Lesson Planner
                </Link>
                <a className="item">
                    Login
                </a>
                <Menu.Menu position="right">
                    <Dropdown icon="ellipsis vertical large" className="item">
                        <Dropdown.Menu>
                            <Dropdown.Item>Edit Technique</Dropdown.Item>
                            <Dropdown.Item>Admin Console</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        </div>
    );
}

export default Header;