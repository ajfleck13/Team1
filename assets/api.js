
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
    }).then(function(response)
    {
        console.log(response);
    })
}

doAjax();