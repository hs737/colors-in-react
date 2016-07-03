import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ColorAdder from '../components/container/ColorAdder'
import ColorList from '../components/container/ColorList'

class App extends Component {
    render() {
        return (
            <div>
                This is my REACT app
                <ColorAdder />
                <ColorList />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
