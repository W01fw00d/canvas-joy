class Artist
{
  constructor()
  {
    this.painter = new Painter();
    this.palette = new Palette();
  }

  paintTheCosmos()
  {
    this.createUniverse();
  }

  createUniverse()
  {
    this.paintAllCanvasBlack();
    this.painter.smoothPixels();
    this.createStars();
  }

  createStars()
  {
    for (var i = 0; i < this.calculateNStars(); i++) {
      this.painter.drawRandomPositionStar(this.palette.WHITE);
    }
  }

  calculateNStars()
  {
    const max_stars = 800;
    const n_stars = Math.floor(Math.random() * max_stars);

    return n_stars < (max_stars / 2)
      ? max_stars / 2
      : n_stars;
  }

  paintAllCanvasBlack()
  {
    this.painter.paintAll(this.palette.BLACK);
  }

}
