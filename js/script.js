'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post');

  for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
  /* remove contents of titleList */
  /* ... */

  /* find all the articles and save them to variable: articles */
  /* ... */

  let html = '';

  for(let article of articles){
    /* get the article id */
    /* ... */

    /* find the title element */
    /* ... */

    /* get the title from the title element */
    /* ... */

    /* create HTML of the link */
    /* ... */

    /* insert link into html variable */
    html = html + linkHTML;
  }

  titleList.innerHTML = html;
}

generateTitleLinks();