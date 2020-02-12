import cx from 'classnames'
import Button from '../../components/button'
import s from './projects-block.sass'
import ProjectsBlock from '../../components/projects-block'
import { defaultOtherCases } from '../../data.json'

export default ({ current, similar, background, color }) => {
  const projects = similar || []
  if (projects.length < 3) {
    defaultOtherCases.forEach(projectId => {
      if (projectId !== current && !projects.includes(projectId)) {
        projects.push(projectId)
      }
    })
  }

  return (
    <div
      id='projects-block'
      class={cx(s.projectsBlock, s.projects)}
      style={{ background, color }}
    >
      <div class={s.inner}>

        <div class={s.block}>
          <h2>Other projects</h2>
          <Button background='transparent' customClass={s.button} to='/work' label='Browse more projects' arrow transition='slide' />
        </div>

        <div class={s.block}>
          <ProjectsBlock projects={projects} currentBrowseCase={current} limit={3} />
        </div>

      </div>
    </div>
  )
}
