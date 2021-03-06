// if more than frames needed, will be ignored.
// E.g, 121 frames, from 0, interval 4, this will stop at 120
//two arrays of different direcions will be returned
function imgSelect(start, end, interval, path){
    var size = 6;
    var s;
    var images = [];
    var images_r = [];
    var c;
    for (var i = start ;i<=end; i++){
        if (i>359){
            c = i%360;
        }else {
            c = i;
        }
        if (i%interval == 0){
            s = "000000" + c;
            s = s.substr(s.length-size);
            // images.push(path+"/"+s+".jpg");
            // images_r.unshift(path+"/"+s+".jpg");
            images.push(path+"/"+s+".webp");
            images_r.unshift(path+"/"+s+".webp");
            //testing
            //document.write(path+"/"+s+".jpg<br>")
        }
    }
    return [images, images_r];
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


//for abrupt trials
// parameters: paths of two iamges
// change point : a decimal number between 0 and 1
// num: overall number of frames
// return a set of images with two directions
function abrupt_img(start_path, end_path, change, num){
    var s;
    var images = [];
    var path;
    for (var i = 0 ;i<num; i++){

        if (i < change)
            path = start_path;
        else
            path = end_path;

        // images.push(path+"/"+s+".jpg");
        // images_r.unshift(path+"/"+s+".jpg");
        images.push(path);
        //testing
        //document.write(path+"/"+s+".jpg<br>")

    }
    return images;
}
