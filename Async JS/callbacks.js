const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"},
];


function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)     // here function will happen in 1 second 
}

function createPosts(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback(); 
    }, 2000)      // this function will run after 2 sec so that is why it will not be included in getposts()
    // this is why async is useful
}

// getPosts();
createPosts({title: "Post Three", body: "This is post three"}, getPosts)