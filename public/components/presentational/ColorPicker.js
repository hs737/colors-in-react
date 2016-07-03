import React, {Component} from 'react'

class ColorPicker extends Component {
    constructor(props, context, updater) {
        super(props, context, updater)

        this.updatePreview = this.sendPreviewUpdate.bind(this)
    }

    sendPreviewUpdate() {
        var functionName = "sendPreviewUpdate"
        console.log(functionName + " called")
    }

    render() {
        return (
            <form action = "/api/color" method = "post">
                <input name = "name" type = "text" placeholder = "Name" />
                <input name = "red" type = "number" placeholder = "Red"  onChange = { this.updatePreview } />
                <input name = "green" type = "number" placeholder = "Green"  onChange = { this.updatePreview } />
                <input name = "blue" type = "number" placeholder = "Blue"  onChange = { this.updatePreview } />
                <button>Submit</button>
            </form>

        )
    }
}

export default ColorPicker
