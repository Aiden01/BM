import React from 'react'

import { NavLink } from 'react-router-dom'

const NoBookmarks = () => (
    <div>
        <p className="mb-10">No bookmark available yet.</p>
        <NavLink className="px-8 py-4 bg-indigo text-white mt-5 no-underline" to="/new">Add your first bookmark!</NavLink>
    </div>
)

export default NoBookmarks