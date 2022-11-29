import { FetchMembersData } from "./api/FetchMembersData";
import { InputText } from "./components/atom/InputText";
import { Counter } from "./components/Counter";
import { LikeButton } from "./components/LikeButton";
import { InputTextButton } from "./components/molecules/InputTextButton";
import { Form } from "./components/organism/Form";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <InputText />
      <LikeButton />
      <Counter />
      <InputTextButton
        text="あああ"
      />
      <Form />
      <FetchMembersData />
    </div>
  );
}

export default App;
