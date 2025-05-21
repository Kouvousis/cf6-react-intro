import {Component} from "react";
// Legacy code
type State = {
    count: number
}

class ClassComponentWithState extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increaseCount = () => {
        this.setState({count: this.state.count + 1})
    }

    resetCount = () => {
        this.setState({count: 0})
    }

    render() {
        return (
            <>
                <div className="space-y-8 pt-12 pb-12">
                    <h1 className="text-center">Count is {this.state.count}</h1>
                    <div className="text-center space-x-4">
                        <button
                            className="bg-black text-white py-2 px-4 rounded"
                            onClick={this.increaseCount}
                        >
                            Increase
                        </button>
                        <button
                            className="bg-red-400 text-white py-2 px-4 rounded"
                            onClick={this.resetCount}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassComponentWithState;
