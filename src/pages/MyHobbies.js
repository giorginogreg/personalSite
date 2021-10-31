import React from 'react'
import { useIntl } from "gatsby-plugin-intl"
import YoutubeEmbed from '../components/Video'

export default function MyHobbies() {
    const intl = useIntl()

    return (
        <>
            <section>
                <h1> {intl.formatMessage({ id: 'myhobbies.title' })}</h1>
                <section>
                    <h3>{intl.formatMessage({ id: 'myhobbies.arduino_title' })}  </h3>
                    <p>
                        {intl.formatMessage({ id: 'myhobbies.arduino_description' })}
                    </p>
                    <aside>
                        <YoutubeEmbed embedId="VA7BRqjwK98" />
                    </aside>
                </section>
                <section>
                    <h3> {intl.formatMessage({ id: 'myhobbies.guitar_title' })} </h3>
                    <p>
                        {intl.formatMessage({ id: 'myhobbies.guitar_description' })}
                    </p>
                    <aside>
                        <iframe title="Dream Theater Cover - The bigger picture" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100008669250905%2Fvideos%2F1559180551047572%2F&show_text=false&width=560&t=0" width="560" height="314" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>
                    </aside>
                </section>
            </section>
        </>
    )
}
