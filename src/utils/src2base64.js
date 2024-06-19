const toDataURL = async function (src) {
  return new Promise((resolve) => {
    var image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function () {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      context.drawImage(this, 0, 0);
      var dataURL = canvas.toDataURL('image/png');
      resolve(dataURL)
      // await callback(dataURL);
    };
    image.src = src;
  })
}


// async function toDataURL(src,callback){
//     var image = new Image();
//     image.crossOrigin = 'Anonymous';
//     image.onload = function(){
//       var canvas = document.createElement('canvas');
//       var context = canvas.getContext('2d');
//       canvas.height = this.naturalHeight;
//       canvas.width = this.naturalWidth;
//       context.drawImage(this, 0, 0);
//       var dataURL = canvas.toDataURL('image/jpeg');
//       await callback(dataURL);
//     };
//     image.src = src;
//   }
export default toDataURL