import React, { useState } from 'react';
import { isValidUrl } from '../common';

const Form = (props: any) => {
    const { bbcLink, setBbcLink, change, setChange } = props;
    const [error, setError] = useState(false);

    const onSummarize = (e: any) => {
        e.preventDefault();
        if (isValidUrl(bbcLink)) {
            setChange(!change);
        } else {
            setError(true);
        }
    }
    return (
        <div className='form mt-3'>
            <h4 className="head">BBC Link</h4>
            <div className="m-3">
                <input
                    className="form-control"
                    id='bbcLink'
                    type="text"
                    name='bbcLink'
                    value={bbcLink}
                    onFocus={(e) => setError(false)}
                    onChange={(e) => setBbcLink(e.target.value)} />
                {error &&
                    <div className="alert alert-danger p-1" role="alert">
                        Invalid URL
                    </div>
                }
                <button
                    type="button"
                    disabled={!bbcLink}
                    className="m-3 btn btn-success"
                    onClick={onSummarize}>Summarize</button>
            </div>
        </div>
    )
}

export default Form