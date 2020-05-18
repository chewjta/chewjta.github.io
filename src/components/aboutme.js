import React from 'react';
import {List,ListItem,ListItemContent,Grid, Cell, Icon, ListItemAction} from 'react-mdl';

class About extends React.Component{
    render(){
        return(
<div className='contact-body'>
   <Grid className='contact-grid'>
     <Cell col={12}>
       <h2>About Me</h2>
       <hr />
       <p style={{width:'50%',margin:'auto', paddingTop:'1em', paddingBottom:'1em', textAlign:'left'}}>
           Full Stack Web Developer using MongoDB, Express, React, Node.js (MERN) stack with an emphasis on Frontend web development using ReactJS and Redux. 
           Have experience in building CRUD web applications, 
           RESTful APIs using NodeJS and Express, as well as user authentication with PassportJS and Google Auth API. 
Common Libraries used: Axios, Redux, Mongoose, Lodash, Express, body-parser, socket-io, react-router, redux-thunk 
Common UI Libraries used: Boostrap 4, React-bootstrap, React-MDL, Semantic-UI. 
           </p>
          
           <div style={{paddingBottom:'3em'}}></div>
     </Cell>

     <Cell col={12}>
       <h2>Mission Statement</h2>
       <hr />
       <p style={{width:'50%',margin:'auto', textAlign:'left',paddingTop:'1em', paddingBottom:'1em', fontWeight: '400'}}>
       <strong>Engineer:</strong> I pay attention to small details of problems and apply analytical thinking, 
       finding pragmatic solutions that aren't quick fixes, but of lasting value. <br/> <br />

       <strong>Student:</strong> Learning never ends and I will seek to experiment without the fear of failure. 
       There will always be things I have to learn and mistakes to make, which help me to grow. <br/><br />

       <strong>Team player:</strong> In any of the team I worked with, I communicate clearly and proactively. 
       I believe in the consistency and integrity of the work as a team. <br/><br />

       <strong>Perfectionist:</strong> I will always strive for continued excellence. Pushing the boundaries of conventional solutions, 
       thinking out of the box and seeking for ways to improve and optimise my projects. <br/>
          </p>
          
          <h2><i className="fa fa-quote-left"/><span style={{fontSize:'24px'}}> &#32; There may be people who have more talent than you, but there’s no excuse for anyone to work harder than you do </span> <i className="fa fa-quote-right"/><br />
          <span style={{fontSize:'15px'}}>- Derek Jeters</span> &#32; &#32; </h2>

           <div style={{paddingBottom:'5em'}}></div>
     </Cell>
       <Cell col={6}>
           <h2>Find Me</h2>
           <hr />
           <div style={{paddingBottom:'3em'}}></div>
           <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7242557908103!2d103.68766085114027!3d1.3418144619681915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f9be7c599c3%3A0xea458228fc36afb0!2sJurong%20West%20Street%2091!5e0!3m2!1sen!2ssg!4v1589605896226!5m2!1sen!2ssg" width="50%" height="200px" style={{border:"0"}} aria-hidden="false" ></iframe></div>
          
       </Cell>
       <Cell col={6}>
           <h2>Contact Me</h2>
           <hr />
<div className='contact-list'>

<List style={{width: 'auto'}}>
  <ListItem>
    <ListItemContent avatar="phone_android "><a href='tel:+65-9220-7004'>(+65) 9220 7004</a></ListItemContent>
    <ListItemAction>    
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent avatar="email"><a href='mailto:chewjta@gmail.com'>chewjta@gmail.com</a></ListItemContent>
    <ListItemAction>  
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent avatar="video_call"><a href='skype:chewjta'>(+65) 9220 7004</a></ListItemContent>
    <ListItemAction>
    </ListItemAction>
  </ListItem>
</List>

</div>
       </Cell>
   </Grid>
    </div>
        )
    }
}

export default About;