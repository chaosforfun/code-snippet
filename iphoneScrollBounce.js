function scrollable(node, container) {
  let parent = node
  while (parent !== container) {
    let overflow = getComputedStyle(parent).overflowY
    if (overflow === 'scroll' || overflow === 'auto') {
      return true
    }
    parent = parent.parentNode
  }
  return false
}

let content = this.node
    if (!content) return
    content.addEventListener('touchstart', function (event) {
      let pageY = event.touches[0].pageY
      this.allowUp = (this.scrollTop > 0);
      this.allowDown = (this.scrollTop < (this.scrollHeight - this.clientHeight));
      this.slideBeginY = pageY;
      this.skip = scrollable(event.touches[0].target, content)
    });

    content.addEventListener('touchmove', function (event) {
      if (this.skip) return
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
