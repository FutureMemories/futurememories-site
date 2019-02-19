import Icon from './icon'
import Button from './button'
import Card from './card'
import cx from 'classnames'
import s from './projects-block.sass'

export default ({ projects, customClass }) => (
  <div class={cx(s.projects, customClass && customClass)}>
    {projects.map((project, i) => {
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

      return (
        project.button ? (
          <div class={cx(s.project, s.button)} style={style}>
            <Button
              to={project.type !== 'mailto' && project.to}
              mailto={project.type === 'mailto' && project.to}
              label={project.label}
              fullsize arrow
            />
          </div>
        ) : (
          <Card customClass={s.project} customStyle={style}>
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
              {project.showcase && (
                <Icon id='arrow' class={s.arrow} />
              )}

            </div>
            {project.image && (
              <img style={imageStyle}
                srcset={require(`../images/${project.image}`) + ' 2x'}
              />
            )}
            {project.imageBg && (
              <img class={cx(s.background, s[project.imageBg[1]])} style={imageStyle}
                src={require(`../images/${project.imageBg[0]}`)}
              />
            )}
          </Card>
        )

      )
    }
    )}
  </div>
)
