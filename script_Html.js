      
      var i=0;
      var imagees =[];
      var time =1700;
      imagees [0]='docoad.jpg';
      imagees [1]='images7.png';
      imagees [2]='docoad.jpg';
      imagees [3]='images7.jpg';
       

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
       
   
