import * as React from "react"


import MyPhoto from "../images/me/me.jpg"
import { container } from "../style.module.css"
import LanguageSwitcher from '../components/LanguageSwitcher';
import UniversityPage from './university';
import TechnicalKnowledgementsPage from './TechnicalKnownledgements';
import MyHobbies from "./MyHobbies";
import ContactMe from "./ContactMe";
import { me } from '../me';
import MyPosition from "./MyPosition";

const IndexPage = () => {
    return (
        <>
            {LanguageSwitcher('', '')}
            <header itemscope itemtype="https://schema.org/Person" className={container}>
                <span >
                    <img style={me.photo.style} src={MyPhoto} alt="My face" />
                </span>
                <h1 style={me.style}>
                    <div className="text-center name surname"><h3><span itemProp="name">{me.name}</span> <span itemProp="surname">{me.surname}</span></h3></div>
                    <div className="text-center profession"><h4><span itemprop="role">{me.profession}</span></h4></div>
                </h1>
            </header>

            <UniversityPage />

            <TechnicalKnowledgementsPage />
            <MyHobbies />
            <ContactMe />
            <MyPosition />
        </>
    )
}

export default IndexPage
