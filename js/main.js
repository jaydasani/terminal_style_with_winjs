const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click',()=>{
    const aboutBox = new WinBox({
        title:'About me',
        width:'300px',
        height:'300px',
        top:50,
        right:50,
        bottom:50,
        left:50,
        mount:aboutContent,
        onfocus:function(){
            this.setBackground('#f71d05')
        },
        onblur:function(){
            this.setBackground('#748a87')
        },
    })
})

contact.addEventListener('click',()=>{
    const contactBox = new WinBox({
        title:'Contact me',
        background:'#f71d05',
        width:'300px',
        height:'300px',
        top:300,
        right:50,
        bottom:50,
        left:850,
        mount:contactContent,
        onfocus:function(){
            this.setBackground('#f71d05')
        },
        onblur:function(){
            this.setBackground('#748a87')
        },
    })
})