import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

const QueriesAndTopics = (props) => {
  const navigate = useNavigate();

  const changeTopic = (e) => {
    const newParams = { ...props.params };
    if (e.target.id === "all") {
      props.setParams({ params: {} });
    } else {
      newParams.params.topic = e.target.id;
      props.setParams(newParams);
    }
    navigate(`/articles/${e.target.id}`);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Topics
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item id="all" onClick={changeTopic}>
          All
        </Dropdown.Item>
        <Dropdown.Item id="coding" onClick={changeTopic}>
          Coding
        </Dropdown.Item>
        <Dropdown.Item id="cooking" onClick={changeTopic}>
          Cooking
        </Dropdown.Item>
        <Dropdown.Item id="football" onClick={changeTopic}>
          Football
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default QueriesAndTopics;
