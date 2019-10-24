import React from 'react'

function Alert({ alert }) {
    return (
        <div className="container">
            {alert !== null && 
            <div className={'alert alert-' + alert.type + ' alert-dismissible text-center'}>
                <button className="close" data-dismiss="alert" aria-label="close">&times;</button>
                <i className='fa fa-message'>{alert.message}</i>
            </div>}
        </div>
    )
}

export default Alert
