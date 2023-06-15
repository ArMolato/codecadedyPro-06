import "./styles.css";
import Card from "./Card";
import { comments } from "./commentData";

function App() {
  return (
    <div className="App">
      {comments.map((comment) => {
        return (
          <ul>
            <li key={comment.id}>
              <Card commentObject={comment} />
              {console.log(comment.id)}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
