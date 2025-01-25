"use client";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorTest = () => {
  return (
    <Editor
      editorClassName="editorClassName"
      // editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      // onEditorStateChange={this.onEditorStateChange}
    />
  );
};

export { EditorTest };
