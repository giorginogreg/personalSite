import React from "react"
import { container } from "../style.module.css"
import { useIntl } from "gatsby-plugin-intl"

import { Linux } from "../images/Linux"
import { ReactImg } from "../images/React"

const TechnicalKnowledgementsPage = () => {
    const intl = useIntl()
    const competences = [
        {
            title: 'Linux usage',
            icon: Linux(),
        },
        {
            title: 'React',
            icon: ReactImg(),
        },
        {
            title: 'Vue',
            icon: '',
        },
        {
            title: 'AWS (EC2, S3)',
            icon: '',
        },
        {
            title: 'HTML5, CSS3, JS (jQuery)',
            icon: '',
        },
        {
            title: 'Bootstrap Framework',
            icon: '',
        },
    ]
    return (
        <>
            <section className={container + ' competenze_tech'}>
                <h1> {intl.formatMessage({ id: 'technical_knowledgements.title' })}</h1>
                <ul>
                    {
                        competences.map(competence => (
                            <li key={competence.title}>
                                {
                                    competence.icon && (
                                        <span>
                                            {competence.icon}
                                        </span>
                                    )
                                }
                                {competence.title}
                            </li>
                        )
                        )
                    }
                </ul>
            </section>
        </>
    )
}

export default TechnicalKnowledgementsPage
