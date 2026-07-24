"use client";
import { useEffect, useRef } from "react";

const RichTextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const joditInstance = useRef(null);
  const onChangeRef = useRef(onChange);

  // Keep the latest onChange reference without re-triggering effects
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (window.Jodit && editorRef.current && !joditInstance.current) {
      joditInstance.current = window.Jodit.make(editorRef.current, {
        height: 400,
        minHeight: 400,
        readonly: false,
        placeholder: "Write your blog content...",
        // Prevent Jodit from losing focus or resetting on every keystroke
        useSearch: false,
      });

      joditInstance.current.value = value || "";

      joditInstance.current.events.on("change", () => {
        const newValue = joditInstance.current.value;
        if (onChangeRef.current) {
          onChangeRef.current(newValue);
        }
      });
    }

    return () => {
      if (joditInstance.current) {
        joditInstance.current.destruct();
        joditInstance.current = null;
      }
    };
  }, []); // Only run once on mount

  // Only update Jodit value if the incoming 'value' prop is different from Jodit's internal value
  useEffect(() => {
    if (joditInstance.current && joditInstance.current.value !== value) {
      joditInstance.current.value = value || "";
    }
  }, [value]);

  return <div ref={editorRef} />;
};

export default RichTextEditor;