function trigger(el, eventType, props) {
  const event = new CustomEvent(eventType, {detail: props})
  el.dispatchEvent(event)
}
