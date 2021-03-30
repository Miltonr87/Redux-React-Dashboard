/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Card from './Card';

export default props => {

    return (
        <Card title="Plus" blue>
            <div>        
                <span>
                    <span>Result:</span>
                    <strong>{11}</strong>
                </span>
            </div>    
        </Card>
    )
}