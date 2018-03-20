import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div class="main-about-div">
                <h1 className="center"> About this website </h1>
                <br/>
                <p class="content">This website was made using React and used as a Javascript learning project.
                    It also contains my photography portfolio. The backend is a NodeJS express server that is used as an
                    API to fetch photos from Flickr albums.</p>
                <hr/>
                <h1 className="center"> About me </h1>
                <hr/>
                <h2 className="center"> Personal life tadatada </h2>
                <br/>
                <div class="content">
                    <ul>
                        <li>Software Engineering student at ETS</li>
                        <li>Big Video Game Nerd (as in I don't play games much anymore but boy is listening to people
                            complaining about the video game industry fun</li>
                        <li>Street Photographer (AKA creeping on strangers and taking photos of them)</li>
                        <li><b>METAL FACED DOOM BIG BIG FAN</b> (hip hop in general is pretty good yo)</li>
                        <li>Computer enthusiast</li>
                        <li>Big fan of The Lego Movie and The Batman Lego Movie</li>
                        <li>I feel like I'm writing my Tinder description right now</li>
                        (Don't be too worried for me, my Tinder description is much better than this)
                    </ul>
                </div>
                <hr/>
                <h2 class="center"> 'Pro'fessional life</h2>
                <br/>
                <div class="content">
                    <ul>
                        <li>Got Diamond at SC2 and League of Legends</li>
                        Pretty big achievement if you ask me.
                        <li>These jokes are getting old, here's the real stuff</li>
                    </ul>
                    <hr/>
                    <h3 class="center"> Experience </h3> 
                    <h4 class="center"><a href="http://nuecho.com/">NuEcho internship during winter 2018</a></h4>
                    <h5>Role</h5>
                    I was a part of the Innovation Lab team.
                    The project is super secret for now! To be revealed in the future!
                    <h5>About NuEcho</h5>
                    NuEcho is a leader in contact center solutions and omnichannel technologies.
                    <h4 class="center"><a href="http://coveo.com/">Coveo internship Winter 2017</a></h4>
                    <h5>Role</h5>
                    I worked on adding more ways for clients to authenticate, stabilizing the platform and a
                    custom reverse proxy!
                    <h5>About Coveo</h5>
                    With Quebec's very own Louis Têtu as its CEO, Coveo is a leader in Insight Engines and Entreprise
                    Search.
                    <h4 class="center"><a href="http://pomerleau.ca/">Pomerleau internship, Summer 2016</a></h4>
                    <h5>Role</h5>
                    I worked as an analyst developer, I created forms and automatic reports that were used by management,
                    administration, accounting and construction workers in order to save them time and save the company
                    money.
                    <h5>About Pomerleau</h5>
                    Pomerleau is a leader in Canada’s construction industry and among the top 10 contractors
                    in the country.
                </div>
                <hr/>
                <div class="center">
                    <h3 class="center"> Buzzword list ranked by proficiency </h3>
                        <br/>
                        <p>Elixir</p>
                        <p>Pheonix</p>
                        <p>VueJS</p>
                        <p>Java</p>
                        <p>Spring</p>
                        <p>React</p>
                        <p>Brunch (the real thing too)</p>
                        <p>Python</p>
                        <p>Elm</p>
                        <p>NodeJS</p>
                </div>
            </div>
        );
    }
}

export default About;
