function hover() {
    if(mouse === false){
        mouse = true;

        document.getElementById('box1').addEventListener('mouseover', () => {
            document.getElementById('box1').style.backgroundColor = '#ab0534';
            document.getElementById('box1').style.transition = '0.7s'
            document.getElementById('p_box1').style.color = '#fff'
            document.getElementById('box_1').src = './img/icon_categories/1white.png';
        })

        document.getElementById('box2').addEventListener('mouseover', () => {
            document.getElementById('box2').style.backgroundColor = '#ab0534';
            document.getElementById('box2').style.transition = '0.7s'
            document.getElementById('p_box2').style.color = '#fff'
            document.getElementById('box_2').src = './img/icon_categories/2white.png';
        })

        document.getElementById('box3').addEventListener('mouseover', () => {
            document.getElementById('box3').style.backgroundColor = '#ab0534';
            document.getElementById('box3').style.transition = '0.7s'
            document.getElementById('p_box3').style.color = '#fff'
            document.getElementById('box_3').src = './img/icon_categories/3white.png';
        })

        document.getElementById('box4').addEventListener('mouseover', () => {
            document.getElementById('box4').style.backgroundColor = '#ab0534';
            document.getElementById('box4').style.transition = '0.7s'
            document.getElementById('p_box4').style.color = '#fff'
            document.getElementById('box_4').src = './img/icon_categories/4white.png';
        })

        document.getElementById('box5').addEventListener('mouseover', () => {
            document.getElementById('box5').style.backgroundColor = '#ab0534';
            document.getElementById('box5').style.transition = '0.7s'
            document.getElementById('p_box5').style.color = '#fff'
            document.getElementById('box_5').src = './img/icon categories/5white.png';
        })

        document.getElementById('box6').addEventListener('mouseover', () => {
            document.getElementById('box6').style.backgroundColor = '#ab0534';
            document.getElementById('box6').style.transition = '0.7s'
            document.getElementById('p_box6').style.color = '#fff'
            document.getElementById('box_6').src = './img/icon_categories/6white.png';
        })

        document.getElementById('box7').addEventListener('mouseover', () => {
            document.getElementById('box7').style.backgroundColor = '#ab0534';
            document.getElementById('box7').style.transition = '0.7s'
            document.getElementById('p_box7').style.color = '#fff'
            document.getElementById('box_7').src = './img/icon_categories/7white.png';
        })

        document.getElementById('box8').addEventListener('mouseover', () => {
            document.getElementById('box8').style.backgroundColor = '#ab0534';
            document.getElementById('box8').style.transition = '0.7s'
            document.getElementById('p_box8').style.color = '#fff'
            document.getElementById('box_8').src = './img/icon_categories/8white.png';
        })

        document.getElementById('box9').addEventListener('mouseover', () => {
            document.getElementById('box9').style.backgroundColor = '#ab0534';
            document.getElementById('box9').style.transition = '0.7s'
            document.getElementById('p_box9').style.color = '#fff'
            document.getElementById('box_9').src = './img/icon_categories/9white.png';
        })

        document.getElementById('box10').addEventListener('mouseover', () => {
            document.getElementById('box10').style.backgroundColor = '#ab0534';
            document.getElementById('box10').style.transition = '0.7s'
            document.getElementById('p_box10').style.color = '#fff'
            document.getElementById('box_10').src = './img/icon_categories/10white.png';
        })

        document.getElementById('box11').addEventListener('mouseover', () => {
            document.getElementById('box11').style.backgroundColor = '#ab0534';
            document.getElementById('box11').style.transition = '0.7s'
            document.getElementById('p_box11').style.color = '#fff'
            document.getElementById('box_11').src = './img/icon_categories/11white.png';
        })

        document.getElementById('box12').addEventListener('mouseover', () => {
            document.getElementById('box12').style.backgroundColor = '#ab0534';
            document.getElementById('box12').style.transition = '0.7s'
            document.getElementById('p_box12').style.color = '#fff'
            document.getElementById('box_12').src = './img/icon_categories/12white.png';
        })




    }else{
        mouse  = false;

        document.getElementById('box1').addEventListener('mouseout', () => {
            document.getElementById('box1').style.backgroundColor = 'transparent';
            document.getElementById('box1').style.transition = '0.7s';
            document.getElementById('box_1').src = './img/icon_categories/1.png';
            document.getElementById('p_box1').style.color = '#333';   
        })

        document.getElementById('box2').addEventListener('mouseout', () => {
            document.getElementById('box2').style.backgroundColor = 'transparent';
            document.getElementById('box2').style.transition = '0.7s'
            document.getElementById('p_box2').style.color = '#333'
            document.getElementById('box_2').src = './img/icon_categories/2.png';
        })

        document.getElementById('box3').addEventListener('mouseout', () => {
            document.getElementById('box3').style.backgroundColor = 'transparent';
            document.getElementById('box3').style.transition = '0.7s'
            document.getElementById('p_box3').style.color = '#333'
            document.getElementById('box_3').src = './img/icon_categories/3.png';
        })

        document.getElementById('box4').addEventListener('mouseout', () => {
            document.getElementById('box4').style.backgroundColor = 'transparent';
            document.getElementById('box4').style.transition = '0.7s'
            document.getElementById('p_box4').style.color = '#333'
            document.getElementById('box_4').src = './img/icon_categories/4.png';
        })

        document.getElementById('box5').addEventListener('mouseout', () => {
            document.getElementById('box5').style.backgroundColor = 'transparent';
            document.getElementById('box5').style.transition = '0.7s'
            document.getElementById('p_box5').style.color = '#333'
            document.getElementById('box_5').src = './img/icon_categories/5.png';
        })

        document.getElementById('box6').addEventListener('mouseout', () => {
            document.getElementById('box6').style.backgroundColor = 'transparent';
            document.getElementById('box6').style.transition = '0.7s'
            document.getElementById('p_box6').style.color = '#333'
            document.getElementById('box_6').src = './img/icon_categories/6.png';
        })

        document.getElementById('box7').addEventListener('mouseout', () => {
            document.getElementById('box7').style.backgroundColor = 'transparent';
            document.getElementById('box7').style.transition = '0.7s'
            document.getElementById('p_box7').style.color = '#333'
            document.getElementById('box_7').src = './img/icon_categories/7.png';
        })

        document.getElementById('box8').addEventListener('mouseout', () => {
            document.getElementById('box8').style.backgroundColor = 'transparent';
            document.getElementById('box8').style.transition = '0.7s'
            document.getElementById('p_box8').style.color = '#333'
            document.getElementById('box_8').src = './img/icon_categories/8.png';
        })

        document.getElementById('box9').addEventListener('mouseout', () => {
            document.getElementById('box9').style.backgroundColor = 'transparent';
            document.getElementById('box9').style.transition = '0.7s'
            document.getElementById('p_box9').style.color = '#333'
            document.getElementById('box_9').src = './img/icon_categories/9.png';
        })

        document.getElementById('box10').addEventListener('mouseout', () => {
            document.getElementById('box10').style.backgroundColor = 'transparent';
            document.getElementById('box10').style.transition = '0.7s'
            document.getElementById('p_box10').style.color = '#333'
            document.getElementById('box_10').src = './img/icon_categories/10.png';
        })

        document.getElementById('box11').addEventListener('mouseout', () => {
            document.getElementById('box11').style.backgroundColor = 'transparent';
            document.getElementById('box11').style.transition = '0.7s'
            document.getElementById('p_box11').style.color = '#333'
            document.getElementById('box_11').src = './img/icon_categories/11.png';
        })

        document.getElementById('box12').addEventListener('mouseout', () => {
            document.getElementById('box12').style.backgroundColor = 'transparent';
            document.getElementById('box12').style.transition = '0.7s'
            document.getElementById('p_box12').style.color = '#333'
            document.getElementById('box_12').src = './img/icon_categories/12.png';
        })
    }
}

let mouse = false;


document.getElementById('box1').addEventListener('mouseover', () => {
    hover();
})
document.getElementById('box2').addEventListener('mouseover', () => {
    hover();
})
document.getElementById('box3').addEventListener('mouseover', () => {
    hover();
})

document.getElementById('box4').addEventListener('mouseover', () => {
    hover();
})

document.getElementById('box5').addEventListener('mouseover', () => {
    hover();
})

document.getElementById('box6').addEventListener('mouseover', () => {
    hover();
})

document.getElementById('box7').addEventListener('mouseover', () => {
    hover();
})

document.getElementById('box8').addEventListener('mouseover', () => {
    hover();
})

document.getElementById('box9').addEventListener('mouseover', () => {
    hover();
})

document.getElementById('box10').addEventListener('mouseover', () => {
    hover();
})

document.getElementById('box11').addEventListener('mouseover', () => {
    hover();
})
document.getElementById('box12').addEventListener('mouseover', () => {
    hover();
})

$(function () {
    $('.menu-open').click(function (){
    $('.menu').toggleClass('show-menu')
    })
})