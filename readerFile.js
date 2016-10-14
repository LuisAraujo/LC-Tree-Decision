function readFileByLine(p, callback){
    var file = p.files[0];
    var reader = new FileReader();
    var arrDatas = [];

    reader.onload = function(progressEvent){
        // By lines
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){
            arrDatas[arrDatas.length]= lines[line];
        }

        callback(arrDatas);
    };

    reader.readAsText(file);


};