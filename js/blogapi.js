$(function(){
    fetch('//souvallblog.herokuapp.com/GetTopXPosts/5')
    .then(response => response.json())
    .then(function(data){
        let blogUrl = `//souvallblog.herokuapp.com/StephenSouvallBlog/`;

        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        //identify selector in portfolio where the api data goes
        let blogAnchor = $("#blog1 > div.blog-info > h6 > a");
        //everything that will go after url above
        let blogLink = `${blogUrl}${data[0].slug}`;

        //set title text
        blogAnchor.text(data[0].title);
        //set href attribute
        blogAnchor.attr("href", blogLink);
        $("#blog1 > div.blog-info > div.btn-bar > a").attr("href", blogLink);

        //make image a link to the blog as well
        $("#blog1 > div.blog-img > a").attr("href", blogLink)
        //set image for card by setting src attribute
        $("#blog1 > div.blog-img > a > img").attr("src", `data:${data[0].contentType};base64,${data[0].imageData}`);
        $("#blog1 > div.blog-info > p").text(data[0].abstract);

        
        blogUrl = `//souvallblog.herokuapp.com/StephenSouvallBlog/`;

        blogAnchor = $("#blog2 > div.blog-info > h6 > a");
        //everything that will go after url above
        blogLink = `${blogUrl}${data[1].slug}`;
        $("#blog2 > div.blog-info > div.btn-bar > a").attr("href", blogLink);

        //set title text
        blogAnchor.text(data[1].title);
        //set href attribute
        blogAnchor.attr("href", blogLink);

        //make image a link to the blog as well
        $("#blog2 > div.blog-img > a").attr("href", blogLink)
        //set image for card by setting src attribute
        $("#blog2 > div.blog-img > a > img").attr("src", `data:${data[1].contentType};base64,${data[1].imageData}`);
        $("#blog2 > div.blog-info > p").text(data[1].abstract);


        blogUrl = `//souvallblog.herokuapp.com/StephenSouvallBlog/`;

        blogAnchor = $("#blog3 > div.blog-info > h6 > a");
        //everything that will go after url above
        blogLink = `${blogUrl}${data[2].slug}`;
        $("#blog3 > div.blog-info > div.btn-bar > a").attr("href", blogLink);

        //set title text
        blogAnchor.text(data[2].title);
        //set href attribute
        blogAnchor.attr("href", blogLink);

        //make image a link to the blog as well
        $("#blog3 > div.blog-img > a").attr("href", blogLink)
        //set image for card by setting src attribute
        $("#blog3 > div.blog-img > a > img").attr("src", `data:${data[2].contentType};base64,${data[2].imageData}`);
        $("#blog3 > div.blog-info > p").text(data[2].abstract);


        blogUrl = `//souvallblog.herokuapp.com/StephenSouvallBlog/`;

        blogAnchor = $("#blog4 > div.blog-info > h6 > a");
        //everything that will go after url above
        blogLink = `${blogUrl}${data[3].slug}`;
        $("#blog4 > div.blog-info > div.btn-bar > a").attr("href", blogLink);

        //set title text
        blogAnchor.text(data[3].title);
        //set href attribute
        blogAnchor.attr("href", blogLink);

        //make image a link to the blog as well
        $("#blog4 > div.blog-img > a").attr("href", blogLink)
        //set image for card by setting src attribute
        $("#blog4 > div.blog-img > a > img").attr("src", `data:${data[3].contentType};base64,${data[3].imageData}`);
        $("#blog4 > div.blog-info > p").text(data[3].abstract);

        blogUrl = `//souvallblog.herokuapp.com/StephenSouvallBlog/`;

        blogAnchor = $("#blog5 > div.blog-info > h6 > a");
        //everything that will go after url above
        blogLink = `${blogUrl}${data[4].slug}`;
        $("#blog5 > div.blog-info > div.btn-bar > a").attr("href", blogLink);

        //set title text
        blogAnchor.text(data[4].title);
        //set href attribute
        blogAnchor.attr("href", blogLink);

        //make image a link to the blog as well
        $("#blog5 > div.blog-img > a").attr("href", blogLink)
        //set image for card by setting src attribute
        $("#blog5 > div.blog-img > a > img").attr("src", `data:${data[4].contentType};base64,${data[4].imageData}`);
        $("#blog5 > div.blog-info > p").text(data[4].abstract);


    });

});