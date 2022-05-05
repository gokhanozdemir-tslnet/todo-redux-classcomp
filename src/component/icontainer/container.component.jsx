import { Component } from "react";
import ContainerInput from "../icontainer-input/container.input.component";
import "./container.style.scss";

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ContainerInput />
        <div className="container-item">sdfsdsdf</div>
        <div className="container-item">sdfsdsdf</div>
        <div className="container-item">sdfsdsdf</div>
      </div>
    );
  }
}

export default Container;
