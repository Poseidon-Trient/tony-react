import { createElement, Component, render } from './tony-react'

class MyCoponent extends Component {
    constructor() {
        super()
        this.state = {
            a:1,
            b:2
        }
    }
    render() {
        return <div>
            MyCoponent
            <h1>iayr {this.state.a.toString()}</h1>
            {this.children}
            <button onclick={() => {
                this.setState({
                    a: this.state.a + 1
                })
            }}>add</button>
        </div>
    }
}



render(<MyCoponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
</MyCoponent>, document.body)