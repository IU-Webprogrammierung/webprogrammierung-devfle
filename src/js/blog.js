const createBlogEntry = (blogEntry) => {
  const blogEntryWrapper = document.createElement('article');
  const blogEntryTitle = document.createElement('h3');
  const blogEntryTitleTextNode = document.createTextNode(blogEntry.title);

  const blogEntryContent = document.createElement('p');
  const blogEntryContentTextNode = document.createTextNode(blogEntry.content);

  const blogEntryInfo = document.createElement('span');
  const blogEntryInfoTextNode = document.createTextNode(`From: ${blogEntry.author} / Published: ${blogEntry.date}`);

  blogEntryTitle.appendChild(blogEntryTitleTextNode);
  blogEntryWrapper.appendChild(blogEntryTitle);

  blogEntryInfo.appendChild(blogEntryInfoTextNode);
  blogEntryWrapper.appendChild(blogEntryInfo);

  blogEntryContent.appendChild(blogEntryContentTextNode);
  blogEntryWrapper.appendChild(blogEntryContent);

  blogEntryInfo.classList.add('blog-entry__info');
  blogEntryTitle.classList.add('blog-entry__title');
  blogEntryContent.classList.add('blog-entry__content');
  blogEntryWrapper.classList.add('blog-entry');
  return blogEntryWrapper;
};

const blogWrapper = document.querySelector('.content');
(async () => {
  const response = await fetch('./../json/blog-data.json');
  const blogData = await response.json();

  blogData.forEach((blogEntry) => {
    const blogDom = createBlogEntry(blogEntry);
    blogWrapper.appendChild(blogDom);
  });
})();
