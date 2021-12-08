import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    constructor(){
        super();
        this.state = {
            riders: []
        }
    }
    async componentDidMount(){
        const riders = (await axios.get('/riders')).data
        console.log(riders)
        this.setState({ riders })
    }
    render () {
        const { riders } = this.state
        return (
            <ul>
               {
                   riders.map(e=>{
                       return <li key = { e.id}>
                           { e.name }
                           <br/>
                           { e.bio }
                       </li>
                   })
               }
            </ul>
        )
    }
}

export default App