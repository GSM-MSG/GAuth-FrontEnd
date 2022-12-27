export class FileConverter {
  b64Data: string;
  constructor() {
    this.b64Data = '';
  }

  setB64DataToString(result: string | ArrayBuffer) {
    if (typeof result === 'string') this.b64Data = result;
    if (typeof result !== 'string') {
      const arrayBuffer = new Uint16Array(result);
      this.b64Data = String.fromCharCode.apply(null, Array.from(arrayBuffer));
    }
    this.onReadEnd();
  }

  readFiles(files: FileList) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      const { result } = reader;
      if (!result) return;
      this.setB64DataToString(result);
    };
  }
  onReadEnd() {}
}
