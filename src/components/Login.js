import React, { Component } from "react";
import styles from "./Login.module.scss";
import logo from "../images/student.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginStatus: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.loginStatus ? (
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
          </div>
        ) : (
          <div className={styles.logoContainer}>
            <button>Login</button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;

// Conditional Rendering 1
//
// if (this.state.loginStatus) {
//     return (
//       <div className={styles.logoContainer}>
//         <img className={styles.logo} src={logo} alt="logo" />
//       </div>
//     );
//   } else {
//     return (
//       <div className={styles.logoContainer}>
//         <button>Login</button>
//       </div>
//     );
//   }

// Conditional Rendering 2
//
// let status;
// if (this.state.loginStatus) {
//   status = (
//     <div className={styles.logoContainer}>
//       <img className={styles.logo} src={logo} alt="logo" />
//     </div>
//   );
// } else {
//   status = (
//     <div className={styles.logoContainer}>
//       <button>Login</button>
//     </div>
//   );
// }
