import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import {Link} from 'react-router'
import oneSong from '../queries/oneSong'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'



class SongDetail extends Component{



    render(){
			const {song} = this.props.data
	    if(!song) return (
		    <div className="progress">
			    <div className="indeterminate"/>
		    </div>
	    )
        return(
        <div>
	        <Link to='/'>Back</Link>
            <h3>Song Detail: {song.title}</h3>
	        <LyricList lyrics={song.lyrics}/>
	        <LyricCreate songId={this.props.params.id}/>
        </div>
        )
    }
}

export default graphql(oneSong, {
	options: props => ({variables: {id: props.params.id}})
})(SongDetail)