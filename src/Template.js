import React from "react";
import './style.css';

function Template() {
    return(
      <div>
    <head>
        <title>Socket.IO chat</title>
    </head>
    <body>
    <ul id="messages">
    </ul>
    <form action="">
        <input id="m" autocomplete="off" /><button>Send</button>
    </form>
    </body>
      </div>
    )


}


export default Template;