import React from 'react'

const Keyboard = () => {

    const handleKeyDown = (e) => {
        // console.log(e.key)
        if (e.key === "Enter") {
            alert("Gönderildi")
        }
    }

    const handleCopy = (e) => {
        e.preventDefault();
        alert("çalma birader")
    };

    return (
        <div className='container mt-4'>
            <h2>Keyboard Events</h2>

            <input type="text" className='form-control' onKeyDown={handleKeyDown} />

            <div className="mt-3">
                <p>{ }</p>
            </div>

            <div>
                <textarea className='form-control' name="textarea" id="area" cols="30" rows="10" onCopy={handleCopy}></textarea>
            </div>

        </div>
    )
}

export default Keyboard