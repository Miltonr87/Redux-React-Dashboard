/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './interval.css';
import Card from './Card';

export default props => {
    return (
        <Card title="Interval" red>
            <div className="Interval">        
                <span>
                    <strong>Min:</strong>
                    <input 
                    type="number" 
                    readOnly
                    />
                </span>
                <span>
                    <strong>Max:</strong>
                    <input 
                    type="number" 
                    readOnly
                    />
                </span>
            </div>    
        </Card>
    )
}