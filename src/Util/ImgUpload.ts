export class ImgUpload {
  result: string | ArrayBuffer;
  constructor(result: string | ArrayBuffer) {
    this.result = result;
  }

  checkImgType() {
    if (typeof this.result === 'string') return this.result;
    else {
      const arrayBuffer = new Uint16Array(this.result);
      return String.fromCharCode.apply(null, Array.from(arrayBuffer));
    }
  }
}
