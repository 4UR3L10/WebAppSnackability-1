import React, { Component } from 'react';
import styles from "./styles.module.css";
import {storeInput} from "./search.js";

export default class SnackSearch extends Component {

    render() {

        return (
            <div className = "search">
                
                <h1 className = {styles.h1}>Search for your snack</h1>

                <body>
                    
                    <input className = {styles.input} onKeyUp = {storeInput} type = "text" id="a" maxLength="50" placeholder = "Type your snack's brand name"></input>
                    
                </body>

            </div>
        )
    }

}