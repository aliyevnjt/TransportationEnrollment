import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

const Test2 = (props) => {
  console.log(props);
  return (
    <div class="container">
      <div class="row center-align">
        <div class="col s12">
          <h3 class="indigo-text darken-4 center-align">
            testing redirect for
          </h3>
        </div>
      </div>
    </div>
  );
};

// class Test2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = props;
//   }
//   render() {
//     const data = this.props.location.state;

//     return (
//       <div class="container">
//         <div class="row center-align">
//           <div class="col s12">
//             <img
//               width="450"
//               src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg"
//               alt=""
//             />
//             <h3 class="indigo-text darken-4 center-align">
//               testing redirect for {data.student}
//             </h3>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Test2;
