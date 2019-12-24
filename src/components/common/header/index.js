import React, {Component} from 'react';
import './header.scss';
// import {HeaderService} from '../../../services/header';
import instagram from '../../../assets/jpeg/instagram.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      toggleMenu: false,
      header: [
        {
          key: 2,
          menuHref: '/',
          menuItem: 'Home',
        },
        {
          key: 3,
          menuHref: '/about',
          menuItem: 'About Us',
        },
        {
          key: 4,
          menuHref: '/',
          menuItem: 'Products and Services',
        },
        {
          key: 5,
          menuHref: '/',
          menuItem: 'Contact Us',
        },
        {
          key: 6,
          menuHref: '/',
          menuItem: 'Admin',
        },
      ],
    };
    this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
  }

  // componentDidMount() {
  //   HeaderService.getHeaders()
  //     .then(res => {
  //       this.setState({
  //         header: res.data,
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  toggleMenuIcon() {
    this.setState({
      toggleMenu: !this.state.toggleMenu,
    });
  }

  render() {
    return (
      <nav className="nav" onClick={this.toggleMenuIcon}>
        <img
          src={instagram}
          alt="instagram"
          style={{width: '45px', height: '45px'}}
        />
        <div className="menu-icon"></div>
        <ul
          className={`nav-container ${
            this.state.toggleMenu ? 'show-menu' : ''
          }`}
        >
          {this.state.header
            ? this.state.header.map(item => (
                <a
                  className="nav-item"
                  href={
                    item.menuHref === '/'
                      ? item.menuHref + 'home'
                      : item.menuHref
                  }
                  key={item.key}
                >
                  {item.menuItem}
                </a>
              ))
            : ''}
        </ul>
      </nav>
    );
  }
}

export default Header;
