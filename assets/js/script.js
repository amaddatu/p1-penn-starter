var $response = $('#response');
fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=100')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for(var i = 0; i < data.length; i++){
      // create
      var $a = $("<a>");

      // modify
      $a.attr({
        href: data[i].url,
        title: data[i].description
      });

      $a.text(data[i].url);

      // append
      $response.append($a);
    }

  });
