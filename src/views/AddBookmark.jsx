import React, { Component } from 'react'
import PageTitle from '../components/Layout/PageTitle'
import db from '../db'
import Alerts from '../components/Alerts'
import { AddAlert } from '../store/actions/notificationAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AddBookmark extends Component {

    constructor(props) {
        super(props)
        this.state = {
            link: '',
            description: '',
            title: '',
            loading: false
        }
    }

    handleChange({ target: { value, name } }) {
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.setState({
            loading: true
        })

        if(this.state.link !== '' && this.state.description !== '' && this.state.title !== '') {
    
            const bookmark = {
                link: this.state.link,
                description: this.state.description,
                title: this.state.title
            }
    
            db.bookmarks
                .add({ ...bookmark })
                .then(() => {
                    this.setState({
                        link: '',
                        description: '',
                        title: '',
                        loading: false
                    })
    
                    this.props.AddAlert({
                        type: 'success',
                        message: 'Bookmark saved successfully!'
                    })
    
                })
        } else {
            this.setState({
                loading: false
            })
            this.props.AddAlert({
                type: 'error',
                message: 'Please fill all the fields!'
            })
        }

    }

    render() {
        return (
            <div className="h-full w-4/5 float-right bg-grey-lighter">
                <div className="p-10 w-full">
                    <PageTitle title="Add a new bookmark" />
                    <Alerts />
                    <form className="w-full" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="w-full">
                            <label className="block text-grey-darkest text-2xl font-semibold mb-5">Link</label>
                            <input type="text" name="link" placeholder="Link of the bookmark" onChange={this.handleChange.bind(this)}  className="text-grey-dark px-5 py-5 w-full text-left" value={ this.state.link } />
                        </div>
                        <div className="w-full mt-10">
                            <label className="block text-grey-darkest text-2xl font-semibold mb-5">Title</label>
                            <input type="text" name="title" placeholder="Title of the bookmark" onChange={this.handleChange.bind(this)}  className="text-grey-dark px-5 py-5 w-full text-left" value={ this.state.title } />
                        </div>
                        <div className="w-full mt-10">
                            <label className="block text-grey-darkest text-2xl font-semibold mb-5">Description</label>
                            <textarea name="description" placeholder="Description of the bookmark" onChange={this.handleChange.bind(this)} className="text-grey-dark px-5 py-5 w-full text-left" value={ this.state.description } />
                        </div>
                        <div className="w-full mt-10">
                            <button type="submit" className="bg-indigo px-5 py-4 text-white">{ this.state.loading ? 'Loading...': 'Add bookmark' }</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

AddBookmark.propTypes = {
    AddAlert: PropTypes.func.isRequired
}


export default connect(null, { AddAlert })(AddBookmark)
