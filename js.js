var image = [];
img[0]="img/sl_7.jpg.crdownload";
img[1]="img/sl_2.png";
img[2]="img/sl_3.jpg";
img[3]="img/sl_4.jpg";
img[4]="img/sl_5.jpg";
img[5]="img/sl_6.jpg.crdownload";
img[6]="img/sl_8.jpg";
img[7]="img/sl_9.jpg.crdownload";
img[8]="img/sl_10.jpg";

var index = 0;
var run;

function next(){
    
    index++;
    if(index >= image.length){
        index = 0;
       
    }
    var anh = document.getElementById("anh");
    anh.src = image[index];
    length.value = image.length;
    
}

function prev(){
  
    index--;
    if(index < 0){
        index = image.length -1;
       
    }
    var anh = document.getElementById("anh");
    anh.src = image[index];
    length.value = image.length;
}