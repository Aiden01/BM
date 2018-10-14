import React from 'react'

const BookmarkCard = ({ title, description, link }) => (
    <div className="bookmark p-10 bg-white relative mb-10">
        <div className="top-bar bg-indigo w-1 h-full pin-t pin-l absolute"></div>
        <h3 className="text-grey-darkest mb-5">{ title } <br/><a className="text-grey font-light text-sm italic" href={link} target="blank">{ link }</a></h3>
        <p className="text-grey-darkest">{ description }</p>
    </div>
)

export default BookmarkCard