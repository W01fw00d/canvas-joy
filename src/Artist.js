class Artist
{
  constructor()
  {
    this.random = new Random();
    this.painter = new Painter(this.random);
    this.palette = new Palette(this.random);
  }

  paintTheCosmos()
  {
    new TheCosmos(
      this.painter,
      this.palette,
      new Iterator(),
      this.random,
      new StarMaker(
        this.painter,
        this.palette
      )
    ).paint();
  }

}
