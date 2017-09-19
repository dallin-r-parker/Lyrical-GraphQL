import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

class LyricList extends Component{

		onLike(id, likes){
			this.props.mutate({
				variables: { id },
				optimisticResponse: {
					__typename: 'Mutation',
					likeLyric: {
						id: id,
						__typename: 'LyricType',
						likes: likes++
					}
				}
			})
		}

		renderLyrics(){
			return this.props.lyrics.map(({id, content, likes}) => {
				return (
					<li key={id} className="collection-item">
						{content}
						<i
							onClick={() => this.onLike(id, likes)}
							className="material-icons right pointer">thumb_up</i>
						<div className="like-circle right">{likes}</div>
					</li>
				)
			})
		}

    render(){
        return(
        <ul className="collection">
	        {this.renderLyrics()}
        </ul>
        )
    }
}

const mutation = gql`
	mutation LikeLyric($id: ID) {
		likeLyric(id: $id){
			id
			likes
		}
	}
`

export default graphql(mutation)(LyricList)