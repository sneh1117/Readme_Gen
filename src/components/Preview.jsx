import React from "react";
import ReactMarkdown from "react-markdown";

const Preview =({markdown})=> {
    const cpoyToClipboard=()=>{
        navigator.clipboard.writeText(markdown);
        alert("Copiedto clipboard!");
    };
    return (
        <div>
            <div style ={{display:"flex", justifyContent:"space-between",marginBottom:"10px"}}>
                <h2 classname="title">Live Preview</h2>
                <button onClick={cpoyToClipboard}>Copy</button>
            </div>

            <div className="preview">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Preview;