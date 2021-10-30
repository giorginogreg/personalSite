import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function Linux() {
    return (
        <StaticImage
            src="./linux.png"
            alt="Linux"
            placeholder="blurred"
            layout="fixed"
            width={35}
            height={35}
        />
    )
}