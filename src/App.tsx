import { InputText } from "./components/atom/InputText";
import { CheckBox } from "./components/CheckBox";
import { LikeButton } from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <InputText />
      <CheckBox value="text" isFirst={true} id="check1" />
      <CheckBox value="text2" isFirst={false} id="check2" />
      <LikeButton />
    </div>
  );
}

export default App;
