/* eslint-disable @typescript-eslint/no-explicit-any */
import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';

type PromoptResultProps = {
  data: string;
};
const PromoptResult = ({ data }: PromoptResultProps) => {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(data);
  }, [data]);
  return (
    <div>
      <Editor
        ref={editorRef}
        initialValue="Gemini prompt results!"
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default PromoptResult;
