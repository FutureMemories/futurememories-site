import { Component } from 'preact'
import cx from 'classnames'
import Base from '../_base'
import ProjectsBlock from '../components/projects-block'
import Moon from '../components/moon'
import FilterBlock from '../components/filter-block'
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

    // if (window.pageYOffset < (this.heroText.base.offsetTop + this.heroText.base.offsetHeight)) {
    //   this.heroText.base.style.transform = `translateY(-${(window.pageYOffset / 5).toFixed(1)}px)`
    // }

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

  render ({ data, categoryChange, firstView, root, caseCategory }) {
    return (
      <Base categoryChange={categoryChange} firstView={firstView} title={data.content.work.title} route={'/work/' + (caseCategory || '')} data={data} root={root}>
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
                class={cx(categoryChange && s.categoryChange, firstView && s.firstView)}
                ref={el => { this.heroText = el }}
                element='h1'
                markup={data.content.work.hero}
                trim={false}
              />
            </div>
            <div class={cx(s.work, firstView && s.firstView)}>

              <div class={s.projectsHeader} >
                <div class={s.text}>
                  <h1>{data.content.work.upToHeader}</h1>
                  <p>{data.content.work.upToSubheader}</p>
                </div>
                <FilterBlock
                  items={Object.keys(data.caseCategories).map(key => ({
                    href: key === 'all-projects' ? getLanguageLink('/work') : getLanguageLink('/work/' + key),
                    name: data.caseCategories[key].name
                  }))}
                  className={s.filterBlock}
                  page='work'
                />
              </div>

              <ProjectsBlock
                {...data.projectsBlock}
                baseKey={caseCategory}
                animateInBlocks
                projects={data.caseCategories[caseCategory || 'all-projects'].cases}
                allCases={data.allCases}
                firstView={firstView}
              />
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
