class Painter
{
  constructor()
  {
    this.canvas = document.getElementById("canvas");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext("2d");
  }

  paintAll(color)
  {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  smoothPixels()
  {
  	this.context.translate(1, 1);
    this.context.lineWidth = 0.5;
  }

  drawRandomPositionStar(color)
  {
  	var x = Math.floor(Math.random() * this.canvas.width);
  	var y = Math.floor(Math.random() * this.canvas.height);

  	this.drawStar(x, y, 1, color);
  }

  drawStar(x, y, size, color)
  {
      this.context.fillStyle = color;
      this.context.fillRect(x, y, size, size);
  }

  drawBigStar(x, y, size)
  {
  	this.context.fillStyle = '#FFFFFF';
  	this.context.fillRect(x, y, size, size);
  	this.context.fillStyle = makeRandomColor();
  	this.context.fillRect(x + 1, y, size, size);
  	this.context.fillRect(x, y + 1, size, size);
  	this.context.fillRect(x - 1, y, size, size);
  	this.context.fillRect(x, y - 1, size, size);
  }

  makeRandomColor()
  {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';

      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
  }

}
