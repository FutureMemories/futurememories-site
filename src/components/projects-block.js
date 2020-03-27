import Icon from './icon'
import Button from './button'
import Card from './card'
import cx from 'classnames'
import s from './projects-block.sass'

// baseKey is used for reanimating on rerender
export default ({ allCases, allProjects, projects, page, firstView, customClass, limit, currentBrowseCase, baseKey = '', animateInBlocks, ...props }) => {
  const projectsArray = []

  if (!allProjects) {
    projects.slice(0, limit).forEach(projectId => {
      const currentProject = allCases.find(d => d.id === projectId)
      if (currentProject) {
        projectsArray.push(currentProject)
      }
    })
  }

  const projectsData = allProjects || projectsArray

  return (
    <div class={cx(
      s.projects,
      page === 'front' && s.homeProjects,
      s['amount' + projectsData.length],
      customClass && customClass,
      currentBrowseCase && s.browseCase,
      firstView && s.firstView
    )}
    >
      {
        projectsData.map((project, i) => {
          let style = ''
          let overlayStyle = ''
          let imageStyle = ''

          if (project.style) {
            for (const p in project.style[0]) {
              if ({}.hasOwnProperty.call(project.style[0], p) && project.style[0][p] !== undefined) {
                style += ` ${p}: ${project.style[0][p]};`
              }
            }

            for (const p in project.style[1]) {
              if ({}.hasOwnProperty.call(project.style[1], p) && project.style[1][p] !== undefined) {
                overlayStyle += ` ${p}: ${project.style[1][p]};`
              }
            }

            for (const p in project.style[2]) {
              if ({}.hasOwnProperty.call(project.style[2], p) && project.style[2][p] !== undefined) {
                imageStyle += ` ${p}: ${project.style[2][p]};`
              }
            }
          }

          const linkTo = project.showcase ? `/cases/${project.id}` : (project.link || project.appLink) && (project.link || project.appLink)

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
              <Card
                key={baseKey + project.id}
                id={project.id}
                transition='viewCase'
                customClass={cx(s.project, animateInBlocks && s.animateIn)}
                customStyle={style}
                to={linkTo}
                newTab={(project.link || project.appLink) && true}
              >
                <div class={s.overlay} style={overlayStyle} />
                <div
                  class={cx(
                    s.slideArrow,
                    s.details,
                    (project.image || project.layout === 'two') && s.leftAngled
                  )}
                >
                  <p class={s.type}>{project.type}</p>
                  <h3>{project.name}</h3>
                  <p class={s.desc}>{project.desc}</p>
                  {project.showcase && !project.link && (
                    <div class='slideArrow'>
                      <span>{props.viewCase}</span>
                      <Icon id='arrow' class={s.arrow} />
                    </div>
                  )}
                  {!project.showcase && project.link && (
                    <div class='slideArrow'>
                      <span>{props.visitSite}</span>
                      <Icon id='arrow' class={s.arrow} />
                    </div>
                  )}
                  {!project.showcase && project.appLink && (
                    <div class='slideArrow'>
                      <span>{props.getApp}</span>
                      <Icon id='arrow' class={s.arrow} />
                    </div>
                  )}
                </div>
                {project.image && (
                  <img
                    class={s.img}
                    alt={project.name} style={imageStyle}
                    src={require(`../images/${project.image}`)}
                  />
                )}
                {project.imageBg && (
                  <img
                    alt={project.name} class={cx(s.img, s.background, s[project.imageBg[1]])} style={imageStyle}
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
