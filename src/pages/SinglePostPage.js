import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPost } from '../actions/postActions'
import { fetchComments } from '../actions/commentsActions'

import { Post } from '../components/Post'
import { Comment } from '../components/Comment'

const SinglePostPage = ({
  match,
  dispatch,
  detailOrder,
  comments,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    const { id } = match.params

    dispatch(fetchComments(id))
    dispatch(fetchPost(id))
  }, [dispatch, match])

  const renderPost = () => {
    if (loading.detailOrder) return <p>Loading detailOrder...</p>
    if (hasErrors.detailOrder) return <p>Unable to display detailOrder.</p>

    return <Post detailOrder={detailOrder} />
  }

  const renderComments = () => {
    if (loading.comments) return <p>Loading comments...</p>
    if (hasErrors.comments) return <p>Unable to display comments.</p>

    return comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))
  }

  return (
    <section>
      {renderPost()}
      <h2>Comments</h2>
      {renderComments()}
    </section>
  )
}

const mapStateToProps = state => ({
  detailOrder: state.detailOrder.detailOrder,
  comments: state.comments.comments,
  loading: { detailOrder: state.detailOrder.loading, comments: state.comments.loading },
  hasErrors: { detailOrder: state.detailOrder.hasErrors, comments: state.comments.hasErrors },
})

export default connect(mapStateToProps)(SinglePostPage)
