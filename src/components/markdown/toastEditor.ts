export default class {
  public editor;
  constructor(el: string, height: string, initValue: string) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      height: height,
      initialEditType: initValue,
      previewStyle: 'vertical',
    });
  }
}
