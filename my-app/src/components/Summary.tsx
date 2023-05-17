import React from 'react'

const Summary = (props: any) => {
    const { title, desc } = props;
    return (
        <div className='summary'>
            <h4 className="head">Summary</h4>
            <div className="card m-3">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Summary