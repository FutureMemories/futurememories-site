import Icon from './icon'
import cx from 'classnames'
import s from './projects-block.sass'

export default ({ projects, customClass }) => (
  <div class={cx(s.projects, customClass && customClass)}>
    {projects.map((project, i) => {
      let style = ''
      for (let property in project.style[0]) {
        if (project.style[0].hasOwnProperty(property)) {
          style += ` ${property}: ${project.style[0][property]};`
        }
      }

      let detailsStyle = ''
      for (let property in project.style[1]) {
        if (project.style[1].hasOwnProperty(property)) {
          detailsStyle += ` ${property}: ${project.style[1][property]};`
        }
      }

      return (
        <div class={s.project} style={project.style[0] && style}>
          <div
            class={cx(
              s.details,
              (project.image || project.layout === 'two') && s.leftAngled
            )}
            style={detailsStyle}
          >
            <h3>{project.name}</h3>
            <p class={s.desc}>{project.desc}</p>
            <p class={s.type}>{project.type}</p>
            <Icon id='arrow' class={s.arrow} />
          </div>
          {project.image && (
            <img
              srcset={require(`../images/${project.image}`) + ' 2x'}
            />
          )}
        </div>
      )
    }
    )}
  </div>
)
