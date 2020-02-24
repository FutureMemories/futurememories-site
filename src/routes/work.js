import { Component } from 'preact'
import Base from '../_base'
import ProjectsBlock from '../components/projects-block'
import Moon from '../components/moon'
import MarkupCustomElement from '../components/markup-custom-element'
import s from './work.sass'
import getLanguageLink from '../utils/getLanguageLink'

export default class extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
    this.heroText.base.style = undefined
    this.workPlanetM.base.style = undefined
    this.workPlanetXS.base.style = undefined
  }

  onScroll = () => {
    this.scrollPoint = window.pageYOffset + (window.innerHeight / 1.4)

    if (window.pageYOffset < (this.heroText.base.offsetTop + this.heroText.base.offsetHeight)) {
      this.heroText.base.style.transform = `translateY(-${(window.pageYOffset / 5).toFixed(1)}px)`
    }

    // Parallax effect on 'Partners' block
    const planetPartnersScroll = this.scrollPoint - (this.workPartnersBlock.offsetTop / 1.1)
    if (planetPartnersScroll > 0 && window.pageYOffset < (this.workPartnersBlock.offsetTop + this.workPartnersBlock.offsetHeight)) {
      this.workPlanetXSPosition = (planetPartnersScroll / 7).toFixed(1)
      this.workPlanetM.base.style.transform = `scale(1.56) translateY(${(planetPartnersScroll / 25).toFixed(1)}px`
      this.workPlanetXS.base.style.transform = `scale(0.40) translateY(${this.workPlanetXSPosition < 0 ? '' : '-'}${Math.abs(this.workPlanetXSPosition)}px`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  render ({ data, root }) {
    return (
      <Base title={data.content.work.title} route='/work' data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.welcome}>
              <Moon
                position='bottomLeft'
                size='medium'
                background='red'
                customClass={s.moon}
              />
              <MarkupCustomElement
                ref={el => { this.heroText = el }}
                element='h1'
                markup={data.content.work.hero}
                trim={false}
              />
            </div>

            <div class={s.work}>
              <div class={s.text}>
                <h1>{data.content.work.upToHeader}</h1>
                <p>{data.content.work.upToSubheader}</p>
              </div>
              <ProjectsBlock {...data.projectsBlock} allProjects={data.allCases} allCases={data.allCases} />
            </div>

            <div class={s.partners} ref={(el) => { this.workPartnersBlock = el }}>
              <Moon
                position='topRight'
                size='extraSmall'
                background='blue'
                customClass={s.smallMoon}
                ref={(el) => { this.workPlanetXS = el }}
              />
              <Moon
                position='topLeft'
                size='medium'
                background='blue'
                customClass={s.moon}
                style='opacity: 0.5;'
                ref={(el) => { this.workPlanetM = el }}
              />
              <div class={s.text}>
                <h1>{data.content.work.partnersHeader}</h1>
                <p>{data.content.work.partnersSubheader}</p>
              </div>
              <div class={s.content}>
                {Object.values(data.company.partners).map(partner => {
                  const ElementTag = partner.link ? 'a' : 'div'
                  return (
                    <ElementTag href={getLanguageLink(partner.link)} key={'partner_' + partner.name} class={s.partner}>
                      <img alt={(partner.alt || `${partner.name} logo`)} src={require(`../images/${partner.logo}`)} />
                    </ElementTag>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </Base>
    )
  }
}
