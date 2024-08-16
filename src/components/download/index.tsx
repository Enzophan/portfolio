import React, { useState } from 'react'


const Download = () => {
    const [url, setUrl] = useState("")
    const downloadFileAtUrl = (url: string) => {
        fetch(url).then(res => res.blob()).then(blod => {
            const blodURL = window.URL.createObjectURL(new Blob([blod]));
            const fileName: string = url.split("/").pop() || "undefined";
            const atag = document.createElement("a");
            atag.href = blodURL;
            atag.setAttribute("download", fileName);
            document.body.appendChild(atag);
            atag.click();
            atag.remove();
        })
    }
    return (
        <section className='section'>
            <h2 className="section__title">Download</h2>
            <span className="section__subtitle">
                My Files
            </span>
            <div className='container grid'>
                <input type="text" onChange={(e) => setUrl(e.target.value)} />
                <button onClick={() => downloadFileAtUrl(url)}>Download</button>
            </div>
        </section>
    )
}

export default Download