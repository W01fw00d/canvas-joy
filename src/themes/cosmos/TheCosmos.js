class TheCosmos
{
  constructor(
    painter,
    palette,
    iterator,
    random,
    starMaker
  ) {
    this.painter = painter;
    this.palette = palette;
    this.iterator = iterator;
    this.random = random;
    this.starMaker = starMaker;
  }

  paint()
  {
    this.createUniverse();
  }

  createUniverse()
  {
    this.paintTheVoid();
    this.createCommonStars();
    this.createBigStars();
    this.createMilkyWay();
  }

  paintTheVoid()
  {
    this.painter.all(this.palette.BLACK);
  }

  createCommonStars()
  {
    this.iterator.do(
      this.random.chooseInHalfTheRange(800),
      this.starMaker.drawRandomPositionStar,
      this
    );
  }

  createBigStars()
  {
    this.iterator.do(
      this.random.chooseInHalfTheRange(200),
      this.starMaker.drawRandomBigStar,
      this
    );
  }

  createMilkyWay()
  {
    this.starMaker.drawMilkyWay();
  }

}
