/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './interval.css';
import Card from './Card';

export default props => {
    const {min, max} = props;
    return (
        <Card title="Interval" red>
            <div className="Interval">        
                <span>
                    <strong>Min:</strong>
                    <input 
                    type="number" 
                    value={min} 
                    onChange={event => props.onMinChanged(+event.target.value)}
                    />
                </span>
                <span>
                    <strong>Max:</strong>
                    <input 
                    type="number" 
                    value={max} 
                    onChange={event => props.onMaxChanged(+event.target.value)}
                    />
                </span>
            </div>    
        </Card>
    )
}