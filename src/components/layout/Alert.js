import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

function Alert() {
    const alertContext = new useContext(AlertContext);
    const { alert } = alertContext;
    return (
        alert !== null &&
        <div className={'alert alert-' + alert.type + ' text-center'}>
            <i className='fa fa-message'>{alert.message}</i>
        </div>
    )
}

export default Alert
