const BASE_URL = 'http://jsonplaceholder.typicode.com';

const renderPosts = (posts, mountPoint) => {
  // posts === Array;
  posts.forEach((post) => {
    // userId, id, title, body
    const $title = $('<h2>')
      .text(`${post.title} (${post.id})`)
      .addClass('title');
    const $body = $('<p>').text(post.body);
    let $footer;
    const $article = $('<article>')
      .append($title, $body);

    $.getJSON(`${BASE_URL}/users/${post.userId}`)
      .done((user) => {
        // name
        console.log(user);
        $footer = $('<h4>')
          .text(user.name)
          .addClass('footer');

        $article.append($footer);
        mountPoint.prepend($article);
      });

  });
};

$(() => {
  const $posts = $('#posts');

  const $button = $('#get-posts-btn');
  $button.click(() => {
    $posts.empty();
    $.ajax({
      url: `${BASE_URL}/posts`,
      method: 'GET',
      dataType: 'json',
      success: (posts) => {
        console.log(posts);
        renderPosts(posts.slice(5, 15), $posts);
      }
    });
  });

  const $form = $('#new-post-form');
  $form.on('submit', (event) => {
    event.preventDefault();
    const serialized = $form.serialize();
    $.post(`${BASE_URL}/posts`, serialized)
      .done((post) => {
        console.log(post);
        renderPosts([post], $posts);
      })
      .fail((err) => {
        console.error(err);
      });
  });
  
});
