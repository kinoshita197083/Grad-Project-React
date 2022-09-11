import React, { useEffect } from 'react'

export function Popup(props) {



    let popup = document.querySelector(".popup");


    useEffect(() => {
        let button = document.querySelector(props.target);
        button.addEventListener("click", openPop);
        window.addEventListener("click", closePop);
    });

    function openPop() {
        popup.style.display = "Block";
    }

    function closePop(e) {
        if (e.target == popup) {
            popup.style.display = "none";
        }
    }

    return (
        <div className="popup">
            <div className="popcard">
                <h1>{props.heading}</h1>
                <p>{props.message}</p>
            </div>
        </div>
    )
}