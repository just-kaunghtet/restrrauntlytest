const item=document.querySelectorAll('.menu-item')
const menu=document.querySelectorAll('.menuInfo')
const special=document.querySelectorAll('.specialInfo')
const dish=document.querySelectorAll('.specialEach')
const active=document.querySelector('.eventSession.active')
var next=active.nextElementSibling
var next1=next.nextElementSibling
item.forEach((item)=>
{
    item.addEventListener('click',()=>
    {
    menu.forEach((menu)=>
    {
        if (item.id==menu.id)
        {
            menu.classList.add('active')
        }
        else if (item.id=='all')
        {
              menu.classList.add('active')
        }
        else
        {
            menu.classList.remove('active')
        }
    })
})    
})
special.forEach((special)=>
{
    dish.forEach((dish)=>
    {
        special.addEventListener('click',()=>
        {
            removeActiveClasses()
            special.classList.add('active')
            if(dish.id==special.id)
            {
                dish.classList.add('active')
            }
            else
            {
                dish.classList.remove('active')
            }
        })  
    })
      
})
function removeActiveClasses()
{
    special.forEach(special => //select previous active panel
    {
        special.classList.remove('active')    //remove it from active
    })
}
if(active.classList.contains('active'))
    {
    next.classList.add('active')
    active.classList.remove('active')
    }
    if(next.classList.contains('active'))
    {
    next1.classList.add('active')
    next.classList.remove('active')
    }
    if(next1.classList.contains('active'))
    {
    active.classList.add('active')
    next1.classList.remove('active')
    }