function getScrollContainer(node, container) {
  let parent = node
  while (parent !== container) {
    let overflow = getComputedStyle(parent).overflowY
    if (overflow === 'scroll' || overflow === 'auto') {
      return parent
    }
    parent = parent.parentNode
  }
  return parent
}

let content = this.node
    if (!content) return
    content.addEventListener('touchstart', function (event) {
      let pageY = event.touches[0].pageY
      let container = getScrollContainer(event.touches[0].target, content)
      this.allowUp = (container.scrollTop > 0);
      this.allowDown = (container.scrollTop < (container.scrollHeight - container.clientHeight));
      this.slideBeginY = pageY;
    });

    content.addEventListener('touchmove', function (event) {
      let pageY = event.touches[0].pageY
      let up = (pageY > this.slideBeginY);
      let down = (pageY <= this.slideBeginY);
      this.slideBeginY = pageY;
      if ((up && this.allowUp) || (down && this.allowDown)) {
        event.stopPropagation();
      } else {
        event.preventDefault();
      }
    });
