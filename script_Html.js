      
      var i=0;
      var imagees =[];
      var time =1700;
       imagees [0]='im_ages.jpg';
      imagees [1]='downl).png';
      imagees [2]='ima).png';
      imagees [3]='images).jpg';
       

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
       
   
