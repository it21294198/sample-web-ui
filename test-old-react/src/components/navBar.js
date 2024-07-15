import React, { Component } from 'react';
import NavBarItem from '../components/navBarItem'
import NavBarSpecialItem from '../components/navBarSpecialItem'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
            itemList: []
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }

    componentDidMount() {
        this.setState({
            itemList: [
                { id: 1, itemName: 'home', itemLink: '/home' },
                { id: 2, itemName: 'profile', itemLink: '/profile' },
                { id: 3, itemName: 'about', itemLink: '/about' },
                { id: 4, itemName: 'help', itemLink: '/help' }
            ]
        });
    }

    handleDrawerOpen() {
        this.setState({ isDrawerOpen: true });
    }

    handleDrawerClose() {
        this.setState({ isDrawerOpen: false });
    }

    render() {
        return (
            <div className='container'>
                <nav>
                    <div className='logo'>
                        <img src='logo.png' alt='logo' width='50px' height='50px' />
                    </div>
                    <ul className={this.state.isDrawerOpen ? 'drawer-open' : ''}>
                        <div className='btn close-btn' onClick={this.handleDrawerClose}>
                            <img src='close-icon.png' alt='close' width='20px' height='20px' />
                        </div>
                        {this.state.itemList.map((e) => {
                            if(e.id === 1) return <NavBarSpecialItem key={e.id} itemValue={e} />
                            return <NavBarItem key={e.id} itemValue={e} />;
                        })}
                    </ul>
                    <div className='btn open-btn' onClick={this.handleDrawerOpen}>
                        <img src='menu-icon.png' alt='menu' width='20px' height='20px' />
                    </div>
                </nav>
            </div>
        );
    }
}
