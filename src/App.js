import React, { Component } from 'react';
// Reactはjsxを使う時にトランスパイルするのに必要になる


class App extends Component {
  render() {
    const greeting = <span>Hi!!</span>
    const dom = <h1 className='foo'>{greeting}</h1>
    // {}でjsxの中に変数も使用できる

    // return返すjsxは１つでないといけない＝意図しないdivタグが生じる
    // return (
    //   <div>
    //     {dom}
    //     <label htmlFor='bar'>bar</label>
    //     <input type='text' onChange={() => {console.log('OK')}} />
    //   </div>
    // )
    return (
      <React.Fragment>
        {dom}
        <label htmlFor='bar'>bar</label>
        <input type='text' onChange={() => {console.log('OK')}} />
      </React.Fragment>
    )
    // 🌟<React.Fragment>で意図しないdivタグを消すことができる
  }
  // jsxは下にトランスパイルされる
  // render(){
  //   return React.createElement(
  //     'div',
  //     null,
  //     "Hello World"
  //   );
  // }
}

export default App;
