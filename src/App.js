import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    constructor(){
        super();
        this.state = {
            riders: [],
            selected: ''
        }
    }
    async componentDidMount(){
        const riders = (await axios.get('/riders')).data
        console.log(riders)
        this.setState({ riders })
        window.addEventListener('hashchange', async() => {
            const exactRider = window.location.hash.slice(1)
            const selection = (await axios.get(`/riders/${exactRider}`)).data
            this.setState({ selected: selection})
            
        })
    }
    render () {
        const { riders, selected} = this.state
        return (
            this.state.selected ?  
            <div>
                <h1>Rider: {selected.name}</h1>
                <ul>
                    <li>Bio: {selected.bio}</li>
                    <li>Member date: {selected.memberDate}</li>
                </ul>
            </div>
            
            : 

            <ul>
               {riders.map(e=>{
                       return <li key = { e.id}>
                           <a href={`#${e.id}`}>
                           { e.name }</a>
                           <br/>
                           { e.bio }
                       </li>
                })}
            </ul>
        )
    }
}

export default App