import { InputText } from "./components/atom/InputText";
import { CheckBox } from "./components/CheckBox";
import { Counter } from "./components/Counter";
import { LikeButton } from "./components/LikeButton";
import { Form } from "./components/organism/Form";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <InputText />
      <CheckBox value="text" isFirst={true} id="check1" />
      <CheckBox value="text2" isFirst={false} id="check2" />
      <LikeButton />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
