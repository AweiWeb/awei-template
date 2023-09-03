declare namespace toastui {
  class Editor {
    constructor(options: any);
    getMarkdown: () => string; //获取文档编辑器
    getHTML: () => string;
    on: (event: string, callback: Function) => void;
    removeHook: (type: string) => void;
    addHook: (type: string, handler: Function) => void;
    setHeight: (height: string) => void;
  }
}
