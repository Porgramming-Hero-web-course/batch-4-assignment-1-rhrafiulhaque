{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const isCircle = (shape: Circle | Rectangle): shape is Circle => {
    return "radius" in shape;
  };

  const calculateShapeArea = (shape: Circle | Rectangle): number => {
    if (isCircle(shape)) {
      return Math.PI * (shape.radius * shape.radius);
    } else {
      return shape.width * shape.height;
    }
  };

  console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
  console.log(
    calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    })
  );
}
