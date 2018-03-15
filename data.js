module.exports = {
    parse: function() {
        var fs = require('fs');
        var dataFileBuffer  = fs.readFileSync('./train-images-idx3-ubyte');
        var labelFileBuffer = fs.readFileSync('./train-labels-idx1-ubyte');
        var pixelValues     = [];

        // It would be nice with a checker instead of a hard coded 60000 limit here
        for (var image = 0; image <= 59999; image++) { 
            var pixels = [];

            for (var y = 0; y <= 27; y++) {
                for (var x = 0; x <= 27; x++) {
                    pixels.push(dataFileBuffer[(image * 28 * 28) + (x + (y * 28)) + 16]);
                }
            }

            var imageData  = {};
            imageData[JSON.stringify(labelFileBuffer[image + 8])] = pixels;

            pixelValues.push(imageData);
        }
        return pixelValues;
    },
    illustrate: function(pixelValues, amount) {
        return pixelValues.slice(0, amount);
    }
}