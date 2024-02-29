import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const buttonStyle = {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      };

      
  return (
    <div className="start">
      <h1>Welcome to the game</h1>
      <p>
        Welcome to "The Vanishing Villain: A Tale of Pursuit and Perseverance."
        In the shadowy world of crime, there exists a legend – a notorious
        escape artist who vanishes without a trace, leaving chaos in their wake.
        Now, the hunt is on, and three fearless cops have volunteered to track
        down this elusive mastermind. With only five neighboring cities to
        search, the tension is palpable as time ticks away. Each city holds its
        secrets, its dangers, and its potential hiding spots. As the pursuit
        intensifies, the cops must rely on their instincts, their training, and
        their unbreakable bond to unravel the clues and outsmart the villain
        before they vanish into the darkness forever. The clock is ticking, the
        stakes are high, and the fate of the city rests in their hands. Are you
        ready to join the chase and witness the ultimate showdown between law
        and chaos?
      </p>
      <Link to={"/game"} className="button">
        Start
      </Link>
    </div>
  );
};

export default LandingPage;
