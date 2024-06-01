//Array - reduce() on object

let arr = [
  {
    id: 101,
    points: 4,
  },
  {
    id: 102,
    points: 2,
  },
  {
    id: 103,
    points: 10,
  },
];

console.log(arr);

let updated = arr.reduce(
  (p, c) => {
    return {
      points: [...p.points, c.points],
      sum: p.sum + c.points,
    };
  },
  {
    points: [],
    sum: 0,
  }
);

console.log(updated);
