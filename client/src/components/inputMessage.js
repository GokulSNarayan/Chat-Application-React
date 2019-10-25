import React from 'react';

const InputMessage = (props) => {

    return (
        <div className="flex w-full" style={{ height: "50px" }}>
            <button className="px-2 rounded-lg rounded-r-none" style={{ backgroundColor: "#40444B", marginRight: "3px", outline: "none" }}>
            <svg style={{backgroundColor:"#B9BBBE",borderRadius:"50%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><path d="M12 2C6.5 2 2 6.5 2 12 2 17.5 6.5 22 12 22 17.5 22 22 17.5 22 12 22 6.5 17.5 2 12 2zM12 4C16.4 4 20 7.6 20 12 20 16.4 16.4 20 12 20 7.6 20 4 16.4 4 12 4 7.6 7.6 4 12 4zM11 7L11 11 7 11 7 13 11 13 11 17 13 17 13 13 17 13 17 11 13 11 13 7 11 7z"/></svg>
            </button>
            <textarea onKeyPress={props.keyPress} className="p-3 rounded-lg rounded-l-none text-white" id="style-2" style={{ width: "85%", backgroundColor: "#40444B", outline: "none" }} type="text"
                onChange={props.changed} value={props.value}  ></textarea>
            
        </div>
    )

}
export default InputMessage;