/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => EmacsTextEditorPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var EmacsTextEditorPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.pluginTriggerSelection = false;
  }
  onload() {
    console.log("loading plugin: Emacs text editor");
    this.addCommand({
      id: "forward-char",
      name: "Forward char",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          editor.exec("goRight");
        });
      }
    });
    this.addCommand({
      id: "backward-char",
      name: "Backward char",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          editor.exec("goLeft");
        });
      }
    });
    this.addCommand({
      id: "next-line",
      name: "Next line",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          editor.exec("goDown");
        });
      }
    });
    this.addCommand({
      id: "previous-line",
      name: "Previous line",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          editor.exec("goUp");
        });
      }
    });
    this.addCommand({
      id: "forward-word",
      name: "Forward word",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          editor.exec("goWordRight");
        });
      }
    });
    this.addCommand({
      id: "backward-word",
      name: "Backward word",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          editor.exec("goWordLeft");
        });
      }
    });
    this.addCommand({
      id: "move-end-of-line",
      name: "Move end of line",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          const cursor = editor.getCursor();
          const lineContent = editor.getLine(cursor.line);
          editor.setCursor({ line: cursor.line, ch: lineContent.length });
        });
      }
    });
    this.addCommand({
      id: "move-beginning-of-line",
      name: "Move cursor to beginning of line",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          const cursor = editor.getCursor();
          editor.setCursor({ line: cursor.line, ch: 0 });
        });
      }
    });
    this.addCommand({
      id: "move-beginning-of-line-like-homekey",
      name: "Move cursor to beginning of line (like a HOME key)",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          const cursor = editor.getCursor();
          if (cursor.ch == 0)
            return;
          const line = editor.getLine(cursor.line);
          const result = line.match(/^#{1,6}\s/);
          if (result !== null) {
            if (result[0].length < cursor.ch) {
              editor.setCursor({ line: cursor.line, ch: result[0].length });
            } else {
              editor.setCursor({ line: cursor.line, ch: 0 });
            }
          } else {
            const result2 = line.match(/^\s*(-\s(\[.\]\s)?)?/);
            if (result2 !== null) {
              if (result2[0].length < cursor.ch) {
                editor.setCursor({ line: cursor.line, ch: result2[0].length });
              } else {
                editor.setCursor({ line: cursor.line, ch: 0 });
              }
            }
          }
        });
      }
    });
    this.addCommand({
      id: "beginning-of-buffer",
      name: "Beginning of buffer",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          editor.exec("goStart");
        });
      }
    });
    this.addCommand({
      id: "end-of-buffer",
      name: "End of buffer",
      editorCallback: (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          editor.exec("goEnd");
        });
      }
    });
    this.addCommand({
      id: "kill-line",
      name: "Kill line",
      editorCallback: (editor, _) => {
        this.disableSelection(editor);
        const cursor = editor.getCursor();
        const lineContent = editor.getLine(cursor.line);
        if (lineContent === "") {
          editor.exec("deleteLine");
        } else {
          editor.setLine(cursor.line, lineContent.substring(0, cursor.ch));
          editor.setCursor(cursor);
        }
      }
    });
    this.addCommand({
      id: "delete-char",
      name: "Delete char",
      editorCallback: (editor, _) => {
        this.disableSelection(editor);
        this.withDeleteInText(editor, () => {
          editor.exec("goRight");
        });
      }
    });
    this.addCommand({
      id: "kill-word",
      name: "Kill word",
      editorCallback: (editor, _) => {
        this.disableSelection(editor);
        this.withDeleteInText(editor, () => {
          editor.exec("goWordRight");
        });
      }
    });
    this.addCommand({
      id: "backward-kill-word",
      name: "Backward kill word",
      editorCallback: (editor, _) => {
        this.disableSelection(editor);
        this.withDeleteInText(editor, () => {
          editor.exec("goWordLeft");
        });
      }
    });
    this.addCommand({
      id: "kill-ring-save",
      name: "Kill ring save",
      editorCallback: (editor, _) => {
        if (!this.getCurrentSelectionStart(editor)) {
          return;
        }
        navigator.clipboard.writeText(editor.getSelection());
        document.dispatchEvent(new ClipboardEvent("copy"));
        this.disableSelection(editor);
      }
    });
    this.addCommand({
      id: "kill-region",
      name: "Kill region",
      editorCallback: (editor, _) => {
        if (!this.getCurrentSelectionStart(editor)) {
          return;
        }
        navigator.clipboard.writeText(editor.getSelection());
        editor.replaceSelection("");
        document.dispatchEvent(new ClipboardEvent("cut"));
        this.disableSelection(editor);
      }
    });
    this.addCommand({
      id: "yank",
      name: "Yank",
      editorCallback: async (editor, _) => {
        const clipboardContent = await navigator.clipboard.readText();
        const cursor = editor.getCursor();
        if (!this.getCurrentSelectionStart(editor)) {
          editor.replaceRange(clipboardContent, cursor);
        } else {
          editor.replaceSelection(clipboardContent);
          this.disableSelection(editor);
        }
        editor.setCursor(cursor.line, cursor.ch + clipboardContent.length);
        document.dispatchEvent(new ClipboardEvent("paste"));
      }
    });
    this.addCommand({
      id: "set-mark-command",
      name: "Set mark command",
      editorCallback: (editor, _) => {
        if (this.pluginTriggerSelection) {
          this.disableSelection(editor);
        } else {
          this.pluginTriggerSelection = true;
        }
      }
    });
    this.addCommand({
      id: "keyboard-quit",
      name: "Keyboard-quit",
      editorCallback: (editor, _) => {
        this.disableSelection(editor);
      }
    });
    this.addCommand({
      id: "undo",
      name: "Undo",
      editorCallback: (editor, _) => {
        editor.undo();
      }
    });
    this.addCommand({
      id: "redo",
      name: "Redo",
      editorCallback: (editor, _) => {
        editor.redo();
      }
    });
    this.addCommand({
      id: "recenter-top-bottom",
      name: "Recenter",
      editorCallback: (editor, _) => {
        const cursor = editor.getCursor();
        const range = {
          from: { line: cursor.line, ch: cursor.ch },
          to: { line: cursor.line, ch: cursor.ch }
        };
        editor.scrollIntoView(range, true);
      }
    });
    this.addCommand({
      id: "forward-paragraph",
      name: "Forward paragraph",
      editorCallback: async (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          this.moveToNextParagraph(editor, 0 /* Forward */);
        });
      }
    });
    this.addCommand({
      id: "backward-paragraph",
      name: "Backward paragraph",
      editorCallback: async (editor, _) => {
        this.withSelectionUpdate(editor, () => {
          this.moveToNextParagraph(editor, 1 /* Backward */);
        });
      }
    });
  }
  onunload() {
    console.log("unloading plugin: Emacs text editor");
  }
  disableSelection(editor) {
    editor.setSelection(editor.getCursor(), editor.getCursor());
    this.pluginTriggerSelection = false;
  }
  withSelectionUpdate(editor, callback) {
    const currentSelectionStart = this.getCurrentSelectionStart(editor);
    if (currentSelectionStart) {
      editor.setSelection(editor.getCursor());
    }
    callback();
    if (currentSelectionStart) {
      editor.setSelection(currentSelectionStart, editor.getCursor());
    }
  }
  getCurrentSelectionStart(editor) {
    const selections = editor.listSelections();
    if (selections.length == 0) {
      return void 0;
    }
    if (selections[0].anchor.line !== selections[0].head.line || selections[0].anchor.ch !== selections[0].head.ch) {
      return selections[0].anchor;
    }
    if (this.pluginTriggerSelection) {
      return selections[0].anchor;
    }
    return void 0;
  }
  withDeleteInText(editor, callback) {
    const cursorBefore = editor.getCursor();
    callback();
    const cursorAfter = editor.getCursor();
    editor.setSelection(cursorBefore, cursorAfter);
    editor.replaceSelection("");
  }
  moveToNextParagraph(editor, direction) {
    const cursor = editor.getCursor();
    const value = editor.getValue();
    const maxOffset = value.length;
    const currentOffset = editor.posToOffset(cursor);
    if (direction === 0 /* Forward */ && currentOffset >= maxOffset || direction === 1 /* Backward */ && currentOffset === 0) {
      return;
    }
    let nextParagraphOffset = direction === 0 /* Forward */ ? maxOffset : 0;
    let foundText = false;
    let foundFirstBreak = false;
    function isNewLine(position, direction2) {
      if (direction2 === 0 /* Forward */) {
        return value[position] === "\n" || value[position] === "\r" && value[position + 1] === "\n";
      } else {
        return value[position] === "\n" || position > 0 && value[position - 1] === "\r" && value[position] === "\n";
      }
    }
    const step = direction === 0 /* Forward */ ? 1 : -1;
    let i = currentOffset;
    while (direction === 0 /* Forward */ && i < maxOffset || direction === 1 /* Backward */ && i > 0) {
      if (foundText && isNewLine(i, direction)) {
        if (foundFirstBreak) {
          nextParagraphOffset = direction === 0 /* Forward */ ? i : i + 1;
          if (direction === 0 /* Forward */ && value[i] === "\r" || direction === 1 /* Backward */ && i > 0 && value[i - 1] === "\r") {
            nextParagraphOffset += direction === 0 /* Forward */ ? 1 : -1;
          }
          break;
        } else {
          foundFirstBreak = true;
          i += step;
          continue;
        }
      } else {
        foundFirstBreak = false;
      }
      if (value[i] !== "\n" && value[i] !== "\r" && value[i] !== " ") {
        foundText = true;
      }
      i += step;
    }
    const newPos = editor.offsetToPos(nextParagraphOffset);
    editor.setCursor(newPos);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JQb3NpdGlvbiwgUGx1Z2luLCBNYXJrZG93blZpZXcgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZW51bSBEaXJlY3Rpb24ge1xuXHRGb3J3YXJkLFxuXHRCYWNrd2FyZFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWFjc1RleHRFZGl0b3JQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuXG5cdHBsdWdpblRyaWdnZXJTZWxlY3Rpb24gPSBmYWxzZVxuXG5cdG9ubG9hZCgpIHtcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBwbHVnaW46IEVtYWNzIHRleHQgZWRpdG9yJyk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdmb3J3YXJkLWNoYXInLFxuXHRcdFx0bmFtZTogJ0ZvcndhcmQgY2hhcicsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy53aXRoU2VsZWN0aW9uVXBkYXRlKGVkaXRvciwgKCkgPT4ge1xuXHRcdFx0XHRcdGVkaXRvci5leGVjKFwiZ29SaWdodFwiKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnYmFja3dhcmQtY2hhcicsXG5cdFx0XHRuYW1lOiAnQmFja3dhcmQgY2hhcicsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy53aXRoU2VsZWN0aW9uVXBkYXRlKGVkaXRvciwgKCkgPT4ge1xuXHRcdFx0XHRcdGVkaXRvci5leGVjKFwiZ29MZWZ0XCIpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICduZXh0LWxpbmUnLFxuXHRcdFx0bmFtZTogJ05leHQgbGluZScsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy53aXRoU2VsZWN0aW9uVXBkYXRlKGVkaXRvciwgKCkgPT4ge1xuXHRcdFx0XHRcdGVkaXRvci5leGVjKFwiZ29Eb3duXCIpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdwcmV2aW91cy1saW5lJyxcblx0XHRcdG5hbWU6ICdQcmV2aW91cyBsaW5lJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIF86IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLndpdGhTZWxlY3Rpb25VcGRhdGUoZWRpdG9yLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWRpdG9yLmV4ZWMoXCJnb1VwXCIpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdmb3J3YXJkLXdvcmQnLFxuXHRcdFx0bmFtZTogJ0ZvcndhcmQgd29yZCcsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy53aXRoU2VsZWN0aW9uVXBkYXRlKGVkaXRvciwgKCkgPT4ge1xuXHRcdFx0XHRcdGVkaXRvci5leGVjKFwiZ29Xb3JkUmlnaHRcIilcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ2JhY2t3YXJkLXdvcmQnLFxuXHRcdFx0bmFtZTogJ0JhY2t3YXJkIHdvcmQnLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgXzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMud2l0aFNlbGVjdGlvblVwZGF0ZShlZGl0b3IsICgpID0+IHtcblx0XHRcdFx0XHRlZGl0b3IuZXhlYyhcImdvV29yZExlZnRcIilcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ21vdmUtZW5kLW9mLWxpbmUnLFxuXHRcdFx0bmFtZTogJ01vdmUgZW5kIG9mIGxpbmUnLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgXzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMud2l0aFNlbGVjdGlvblVwZGF0ZShlZGl0b3IsICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKClcblx0XHRcdFx0XHRjb25zdCBsaW5lQ29udGVudCA9IGVkaXRvci5nZXRMaW5lKGN1cnNvci5saW5lKVxuXHRcdFx0XHRcdGVkaXRvci5zZXRDdXJzb3IoeyBsaW5lOiBjdXJzb3IubGluZSwgY2g6IGxpbmVDb250ZW50Lmxlbmd0aCB9KVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnbW92ZS1iZWdpbm5pbmctb2YtbGluZScsXG5cdFx0XHRuYW1lOiAnTW92ZSBjdXJzb3IgdG8gYmVnaW5uaW5nIG9mIGxpbmUnLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgXzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMud2l0aFNlbGVjdGlvblVwZGF0ZShlZGl0b3IsICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKClcblx0XHRcdFx0XHRlZGl0b3Iuc2V0Q3Vyc29yKHsgbGluZTogY3Vyc29yLmxpbmUsIGNoOiAwIH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdtb3ZlLWJlZ2lubmluZy1vZi1saW5lLWxpa2UtaG9tZWtleScsXG5cdFx0XHRuYW1lOiAnTW92ZSBjdXJzb3IgdG8gYmVnaW5uaW5nIG9mIGxpbmUgKGxpa2UgYSBIT01FIGtleSknLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgXzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMud2l0aFNlbGVjdGlvblVwZGF0ZShlZGl0b3IsICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKClcblx0XHRcdFx0XHRpZiAoY3Vyc29yLmNoID09IDApIHJldHVybjtcblxuXHRcdFx0XHRcdGNvbnN0IGxpbmUgPSBlZGl0b3IuZ2V0TGluZShjdXJzb3IubGluZSlcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBsaW5lLm1hdGNoKC9eI3sxLDZ9XFxzLylcblx0XHRcdFx0XHRpZiAocmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0WzBdLmxlbmd0aCA8IGN1cnNvci5jaCkge1xuXHRcdFx0XHRcdFx0XHRlZGl0b3Iuc2V0Q3Vyc29yKHsgbGluZTogY3Vyc29yLmxpbmUsIGNoOiByZXN1bHRbMF0ubGVuZ3RoIH0pXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRlZGl0b3Iuc2V0Q3Vyc29yKHsgbGluZTogY3Vyc29yLmxpbmUsIGNoOiAwIH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGxpbmUubWF0Y2goL15cXHMqKC1cXHMoXFxbLlxcXVxccyk/KT8vKVxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0WzBdLmxlbmd0aCA8IGN1cnNvci5jaCkge1xuXHRcdFx0XHRcdFx0XHRcdGVkaXRvci5zZXRDdXJzb3IoeyBsaW5lOiBjdXJzb3IubGluZSwgY2g6IHJlc3VsdFswXS5sZW5ndGggfSlcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRlZGl0b3Iuc2V0Q3Vyc29yKHsgbGluZTogY3Vyc29yLmxpbmUsIGNoOiAwIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdiZWdpbm5pbmctb2YtYnVmZmVyJyxcblx0XHRcdG5hbWU6ICdCZWdpbm5pbmcgb2YgYnVmZmVyJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIF86IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLndpdGhTZWxlY3Rpb25VcGRhdGUoZWRpdG9yLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWRpdG9yLmV4ZWMoXCJnb1N0YXJ0XCIpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdlbmQtb2YtYnVmZmVyJyxcblx0XHRcdG5hbWU6ICdFbmQgb2YgYnVmZmVyJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIF86IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLndpdGhTZWxlY3Rpb25VcGRhdGUoZWRpdG9yLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWRpdG9yLmV4ZWMoXCJnb0VuZFwiKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAna2lsbC1saW5lJyxcblx0XHRcdG5hbWU6ICdLaWxsIGxpbmUnLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgXzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMuZGlzYWJsZVNlbGVjdGlvbihlZGl0b3IpXG5cblx0XHRcdFx0Y29uc3QgY3Vyc29yID0gZWRpdG9yLmdldEN1cnNvcigpXG5cdFx0XHRcdGNvbnN0IGxpbmVDb250ZW50ID0gZWRpdG9yLmdldExpbmUoY3Vyc29yLmxpbmUpXG5cdFx0XHRcdGlmIChsaW5lQ29udGVudCA9PT0gXCJcIikge1xuXHRcdFx0XHRcdGVkaXRvci5leGVjKFwiZGVsZXRlTGluZVwiKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXRvci5zZXRMaW5lKGN1cnNvci5saW5lLCBsaW5lQ29udGVudC5zdWJzdHJpbmcoMCwgY3Vyc29yLmNoKSlcblx0XHRcdFx0XHRlZGl0b3Iuc2V0Q3Vyc29yKGN1cnNvcilcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnZGVsZXRlLWNoYXInLFxuXHRcdFx0bmFtZTogJ0RlbGV0ZSBjaGFyJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIF86IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLmRpc2FibGVTZWxlY3Rpb24oZWRpdG9yKVxuXG5cdFx0XHRcdHRoaXMud2l0aERlbGV0ZUluVGV4dChlZGl0b3IsICgpID0+IHtcblx0XHRcdFx0XHRlZGl0b3IuZXhlYyhcImdvUmlnaHRcIilcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ2tpbGwtd29yZCcsXG5cdFx0XHRuYW1lOiAnS2lsbCB3b3JkJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIF86IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLmRpc2FibGVTZWxlY3Rpb24oZWRpdG9yKVxuXG5cdFx0XHRcdHRoaXMud2l0aERlbGV0ZUluVGV4dChlZGl0b3IsICgpID0+IHtcblx0XHRcdFx0XHRlZGl0b3IuZXhlYyhcImdvV29yZFJpZ2h0XCIpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdiYWNrd2FyZC1raWxsLXdvcmQnLFxuXHRcdFx0bmFtZTogJ0JhY2t3YXJkIGtpbGwgd29yZCcsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy5kaXNhYmxlU2VsZWN0aW9uKGVkaXRvcilcblxuXHRcdFx0XHR0aGlzLndpdGhEZWxldGVJblRleHQoZWRpdG9yLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWRpdG9yLmV4ZWMoXCJnb1dvcmRMZWZ0XCIpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdraWxsLXJpbmctc2F2ZScsXG5cdFx0XHRuYW1lOiAnS2lsbCByaW5nIHNhdmUnLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgXzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5nZXRDdXJyZW50U2VsZWN0aW9uU3RhcnQoZWRpdG9yKSkge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZWRpdG9yLmdldFNlbGVjdGlvbigpKVxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDbGlwYm9hcmRFdmVudCgnY29weScpKTtcblxuXHRcdFx0XHR0aGlzLmRpc2FibGVTZWxlY3Rpb24oZWRpdG9yKVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAna2lsbC1yZWdpb24nLFxuXHRcdFx0bmFtZTogJ0tpbGwgcmVnaW9uJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIF86IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuZ2V0Q3VycmVudFNlbGVjdGlvblN0YXJ0KGVkaXRvcikpIHtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGVkaXRvci5nZXRTZWxlY3Rpb24oKSlcblx0XHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oXCJcIilcblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ2xpcGJvYXJkRXZlbnQoJ2N1dCcpKTtcblxuXHRcdFx0XHR0aGlzLmRpc2FibGVTZWxlY3Rpb24oZWRpdG9yKVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAneWFuaycsXG5cdFx0XHRuYW1lOiAnWWFuaycsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogYXN5bmMgKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0Y29uc3QgY2xpcGJvYXJkQ29udGVudCA9IGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKVxuXHRcdFx0XHRjb25zdCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKClcblxuXHRcdFx0XHRpZiAoIXRoaXMuZ2V0Q3VycmVudFNlbGVjdGlvblN0YXJ0KGVkaXRvcikpIHtcblx0XHRcdFx0XHRlZGl0b3IucmVwbGFjZVJhbmdlKGNsaXBib2FyZENvbnRlbnQsIGN1cnNvcilcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihjbGlwYm9hcmRDb250ZW50KVxuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZVNlbGVjdGlvbihlZGl0b3IpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlZGl0b3Iuc2V0Q3Vyc29yKGN1cnNvci5saW5lLCBjdXJzb3IuY2ggKyBjbGlwYm9hcmRDb250ZW50Lmxlbmd0aClcblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ2xpcGJvYXJkRXZlbnQoJ3Bhc3RlJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnc2V0LW1hcmstY29tbWFuZCcsXG5cdFx0XHRuYW1lOiAnU2V0IG1hcmsgY29tbWFuZCcsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMucGx1Z2luVHJpZ2dlclNlbGVjdGlvbikge1xuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZVNlbGVjdGlvbihlZGl0b3IpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW5UcmlnZ2VyU2VsZWN0aW9uID0gdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdrZXlib2FyZC1xdWl0Jyxcblx0XHRcdG5hbWU6ICdLZXlib2FyZC1xdWl0Jyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIF86IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLmRpc2FibGVTZWxlY3Rpb24oZWRpdG9yKVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAndW5kbycsXG5cdFx0XHRuYW1lOiAnVW5kbycsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0ZWRpdG9yLnVuZG8oKVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAncmVkbycsXG5cdFx0XHRuYW1lOiAnUmVkbycsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0ZWRpdG9yLnJlZG8oKVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAncmVjZW50ZXItdG9wLWJvdHRvbScsXG5cdFx0XHRuYW1lOiAnUmVjZW50ZXInLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgXzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoKVxuXHRcdFx0XHRjb25zdCByYW5nZSA9IHtcblx0XHRcdFx0XHRmcm9tOiB7IGxpbmU6IGN1cnNvci5saW5lLCBjaDogY3Vyc29yLmNoIH0sXG5cdFx0XHRcdFx0dG86IHsgbGluZTogY3Vyc29yLmxpbmUsIGNoOiBjdXJzb3IuY2ggfVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVkaXRvci5zY3JvbGxJbnRvVmlldyhyYW5nZSwgdHJ1ZSlcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ2ZvcndhcmQtcGFyYWdyYXBoJyxcblx0XHRcdG5hbWU6ICdGb3J3YXJkIHBhcmFncmFwaCcsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogYXN5bmMgKGVkaXRvcjogRWRpdG9yLCBfOiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy53aXRoU2VsZWN0aW9uVXBkYXRlKGVkaXRvciwgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubW92ZVRvTmV4dFBhcmFncmFwaChlZGl0b3IsIERpcmVjdGlvbi5Gb3J3YXJkKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnYmFja3dhcmQtcGFyYWdyYXBoJyxcblx0XHRcdG5hbWU6ICdCYWNrd2FyZCBwYXJhZ3JhcGgnLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IGFzeW5jIChlZGl0b3I6IEVkaXRvciwgXzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMud2l0aFNlbGVjdGlvblVwZGF0ZShlZGl0b3IsICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLm1vdmVUb05leHRQYXJhZ3JhcGgoZWRpdG9yLCBEaXJlY3Rpb24uQmFja3dhcmQpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXHRcdGNvbnNvbGUubG9nKCd1bmxvYWRpbmcgcGx1Z2luOiBFbWFjcyB0ZXh0IGVkaXRvcicpO1xuXHR9XG5cblx0ZGlzYWJsZVNlbGVjdGlvbihlZGl0b3I6IEVkaXRvcikge1xuXHRcdGVkaXRvci5zZXRTZWxlY3Rpb24oZWRpdG9yLmdldEN1cnNvcigpLCBlZGl0b3IuZ2V0Q3Vyc29yKCkpXG5cdFx0dGhpcy5wbHVnaW5UcmlnZ2VyU2VsZWN0aW9uID0gZmFsc2Vcblx0fVxuXG5cdHdpdGhTZWxlY3Rpb25VcGRhdGUoZWRpdG9yOiBFZGl0b3IsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG5cdFx0Y29uc3QgY3VycmVudFNlbGVjdGlvblN0YXJ0ID0gdGhpcy5nZXRDdXJyZW50U2VsZWN0aW9uU3RhcnQoZWRpdG9yKTtcblx0XHRpZiAoY3VycmVudFNlbGVjdGlvblN0YXJ0KSB7XG5cdFx0XHRlZGl0b3Iuc2V0U2VsZWN0aW9uKGVkaXRvci5nZXRDdXJzb3IoKSlcblx0XHR9XG5cblx0XHRjYWxsYmFjaygpXG5cblx0XHRpZiAoY3VycmVudFNlbGVjdGlvblN0YXJ0KSB7XG5cdFx0XHRlZGl0b3Iuc2V0U2VsZWN0aW9uKGN1cnJlbnRTZWxlY3Rpb25TdGFydCwgZWRpdG9yLmdldEN1cnNvcigpKVxuXHRcdH1cblx0fVxuXG5cdGdldEN1cnJlbnRTZWxlY3Rpb25TdGFydChlZGl0b3I6IEVkaXRvcik6IEVkaXRvclBvc2l0aW9uIHwgdW5kZWZpbmVkIHtcblx0XHRjb25zdCBzZWxlY3Rpb25zID0gZWRpdG9yLmxpc3RTZWxlY3Rpb25zKClcblxuXHRcdGlmIChzZWxlY3Rpb25zLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkXG5cdFx0fVxuXG5cdFx0aWYgKHNlbGVjdGlvbnNbMF0uYW5jaG9yLmxpbmUgIT09IHNlbGVjdGlvbnNbMF0uaGVhZC5saW5lIHx8XG5cdFx0XHRzZWxlY3Rpb25zWzBdLmFuY2hvci5jaCAhPT0gc2VsZWN0aW9uc1swXS5oZWFkLmNoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0aW9uc1swXS5hbmNob3Jcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wbHVnaW5UcmlnZ2VyU2VsZWN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0aW9uc1swXS5hbmNob3Jcblx0XHR9XG5cblx0XHRyZXR1cm4gdW5kZWZpbmVkXG5cdH1cblxuXHR3aXRoRGVsZXRlSW5UZXh0KGVkaXRvcjogRWRpdG9yLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuXHRcdGNvbnN0IGN1cnNvckJlZm9yZSA9IGVkaXRvci5nZXRDdXJzb3IoKVxuXG5cdFx0Y2FsbGJhY2soKVxuXG5cdFx0Y29uc3QgY3Vyc29yQWZ0ZXIgPSBlZGl0b3IuZ2V0Q3Vyc29yKClcblxuXHRcdGVkaXRvci5zZXRTZWxlY3Rpb24oY3Vyc29yQmVmb3JlLCBjdXJzb3JBZnRlcilcblx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihcIlwiKVxuXHR9XG5cblx0bW92ZVRvTmV4dFBhcmFncmFwaChlZGl0b3I6IEVkaXRvciwgZGlyZWN0aW9uOiBEaXJlY3Rpb24pIHtcblx0XHRjb25zdCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKCk7XG5cdFx0Y29uc3QgdmFsdWUgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcblx0XHRjb25zdCBtYXhPZmZzZXQgPSB2YWx1ZS5sZW5ndGg7XG5cdFx0Y29uc3QgY3VycmVudE9mZnNldCA9IGVkaXRvci5wb3NUb09mZnNldChjdXJzb3IpO1xuXG5cdFx0aWYgKChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Gb3J3YXJkICYmIGN1cnJlbnRPZmZzZXQgPj0gbWF4T2Zmc2V0KSB8fFxuXHRcdFx0KGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkJhY2t3YXJkICYmIGN1cnJlbnRPZmZzZXQgPT09IDApKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IG5leHRQYXJhZ3JhcGhPZmZzZXQgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Gb3J3YXJkID8gbWF4T2Zmc2V0IDogMDtcblx0XHRsZXQgZm91bmRUZXh0ID0gZmFsc2U7XG5cdFx0bGV0IGZvdW5kRmlyc3RCcmVhayA9IGZhbHNlO1xuXG5cdFx0ZnVuY3Rpb24gaXNOZXdMaW5lKHBvc2l0aW9uOiBudW1iZXIsIGRpcmVjdGlvbjogRGlyZWN0aW9uKTogYm9vbGVhbiB7XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uRm9yd2FyZCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVbcG9zaXRpb25dID09PSBcIlxcblwiIHx8ICh2YWx1ZVtwb3NpdGlvbl0gPT09IFwiXFxyXCIgJiYgdmFsdWVbcG9zaXRpb24gKyAxXSA9PT0gXCJcXG5cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVbcG9zaXRpb25dID09PSBcIlxcblwiIHx8IChwb3NpdGlvbiA+IDAgJiYgdmFsdWVbcG9zaXRpb24gLSAxXSA9PT0gXCJcXHJcIiAmJiB2YWx1ZVtwb3NpdGlvbl0gPT09IFwiXFxuXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHN0ZXAgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Gb3J3YXJkID8gMSA6IC0xO1xuXHRcdGxldCBpID0gY3VycmVudE9mZnNldDtcblxuXHRcdHdoaWxlICgoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uRm9yd2FyZCAmJiBpIDwgbWF4T2Zmc2V0KSB8fCAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uQmFja3dhcmQgJiYgaSA+IDApKSB7XG5cdFx0XHRpZiAoZm91bmRUZXh0ICYmIGlzTmV3TGluZShpLCBkaXJlY3Rpb24pKSB7XG5cdFx0XHRcdGlmIChmb3VuZEZpcnN0QnJlYWspIHtcblx0XHRcdFx0XHRuZXh0UGFyYWdyYXBoT2Zmc2V0ID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uRm9yd2FyZCA/IGkgOiBpICsgMTtcblx0XHRcdFx0XHRpZiAoKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkZvcndhcmQgJiYgdmFsdWVbaV0gPT09IFwiXFxyXCIpIHx8XG5cdFx0XHRcdFx0XHQoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uQmFja3dhcmQgJiYgaSA+IDAgJiYgdmFsdWVbaSAtIDFdID09PSBcIlxcclwiKSkge1xuXHRcdFx0XHRcdFx0bmV4dFBhcmFncmFwaE9mZnNldCArPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Gb3J3YXJkID8gMSA6IC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3VuZEZpcnN0QnJlYWsgPSB0cnVlO1xuXHRcdFx0XHRcdGkgKz0gc3RlcDtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm91bmRGaXJzdEJyZWFrID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZVtpXSAhPT0gXCJcXG5cIiAmJiB2YWx1ZVtpXSAhPT0gXCJcXHJcIiAmJiB2YWx1ZVtpXSAhPT0gXCIgXCIpIHtcblx0XHRcdFx0Zm91bmRUZXh0ID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aSArPSBzdGVwO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5ld1BvcyA9IGVkaXRvci5vZmZzZXRUb1BvcyhuZXh0UGFyYWdyYXBoT2Zmc2V0KTtcblx0XHRlZGl0b3Iuc2V0Q3Vyc29yKG5ld1Bvcyk7XG5cdH1cblxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE2RDtBQU83RCxJQUFxQix3QkFBckIsY0FBbUQsdUJBQU87QUFBQSxFQUExRDtBQUFBO0FBRUMsa0NBQXlCO0FB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
