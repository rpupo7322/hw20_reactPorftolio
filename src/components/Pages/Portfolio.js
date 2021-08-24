import React, { Component } from 'react';



export default class Porfolio extends Component {
    render () {
        return (
            <div id = "Work">

            <div class = "content">
                <section class="application" id = 'first'>
                    <div class="app-title">
                        <h3>The Dawn Patrol</h3>
                        <h4>Group Project 1</h4>
                    </div>
                    <div id = "app1" onclick="location.href='https://themetalsaint.github.io/TheDawnPatrol/';">
                        <img src = "https://user-images.githubusercontent.com/78604328/118205119-ac2b9f00-b42d-11eb-9d1a-17e337ddb36b.png" alt = 'project-0' width='500' height='250'/>
                    </div>
                </section>
                <section class="application" id = "second">
                    <div class="app-title">
                        <h3>Password Generator</h3>
                        <h4>Generate a random password</h4>
                    </div>
                    <div id = "app2" onclick="location.href='https://github.com/rpupo7322/HW3_PasswordGenerator_RP';">
                        <img src = "https://github.com/rpupo7322/HW3_PasswordGenerator_RP/blob/main/websitePics/PopupPasswordPreferences.PNG?raw=true" alt='project-1' width='500' height='250'/>
                    </div>
                </section>
                <section class="application" id = "third">
                    <div class="app-title">
                        <h3>BeSeated</h3>
                        <h4>Group Project 2</h4>
                    </div>
                    <div id = "app3">
                    <img src = "https://github.com/rpupo7322/hw20_reactPorftolio/blob/main/src/components/images/BeSeated.PNG?raw=true" alt='project-2' width='500' height='250'/>
                    </div>
                </section>
            </div>
            </div>

      
        )
      }
    }