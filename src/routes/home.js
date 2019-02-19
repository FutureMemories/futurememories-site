import { Component } from 'preact'
import ProjectsBlock from '../components/projects-block'
import Button from '../components/button'
import Moon from '../components/moon'
import { frontCases, frontTeamPictures } from '../data.json'
import s from './home.sass'

export default class extends Component {
moveLight = (e) => {
  this.setState({ lightLeft: e.clientX / 30, lightTop: e.clientY / 30 })
}

render (_, { lightLeft, lightTop }) {
  return (
    <div class={s.view} onMouseMove={(e) => this.moveLight(e)}>
      <div class={s.inner}>

        <div class={s.welcome} >
          <Moon size='normal' position='topRight' background='blue' customClass={s.moon} style={`margin-left: -${lightLeft}px; margin-top: -${lightTop}px;`} />
          <h1>
            <span>Future Memories</span> is a digital studio where strategic design and technology unite into products of tomorrow.
          </h1>
        </div>

        <div class={s.information}>
          <div class={s.foundationPillar}>
            <h2>UX</h2>
            <h2>Design</h2>
            <h2>Tech</h2>
          </div>
          <Moon size='medium' position='bottomLeft' background='red' customClass={s.moon} />
          <p>
            <strong>We are digital experts</strong> that combine our designers and developers brilliant minds to aid you in your project or product. We offer you help with User experience design, UI design, Branding and development for both iOS & web.
          </p>
        </div>

        <div class={s.work}>
          <Moon size='small' position='bottomLeft' background='red' customClass={s.moon} />
          <div class={s.text}>
            <h1>Some of our work</h1>
            <p>We develop cutting-edge platforms and apps of exceptional quality in a short space of time.</p>
          </div>
          <ProjectsBlock projects={frontCases} limit='3' />
          <Button to='/work' label='See all projects' arrow />
        </div>

        <div class={s.team}>
          <div class={s.text}>
            <h1>Behind the surface</h1>
            <p>Behind every project there’s faces, faces with a broad range of skills. Make sure to check us out.</p>
          </div>
          <div class={s.teamPictures}>
            {frontTeamPictures.map((picture, i) => (
              <div class={s.block}>
                <img src={require(`../images/${picture}`)} />
              </div>
            ))}
            <div class={s.block}>
              <Button to='/team' label='See the whole team' fullsize arrow />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
}
