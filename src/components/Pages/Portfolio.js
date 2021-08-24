import React, { Component } from 'react';

export default class Porfolio extends Component {
    render () {
        return (
            <div id = "Work">

            <div class = "content">
                <section class="application" id = 'first'>
                    <div id = "app1" onclick="location.href='https://themetalsaint.github.io/TheDawnPatrol/';"></div>
                    <div class="app-title">
                        <h3>The Dawn Patrol</h3>
                        <h4>Group Project 1</h4>
                    </div>
                </section>
                <section class="application" id = "second">
                    <div id = "app2" onclick="location.href='https://github.com/rpupo7322/HW3_PasswordGenerator_RP';"></div>
                    <div class="app-title">
                        <h3>Password Generator</h3>
                        <h4>Generate a random password</h4>
                    </div>
                </section>
                <section class="application" id = "third">
                    <div id = "app3"></div>
                    <div class="app-title">
                        <h3>BeSeated</h3>
                        <h4>Group Project 2</h4>
                    </div>
                </section>
            </div>
            </div>

      
        )
      }
    }