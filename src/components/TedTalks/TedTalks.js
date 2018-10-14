import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'

export default class TedTalksComponent extends Component {

  render() {
    return (
      <div className="tedTalks-container">
        <h1>Ted Talks</h1>

        <div style={{'max-width':'854px'}}>
            <h4>Simon Sinek: How great leaders inspire action</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/4bcB5FJq80Q" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>Dan Pink: The puzzle of motivation</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/rrkrvAUbU9Y" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>Daniel Levitin: How to stay calm when you know you’ll be stressed</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/8jPQjjsBbIc" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>Tim Urban: Inside the mind of a master procrastinator</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/arj7oStGLkU" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>Susan Cain: The power of introverts</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/c0KYU2j0TM4 " width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>William Ury: The walk from "no" to "yes"</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/Hc6yi_FtoNo" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>Itay Talgam: Lead like the great conductors</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/R9g3Q-qvtss" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>Yves Morieux: As work gets more complex, 6 rules to simplify</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/0MD4Ymjyc2I" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>David Allen: The art of stress-free productivity</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/CHxhjDPKfbY" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>Navi Radjou: Creative problem-solving in the face of extreme limits</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/cHRZ6OrSvvI" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}

            <h4>Tom Wujec: Build a tower, build a team</h4>
            <div style={{"position":"relative","height":"0","padding-bottom":"56.25%"}}>
                <iframe id="talk1" title="Talk 1" src="https://www.youtube.com/embed/H0_yKBitO8M" width="854" height="480" style={{"position":"absolute","left":"0","top":"0","width":"100%","height":"100%"}} frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* texto va aqui */}
        </div>
      </div>
    );
  }
}