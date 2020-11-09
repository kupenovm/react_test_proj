import React from 'react'
import {ClickContext} from '../App'
export default props => {
    return (
        <div style={{
            border: '1px solid #ccc',
            width: 200,
            margin: '0 auto'
        }}>
            <h3>Counter2</h3>
            <ClickContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickContext.Consumer>
        </div>
    )
}
