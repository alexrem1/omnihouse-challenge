import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className=" bg-header">
          <button type="button" className="button-login">
            Login
          </button>
          <button type="button" className="button-signup">
            Sign up
          </button>
        </nav>
      </div>
    );
  }
}

export default Header;
