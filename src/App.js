import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import TeamCard from "./components/TeamCard";
import Wrapper from "./components/Wrapper";
import logo from "./teams.json"


class App extends Component {
  
  state = {
    // teams,
    clickedLogo: [],
    score: 0,
    target: 0,
    // status: ""
  };

  confirmClick = logo => {
    if(this.state.clickedLogo.indexOf(logo) > -1) {
      this.setState({ clickedLogo: [] })

      if(this.state.score > this.state.target) {
        this.setState({ target: this.state.score })
      }
      this.setState({ score: 0 })
      return;
    
    } else {
      let score = this.state.score;
      score++;

      if(score > this.state.target) {
        this.setState({ target: score })
      }
      this.setState({ score: score})
    }

    let clickedLogo = this.state.clickedLogo
    clickedLogo.push(logo)

    this.setState({ clickedLogo })
    console.log(this.state.clickedLogo)
  }

  shuffleLogo = () => {
    const array = [];
      while(array.length !== logo.length){
        let teamLogo = logo[Math.floor(Math.random()*logo.length)];
        if(array.indexOf(teamLogo) < 0){
          array.push(teamLogo)
        }
      }
      return array
  }

  render() {
    return (
      <>
        <Jumbotron score={this.state.score} target={this.state.target} />
          <Wrapper>
            {this.shuffleLogo().map(team => (
              <TeamCard
                confirmClick={this.confirmClick}
                name={team.name}
                logo={team.logo}    
              />
            ))}
          </Wrapper>
      </>
    );
  }
}

export default App;
