import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="main-projects-div">
              <div>
                 <h1> 2018 </h1>
                 This year I took part in two hackathons in which I had the opportunity to take part in two projects!
                 <br />
                 <div>
                  <hr/>
                  <a href="https://devpost.com/software/the-salad-bowl"><h2> ConUHacks III - The Salad Bowl</h2></a>
                  <br/>
                  <p>
                  The Salad Bowl allows you to get the current relevant news on a topic
                  </p>
                  <div className="content">
                    <p>
                      The application crawls over 5000 websites and summarizes the most recent and relevant news from a 
                      specified keyword in a couple sentences and categorize them using the tones of the articles.
                      The news are displayed for quick reading and only the most important sentences from the original
                      news article are chosen in the summary. No more duplicate reading!
                      The application can even read the news in audio form.
                    </p>
                  </div>
                 </div>
                 <br />
                 <div>
                  <hr/>
                  <a href="https://devpost.com/software/troc-3jdi1m"><h2> Hackatown - Troc</h2></a>
                  <br/>
                  <p>
                    Troc connects people by allowing them to lend, borrow or trade items from each other.
                  </p>
                  <div className="content">
                    <p>
                      It is a trade application prioritising the creation of relationships between people and community
                      building, it features a google map integration that allows you to see what people around you have to
                      trade and offer them to trade items you own against the ones you want.
                    </p>
                  </div>
                 </div>
                  <div className="footer">
                    <p>Take a look a my github <a href="https://www.github.com/rorscharg">here</a> if you want!</p>
                  </div>
                </div>
            </div>
        );
    }
}

export default Projects;