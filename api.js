
const doAjax = function()
{
    // Built by LucyBot. www.lucybot.com
    let queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryurl += '?' + $.param({
    'api-key': "6d702c8028ce45f88310c462b981aff1"
    });

    $.ajax({
        url: queryurl,
        method: 'GET'
    }).then(function(value)
    {
        console.log(value.response);
      for(i=0; i<value.response.docs.length; i++){
          rendercard(value.response.docs[i]);

      }
    })
}

doAjax();


const rendercard = function(cardinfo){
  let card = $(`<div class = "card">`)
  if(cardinfo.multimedia.length){
    let pic = "https://static01.nyt.com/" + cardinfo.multimedia[0].url;
    card.append(`<img class="cardImg" href=${pic}>`)
        
    }
    console.log(cardinfo.multimedia);
    let headline = cardinfo.headline.main;
    
    card.append(`<h1 class="headline">${headline}</h1>`);
    
    let snippet = cardinfo.snippet;

    card.append(`<p class = "snippet">${snippet}</p>`);
    
    $("#article").append(card);
}



