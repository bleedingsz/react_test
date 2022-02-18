import React from 'react';
import HeaderTop from './header-top';
import Menu from './main-menu';


class Header extends React.Component{
    render() {
        return (
            <header className="header">
                <HeaderTop/>
                <Menu />
            </header>
        )
    }

}

export default Header