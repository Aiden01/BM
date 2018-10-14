import React from 'react'

const PageTitle = ({ title }) => (
    <div className="page-title mb-10">
        <h2 className="text-grey-darkest text-3xl font-black">{ title }</h2>
        <div className="w-24 h-1 bg-indigo mt-5"></div>
    </div>
)

export default PageTitle