import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import 'tinymce/plugins/markdown';

export default function TinyMCE({ height, setContent }) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [content, setContentState] = useState("Enter text here...");

  const handleEditorChange = (content, editor) => {
    setContentState(content);
    setContent(content);
    console.log("Content was updated:", content);
  };

  return (
    <div className="bg-zinc-700">
      <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={"Enter details here..."}
        init={{
          height: height,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
            "textpattern",
            "codesample",
          ],

          toolbar:
            "undo redo codesample | blocks " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
}
