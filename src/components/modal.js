import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdownExample from './markdown'




export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };

     


    render() {

        

        if(!this.props.show){
            return null;
        }
      return ReactDOM.createPortal(
        <div className = 'ui dimmer modals visible active' style={{opacity:'0.95'}}>
            <div className ='ui standard modal visible active'>
                <div className='header'>Readme</div>
                <div className='content'>
               <ReactMarkdownExample input={this.props.input} />
                </div>
                <div className='actions'>
                    <button className='ui button' onClick={e => {this.onClose(e);}}>Close</button>
                </div>
            </div>
        </div>, document.querySelector('#modal')
    );
    }
  }


  