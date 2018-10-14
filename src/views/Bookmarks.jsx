import React, { Component } from 'react';

import PageTitle from '../components/Layout/PageTitle'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBookmarks, deleteBookmark, searchBookmark } from '../store/actions/bookmarkAction'
import NoBookmarks from '../components/bookmarks/NoBookmarks'
import BookmarkCard from '../components/bookmarks/BookmarkCard'

class Bookmarks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.fetchBookmarks()
            .then(() => this.setState({
                loading: false
            }))
    }

    deleteBookmark(id) {
        this.props.deleteBookmark(id)
    }

    handleSearch({ target: { value } }) {
        this.props.searchBookmark(value)
    }

    render() {
        const bookmarks = this.props.bookmarks.map(({ link, id, description, title }) => <BookmarkCard link={link} key={id} id={id} description={description} title={title} onClick={this.deleteBookmark.bind(this)} />)
        return (
            <div className="bookmarks w-4/5 float-right">
                <div className="p-10">
                    <PageTitle title="All your bookmarks" />
                    <input type="text" placeholder="Search a bookmark" className="w-full bg-white p-5 text-grey-darkest mb-10" onChange={ this.handleSearch.bind(this) } />
                    { this.state.loading ? (
                        <h3>Loading...</h3>
                    ): this.props.bookmarks.length <= 0 ? <NoBookmarks />: bookmarks }
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
    deleteBookmark: PropTypes.func.isRequired,
    searchBookmark: PropTypes.func.isRequired,
}

/**
 * Map the store's state to the component's props
 */
const mapStateToProps = (state) => ({
    bookmarks: state.bookmarks.all
})

export default connect(mapStateToProps, { fetchBookmarks, deleteBookmark, searchBookmark })(Bookmarks);
