import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import addLyrics from '../queries/addLyrics'

class LyricCreate extends Component{
    constructor(props){
        super(props)

	    this.state = { content: '' }

	    this.handleSongLyrics = this.handleSongLyrics.bind(this)
	    this.onSubmit = this.onSubmit.bind(this)
    }
    
    handleSongLyrics(lyrics){
    	this.setState({content: lyrics.target.value})
    }
    
    onSubmit(e){
    	e.preventDefault()
	    this.props.mutate({
		    variables: {
			    content: this.state.content,
			    songId: this.props.songId
		    }
	    })

	    this.setState({content: ''})
    }

    render(){
        return(
        <form onSubmit={this.onSubmit}>
	        <label>Add a Lyric</label>
	        <input
		        value={this.state.content}
		        onChange={this.handleSongLyrics} />
        </form>
        )
    }
}

export default graphql(addLyrics)(LyricCreate)