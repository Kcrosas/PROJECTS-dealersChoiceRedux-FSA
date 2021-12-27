import React, { Component } from "react";
import axios from "axios";
import store from "./store";

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //     riders: [],
    //     selected: ''
    // }
    this.state = store.getState();
  }
  async componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
    window.addEventListener("hashchange", async () => {
      const exactRider = window.location.hash.slice(1);
      const selection = (await axios.get(`/riders/${exactRider}`)).data;
      console.log(exactRider);
      console.log(selection.name);
      store.dispatch({
        type: "ONE_BIKER",
        selection,
      });
    });

    // const riders = (await axios.get("/riders")).data;
    // console.log(riders);
    // this.setState({ riders });
    // window.addEventListener("hashchange", async () => {
    //   const exactRider = window.location.hash.slice(1);
    //   const selection = (await axios.get(`/riders/${exactRider}`)).data;
    //   this.setState({ selected: selection });
    // });

    const riders = (await axios.get("/riders")).data;
    store.dispatch({
      type: "RIDEOUT",
      riders,
    });
  }

  render() {
    const { riders, selected } = this.state;
    return this.state.selected ? (
      <div>
        <h1>Rider: {selected.name}</h1>
        <ul>
          <li>Bio: {selected.bio}</li>
          <li>Member date: {selected.memberDate}</li>
        </ul>
      </div>
    ) : (
      <ul>
        {riders.map((e) => {
          return (
            <li key={e.id}>
              <a href={`#${e.id}`}>{e.name}</a>
              <br />
              {e.bio}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
