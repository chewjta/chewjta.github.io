import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends React.Component{
    render(){
        return(
<div>
    <Grid>
        <Cell col={4}>
            <div style={{textAlign:'Left'}}>
                <img 
                src='https://media-exp1.licdn.com/dms/image/C5103AQGDrHSqWDg_rw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=ZzrhhuhtrD8UEefr5Co38IrHKNmwa-1gmtjofj-Q85k'
                alt='avatar'
                style={{height:'200px'}}
                />
            </div>
                <h2 style={{textAlign:'Left'}}>Alvis Chew</h2>
                <h4 style={{color:'grey'}}>Programmer</h4>
                <hr style={{borderTop: '3px solid #833FB2', width:'50%'}}/>
                <p style={{width:'90%'}}>Full Stack Web Developer using <strong>MongoDB, Express, React, Node.js (MERN) stack </strong> with an emphasis on Frontend web development using ReactJS and Redux. 
                Have experience in building CRUD web applications, RESTful APIs using NodeJS and Express, as well as user authentication with PassportJS and Google Auth API. 
                Common Libraries used: <strong>Axios, Redux, Mongoose, Lodash, Express, body-parser, socket-io, react-router, redux-thunk </strong> Common UI Libraries used: <strong>Boostrap 4, React-bootstrap, React-MDL, Semantic-UI.</strong></p>
                <hr style={{borderTop: '3px solid #833FB2', width:'50%'}}/>
                <h5>Current Location</h5>
                <p style={{fontSize:'12px', fontWeight:'bold'}}>Jurong West, Singapore</p>
                
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7242557908103!2d103.68766085114027!3d1.3418144619681915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f9be7c599c3%3A0xea458228fc36afb0!2sJurong%20West%20Street%2091!5e0!3m2!1sen!2ssg!4v1589605896226!5m2!1sen!2ssg" width="50%" height="200px" style={{border:"0"}} aria-hidden="false" ></iframe></div>
                <h5>Phone</h5>
                <p><a href='tel:+65-9220-7004'>(+65) 9220 7004</a></p>
                <h5>Email</h5>
                <a href='mailto:chewjta@gmail.com'><p>chewjta@gmail.com</p></a>
                <hr style={{borderTop: '3px solid #833FB2', width:'50%'}}/>

        </Cell>
        <Cell col={8} className='resume-right-col'>
            <h2>Education</h2>
            <Education 
            startYear={2014}
            endYear={2018}
            schoolName='National University of Singapore'
            schoolDescription1='Bachelor of Engineering (Chemical and Biomolecular Engineering) Honours'
            schoolDescription2='Cumulative Average Point (CAP): 3.79/5.00'
            />
           <hr style={{borderTop:'3px solid #e22947'}} />

            <h2>Work Experience</h2>    
            <Experience 
            startYear={2018}
            endYear={'Present'}
            jobName='Micron Semiconductor Asia Pte Ltd (Singapore)'
            jobTitle='Process and Equipment Engineer'
            jobDescription1='Analyzed and evaluated Statistical Process Control (SPC) charts to verify and optimize the performance of assigned processing tools.' 
            jobDescription2='Troubleshoot, investigate and provide detailed Quality Deviation Reports (QDR) of tool alarms occurring in assigned processing tools.' 
            jobDescription3='Developed solutions to ensure improvement in production efficiency via lower equipment downtime and reduction of equipment raw processing time.'
            />

            <Experience 
            startYear={2016}
            endYear={2017}
            jobName='Imprint Energy (California, USA)'
            jobTitle='Battery R&D Engineer (Intern)'
            jobDescription1='Constructed test substrates for major R&D projects and assisted lab technicians in metrology and screen printing which were key to the product development of the company’s core product. ' 
            jobDescription2='Analysed impedance and resistance of battery cells and conductive adhesives to evaluate interconnect solutions which were key in helping the company clinch a number of partnership deals.' 
            jobDescription3='Conducted and designed experiments to analyse ink properties and performance by resourcefully utilizing devices such as as the Karl Fisher Titrator, BYK-Gardner Grindometer, Anton Paar RheoCompass Software and ensured that 100% of the ink delivered to customers were satisfactory.'
            />    

<hr style={{borderTop:'3px solid #e22947'}} />

                <h2>Skills</h2>
                <div>
                <Skills 
                skill='Javascript'
                progress={70}
                />
                <Skills 
                skill='HTML/CSS'
                progress={50}
                />
                <Skills 
                skill='React'
                progress={60}
                />
                <Skills 
                skill='NodeJs'
                progress={40}
                />
                <Skills 
                skill='MongoDB'
                progress={35}
                />
                
                </div>

                <hr style={{borderTop:'3px solid #e22947'}} />

                <h2>Certifications</h2>

                <div>Responsive Web Design | FreeCodeCamp
                    <br />
                    <a href="https://www.freecodecamp.org/certification/chewjta/responsive-web-design" rel="noopener noreferrer" target="_blank">Certificate of Completion</a>
                </div>
                <br />
                <div>Javascript Algorithms and Data Structures | FreeCodeCamp
                    <br />
                    <a href="https://www.freecodecamp.org/certification/chewjta/javascript-algorithms-and-data-structures" rel="noopener noreferrer" target="_blank">Certificate of Completion</a>
                </div>
                <br />
                <div>Front End Libraries | FreeCodeCamp 
                    <br />
                    <a href="https://www.freecodecamp.org/certification/chewjta/front-end-libraries" rel="noopener noreferrer" target="_blank">Certificate of Completion</a>
                </div>
                <br />
                <div>Data Visualization | FreeCodeCamp 
                    <br />
                    <a href="https://www.freecodecamp.org/certification/chewjta/data-visualization" rel="noopener noreferrer" target="_blank">Certificate of Completion</a>
                </div>
                <br />
                <div>API and Microservices | FreeCodeCamp
                    <br />
                    <a href="https://www.freecodecamp.org/certification/chewjta/apis-and-microservices" rel="noopener noreferrer" target="_blank">Certificate of Completion</a>
                </div>
                <br />
                <div>Modern React with Redux - Stephen Grider | Udemy
                    <br />
                    <a href="https://www.udemy.com/course/react-redux/learn/lecture/12881736#content" rel="noopener noreferrer" target="_blank">Certificate of Completion</a>
                </div>
                <br />


        </Cell>
    </Grid>
    </div>

        )
    }
}

export default Resume;