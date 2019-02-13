import { Component } from 'preact'
import Header from './components/header'
// import Footer from './components/footer'

export default class extends Component {
  render ({ children, active }) {
    return (
      <div class='app'>
        <Header active={active} />
        {children}
      </div>
    )
  }
}
