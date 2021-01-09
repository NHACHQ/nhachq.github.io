function imgSelect(start, end, interval, path){
    var size = 6;
    var s;
    var images = [];

    for (var i = start ;i<=end; i++){
        if (i%interval == 0){
            s = "000000" + i;
            s = s.substr(s.length-size);
            images.push(path+"/"+s+".jpg");
            //testing
            //document.write(path+"/"+s+".jpg<br>")
        }
    }
    return images;
}
