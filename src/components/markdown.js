import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';




class ReactMarkdownExample extends React.Component {
    render(){
        const {input} = this.props
        return(
            <ReactMarkdown source={input} />
        )
    }
}

export default ReactMarkdownExample;