import React, {Component} from 'react'

class ColorPreview extends Component {
    render() {
        return (
            <div>{ this.props.previewValues.red }, { this.props.previewValues.green }, { this.props.previewValues.blue } </div>
        )
    }
}

export default ColorPreview
