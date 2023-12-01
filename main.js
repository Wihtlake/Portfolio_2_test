     videosAll = document.getElementById('project').getElementsByTagName('video');
     index = videosAll.length;
for (let i = 0; i < index; i++) {
     function active(i){
          videosAll[i].addEventListener('mouseenter', function() {
               this.play();
          });
          videosAll[i].addEventListener('mouseleave', function() {
               this.pause();
          });
     }
     active(i);
}