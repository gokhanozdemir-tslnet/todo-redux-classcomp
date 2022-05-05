import { Component } from "react";
import "./header.style.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="header">Todo App</div>;
  }
}

export default Header;
