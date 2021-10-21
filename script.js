document.addEventListener('DOMContentLoaded', function(){
     let content = document.querySelector('.container');
     content.style.display = 'none';
     let load = document.querySelector('.load');
     let rotation =0;
     let t = setInterval(function(){
         rotation += 8;
         load.style.transform = 'rotate(' + rotation + 'deg)';
         let rgb = () => Math.round(Math.random()*255);
        load.style.backgroundColor = 'rgb(' + rgb() +','+ rgb() +','+ rgb() +')';
    }, 60)
    window.onload = function(){
        clearInterval(t);
        let preloaded = document.querySelector('.preloaded');
        preloaded.style.display = 'none';
        let content = document.querySelector('.container');
        content.style.display='block';
    }
})