import React, { Component } from 'react';

import PageTitle from '../components/Layout/PageTitle'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBookmarks, deleteBookmark } from '../store/actions/bookmarkAction'
import NoBookmarks from '../components/bookmarks/NoBookmarks'
import BookmarkCard from '../components/bookmarks/BookmarkCard'

class Bookmarks extends Component {

    componentDidMount() {
        this.props.fetchBookmarks()
    }

    deleteBookmark(id) {
        this.props.deleteBookmark(id)
    }

    render() {
        const bookmarks = this.props.bookmarks.map(({ link, id, description, title }) => <BookmarkCard link={link} key={id} id={id} description={description} title={title} onClick={this.deleteBookmark.bind(this)} />)
        return (
            <div className="bookmarks w-4/5 float-right">
                <div className="p-10">
                    <PageTitle title="All your bookmarks" />
                    { this.props.bookmarks.length <= 0 ? <NoBookmarks />: bookmarks }
                </div>
            </div>
        );
    }
}

/**
 * Checks if the props are valid types
 */
Bookmarks.propTypes = {
    fetchBookmarks: PropTypes.func.isRequired,
    bookmarks: PropTypes.array.isRequired,
    deleteBookmark: PropTypes.func.isRequired
}

/**
 * Map the store's state to the component's props
 */
const mapStateToProps = (state) => ({
    bookmarks: state.bookmarks.all
})

export default connect(mapStateToProps, { fetchBookmarks, deleteBookmark })(Bookmarks);
