import cx from 'classnames'
import s from './projects-block.sass'
import ProjectsBlock from '../../components/projects-block'
import { browseCases } from '../../data.json'

export default ({ current, background, color }) => (
  <div class={cx(s.projectsBlock, s.projects)} style={(background && `background: ${background};`) || (color && `color:${color};`)}>
    <div class={s.inner}>

      <div class={s.block}>
        <h2>See more projects</h2>
        <a class={s.link} href='/work'>Browse all projects</a>
      </div>

      <div class={s.block}>
        <ProjectsBlock projects={browseCases} currentBrowseCase={current} limit={3} />
      </div>

    </div>
  </div>
)
