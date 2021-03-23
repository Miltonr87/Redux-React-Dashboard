/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Card from './Card';

export default props => {
    const {min, max} = props;

    return (
        <Card title="Plus" blue>
            <div>        
                <span>
                    <span>Result:</span>
                    <strong>{min+max}</strong>
                </span>
            </div>    
        </Card>
    )
}