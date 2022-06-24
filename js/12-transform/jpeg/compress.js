import JPEG from "https://deno.land/x/jpeg/mod.ts"

const width = 320, height = 180
const frameData = new Uint8Array(width * height * 4)

let i = 0
while(i < frameData.length) {
    frameData[i++] = 255; // red
    frameData[i++] = 66; // green
    frameData[i++] = 159; // blue
    frameData[i++] = 0; // alpha - ignored in JPEGs
}

const rawImageData = {
    data: frameData,
    width: width,
    height: height,
};
var jpegImageData = JPEG.encode(rawImageData, 50)
console.log(jpegImageData)

Deno.writeFileSync("./compress.jpg", jpegImageData.data)
