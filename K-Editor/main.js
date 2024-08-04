let $container = null

const _createContainerElement = (parentNode) => {
  if(!parentNode) throw new Error(`
    please be sure that you provide parent node
  `);
  const element = document.createElement('canvas')
  element.style = styles
  parentNode.appendChild(element)
  return element;
}

const _subscribeEvents = () => {
  $container.node.addEventListener('keydown', handleKeyDown)
  $container.node.addEventListener('click', handleClick)
  $container.node.addEventListener('focus', handleFocus)
}

const initEditor = (parentNode) => {
  Object.defineProperty($container, 'node', {
    writable: false,
    configurable: false,
    enumerable: false,
    value: _createContainerElement(parentNode)
  })
  _subscribeEvents()
}
