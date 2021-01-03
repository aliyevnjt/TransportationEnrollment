import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'

class Header extends Component {
    render() { 
        return (  
                
                <div class="container">
                    <div class="row center-align">
                        <div class="col s12">
                            <img width="450" src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg" alt=""/> 
                            <h1 class="indigo-text darken-4 center-align">Transportation Form</h1>
                        </div>
                    </div> 
                </div>
        );
    }
}
 
export default Header;