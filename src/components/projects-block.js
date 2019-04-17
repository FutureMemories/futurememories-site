import Icon from './icon'
import Button from './button'
import Card from './card'
import cx from 'classnames'
import { allCases } from '../data.json'
import s from './projects-block.sass'

export default ({ allProjects, projects, page, customClass, limit, currentBrowseCase }) => {
  const projectsArray = []

  if (!allProjects) {
    projects.slice(0, limit).forEach(projectId => {
      const currentProject = allCases.find(d => d.id === projectId)
      if (currentProject) {
        projectsArray.push(currentProject)
      }
    })
  }

  let projectsData = allProjects || projectsArray

  return (
    <div class={cx(s.projects, customClass && customClass, currentBrowseCase && s.browseCase)}>

      {page === 'front' && (
        <div class={cx(s.project, s.hide)} />
      )}
      {
        projectsData.map((project, i) => {
          let style = ''
          let detailsStyle = ''
          let imageStyle = ''

          if (project.style) {
            for (let property in project.style[0]) {
              if (project.style[0].hasOwnProperty(property)) {
                style += ` ${property}: ${project.style[0][property]};`
              }
            }

            for (let property in project.style[1]) {
              if (project.style[1].hasOwnProperty(property)) {
                detailsStyle += ` ${property}: ${project.style[1][property]};`
              }
            }

            for (let property in project.style[2]) {
              if (project.style[2].hasOwnProperty(property)) {
                imageStyle += ` ${property}: ${project.style[2][property]};`
              }
            }
          }

          const linkTo = project.showcase ? `/cases/${project.id}` : project.link && project.link

          return (
            project.button ? (
              <div class={cx(s.project, s.button)} style={style}>
                <Button
                  to={project.type === 'mailto' ? `mailto:${project.to}` : project.to}
                  label={project.label}
                  fullsize arrow transition='slideArrow'
                />
              </div>
            ) : (
              <Card id={project.id} transition='viewCase' customClass={s.project} customStyle={style} to={linkTo} newTab={project.link && true}>
                <div
                  class={cx(
                    s.slideArrow,
                    s.details,
                    (project.image || project.layout === 'two') && s.leftAngled
                  )}
                  style={detailsStyle}
                >
                  <h3>{project.name}</h3>
                  <p class={s.desc}>{project.desc}</p>
                  <p class={s.type}>{project.type}</p>
                  {project.showcase && !project.link && (
                    <div class='slideArrow'>
                      <Icon id='arrow' class={cx(s.arrow, s.first)} />
                      <span>View Case</span>
                      <Icon id='arrow' class={cx(s.arrow, s.second)} />
                    </div>
                  )}
                  {!project.showcase && project.link && (
                    <div class='slideArrow'>
                      <Icon id='arrow' class={cx(s.arrow, s.first)} />
                      <span>Visit Site</span>
                      <Icon id='arrow' class={cx(s.arrow, s.second)} />
                    </div>
                  )}
                </div>
                {project.image && (
                  <img alt={project.name} style={imageStyle}
                    src={require(`../images/${project.image}`)}
                  />
                )}
                {project.imageBg && (
                  <img alt={project.name} class={cx(s.background, s[project.imageBg[1]])} style={imageStyle}
                    src={require(`../images/${project.imageBg[0]}`)}
                  />
                )}
              </Card>
            )
          )
        }
        )
      }
    </div>
  )
}
