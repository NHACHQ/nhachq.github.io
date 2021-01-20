// if more than frames needed, will be ignored.
// E.g, 121 frames, from 0, interval 4, this will stop at 120
//two arrays of different direcions will be returned
function imgSelect(start, end, interval, path){
    var size = 6;
    var s;
    var images = [];
    var images_r = [];
    for (var i = start ;i<=end; i++){
        if (i%interval == 0){
            s = "000000" + i;
            s = s.substr(s.length-size);
            images.push(path+"/"+s+".jpg");
            images_r.unshift(path+"/"+s+".jpg");
            //testing
            //document.write(path+"/"+s+".jpg<br>")
        }
    }
    return [images, images_r];
}
