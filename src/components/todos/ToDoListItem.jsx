import { CSSTransition } from "react-transition-group";
import "./ToDoListItem.css";
import { useRef } from "react";
const ToDoListItem = ({ item, index }) => {
  const delay = index * 100;
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={true}
      timeout={500 + delay}
      className="scale-up-bottom"
      appear
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="col" ref={nodeRef}>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title blockquote">
              {item.project} {index}
            </h3>
            <h5 className="blockqoute-footer">{item.company}</h5>
            <p className="card-text">{item.message}</p>
          </div>
          <div className="card-footer text-body-secondary">
            <div className="row">
              <div className="col">{item.priority}</div>
              <div className="col text-end">
                {item.date.toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ToDoListItem;
