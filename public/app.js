window.onload = function(){
    var url = 'https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=6262eb7072f24dc9add178a80e8711d4';
    makeRequest("GET", url, requestComplete);
  }

  var makeRequest = function(method, url, callback){
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = callback;
    request.send();
  }

  var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var data = JSON.parse(jsonString);
    display(data);
  }

  var display = function(data){
    console.log(data);
    var newsContainer = document.getElementById('news');
    console.log(data.articles);
    data.articles.forEach(function(article){
      var newsArticle = document.createElement('a');
      newsArticle.href = article.url;
      newsArticle.innerText = "\n" + article.title;
      newsContainer.appendChild(newsArticle);
    })

  }
