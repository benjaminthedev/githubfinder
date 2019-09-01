import React from 'react'

const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <em>{alert.msg}</em>
            </div> 
        )
    )
}

export default Alert
