import cx from 'classnames'
import Button from '../../components/button'
import s from './projects-block.sass'
import ProjectsBlock from '../../components/projects-block'

export default ({ current, similar, background = '', color = '', allCases, defaultOtherCases, ...props }) => {
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
          <h2>{props.otherProjects}</h2>
          <Button background='transparent' customClass={s.button} to='/work' label={props.browseMoreProjects} arrow transition='slide' />
        </div>

        <div class={s.block}>
          <ProjectsBlock allCases={allCases} projects={projects} currentBrowseCase={current} limit={3} {...props} />
        </div>

      </div>
    </div>
  )
}
