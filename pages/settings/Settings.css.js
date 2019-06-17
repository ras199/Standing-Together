import css from 'styled-jsx/css'
export default css
    `
    .save-settings-button{
        cursor: pointer;
        display: block;
        margin: 0 auto;
        padding: 0.75% 2%;
        font-size: 1.5em;
        color: white;
        background-color: #90278e;
        border: none;
        outline: none;
        margin: 1.5em auto;
    }
    .save-settings-button:hover{
        background-color: #80177e;
    }
    .save-settings-button:active{
        background-color: #70076e;
    }
    .setting-title{
        margin: 1em 1em;
        color: #70076e;
        font-weight: bold;
    }
    .setting-content-wrap{
        margin: 1em 2em;
    }
    .setting-value-wrap{
        margin: 0.5em 0;
    }
    .setting-value-input{
        width: 20em;
        border: 1px solid #888;
    }
    .remove-setting-value{
        width: 1em;
        height: 1em;
        line-height: 1em;
        text-align: center;
        padding: 0.5em;
        border-radius: 1em;
        background-color: #c00;
        color: white;
        display: inline-block;
        margin: 0 1em;
        cursor: pointer;
        transition: background-color 0.25s, text-shadow 0.25s;
    }
    .remove-setting-value:hover{    
        background-color: #a00;
        text-shadow: 0px 0px 3px white;
    }
    .remove-setting-value:active{    
        background-color: #800;
        text-shadow: 0px 0px 5px white;
    }
    .add-setting-value{
        width: 1em;
        height: 1em;
        line-height: 1em;
        text-align: center;
        padding: 0.5em;
        border-radius: 1em;
        background-color: #088;
        color: white;
        margin: 0 1em;
        cursor: pointer;
        transition: background-color 0.25s, text-shadow 0.25s;
    }
    .add-setting-value:hover{    
        background-color: #066;
        text-shadow: 0px 0px 3px white;
    }
    .add-setting-value:active{    
        background-color: #044;
        text-shadow: 0px 0px 5px white;
    }
`
