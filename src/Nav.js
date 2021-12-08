import React, { Component } from 'react';

class Nav extends Component {
    render () {
        return (
            <header>
            <nav>
                <div className="menu">
                    <a href="/">[Products]</a>
                </div>
                <div className="menu">
                    <h1>The Kawasaki Motors Club</h1>
                </div>
                <div className="menu">
                    <a href="/about">About Us</a>
                </div>
            </nav>
            <div id="banner">
                <img id="banner-image" src="/media/banner.jpg" />
            </div>
            </header>
        )
    }
}

export default Nav