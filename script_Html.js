      
      var i=0;
      var imagees =[];
      var time =1700;
       imagees [0]='images7.png';
      imagees [1]='docoad.jpg';
      imagees [2]='images).jpg';
      imagees [3]='ima.jpg';

      function changeImg (){
      document.slide.src=imagees[i];
      if (i<imagees.length-1){
          i++;
          
      }
      else {
          i=0;
      }
      setTimeout("changeImg()",time);
      }
      window.onload=changeImg;
       
   
