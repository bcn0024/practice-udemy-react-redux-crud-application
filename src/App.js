import React, { Component } from 'react';
// Reactはjsxを使う時にトランスパイルするのに必要になる

// クラスコンポーネント
class App extends Component {
  render() {
    const greeting = <span>Hi!!</span>
    // {}でjsxの中に変数も使用できる
    const dom = <h1 className='foo'>{greeting}</h1>

    // return返すjsxは１つでないといけない＝意図しないdivタグが生じる
    // return (
    //   <div>
    //     {dom}
    //     <label htmlFor='bar'>bar</label>
    //     <input type='text' onChange={() => {console.log('OK')}} />
    //   </div>
    // )
    // 🌸React.Fragment(意図しないdivタグをつけない方法)🌸
    return (
      <React.Fragment>
        {dom}
        <label htmlFor='bar'>bar</label>
        <input type='text' onChange={() => {console.log('OK')}} />
      </React.Fragment>
    )
    // 🌟<React.Fragment>で意図しないdivタグを消すことができる
  }
  // jsxはbabelによって下にトランスパイルされる
  // render(){
  //   return React.createElement(
  //     'div',
  //     null,
  //     "Hello World"
  //   );
  // }
}

// 🌸ファンクション(関数)コンポーネント🌸
// const App =  () => {
//   return (
//     <div>
//       <Cat />
//     </div>
//   )
// }

// const Cat = () => {
//   return <div>Meow</div>
// }

export default App;
