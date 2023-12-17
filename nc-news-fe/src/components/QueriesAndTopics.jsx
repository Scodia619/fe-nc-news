import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import {useParams, useSearchParams} from 'react-router-dom';

const QueriesAndTopics = (props) => {
  const {topic_name} = useParams();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const changeTopic = (e) => {
    const newParams = { ...props.params };
    if (e.target.id === "all") {
      props.setParams({ params: {} });
      setSearchParams({})
    } else {
      newParams.params.topic = e.target.id;
      props.setParams(newParams);
      setSearchParams({...searchParams, topic: e.target.value})
    }
    navigate(`/articles/${e.target.id}`);
  };
  const changeSort = (e) => {
    const newParams = {...props.params}
    if(e.target.id === "asc" || e.target.id === "desc"){
      newParams.params.order = e.target.id;
      props.setParams(newParams)
      setSearchParams({...searchParams, order: e.target.id})
      // navigate(`/articles/${topic_name}?order=${e.target.id}`)
    }else{
      newParams.params.sortby = e.target.id;
      props.setParams(newParams);
      setSearchParams({...searchParams, sort_by: e.target.id})
      // navigate(`/articles/${topic_name}?sort_by=${e.target.id}`)
    }
    console.log(searchParams)
  }

  return (
    <section className="d-flex justify-content-around mb-2">
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

    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Sorting Queries
    </Dropdown.Toggle>
    <Dropdown.Menu>
    <Dropdown.Item id="created_at" onClick={changeSort}>
          Date
        </Dropdown.Item>
        <Dropdown.Item id="comment_count" onClick={changeSort}>
          Comment Count
        </Dropdown.Item>
        <Dropdown.Item id="votes" onClick={changeSort}>
          Votes
        </Dropdown.Item>
        <Dropdown.Item id="asc" onClick={changeSort}>
          Ascending
        </Dropdown.Item>
        <Dropdown.Item id="desc" onClick={changeSort}>
          Descending
        </Dropdown.Item>
        </Dropdown.Menu>
  </Dropdown>
  </section>
  );
};

export default QueriesAndTopics;
