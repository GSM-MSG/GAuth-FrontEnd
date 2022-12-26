export class B64Data {
  setB64DataToString(result: string | ArrayBuffer) {
    if (typeof result === 'string') return result;
    else {
      const arrayBuffer = new Uint16Array(result);
      return String.fromCharCode.apply(null, Array.from(arrayBuffer));
    }
  }

  readFiles(
    files: FileList,
    getB64Data: React.Dispatch<React.SetStateAction<string>>
  ) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      const { result } = reader;
      if (result) getB64Data(this.setB64DataToString(result));
    };
  }
}
