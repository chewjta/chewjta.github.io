import React from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends React.Component{
    render(){
        return(
    <div style={{width:'100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>

                <img src='https://scontent.fsin9-1.fna.fbcdn.net/v/t1.0-9/18519620_10154795881473983_7181586395878933767_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=lHYUc-413QgAX_8tTks&_nc_ht=scontent.fsin9-1.fna&oh=72290bda9b1c38eea93730831aa64d3a&oe=5EE82000'
                     alt='avatar' 
                     className='avatar-img'
                    
                     />

                <div className='banner-text'>
                    <h1>Full Stack Web Developer</h1>

                        <hr />


                <p> HTML/CSS | BootStrap | React | Redux | NodeJS | Express | MongoDB </p>
                <div className ='social-links'>

                        {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/alvis-chew-542a09117/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                         {/* Github */}
                    <a href="https://github.com/chewjta" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                         {/* freecodecamp */}
                    <a href="https://www.freecodecamp.org/chewjta" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-free-code-camp" aria-hidden="true" />
                    </a>

                         {/* Youtube */}
                    <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square" aria-hidden="true" />
                    </a>

                </div>

                </div>

                </Cell>
            </Grid>
    </div>

        )
    }
}

export default Landing;