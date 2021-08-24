import React, { Component } from 'react';

export default class Contact extends Component {
    render () {
        return (
            // <section id = "Contact">
            // <aside><h2>Contact Me</h2></aside>
            <div class = "content">
                <ul id = 'contactInfo'>
                    <li>555.555.5555</li>
                    {/* <li><a href = '#'>SampleEmail@gmail.com</a></li> */}
                    <li>123 Address St, North Carolina 5555</li>
                </ul>
            </div>
        )
      }
    }