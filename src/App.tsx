import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [text, setText] = useState();

  const header = {
    'X-API-KEY': "xppaYiZWhs0Y2kME8txobpVshHqg9t4U03Sy1Kr6"
  }

  axios
    .get("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=13"
      , { headers: header })
    .then((res) => console.log(res.data.result.data[0].data))

  async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000)
    });
    console.log(promise); // [[PromiseState]] :"pending",[[PromiseResult]]: undefined

    // 当然asyncの戻り値のPromiseオブジェクトがrejectした場合は、下記以降は実行されない  
    let result = await promise; // promise が解決するまで待ちます (*)
    console.log(promise); // [[PromiseState]] :"fulfilled",[[PromiseResult]]: "done!"
    alert(result); // 3秒後に"done!"アラートが表示
  }
  f();

  return (
    <div className="App">

    </div>
  );
}

export default App;
