import css from 'styled-jsx/css'
export default css
    `
.event-table{
    direction: rtl;
    border: 1px solid black;
    border-collapse: collapse;
    margin: 0 auto;
    width: 100%;
}
.event-table tr{
    border: 1px solid black;
    cursor: pointer;
    transition: background-color 0.25s;
}
.event-table tbody tr:hover{
    background-color: #ddd;
}
.event-table td{
    padding: 0.2em;
    width: 33%;
    text-align: center;
    text-overflow: ellipsis;
}
.event-table tr.selected-event{
    background-color: #90278e;
    color: white;
}
.event-table tbody tr.selected-event:hover{
    background-color: #731f72;
}
`
