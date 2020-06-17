// e259893db0a54b5188d7d8fbd0dae26b
// http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e259893db0a54b5188d7d8fbd0dae26b
const sources = 'bbc-news';
const apiKey = 'e259893db0a54b5188d7d8fbd0dae26b';
const newsContainer = document.getElementById('newsContainer');
const xhr = new XMLHttpRequest();
let articles;
let html = '';
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status == 200) {
        let news = JSON.parse(this.responseText);
        articles = news.articles;
        console.log(articles);
        articles.forEach((element, index) => {

            html += ` <div class="card">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                            <b>Breaking News ${index + 1}:${element[`title`]}</b>
                        </button>
                    </h2>
                </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsContainer">
                    <div class="card-body">
                      ${element[`description`]} <a href=${element.url} target="_blank">Read More</a>                                 
        
                    </div>
                </div>
            </div>`

        })
        newsContainer.innerHTML = html;
    }
    else {
        console.error('Content Cannot Be Fetched');
    }
}
xhr.send();
