var bg = ['../images/background.gif', '../images/background2.gif']
document.querySelector("#bg1").addEventListener("click",function()
{
    document.querySelector("#background_image img").src= bg[0];
})
document.querySelector("#bg2").addEventListener("click",function()
{
    document.querySelector("#background_image img").src= bg[1];
})
