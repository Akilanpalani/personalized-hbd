export type Content = {
  poster: string;
  name: string;
};

export const contents = [
  {poster: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: "Wish 1"},
  {poster: "/posters/hero.avif", name: "Wish 2"},
  {poster: "/posters/movie-banner.jpg", name: "Wish 3"},
  {poster: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: "Wish 4"},
  {poster: "/posters/movie-banner.jpg", name: "Wish 5"},
  {poster: "/posters/hero.avif", name: "Wish 6"},
];

export const randomWishesSet1 = contents
  .sort(()=> Math.random() - 0.5)
  .concat(contents.sort(()=> Math.random() - 0.5))
  .concat(contents.sort(()=> Math.random() - 0.5));

export const randomWishesSet2 = contents
  .sort(()=> Math.random() - 0.5)
  .concat(contents.sort(()=> Math.random() - 0.5))
  .concat(contents.sort(()=> Math.random() - 0.5))
  .sort(()=> Math.random() - 0.5);