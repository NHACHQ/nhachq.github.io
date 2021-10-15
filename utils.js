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
            images.push(path+"/"+s+".jpg");
            images_r.unshift(path+"/"+s+".jpg");
            // images.push(path+"/"+s+".webp");
            // images_r.unshift(path+"/"+s+".webp");
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
// change point : where the sudden change happens
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

// this function is for setting up stimuli for random trials
// each time the targe stumuli got 




function random_select(paths, trials){
    var randoms = [];
    var len = paths[0][0].length;
    //this is a timeline variable 2d array
    var final = [];
    var temp;
    
    //get a 1D array
    for (var i = 0; i<trials; i++){
        temp = paths[i][0];
        var temp_1 = [];
        for (var j = 0; j<temp.length; j++){
            temp_1.push({stimulus: temp[i][j], data: {trial_tag: 'random-'+i+'-'+j} });
            //randoms[i%3].push({stimulus: temp[i][j], data: {trial_tag: 'random-'+i+'-'+j} });
        }
        randoms[i%3]=temp_1;
    }

    // randomize all images
    for (var j = 0; j < randoms.length; j++){

        for (let i = randoms[j].length -1; i > 0; i--) {
            let p = Math.floor(Math.random() * i);
            let k = randoms[j][i];
            randoms[j][i] = randoms[j][p];
            randoms[j][p] = k;
          }

    }


    // // divide into number of trials
    // for (var i = 0; i<trials; i++){
    //     temp = randoms.slice(i*len, (i+1)*len);
    //     final.push(temp);
    // }

    return randoms;
}