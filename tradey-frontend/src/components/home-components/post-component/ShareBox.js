import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import CommentInput from '../CommentInput.js'

function ShareBox(props) {
    const [shareDescription,setShareDescription] = useState()
    const [loading,setLoading] = useState(1)

    const postShare = (e) => {
        e.preventDefault()
        setLoading(0)
        Axios.post('/api/post',{source: props.postId, description: shareDescription, publisherId: props.userId, type: 'share'})
        .then(()=>{
            setLoading(1)
        })
    }

    return (
        <CommentSection>
            <CommentInput
                commentFor = {props.postId}
                comment = {shareDescription}
                setComment = {setShareDescription}
                handleComment = {postShare}
                showingCommentInput = {props.postId}
                loading = {loading}
                text = 'Write a share description...'
                buttonText = 'Share'
            />
        </CommentSection>
    )
}

const CommentSection = styled.div`
border-radius: 10px;
margin-top: 20px;
`

export default ShareBox