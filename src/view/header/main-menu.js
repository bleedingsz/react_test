import React from 'react';
import PropTypes from 'prop-types';
import logo_2 from '../../assets/images/logo_2.png';
import logo_2_mob from '../../assets/images/logo_2_mob.png';




const menuItem = [
    {
        id:1,
        title: 'HOME'
    },
    {
        id:2,
        title: 'TICKETS'
    },
    {
        id:3,
        title: 'HOW PLAY'
    },
    {
        id:4,
        title: 'FAQ'
    },
    {
        id:5,
        title: 'CONTACT'
    },
];
class MenuList extends React.Component {
    renderMenuItems = () => {
        const { data } = this.props;
        let menuItemsTemplate = null;
        if (data.length){
            menuItemsTemplate = data.map( (item) => {
                return <MenuItems key={item.id} data={item} />
            })
        }
        return menuItemsTemplate;
    };

    render() {
        return (
            <ul className='navbar-nav ml-auto'>
                {this.renderMenuItems()}
            </ul>
        )
    }
}

class MenuItems extends React.Component {
    render() {
        const { title } = this.props.data;
        return (
            <li className="nav-item">
                <a className="nav-link" href="#">{title}<div className="mr-hover-effect"></div></a>
            </li>
        )
    }
}

class Menu extends React.Component {
    render() {
        return (
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <a className="navbar-brand" href="index.html">
                                        <img src={logo_2} alt="" />
                                        <img src={logo_2_mob} alt="" className="logo_mob" />
                                    </a>
                                </div>
                                <a href="#" className="mybtn1 header-btn btn-mob" data-toggle="modal" data-target="#connectwallet">
                                    <svg viewBox="0 0 24 24" color="contrast" width="22" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL fxUnCN">
                                        <g opacity="0.56">
                                            <path d="M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z"></path>
                                        </g>
                                    </svg>
                                    Connect wallet</a>
                                <div className="collapse navbar-collapse fixed-height" id="main_menu">

                                    <MenuList data={menuItem}/>

                                    <a href="#" className="mybtn1 header-btn btn-desc" data-toggle="modal" data-target="#connectwallet">
                                        <svg viewBox="0 0 24 24" color="contrast" width="22" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL fxUnCN">
                                            <g opacity="0.56">
                                                <path d="M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z"></path>
                                            </g>
                                        </svg>
                                        Connect wallet</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
MenuItems.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
};


export default Menu;