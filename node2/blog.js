var ARTICLES = [
  {'title':'My Second Web Class','content':'Not too much here', 'slug':'second-content'}
];

function addArticle(article) {
  //article.title, article.content, article.slug
  if (!article.title || !article.content || !article.slug) {
    return "Invalid Article Parameters";
  } else {
    ARTICLES.push(article);
    console.log(ARTICLES);
    return "";
  }
}

function deleteArticle(slug) {
  var len = ARTICLES.length;
  for(var i = 0; i < len; i++) {
    if (slug == ARTICLES[i].slug) {
      ARTICLES.splice(i, 1);
      return;
    }
  }
}

function getArticles() {
  return ARTICLES;
}

function getArticleWithSlug(slug) {
  var len = ARTICLES.length;
  for(var i = 0; i < len; i++) {
    if (slug == ARTICLES[i].slug) {
      return ARTICLES[i];
    }
  }
  return undefined;
}

//Controller
function controllerGetArticles(req, res) {
  res.render('articles', {'articles':getArticles()});
}

function controllerGetArticleWithSlug(req, res) {
  var article = getArticleWithSlug(req.params.slug);
  if (article)
    res.render('article', {'article':article});
  else{
    res.status(404);
    res.send("Content not found");
  }
}

function controllerAddArticle(req,res) {
  article = {title: req.body.title, content: req.body.content, slug:req.body.slug};
  result = addArticle(article);
  if (result != "") {
    res.status(201);
    res.render('articles', {'articles':getArticles()});
  } else {
    res.status(400);
    res.send(result);
  }
}

module.exports = {
  getArticles: controllerGetArticles,
  getArticleWithSlug:controllerGetArticleWithSlug,
  postArticle: controllerAddArticle
}
