import { PureComponent } from "react";


class PureComp extends PureComponent{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    render(){
        console.log("Component Rendered....")
        
        return(
            <>
                <h1>Pure Component</h1>
                <h3>Pure Component is used to avoid unnecessary rendering of the component even if the state is not updating</h3>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:5})}}>Increment 5</button>
            </>
        )
    }
}
export default PureComp;