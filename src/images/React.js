import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function ReactImg() {
    return (
        <StaticImage
            src="./react.png"
            alt="Linux"
            placeholder="blurred"
            layout="fixed"
            width={25}
            height={25}
        />
    )
}