import React from "react";
import "./Button.css";

export default props =>
    <button className={`botao ${props.espaco ? 'espaco' : ''}
                    ${props.laranja ? 'laranja' : ''}`}
        onClick={e => props.click && props.click(props.rotulo)}>




        {props.rotulo}

    </button>

