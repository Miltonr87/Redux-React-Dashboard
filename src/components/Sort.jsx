/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Card from './Card';

export default props => {

    return (
        <Card title="Sort" purple>
            <div>        
                <span>
                    <span>Result:</span>
                    <strong>{10}</strong>
                </span>
            </div>    
        </Card>
    )
}