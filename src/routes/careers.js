import { Component } from 'preact'
import Base from '../_base'
import Moon from '../components/moon'
import Button from '../components/button'
import TeamPictures from '../components/team-pictures'
import MarkupCustomElement from '../components/markup-custom-element'
import marked from 'marked'
import s from './careers.sass'

export default class extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
    this.heroText.base.style = undefined

    const hash = window.location.hash.substr(1)
    const element = document.getElementById(hash)
    if (element) {
      const { offsetParent, offsetTop } = element
      window.scrollTo(0, this.positions.offsetTop + offsetParent.offsetTop + offsetTop - 50)
    }
  }

  onScroll = () => {
    if (window.pageYOffset < (this.heroText.base.offsetTop + this.heroText.base.offsetHeight)) {
      this.heroText.base.style.transform = `translateY(-${(window.pageYOffset / 5).toFixed(1)}px)`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  render ({ data, root }) {
    return (
      <Base title={data.content.careers.title} route='/careers' data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.heroText}>
              <Moon
                position='bottomRight'
                size='large'
                background='blue'
                customClass={s.moon}
              />
              <MarkupCustomElement
                ref={el => { this.heroText = el }}
                element='h1'
                markup={data.content.careers.hero}
                trim={false}
              />
            </div>

            <div class={s.workplaces}>
              <div class={s.text}>
                <h1>{data.content.careers.modernHeader}</h1>
                <p>{data.content.careers.modernSubheader}</p>
              </div>
              <div class={s.content}>
                {Object.values(data.careersWorkplaces).map((row, i) => (
                  <div key={'workplace_' + i} class={s.workplace}>
                    <div class={s.image}>
                      <img alt={`workplace: ${row.label}`} src={require(`../images/${row.image}`)} />
                    </div>
                    <div class={s.desc}>
                      <h3>{row.label}</h3>
                      <p>{row.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {Object.values(data.careersPositions).length > 0 && (
              <div class={s.positions} ref={e => { this.positions = e }}>
                <div id='available-positions' class={s.text}>
                  <h1>{data.content.careers.availableHeader}</h1>
                  <p>{data.content.careers.availableSubheader}</p>
                </div>
                <div class={s.content}>
                  {data.careersPositions.map(row => (
                    <div key={'position_' + row.id} class={s.position}>
                      <div class={s.image}>
                        <img alt={`position: ${row.label}`} src={require(`../images/${row.image}`)} />
                      </div>
                      <div class={s.desc}>
                        <div id={row.id} class={s.title}>
                          <h3>{row.label}</h3>
                        </div>
                        <MarkupCustomElement element='p' markup={marked(row.text)} trim={false} />
                        <p class={s.tasks}>{row.tasks}</p>
                        <Button to={`mailto:${data.company.jobs}?subject=${row.subject}`} label='Apply' arrow transition='slide' small width='215' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <TeamPictures class={s.team} {...data.teamPictures} />

          </div>
        </div>
      </Base>
    )
  }
}
