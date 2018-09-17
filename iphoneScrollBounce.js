let content = this.node
    content.addEventListener('touchstart', function (event) {
      let pageY = event.touches[0].pageY
      this.allowUp = (this.scrollTop > 0);
      this.allowDown = (this.scrollTop < (this.scrollHeight - this.clientHeight));
      this.slideBeginY = pageY;
    });

    content.addEventListener('touchmove', function (event) {
      let pageY = event.touches[0].pageY
      let up = (pageY > this.slideBeginY);
      let down = (pageY < this.slideBeginY);
      this.slideBeginY = pageY;
      if ((up && this.allowUp) || (down && this.allowDown)) {
        event.stopPropagation();
      } else {
        event.preventDefault();
      }
    });
