import React, {Component} from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'


class NavBar extends Component {
  state = { clicked: false, navbarClass: "nav-links", activeIndex: null }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  handleClass = () => {
    this.setState({ navbarClass: "selected-nav-link", activeIndex: this.props.index })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo-display"><a href="/" className="navbar-logo">Alex Bangiyev</a></h1>
        <menuIcon classname="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </menuIcon>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) =>{
            if(this.state.clicked) {
              return (
                <li key={index} onClick={this.handleClass}>
                  <a className="nav-links" href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            } else {
              return (
                <li key={index} onClick={this.handleClass}>
                <a className={this.state.navbarClass} href={item.url}>
                  {item.title}
                </a>
              </li>
              )
            }
          })}
        </ul>
      </nav>
    )
  }
}

export default NavBar