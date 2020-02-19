import Markup from 'preact-markup'

export default class MarkupCustomElement extends Markup {
  render ({ element, ...props }) {
    const result = super.render(props)
    result.nodeName = element
    return result
  }
}
