var setupSportNews = function(){
  var url2 = 'https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=latest&apiKey=6262eb7072f24dc9add178a80e8711d4';
  makeRequest("GET", url2, requestComplete);
}

var makeRequest = function(method, url2, callback){
  var request = new XMLHttpRequest();
  request.open(method, url2);
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
  var sportContainer = document.getElementById('sport');
  data.articles.forEach(function(article){
    var sportArticle = document.createElement('a');
    sportArticle.href = article.url;
    sportArticle.innerText = "\n" + article.title;
    sportContainer.appendChild(sportArticle);
  })

}