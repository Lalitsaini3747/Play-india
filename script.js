let faqbox = document.querySelectorAll('.faq .faq-con .box');

faqbox.forEach(box => {

    box.onclick = () => {
        let contant = box.querySelector('.faqcontant');
        let icon = box.querySelector('i');

        if(contant.classList.contains('active')){
            contant.classList.remove(active)
        }else{
            document.querySelectorAll('.faq .faq-con .box .faqcontant').forEach(contains =>{
                contains.classList.remove('active')
            })
            contant.classList.add(active)
        }

        if(icon.classList.contains('bx-minus')){
            icon.classList.replace('bx-minus', 'bx-plus')
        }else{
            document.querySelectorAll('.faq .faq-con .box i').forEach(icons =>{
                icons.classList.replace('bx-minus', 'bx-plus')
            })
            icon.classList.replace('bx-plus', 'bx-minus')
        }
    }
})