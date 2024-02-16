class ArrayBufferConverter {
  static load(buffer) {
    this.buffer = buffer;
  }

  static toString() {
    const bufferView = new Uint16Array(this.buffer);
    let outString = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      outString += String.fromCharCode(bufferView[i]);
    }
    return outString;
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

/* const buffer = getBuffer();
console.log(buffer);
console.log(ArrayBufferConverter.load(buffer)); */

export default ArrayBufferConverter;
