import React from "react"

export const File = (props) => {
    let { name, onChangeFunc, className } = props

    return (<input type="file" name={name} onChange={(e) => {
        console.log(e.target.files)
        // return
        onChangeFunc(name, e.target.files)
    }} className={className} />)
}