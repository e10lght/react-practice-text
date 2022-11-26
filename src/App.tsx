import { InputText } from "./components/atom/InputText";
import { Counter } from "./components/Counter";
import { LikeButton } from "./components/LikeButton";
import { Form } from "./components/organism/Form";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <InputText />
      <LikeButton />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
