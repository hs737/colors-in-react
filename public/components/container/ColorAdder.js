import React, {Component} from 'react'

import ColorPicker from '../presentational/ColorPicker'
import ColorPreview from '../presentational/ColorPreview'

class ColorAdder extends Component {
    constructor(props, context, updater) {
        super(props, context, updater)

        this.state = {
            previewValues: {
                name: "testColor",
                red: 44,
                green: 88,
                blue: 136
            }
        }
    }

    render() {
        return (
            <div>
                <ColorPreview previewValues = { this.state.previewValues } />
                <ColorPicker />
            </div>
        )
    }
}

export default ColorAdder
