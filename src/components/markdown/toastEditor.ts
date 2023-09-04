import { uploadImg } from '@/api/upload';

export default class {
  public editor;
  constructor(el: string, height: string, initValue: string) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      height: height,
      initialEditType: initValue,
      previewStyle: 'vertical',
      toolbarItems: this.toolbar(),
    });
    this.ImgHook();
  }
  private ImgHook() {
    this.editor.removeHook('addImageBlobHook');
    this.editor.addHook(
      'addImageBlobHook',
      async (blob: any, callback: Function) => {
        const form = new FormData();
        // blob就是转化后的图片格式
        form.append('file', blob, blob.name);
        const response = await uploadImg(form);
        console.log(response.data.url);

        callback('/assets/1.png', blob.name);
      }
    );
  }
  private toolbar() {
    return [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      [
        {
          el: this.fullscreen(),
          command: 'bold',
          tooltip: 'Custom Bold',
        },
      ],
    ];
  }
  private fullscreen() {
    const button = document.createElement('button') as HTMLButtonElement;
    button.innerHTML = '全屏';
    button.style.margin = '0';
    button.addEventListener('click', () => {
      this.editor.setHeight('100vh');
      const ui = document.querySelector(
        '.toastui-editor-defaultUI'
      ) as HTMLDivElement;
      console.log(ui);

      ui.classList.toggle('fullscreen');
    });
    document.documentElement.addEventListener(
      'keyup',
      (event: KeyboardEvent) => {
        console.log(event);
        if (event.key === 'Escape') {
          const ui = document.querySelector(
            '.toastui-editor-defaultUI'
          ) as HTMLDivElement;
          ui.classList.remove('fullscreen');
        }
      }
    );
    return button;
  }
}
