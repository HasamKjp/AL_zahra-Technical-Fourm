      
      var i=0;
      var imagees =[];
      var time =1700;
      imagees [0]='dsdsfs.png';
      imagees [1]='eef.png';
      imagees [2]='dssd.jfif';
      imagees [3]='eef.png';
       

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
       
   
