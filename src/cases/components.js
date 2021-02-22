import { Component } from 'preact'
import cx from 'classnames'
import s from './components.sass'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import TextBlock from './components/text-block'
import BookmarkBlock from './components/bookmark-block'
import BrandBlock from './components/brand-block'
import CenterBlock from './components/center-block'
import ParallaxBumpBlock from './components/parallax-bump-block'
import ParallaxObjectBlock from './components/parallax-object-block'
import SlideInBlock from './components/slide-in-block'
import TextBlockMultiple from './components/text-block-multiple'
import TextGridBlock from './components/text-grid-block'
import TextTwoCol from './components/text-two-col'
import BackgroundImageWithTextBlock from './components/backgroundimage-with-text-block'

const c = (name, comp, extraClass) => <div class={cx(s.component, extraClass)}><div class={s.name}>{name}</div>{comp}</div>

export default class extends Component {
  render () {
    return (
      <div class={s.view}>
        {c('HeroHeader', <HeroHeader title='TITLE HERE' subtitle='Subtitle goes here' type='Tags goes here' dark />)}
        {c('LargeImage', <LargeImage src='cases/antistress-1.jpg' alt='' />)}
        {c('LargeImage with video', <LargeImage src='cases/retts-plus-video.jpg' video='retts-plus.mp4' background='#000301' />)}
        {c('TextBlock with link', <TextBlock title='Awesome title' text='And with an awesome title comes f-ing good text!' link={['Visit Google', 'https://google.com/']} background='white' color='black' />)}
        {c('TextBlock with image', <TextBlock color='black' title='Awesome title #2' text='And with an awesome title comes freaking good text!' image={['Paykartan Screenshoot - gothenburg', 'cases/paykartan-3.jpg']} />)}
        {c('BookmarkBlock with list', <BookmarkBlock title='Headline' text='Bacon ipsum dolor amet cupim pork chop pancetta meatloaf porchetta ham. Strip steak boudin pork loin flank doner. Porchetta ribeye pork tongue. Sausage landjaeger shankle bacon, buffalo capicola flank alcatra pastrami hamburger beef ribs pork chop jowl.' items={[{ name: 'list', image: 'icons/droplet.svg', alt: 'droplet icon' }, { name: 'items', image: 'icons/hash.svg', alt: 'hash icon' }, { name: ':)', image: 'icons/image.svg', alt: 'image icon' }]} background='white' color='black' />)}
        {c('BookmarkBlock with image + left align', <BookmarkBlock title='Title' text='Shoulder ground round cupim, meatloaf strip steak brisket pork loin venison pig turducken pork chop pancetta drumstick. Ham filet mignon jowl pork belly alcatra kielbasa doner venison fatback.' image='cases/mat-se-3.png' background='white' color='black' align='left' modifier='matSe' />)}
        {c('BrandBlock with picular modifier', <BrandBlock showcase='picular' background='#F2F5F6' />)}
        {c('CenterBlock with title/text', <CenterBlock title='Headline' text='Ham tenderloin meatloaf doner ham hock turkey shank ground round pork loin. Tri-tip alcatra meatloaf frankfurter ham short loin rump fatback. Meatball frankfurter t-bone pork loin swine buffalo tongue.' />)}
        {c('CenterBlock with title/background', <CenterBlock title='Ground round bresaola jerky shank shoulder kielbasa pork loin doner fatback.' src={{ path: 'cases/antistress-2.jpg', style: { maxHeight: '715px' } }} color='#ffffff' />)}
        {c('ParallaxBumpBlock', <ParallaxBumpBlock title='Title' text={['Pig beef ribs tri-tip ribeye swine fatback turducken chicken.', 'Hamburger short ribs bresaola flank, leberkas fatback cupim venison. Ball tip drumstick beef ribs turducken, burgdoggen pork belly sirloin frankfurter kielbasa bacon strip steak ham hock buffalo tenderloin turkey.']} items={[{ image: 'cases/antistress-phone-3.png', alt: 'AntiStress phone mockup', speed: -15, startPos: 53, width: '412px', align: 'right' }, { image: 'cases/antistress-phone-2.png', alt: 'AntiStress phone mockup', speed: -28, startPos: -30, width: '522px', align: 'right' }, { image: 'cases/antistress-phone-1.png', alt: 'AntiStress phone mockup', speed: 0, startPos: -115, width: '568px', align: 'right' }]} background='white' color='black' />)}
        {c('ParallaxObjectBlock diagonal', <ParallaxObjectBlock items={[{ image: 'cases/retts-plus-4.png', speed: -20, startPos: 17 }, { image: 'cases/retts-plus-5.png', speed: 11, startPos: -39 }]} background='white' color='black' diagonal />)}
        {c('ParallaxObjectBlock', <ParallaxObjectBlock items={[{ image: 'cases/paykartan-phone-1.png', alt: 'Paykartan mockup: start screen', speed: -20, startPos: 17 }, { image: 'cases/paykartan-phone-2.png', alt: 'Paykartan mockup: map view', speed: 11, startPos: -39 }]} background='white' color='black' />)}
        {c('SlideInBlock', <SlideInBlock title='Headliner' text={['Meatloaf salami kielbasa, jowl cupim frankfurter porchetta.', 'Prosciutto cow capicola pork burgdoggen.']} image={{ path: 'cases/mat-se-5.svg', width: 824, height: 262, positon: 'inside' }} background='white' color='black' />)}
        {c('SlideInBlock right align', <SlideInBlock title='Hea...dline' text='Biltong meatball chuck pastrami, tenderloin frankfurter shank turducken pig. Chicken short ribs ball tip tail ribeye. Burgdoggen ham hock sausage ball tip kielbasa, tongue doner capicola strip steak flank kevin venison.' image='cases/retts-plus-3.png' background='white' color='black' align='right' />)}
        {c('TextBlockMultiple', <TextBlockMultiple title='Another headline' text='Filet mignon tail andouille tri-tip ball tip spare ribs frankfurter. Rump tri-tip leberkas shankle prosciutto jerky pork boudin capicola venison.' content={['Pork belly swine alcatra flank cow. Tri-tip bacon tail jowl, filet mignon alcatra swine ribeye pancetta sirloin flank. Ball tip shoulder leberkas spare ribs doner. Prosciutto cow capicola pork burgdoggen.', 'Swine cow flank burgdoggen pastrami. Pastrami rump short ribs kevin shank. Leberkas filet mignon tail picanha jowl hamburger, short ribs venison burgdoggen short loin brisket pig. Meatloaf landjaeger fatback buffalo. Filet mignon meatloaf pork belly shank, boudin fatback swine ham hock picanha venison ribeye. Meatloaf salami kielbasa, jowl cupim frankfurter porchetta.']} background='white' color='black' />)}
        {c('TextGridBlock', <TextGridBlock blocks={[{ image: 'cases/bauer-university-2.png' }, { title: 'And... again this is a headline', desc: 'spare ribs pancetta meatball fatback swine shank brisket t-bone. Jowl meatloaf strip steak leberkas hamburger beef ribs.' }, { image: 'cases/bauer-university-3.png' }, { inView: 'inViewLeft', image: 'cases/bauer-university-4.png' }]} background='white' color='black' />)}
        {c('TextTwoCol with button', <TextTwoCol title='Lorem ipsum dolor sit amet' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' link={{ url: 'https://wearevoice.se', label: 'Visit wearevoice.se', targetBlank: true }} />)}
        {c('BackgroundImageWithTextBlock', <BackgroundImageWithTextBlock title='Lorem ipsum dolor sit amet' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' src={{ path: 'cases/wearevoice-bg-1.jpg', style: { maxHeight: '999px' } }} color='#EADFD8' />)}
      </div>
    )
  }
}
