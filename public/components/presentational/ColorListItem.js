import React, {Component} from 'react'

class ColorListItem extends Component {
    render() {
        return (
            <li>{ this.props.colorDetails.name }, { this.props.colorDetails.red }, { this.props.colorDetails.green }, { this.props.colorDetails.blue } </li>
        )
    }
}

export default ColorListItem
