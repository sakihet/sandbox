case class Point(_x: Int, _y: Int) {
  val x = _x
  val y = _y

  def +(p: Point): Point = {
    new Point(x + p.x, y + p.y)
  }

  override def toString(): String = "(" + x + ", " + y + ")"
}

object Hello {
  def main(args: Array[String]) = {
    println("hello, world")
    val p1 = new Point(1, 2)
    val p2 = new Point(2, 3)
    println(p1)
    println(p2)
    println(p1 + p2)
  }
}
