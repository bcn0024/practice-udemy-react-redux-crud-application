import React, { Component } from 'react';
// Reactはjsxを使う時にトランスパイルするのに必要になる


// 🌸stateはクラスコンポーネントの内部でのみ状態を持つことができるもの(変更可能値)
// 🌸propsは親コンポーネントから渡されるもの(変更不可能値)

const App = () => (<Counter></Counter>)

class Counter extends Component {

  // 🌸コンポーネント初期化メソッド(カウンターコンポが呼ばれた時にはじめに実行)
  constructor(props){
    // 🌸親クラスのpropsを初期化
    super(props)
    // 🌸初期化後にオブジェクト生成(countをキーとして、0をバリューとする)
    this.state = { count: 0 }
  }


  hundlePlusButton = () =>{
    // 🌸ステートの更新メソッド
    this.setState({
      count: this.state.count + 1
    })
    // 🌸アンチパターン
    // 🌸this.state = { count: this.state.count + 1 }
    // 🌸DOMの変更がされないから
  }

  hundleMinusButton = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render(){
    // 🌸setStateの度に呼ばれる＝その度に自動的にDOMの変更をしてくれるのがReactのいいところ
    console.log('per setState')
    return(
    <React.Fragment>
      <div>counter : { this.state.count }</div>
      <button onClick={this.hundlePlusButton}>+1</button>
      <button onClick={this.hundleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}


export default App;
