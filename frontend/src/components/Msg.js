import React from 'react'

export default function Msg(obj) {
    let baseclass = 'alert '
    console.log(obj)

    if(obj.Confirm.Register === false) {baseclass = baseclass + 'alert-danger'}
          
    else
        baseclass = baseclass + 'alert-success'  
    return (
        <div>
            <div className={baseclass} role="alert">
                {obj.Confirm.Msg}
            </div>
        </div>
    )
}
