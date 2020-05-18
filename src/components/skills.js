import React from 'react';
import {Grid,Cell,ProgressBar} from 'react-mdl';

class Skills extends React.Component{
    render(){
        return(
            <Grid>
             
                <Cell col={12}>
                    <div>{this.props.skill} 
                    <ProgressBar 
                    style={{margin:'auto',width:'100%',paddingBottom:'10px'}} 
                    progress={this.props.progress} 
                    />
                    </div>
                </Cell>
           
            </Grid>
        )
    }
}

export default Skills;