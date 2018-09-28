const clearFields = function()
{
    $(".inputfield").val("");
}

const doAjax = function()
{
    let searchterm = $("#searchTerm").val();
    let startyear = $("#startYear").val();
    let endyear = $("#endYear").val();
    let queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryurl += '?' + $.param({
        'q': searchterm,
        // 'begin-date': startyear + "0101",
        // 'end-date' : endyear + "1231",
        'api-key': "6d702c8028ce45f88310c462b981aff1",
    });

    $.ajax({
        url: queryurl,
        method: 'GET'
    }).then(function(value)
    {
        $("#article").empty();
        for(i=0; i<value.response.docs.length; i++)
        {
          rendercard(value.response.docs[i]);
        }
    })
}

$("#submit").click(doAjax);
$("#clear").click(clearFields);


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



