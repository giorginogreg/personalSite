import * as React from "react"
import { container } from "../style.module.css"
import { me } from '../me';
import { useIntl } from "gatsby-plugin-intl"

const UniversityPage = () => {
    const intl = useIntl()

    return (
        <>
            <section className={container} >
                <h2>{intl.formatMessage({ id: 'university.title' })}</h2>
                <ul>
                    {me.finished_exams.exams.map(exam => (
                        <li key={exam.subject_key}>
                            <span>
                                {exam.icon && (
                                    <span aria-label="New Badge">
                                        {exam.icon}
                                    </span>
                                )}
                                {intl.formatMessage({ id: 'university.' + exam.subject_key })}
                                <aside style={me.finished_exams.examStyle}>
                                    {intl.formatMessage({ id: 'university.score' })}: {exam.score} / 30
                                </aside>
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default UniversityPage