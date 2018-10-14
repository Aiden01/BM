import React, { Component } from 'react';
import NavLink from './NavLink'


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar h-full bg-indigo-darkest w-1/5 float-left fixed pin-t pin-l">
                <div className="title bg-indigo-darker w-full py-8">
                    <h1 className="text-center text-white">Bookmarker <br/> <span className="text-sm font-light">A bookmark manager</span></h1>
                </div>
                <NavLink title="All bookmarks" path="/" exact />
                <NavLink title="Add bookmarks" path="/new" />
                <NavLink title="Favorites" path="/fav" />
            </div>
        );
    }
}

export default Sidebar;
