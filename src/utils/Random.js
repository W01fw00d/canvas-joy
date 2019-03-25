class Random
{
  chooseFrom0To(max) {
    return Math.floor(Math.random() * max);
  }

  chooseInHalfTheRange(max)
  {
    return this.chooseInRange(Math.floor(max / 2), max);
  }

  chooseInRange(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
