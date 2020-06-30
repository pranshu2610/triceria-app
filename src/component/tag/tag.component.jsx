import React from 'react';
import './tag.styles.scss';

const Tag = ({response}) => (
    <div className='tag-box'>
        <p className={
            response==="Correct" ? "correct" 
            : response==="Hot" ? "hot" 
            : response==="Warm" ? "warm" 
            : response==="Cold" ? "cold" 
            : null}>
            {response}
        </p>
    </div>
)
export default Tag;