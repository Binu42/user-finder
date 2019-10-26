import React from 'react'

function Alert({ alert }) {
    return (
        alert !== null && 
        <div className={'alert alert-' + alert.type + ' text-center'}>
            <i className='fa fa-message'>{alert.message}</i>
        </div>
    )
}

export default Alert
