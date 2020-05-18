import React from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import calculator from '../images/calculator.PNG'
import pomodoro from '../images/pomodoro.PNG'
import youtubeclone from '../images/youtubeclone.PNG'
import twitchclone from '../images/twitchclone.PNG'
import drummachine from '../images/drummachine.PNG'
import picfinder from '../images/picfinder.PNG'
import heatmap from '../images/heatmap.PNG'
import choropleth from '../images/choropleth.PNG'
import treemap from '../images/treemap.PNG'
import exercisetracker from '../images/exercisetracker.PNG'
import urlshort from '../images/urlshort.PNG'
import metadata from '../images/metadata.PNG'

import Modal from './modal';





class Projects extends React.Component{

        constructor(props) {
            super(props);
            this.state= 
            {
                activeTab:0,
                show:false,
                input: ''
            };
        }

        showModal = (input) => {
            this.setState({
              show: !this.state.show,
              input: input
            });
          };


          
        
toggleCategories(){
    if(this.state.activeTab === 0){
        return(

            <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${calculator}) center / cover`}}>
                   
                </CardTitle>
                <CardText>
                    Javascript Calculator
                </CardText>
                <CardActions border>
                <a href="https://github.com/chewjta/JavascriptCalculator" rel="noopener noreferrer" target="_blank"><Button colored >GitHub</Button></a>
                <a href="https://codepen.io/chewjta/pen/JjdEGgr" rel="noopener noreferrer" target="_blank"><Button colored >CodePen</Button></a>
                    <Button colored onClick={()=>this.showModal('## Simple Javascript Calculator \n\n > ### A cool calculator with basic functions like add,subtract,multiply,divide with a sweet ability to toggle positive or negative sign. \n\n A Pen created on CodePen.io. Original URL: [links]https://codepen.io/chewjta/pen/JjdEGgr')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>

                

            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${pomodoro}) center / cover`}}>
                    
                </CardTitle>
                <CardText>
                    Pomodoro Clock
                </CardText>
                <CardActions border>
                <a href="https://github.com/chewjta/PomodoroClock" rel="noopener noreferrer" target="_blank"><Button colored >GitHub</Button></a>
                <a href="https://codepen.io/chewjta/pen/NWqvYZG" rel="noopener noreferrer" target="_blank"><Button colored >CodePen</Button></a>
                    <Button colored onClick={()=>this.showModal('# Pomodoro Clock \n\n The methodology is simple: When faced with any large task or series of tasks, break the work down into short, timed intervals (called “Pomodoros”) that are spaced out by short breaks. \n\n ## How to use \n\n 1. Click on the **play** icon button to start and click on the **pause** icon button to pause \n\n 2. You can also choose to **reset** the timer (current session/break) by clicking on the reset icon button. \n\n 3. Adjust Session and Break Duration by pressing the increment icon(to increase) and decrement icon(to decrease) accordingly. (max length is 60mins and min length is 1min)')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>

               

            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${youtubeclone}) center / cover`}}>
                    
                </CardTitle>
                <CardText>
                    YouTube Clone
                </CardText>
                <CardActions border>
                    <a href="https://github.com/chewjta/youtubeclone" rel="noopener noreferrer" target="_blank"><Button colored >GitHub</Button></a>
                    <Button colored disabled>CodePen</Button>
                    <Button colored onClick={()=>this.showModal('## Youtube Clone\n\n1. Enter your input in the search bar on the top left hand corner\n\n2. Hit the enter button to search for the top videos related to your input.\n\n3. Left hand side of page shows preview of the best matched video according to your input. ')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>

        
            </div>  


        )
    }

    else if(this.state.activeTab === 1) {
        return(
            <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${heatmap}) center / cover`}}>
                   
                </CardTitle>
                <CardText>
                    Heat Map d3
                </CardText>
                <CardActions border>
                <a href="https://github.com/chewjta/HeatMap" rel="noopener noreferrer" target="_blank"><Button colored >GitHub</Button></a>
                <a href="https://codepen.io/chewjta/pen/JjdQYdM" rel="noopener noreferrer" target="_blank"><Button colored >CodePen</Button></a>
                    <Button colored onClick={()=>this.showModal('## Heatmap of average global temperatures from 1753 - 2015')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>

                

            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${choropleth}) center / cover`}}>
                    
                </CardTitle>
                <CardText>
                    Choropleth d3
                </CardText>
                <CardActions border>
                <a href="https://github.com/chewjta/Choropleth" rel="noopener noreferrer" target="_blank"><Button colored >GitHub</Button></a>
                <a href="https://codepen.io/chewjta/pen/rNOVmMY" rel="noopener noreferrer" target="_blank"><Button colored >CodePen</Button></a>
                    <Button colored onClick={()=>this.showModal('## Choropleth of US graduates rate')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>

               

            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${treemap}) center / cover`}}>
                    
                </CardTitle>
                <CardText>
                    Tree Map d3
                </CardText>
                <CardActions border>
                    <Button colored disabled>GitHub</Button>
                    <a href="https://codepen.io/chewjta/pen/LYpyNqK" rel="noopener noreferrer" target="_blank"><Button colored >CodePen</Button></a>
                    <Button colored onClick={()=>this.showModal('## Treemap of top video games sales')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>

        
            </div>  
        )
    }

    else if(this.state.activeTab === 2) {
        return(
            <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${exercisetracker}) center / cover`}}>
                   
                </CardTitle>
                <CardText>
                    Exercise Tracker
                </CardText>
                <CardActions border>
                <a href="https://glitch.com/edit/#!/exercise-tracker-alvis?path=server.js%3A15%3A43" rel="noopener noreferrer" target="_blank"><Button colored >Glitch</Button></a>
                <a href="https://exercise-tracker-alvis.glitch.me" rel="noopener noreferrer" target="_blank"><Button colored >Live App</Button></a>
                    <Button colored onClick={()=>this.showModal('## How to use?\n1. Fill in your details on the left box and create a new user if you haven\'t.\n2. Fill in new exercise details on right box to add new exercise.\n3. Each time you create a new user or new exercise you will be redirected to a page which will show the json entry of your details.')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>

                

            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${urlshort}) center / cover`}}>
                    
                </CardTitle>
                <CardText>
                    URL Shortener
                </CardText>
                <CardActions border>
                <a href="https://glitch.com/edit/#!/url-shortener-alvis?path=server.js%3A15%3A0" rel="noopener noreferrer" target="_blank"><Button colored >Glitch</Button></a>
                <a href="https://url-shortener-alvis.glitch.me" rel="noopener noreferrer" target="_blank"><Button colored >Live App</Button></a>
                    <Button colored onClick={()=>this.showModal('## How to use\n1. In the input box, enter the URL to be shortened.\n2. A json data of the shortened url link will be shown. \n3. Use that new shortened link to get to your input URL.')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>

               

            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${metadata}) center / cover`}}>
                    
                </CardTitle>
                <CardText>
                    File Meta Data Uploader
                </CardText>
                <CardActions border>
                <a href="https://glitch.com/edit/#!/file-metadata-alvis?path=server.js%3A1%3A0" rel="noopener noreferrer" target="_blank"><Button colored >Glitch</Button></a>
                    <a href="https://file-metadata-alvis.glitch.me" rel="noopener noreferrer" target="_blank"><Button colored >LiveApp</Button></a>
                    <Button colored onClick={()=>this.showModal('## Treemap of top video games sales')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>

        
            </div>  
        )
    }


}


toggleCategories2(){
    if(this.state.activeTab === 0){
        return(

            <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${twitchclone}) center / cover`}}>
                   
                </CardTitle>
                <CardText>
                    Twitch Clone
                </CardText>
                <CardActions border>
                <a href="https://github.com/chewjta/twitchclone" rel="noopener noreferrer" target="_blank"><Button colored >GitHub</Button></a>
                    <Button colored disabled>CodePen</Button>
                    <Button colored onClick={()=>this.showModal('## Twitch Clone\n1. A simple twitch clone where you can create, edit, view and delete streams.\n2. Create your own stream via pairing with OBS Studio!\n3. Login and gain assess to your streams using Google Auth!')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>

                

            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${drummachine}) center / cover`}}>
                    
                </CardTitle>
                <CardText>
                    Interactive Drum Machine
                </CardText>
                <CardActions border>
                <a href="https://github.com/chewjta/DrumMachine" rel="noopener noreferrer" target="_blank"><Button colored >GitHub</Button></a>
                <a href="https://codepen.io/chewjta/pen/ExjyMdy?editors=0010" rel="noopener noreferrer" target="_blank"><Button colored >CodePen</Button></a>
                    <Button colored onClick={()=>this.showModal('# Drum Machine\n### How to use\n1. Ensure power button is lighted up.\n2. Select on the alphabet keys to play a sound, description is in the mini screen on the right\n3. Adjust the volume slider for desired volume\n4. Toggle the band switch to switch tunes.')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>

               

            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${picfinder}) center / cover`}}>
                    
                </CardTitle>
                <CardText>
                    Free Stock Image Finder
                </CardText>
                <CardActions border>
                    <a href="https://github.com/chewjta/picfinder" rel="noopener noreferrer" target="_blank"><Button colored >GitHub</Button></a>
                    <Button colored disabled>CodePen</Button>
                    <Button colored onClick={()=>this.showModal('## Pic Finder\n1. Enter your input in search bar at top of page\n2. Hit Enter button and let it load, then pictures matching your keywords will appear.\n3. Pictures are free to use, enjoy!')}>ReadMe</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
            </Card>

        
            </div>  


        )
    }

    else if(this.state.activeTab === 1) {
        return(
            <div><h1></h1></div>
        )
    }

    else if(this.state.activeTab === 2) {
        return(
            <div><h1></h1></div>
        )
    }


}





    render(){
        return(
<div className='category-tabs'>

    <Tabs 
    activeTab={this.state.activeTab} 
    onChange={(tabId)=> this.setState({activeTab: tabId})} 
    ripple>
        <Tab>React</Tab>
        <Tab>d3</Tab>
        <Tab>NodeJS</Tab>
    </Tabs>

            
                <Grid>
                    <Cell col={12} style={{paddingTop: '20px'}}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                    
                    <Cell col={12} style={{paddingTop: '20px'}}>
                        <div className='content'>{this.toggleCategories2()}</div>
                    </Cell>

                    


                </Grid>
            
                <Modal onClose={this.showModal} show={this.state.show} input={this.state.input}/>

    </div>

        )
    }
}

export default Projects;