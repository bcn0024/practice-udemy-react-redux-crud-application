import React, { Component } from 'react';
// Reactはjsxを使う時にトランスパイルするのに必要になる

// 🌸propsとはコンポーネントの属性のこと ex)props.nameやprop.ageなどあるデータ(文字列、配列、オブジェクトなど)の属性を参照できるもの、{}で渡す。

// クラスコンポーネント
class App extends Component {
  render() {
    const profiles = [
      { name: '慎理', age: '25'},
      { name: '美里', age: '24'},
      { name: '名無し' }
    ]
    return (
      <React.Fragment>
        {profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age}/>
        })}
      </React.Fragment>
    )
  }
}

const User = (props) => {
return <div>名前は{props.name}、年齢は{props.age}</div>
}

// propsを受け取るコンポーネントに表示するデフォルトなどに使用できる
User.defaultProps = {
  age: 1
}

export default App;
