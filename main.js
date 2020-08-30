import { createElement, Component, render } from './tony-react'

class MyCoponent extends Component {
    render() {
        return <div>
            MyCoponent
            <h1>iayr</h1>
            {this.children}
        </div>
    }
}



render(<MyCoponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
</MyCoponent>, document.body)