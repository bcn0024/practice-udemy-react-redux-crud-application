import React, { Component } from 'react';
// Reactはjsxを使う時にトランスパイルするのに必要になる
import { connect } from 'react-redux';
import { readEvents } from '../actions'
import _ from 'lodash'

class EventsIndex extends Component {
  // 🌸コンポーネントがマウントされた時に実行されるメソッド
  // 🌸初期マウント時に外部のAPIサーバにイベント一覧を取得する処理を書くメソッド
  componentDidMount(){
    this.props.readEvents()
  }
  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id} >
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render(){
    return(
    <table>
      {/* <div>{console.log(this.props.events)}</div> */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {this.renderEvents()}
      </tbody>
    </table>
    )
  }
}

// props.◯◯として使えるようにするための記述
const mapStateToProps = state => ({ events: state.events })
  // props.eventsをした時に取れる値はstate.events(🍺eventレデューサーの第一引数の状態?🍺)ということ
  // 🔥reducerの第一引数(名は関係なし)stateの中にeventsレデューサから{1:{id...},2:{id...}}というオブジェクトが渡されている
  // 🔥combineReducerの引数に使われたキーがそのままState分割にも流用される。
  // 🔥combineReducersはレデューサーを整理して独自の状態のスライスを管理するのに役立ちます。 Reduxの場合、ストアは1つだけですが、combinReducersは、レデューサー間で論理的に同じ分割を維持するのに役立ちます。
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
