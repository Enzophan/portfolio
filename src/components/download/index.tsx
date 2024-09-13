import React, { useState } from 'react'
import Message from "./Message";

interface DownloadProps {
    date: Date;
    text: string;
    important?: boolean;
    children: JSX.Element | JSX.Element[];
}

const Download = ({ date, text, important = false, children }: DownloadProps) => {
    const [url, setUrl] = useState("");
    const [toggle, setToggle] = useState<boolean>(false);

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
            <div className='container grid'>
                <h2>TypeScript with React Components</h2>
                <span>{date.toLocaleString()}</span>
                <h4>{important ? 'Important message: ' : 'Regular message: '}</h4>
                <p> {text}</p>
                {children}
                <Message show={toggle} text={"Ola, just testing"} />
                <button onClick={() => setToggle(!toggle)}>{toggle ? "Hide message" : "Show message"}</button>
            </div>
        </section>
    )
}

export default Download