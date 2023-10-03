

const initialState = {
  posts : [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('04-04-2023'),
      author: 'John Doe',
      category: 'Sport'
},
{
  id: '2',
  title: 'Article title',
  shortDescription: 'Short description of the article...',
  content: 'Main content of the article',
  publishedDate: new Date('04-04-2023'),
  author: 'Alan Poe',
  category: 'News'
},
{
  id: '3',
  title: 'Article title',
  shortDescription: 'Short description of the article...',
  content: 'Main content of the article',
  publishedDate: new Date('04-04-2023'),
  author: 'Olga Tokarczuk',
  category: 'Movies'
}
  ],
  categories: ["Sport", "News", "Movies"],
};

export default initialState;