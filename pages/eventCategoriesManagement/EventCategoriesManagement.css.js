import css from 'styled-jsx/css'
export default css
    `
    .event-cat-table{
        direction: rtl;
        border-collapse: collapse;
        margin: 5% auto;
        width: 80%;
        table-layout: fixed;
    }
    .event-cat-table th{
        padding: 5px 15px;
        border: 1px solid black;
    }
    .event-cat-table td{
        padding: 0px;
        border: 1px solid black;
    }
    .event-cat-table td input, .event-cat-table td select{
        width: 100%;
        box-sizing: border-box;
        border: none;
        outline: none;
    }
    .event-cat-table tbody{
        cursor: pointer;
    }
    .add-event-cat-button, .save-event-cats-button{
        cursor: pointer;
        display: block;
        margin: 0 auto;
        padding: 0.75% 2%;
        font-size: 1.5em;
        color: white;
        background-color: #90278e;
        border: none;
        outline: none;
    }
    .save-event-cats-button{
        margin: 1.5em auto;
    }
    .add-event-cat-button:hover, .save-event-cats-button:hover{
        background-color: #80177e;
    }
    .add-event-cat-button:active, .save-event-cats-button:active{
        background-color: #70076e;
    }
`
