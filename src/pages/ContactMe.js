import React from 'react'
import { useIntl } from "gatsby-plugin-intl"
import './ContactMe.module.css'
const request_content = {
    style: {
        width: "400px",
        height: "400px",
    }
}

export default function ContactMe() {
    const intl = useIntl()

    return (
        <>
            <h1>
                {intl.formatMessage({ id: 'contact_form.title' })}
            </h1>
            <form method="post" encType="text/plain" action={"mailto:" + process.env.MY_MAIL}>
                <div className="name_surname">
                    <label>{intl.formatMessage({ id: 'name' })}</label>: <input type="text" name="name" required id="name" autoComplete="on" /> <br />
                    <label>{intl.formatMessage({ id: 'surname' })}</label>: <input type="text" name="surname" required id="surname" autoComplete="on" />
                </div>
                <div className="email">
                    <label>E-mail</label>: <input type="email" required name="email" id="email" autoComplete="on" />
                </div>
                <div className="phone_number">
                    <label>{intl.formatMessage({ id: 'phone_number' })}</label>: <input type="tel" name="phone_number" id="phone_number" autoComplete="on" />
                </div>
                <div className="small_descr">
                    <label>{intl.formatMessage({ id: 'small_description' })}</label>: <input type="text" name="small_descr" required id="small_descr" autoComplete="on" />
                </div>
                <div className="request_content">
                    <label>{intl.formatMessage({ id: 'request_content' })}</label>: <textarea style={request_content.style} name="request_content" required id="request_content"
                        placeholder={intl.formatMessage({ id: 'request_content_placeholder' })}></textarea>
                </div>
                <input type="submit" value={intl.formatMessage({ id: 'submit' })} />
            </form>
        </>
    )
}


