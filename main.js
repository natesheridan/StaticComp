
const cardContainer = document.querySelector('.card-container');


let counter = 1
articles.forEach((article) => {
    counter++;
    pushArticle(article);
})



function pushArticle(article) {
    setTimeout(() => {
        cardContainer.innerHTML += `
            <article class="card" id="${counter}">
                <img src="${article.image}">
                <section class="card-content">
                    <div class="title">
                        <p>${article.name}</p>
                        <p class="date">${article.date}</p>
                    </div>
                    <div class="link">
                        <p>${article.link}</p>
                    </div>
                    <div class="playlist">
                        <p>Playlist:</p>
                        <p class="pl-name">${article.playlist}</p>
                    </div>
                    <div class="attachments">
                        <p>Attachments</p>
                    <p class="num-attachments">${article.attachments}</p>
                    </div>
                </section>
                <span class="share"><i class="fa fa-share" aria-hidden="true"></i></span>
                <section class="views">
                    <p class="label">Views:</p>
                    <p class="counter">${article.views}</p>
                </section>
            </article>
        `
    }, counter*75)
}