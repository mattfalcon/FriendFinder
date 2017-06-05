// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    name: "Josh Innes",
    photo: "http://media.philly.com/images/122915-Josh-Innes.jpg",
    scores: [5, 4, 3, 2, 1, 5, 5, 1, 5, 5]
  },
    {
    name: "Marc Vandermeer",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdIAAAAJGFkMDA5NzVkLWQ2NzAtNDkzNC04YmIwLWQ1NjUwZjUyNDFlZQ.jpg",
    scores: [5, 4, 3, 2, 1, 3, 3, 3, 3, 3]
  },
  {
    name: "Lance Zierlin",
    photo: "https://i.ytimg.com/vi/A5sfTPD50XY/maxresdefault.jpg",
    scores: [1, 2, 4, 5, 1, 1, 1, 1, 1, 1]
  },
  {
    name: "ND Kalu",
    photo: "http://images2.houstonpress.com/imager/u/original/6734422/koch_kalu.jpg",
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;