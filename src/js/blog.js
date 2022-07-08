import blogData from "./../json/blog-data.json" assert { type: "json" };

const blogWrapper = document.querySelector(".content");

const createBlogEntry = (blogEntry) => {
  const blogEntryWrapper = document.createElement("article");
  const blogEntryTitle = document.createElement("h1");
  const blogEntryTitleTextNode = document.createTextNode(blogEntry.title);

  const blogEntryContent = document.createElement("p");
  const blogEntryContentTextNode = document.createTextNode(blogEntry.content);

  const blogEntryInfo = document.createElement("span");
  const blogEntryInfoTextNode = document.createTextNode(`From: ${blogEntry.author} / Published: ${blogEntry.date}`);

  blogEntryTitle.appendChild(blogEntryTitleTextNode);
  blogEntryWrapper.appendChild(blogEntryTitle);

  blogEntryInfo.appendChild(blogEntryInfoTextNode);
  blogEntryWrapper.appendChild(blogEntryInfo);

  blogEntryContent.appendChild(blogEntryContentTextNode);
  blogEntryWrapper.appendChild(blogEntryContent);

  blogEntryInfo.classList.add("blog-entry__info");
  blogEntryTitle.classList.add("blog-entry__title");
  blogEntryContent.classList.add("blog-entry__content");
  blogEntryWrapper.classList.add("blog-entry");
  return blogEntryWrapper;
};

for (const blogEntry of blogData) {
  const blogDom = createBlogEntry(blogEntry);
  blogWrapper.appendChild(blogDom);
}
