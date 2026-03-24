var posts=["2026/03/24/init-1/","2026/03/24/hello-world/","2026/03/24/init/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };