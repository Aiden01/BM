import React, { Component } from 'react';

import PageTitle from '../components/Layout/PageTitle'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBookmarks } from '../store/actions/bookmarkAction'
import NoBookmarks from '../components/bookmarks/NoBookmarks'
import BookmarkCard from '../components/bookmarks/BookmarkCard'

class Bookmarks extends Component {

    componentDidMount() {
        this.props.fetchBookmarks()
    }

    render() {
        const bookmarks = this.props.bookmarks.map(({ link, id, description, title }) => <BookmarkCard link={link} key={id} description={description} title={title} />)
        return (
            <div className="bookmarks h-full w-4/5 float-right bg-grey-lighter">
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
    bookmarks: PropTypes.array.isRequired
}

/**
 * Map the store's state to the component's props
 */
const mapStateToProps = (state) => ({
    bookmarks: state.bookmarks.all
})

export default connect(mapStateToProps, { fetchBookmarks })(Bookmarks);
