import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8
        text-white mx-5">Hi, I am <span className="font-semibold">Pranil</span>👋
        <br />
        A Software Engineer from India
        <br/>
        <br/>
        <p>Drag from right to left to see magic happen</p></h1>
        
    ),
    2: (
        // <h1>2</h1>
        <InfoBox
            text="Worked with many web technologies and picked up many skills along the way.😎"
            link="/about"
            btnText="Know more about me"
        />
    ),
    3: (
        <InfoBox
            text="Created many projects using MERN 😊. Curious about Projects ?"
            link="/projects"
            btnText="Visit Projects"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link="/contacts"
            btnText="Let's talk 🙌"
        />
    )
};

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
