import React, { Component } from 'react'

export default class NavBarSpecialItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.itemValue.id,
            itemName: props.itemValue.itemName,
            itemLink: props.itemValue.itemLink
        };
    }

    render() {
        const { itemLink, itemName } = this.state;
        return (
            <li className='specialNavItem'><a href={itemLink}>{itemName}</a></li>
        );
    }
}

