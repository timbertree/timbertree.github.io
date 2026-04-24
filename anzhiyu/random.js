var posts=["2026/03/24/init-1/","2026/03/24/init/","2026/03/24/1/","2026/03/24/hello-world/","2026/04/24/init2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };