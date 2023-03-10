import React from 'react'

import Avatar from '../assets/avatar.jpg'

const Header: React.FC = () => {
    return <header className="fixed bg-slate-400 w-full text-black">
        <div className="max-w-5xl flex justify-between mx-auto my-0 px-5 py-1">
            <div>
                <a href="/">
                    <img className="w-10 h-10 rounded-full block" src={Avatar} />
                </a>
            </div>
            <div className="flex items-center">
                <a className="mx-4 hover:text-white" href='/cv.html'>My CV</a>
                <a className="mx-4 hover:text-white" href='/about.html'>About Me</a>
                <a className="mx-4 hover:text-white" href='/contact.html'>Contact With Me</a>
            </div>
        </div>
    </header>
}

export default Header