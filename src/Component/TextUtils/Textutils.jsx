import React,{useState} from 'react'

function Textutils(props) {


    const handleonchange = (e) => {
        SetText(e.target.value);
    }

    const hanldUppercase = () => {
        let newValue = text.toUpperCase();
        SetText(newValue);
        props.setAlert('Convert To UpperCase', 'success');
    }

    const hanldlowercase = () => {
        let newValue = text.toLowerCase();
        SetText(newValue);
        props.setAlert('Convert To LowerCase', 'success');
    }

    const hanldcleartext = () => {
        let newValue  = '';
        SetText(newValue);
        props.setAlert('Clear Text', 'danger');
    }

    const hanldcopytext = () =>{
        navigator.clipboard.writeText(text);
        props.setAlert('Copy Text', 'success');
    }

    const hanldremovespacetext = ()  => {

        let newtext = text.split(/[ ]+/);
        SetText(newtext.join(" "));
        props.setAlert('Remove Space Text', 'success');
    }

    const [text, SetText]=useState('');


    return (
    <>
        <div className={`my-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={hanldUppercase}>TO Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2"onClick={hanldlowercase}>TO Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2"onClick={hanldcleartext}>clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2"onClick={hanldcopytext}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2"onClick={hanldremovespacetext}>Remove Extra Spaces</button>
        </div>
        <div className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h2>Your Text Summary</h2>
            <p class={`shadow p-3 mb-2 bg-white rounded text-${props.mode === 'dark' ? 'dark' : 'dark'}`}>{text.split(/\s+/).filter((element)=> {return element.length !==0}).length} word and {text.length} characters</p>
            <p class={`shadow p-3 mb-5 bg-white rounded text-${props.mode === 'dark' ? 'dark' : 'dark'}`}>{0.808 * text.split(' ').filter((element)=>{return element.length !==0}).length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
    )
}

export default Textutils
