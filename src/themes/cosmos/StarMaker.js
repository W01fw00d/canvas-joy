class StarMaker
{
  constructor(painter, palette) {
    this.painter = painter;
    this.palette = palette;
  }

  drawRandomPositionStar()
  {
    this.painter.pixelRandom(1, this.palette.WHITE);
  }

  drawRandomBigStar()
  {
    this.painter.randomPlus(this.palette.WHITE, this.palette.makeRandomColor());
  }

}
