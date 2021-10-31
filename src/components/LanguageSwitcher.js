import React from "react"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

export default function LanguageSwitcher({ label, className }) {
    const labelText = label || "Languages"
    const selectorClass = className || "language-selector"
    const intl = useIntl()
    const languages = [
        { url: 'it', label: 'it' },
        { url: 'en', label: 'us' }
    ]
    return (
        <div className={selectorClass} data-label={labelText}>
            {intl.formatMessage({ id: 'language' })}:
            <ul>
                {languages.map(language => (
                    <li key={language.label}>
                        <Link to={'/' + language.url}>{getUnicodeFlagIcon(language.label)}</Link>
                    </li>
                )
                )}
            </ul>
        </div >
    )
}