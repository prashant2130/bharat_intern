// Function for all drop downers
var count = 0;
const dropShutter = (text, nameofContainer,rotator)=>{
    nameofContainer.addEventListener('click', ()=>{
        if(count % 2 == 0){
            var d_d_c_para = document.createElement('p')
            d_d_c_para.id
            d_d_c_para.innerText = text;
            nameofContainer.appendChild(d_d_c_para);
            // rotator.style.textTransform = 'lowercase'
            rotator.innerText = 'x'
            count++;  
        }

        else{
            // rotator.style.textTransform = 'capitalize'
            rotator.innerText = '+'
            nameofContainer.removeChild(nameofContainer.lastElementChild)
            count++;
        }
    });
};

var drop_down_Container = document.getElementById("drop_down");
var rotator = document.getElementById('rotator')
var words1 = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"

dropShutter(words1, drop_down_Container, rotator)



var dropDown1 = document.getElementById('drop_down1');
var words = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."

var rotator1 = document.getElementById('rotator1')
dropShutter(words, dropDown1,rotator1);



// --------------------------------------------------------------------

var image_container = document.getElementById('main-image')

image_container.addEventListener('mouseover', ()=>{
    console.log('hello')
    image_container.style.animation = 'blink 0.32s ease-in  0.1s forwards'
})