function scrollToElement(elementSelector, instance=0)
{
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance)
        {
            elements[instance].scrollIntoView({behavior: 'smooth' });
        }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
console.log(link1);

link1.addEventListener('click',() =>{
   scrollToElement('.container');
})
link2.addEventListener('click',() =>{
    scrollToElement('.container',1);
 })
 link3.addEventListener('click',() =>{
    scrollToElement('.column');
 })
console.log("H");
