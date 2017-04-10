import React, {Component} from 'react';
import Navigation from '../Navigation';
import ProjectItem from './ProjectItem';

class RecentProjects extends Component {
  constructor() {
    super();

    this.state = {
      projects: {
        portoflio: {
          name: 'Portfolio',
          img: './project_imgs/portfolio.png',
          url: 'https://github.com/n-bryant/nicholas_bryant_portfolio',
          description: ['This site was built using React.  The animated web in the background is comprised of procedurally generated SVGs that receive new random velocities and angles to follow on a 5 second interval.']
        },
        openscores: {
          name: 'Open Scores',
          img: './project_imgs/openscores.png',
          url: 'https://github.com/n-bryant/openScores_musicCollabTool',
          description: ['As my final project for The Iron Yard, I helped to build OpenScores.  OpenScores is a web collaboration tool for composers built in ReactJS allowing multiple users to simultaneously draft music notation in real time.',
            'We only had two weeks to complete the project, so we made use of an Agile project management strategy to stay on track.  My contributions included designing the look of the application, integrating a JavaScript library called VexFlow to render and manipulate musical notation as SVGs, setting up a back-end with Google Firebase, and configuring another JS library called Socket.io to transmit document changes to multiple clients in real time.']
        },
        memory: {
          name: 'Memory in Motion',
          img: './project_imgs/memory.png',
          url: 'https://github.com/n-bryant/memoryInMotion_memoryGame',
          description: ['Memory in Motion is a take on the classic memory game built with jQuery. The player wins by matching all like pairs before they run out of turns.  It was built with a responsive design and employs CSS animations to make the experience more interactive.']
        },
        doppler: {
          name: 'Doppler',
          img: './project_imgs/doppler.png',
          url: 'https://github.com/n-bryant/doppler_socialMusicApp',
          description: ["Doppler is a mock-up of a responsive social media app that focuses around sharing songs with friends. Doppler was built using Angular 1.5, compiled with gulp, and uses local storage to cache user data. The songs available are selections from a few of my favorite bands. The data for the songs came from Spotify's Web API."]
        },
        popquiz: {
          name: 'Pop Quiz',
          img: './project_imgs/popquiz.png',
          url: 'https://github.com/n-bryant/pop_quiz',
          description: ["Pop Quiz is an interactive Ruby on Rails game built within an AngularJS framework that tests the player's knowelege of musical artists throughout the decades."]
        },
        medium: {
          name: 'Medium Copycat',
          img: './project_imgs/medium.png',
          url: 'https://github.com/n-bryant/mediumCopyCat',
          description: ["Medium Copycat is a copy of medium.com's landing page built with a ruby backend, seeded with data from News API to allow for full CRUD behavior. Templating was achieved with HandlebarsJS."]
        },
        asteroids: {
          name: 'Asteroids JS',
          img: './project_imgs/asteroids.png',
          url: 'https://github.com/n-bryant/asteroidsJS',
          description: ['Asteroids JS is a vanilla JavaScript version of the classic game, Asteroids.']
        },
        surf: {
          name: 'Surf and Paddle',
          img: './project_imgs/surf.png',
          url: 'https://github.com/n-bryant/flexboxSurfBlog_SCSS',
          description: ['Surf and Paddle is a mock-up of a responsive surfing blog site with CSS hover animations.']
        }
      }
    };
  }

  render() {
    return (
      <div className="recent-projects-wrapper">
        <div className="projects-content-container">
          <header>
            <Navigation />
          </header>
          <ul className="projects-list-container">
            {Object.keys(this.state.projects)
                .map((project, index) => <ProjectItem key={`project-${index}`} project={this.state.projects[project]} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default RecentProjects;
