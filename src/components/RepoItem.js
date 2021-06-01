import React from 'react';

const RepoItem = ({ url, name,description}) => {

    return (
        <div className='repo'>
            <a href={url} target="_blank" className="repo-url">{name}</a>
            <p className='repo-description'>{description}</p>
        </div>
    );
};


export default RepoItem;
