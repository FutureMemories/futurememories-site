import { Component } from 'preact'
import cx from 'classnames'
import Button from './button'
import Card from './card'
import s from './team-block.sass'

export default class extends Component {
  render ({ astronauts }) {
    return (
      <div class={s.astronauts}>
        {Object.values(astronauts).map((astronaut, i) => (
          astronaut.button ? (
            <div class={cx(s.astronaut, s.button)}>
              <Button
                to={astronaut.type === 'mailto' ? `mailto:${astronaut.to}` : astronaut.to}
                label={astronaut.label}
                fullsize arrow transition='slideArrow'
              />
            </div>
          ) : (
            <Card customClass={s.astronaut}>
              <div class={s.inner}>
                <h3>{astronaut.name}</h3>
                <div class={s.desc}>
                  <p class={s.desktop}>{astronaut.desc}</p>
                  <p class={s.mobile}>{astronaut.title}</p>

                  {astronaut.email && (
                    <a class={s.email} href={`mailto:${astronaut.email}`}>
                      {astronaut.email}
                    </a>
                  )}
                  {astronaut.phone && (
                    <a class={s.phone} href={`tel:${astronaut.phone}`}>
                      {astronaut.phone}
                    </a>
                  )}

                </div>
              </div>
              <img alt={astronaut.name} src={require(`../images/${astronaut.image}`)} />
            </Card>
          )
        ))}
      </div>
    )
  }
}
