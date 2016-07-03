import React, {Component} from 'react'

import ColorListItem from '../presentational/ColorListItem'

class ColorList extends Component {
    constructor(props, context, updater) {
        super(props, context, updater)

        this.state = {
            colorsArray: [
                {name: "woof", red: 4, green: 3, blue: 230},
                {name: "spoof", red: 4, green: 133, blue: 230},
                {name: "doof", red: 243, green: 3, blue: 230}
            ]
        }
    }

    render() {
        var colorList = this.state.colorsArray.map(function(elem, index) {
            return <ColorListItem colorDetails = { elem } key = { index } />
        })
        return (
            <div>
                <span>ColorList</span>
                <ol>{colorList}</ol>
            </div>
        )
    }
}

export default ColorList
