var posts=["posts/53dec9d0.html","posts/knight2026.html","posts/UniCTF2026.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };