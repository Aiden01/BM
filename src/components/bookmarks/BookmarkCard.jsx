import React from 'react'
import './style.css'

const BookmarkCard = ({ title, description, link, id, onClick }) => (
    <div className="bookmark p-10 bg-white relative mb-10">
        <div className="top-bar bg-indigo w-1 h-full pin-t pin-l absolute"></div>
        <h3 className="text-grey-darkest mb-5">{ title } <br/><a className="text-grey font-light text-sm italic" href={link} target="blank">{ link }</a></h3>
        <p className="text-grey-darkest">{ description }</p>
        <ul className="list-reset mt-10">
            <li className="inline-block mr-5 text-red cursor-pointer" onClick={() => onClick(id)}>Delete</li>
        </ul>
    </div>
)

export default BookmarkCard