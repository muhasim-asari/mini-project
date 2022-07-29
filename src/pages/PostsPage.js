import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchListOrder } from '../actions/postsActions'

import { Post } from '../components/Post'

const PostsPage = ({ dispatch, loading, listOrder, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchListOrder())
  }, [dispatch])

  const renderPosts = () => {
    if (loading) return <p>Loading listOrder...</p>
    if (hasErrors) return <p>Unable to display listOrder.</p>

    return listOrder.map(detailOrder => <Post key={detailOrder.id} detailOrder={detailOrder} excerpt />)
  }

  return (
    <section>
      <h1>Medication</h1>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.listOrder.loading,
  listOrder: state.listOrder.listOrder,
  hasErrors: state.listOrder.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)
