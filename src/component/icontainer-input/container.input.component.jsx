import { Component } from "react";
import "./container.input.style.scss";
import { addTodo } from "../../store/todo.action";
import { TODO_LIST_ACTION_TYPES } from "../../store/todo.action.types";
import { bindActionCreators } from "redux";

//STEP 6 dispatch action
import { connect } from "react-redux";

class ContainerInput extends Component {
  constructor(props) {
    super(props);
  }

  addClickHandler = () => {
    const { addTodo } = this.props;
    const todo = { description: "aaaaa" };
    addTodo(todo);
    console.log("container input");
    console.log(this.props.todoList);
  };

  render() {
    return (
      <div className="container-input">
        <div className="container-input-text">
          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input required />
              <span className="omrs-input-label">Add Todo Item</span>
              <svg
                onClick={this.addClickHandler}
                className="svg-circleplus"
                viewBox="0 0 120 120"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  strokeWidth="7.5"
                ></circle>
                <line
                  x1="32.5"
                  y1="50"
                  x2="67.5"
                  y2="50"
                  strokeWidth="5"
                ></line>
                <line
                  x1="50"
                  y1="32.5"
                  x2="50"
                  y2="67.5"
                  strokeWidth="5"
                ></line>
              </svg>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todoList: state.todoList };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ addTodo }, dispatch),
  };
}

// export default connect(mapStateToProps, { addTodo })(ContainerInput);
export default connect(mapStateToProps, mapDispatchToProps)(ContainerInput);
