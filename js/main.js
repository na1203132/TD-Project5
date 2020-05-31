
let $captitle= [];
let $caption= [];

$("p").hide();
$("span").hide();

for(let i = 1; i <13; i+=1){
    $captitle[i]=$(`.c${i} span`).text().toLowerCase();
    $caption[i]=$(`.c${i} p`).text().toLowerCase();
}

$('.lb-caption').html('<span>caption title</span>');

$('#search').on('input',function(){
    $(".img").hide();
    let getinput = $('#search').val().toLowerCase();
    console.log(getinput);
        for (let j = 1; j<13; j+=1){
          if (getinput.length > 6){
            if (($caption[j].search(getinput) === 0) || ($caption[j].search(getinput) > 0)  ){
                $(`.c${j}`).show();
            }
            }

        else if (($captitle[j].search(getinput) > 0) || ($caption[j].search(getinput) > 0)){
                $(`.c${j}`).show();}    

        else if (($captitle[j].search(getinput) === 0) || ($caption[j].search(getinput) === 0)){
                $(`.img`).show();
            }

        else{
                $(`.c${j}`).hide();
            }
            
    }
    
});



    lightbox.option({
        'resizeDuration': 200,
        'maxWidth': 600,
        'maxHeight': 500,
        'alwaysShowNavOnTouchDevices': true,
        'positionFromTop':300,
        'showImageNumberLabel': false,
        'fitImagesInViewport': true
      })



