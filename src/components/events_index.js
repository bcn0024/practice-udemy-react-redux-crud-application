import React, { Component } from 'react';
// Reactはjsxを使う時にトランスパイルするのに必要になる
import { connect } from 'react-redux';
import { readEvents } from '../actions'


class EventsIndex extends Component {
  // 🌸コンポーネントがマウントされた時に実行されるメソッド
  // 🌸初期マウント時に外部のAPIサーバにイベント一覧を取得する処理を書くメソッド
  componentDidMount(){
    this.props.readEvents()
  }
  render(){
    const props = this.props
    return(
    <React.Fragment>
      <div>value : { props.value }</div>
      <button onClick={ props.increment }>+1</button>
      <button onClick={ props.decrement }>-1</button>
    </React.Fragment>
    )
  }
}

// props.◯◯として使えるようにするための記述
const mapStateToProps = state => ({})
  // props.valueをした時に取れる値はstate.count.value(🌸storeの中のcountのレデューサーのvalue🌸)ということ
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
