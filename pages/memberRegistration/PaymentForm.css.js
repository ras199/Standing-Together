import css from 'styled-jsx/css'
export default css`
    .contribution-options{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        
    }
    .contribution-button{
        width: 3.2em;
        height: 3.2em;
        padding-top: 0.3em;
        padding: 0.3em 0.1em 0 0.1em;
        border-radius: 0.2em;
        color: #932581;
        margin: 2.5%;
        cursor: pointer;
        font-size: 1.75em;
        text-align: center;
        transition: background-color 0.1s;
    }
    .contribution-button:hover{
        background-color: #efefef;
    }
    .contribution-button:active{
        background-color: #e0e0e0;
    }
    .contribution-iframe{
        border: none;
        width: 100%;
        height: 70vh;
    }
    .close-payment-form{
        cursor: pointer;
        font-weight: bold;
        display: inline-block;
        white-space: nowrap;
    }
    .close-payment-form-icon{
        display: inline-block;
        vertical-align: middle;
        margin-left: 5%;
        background-color: #c00;
        color: #eee;
        padding: 0.2em;
    }
    .close-payment-form-label{
        vertical-align: middle;
        display: inline-block;
    }
    .close-payment-form:hover .close-payment-form-icon{
        background-color: #a00;
    }
    .close-payment-form:active .close-payment-form-icon{
        background-color: #800;
    }
    .credit-card-field-title{
        margin-right: 0.5%;
    }
    .contributionForm input, .contributionForm select{
        box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.12);
        transition: box-shadow 0.3s;
        border-radius: 4px;
        font: normal normal normal 15px/1.4em arial,'ｍｓ ｐゴシック','ms pgothic','돋움',dotum,helvetica,sans-serif;
        -webkit-appearance: none;
        -moz-appearance: none;
        border-width: 0;
        background-color: rgba(255, 255, 255, 1);
        box-sizing: border-box !important;
        color: #000000;
        border-style: solid;
        border-color: rgba(232, 232, 232, 1);
        outline: none;
        padding: 3px 10px;
        margin: 0.75em 0.5em;
        padding: 0.7em 0.5em;
        max-width: 100%;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-overflow: ellipsis;
    }
    .highlight-invalid-fields .contributionForm input.invalid,
    .highlight-invalid-fields .contributionForm select.invalid{
        background-color: rgb(255, 150, 160);
    }
`