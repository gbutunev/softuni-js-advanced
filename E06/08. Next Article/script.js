function getArticleGenerator(articles) {
    return function () {
        let parent = document.getElementById('content');

        if (articles.length != 0) {
            let art = document.createElement('article');
            art.textContent = articles.shift();
            parent.appendChild(art);
        }
    }
}
