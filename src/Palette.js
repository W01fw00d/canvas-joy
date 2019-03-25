class Palette
{
  constructor(random)
  {
    this.random = random;

    this.setColors();
  }

  setColors()
  {
    this.BLACK = '#000000';
    this.WHITE = '#FFFFFF';
  }

  makeRandomColor()
  {
      const letters = '0123456789ABCDEF'.split('');
      let color = '#';

      for (var i = 0; i < 6; i++) {
          color += letters[this.random.chooseFrom0To(16)];
      }

      return color;
  }

}
