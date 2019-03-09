import cx from 'classnames'
import s from './projects-block.sass'
import ProjectsBlock from '../../components/projects-block'
import { browseCases } from '../../data.json'

export default ({ current, background, color }) => (
  <div class={cx(s.projectsBlock, s.projects)} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    <div class={s.inner}>

      <div class={s.block}>
        <h2>Other projects</h2>
        <a class={s.link} href='/work'>Browse more projects</a>
      </div>

      <div class={s.block}>
        <ProjectsBlock projects={browseCases} currentBrowseCase={current} limit={3} />
      </div>

    </div>
  </div>
)
