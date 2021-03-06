"use strict";
// Some docs
// http://www.html5rocks.com/en/tutorials/webcomponents/customelements/ (look at lifecycle callback methods)
Object.defineProperty(exports, "__esModule", { value: true });
class TsView extends HTMLElement {
    createdCallback() {
        var preview = this.innerText;
        this.innerText = "";
        this.editor = atom.workspace.buildTextEditor({
            lineNumberGutterVisible: false,
            softWrapped: true,
            mini: true,
        });
        var editorElement = atom.views.getView(this.editor);
        editorElement.removeAttribute("tabindex"); // make read-only
        this.editor.setText(preview);
        this.editor.setGrammar(atom.grammars.grammarForScopeName("source.tsx"));
        this.editor.scrollToBufferPosition([0, 0]);
        this.appendChild(editorElement);
    }
    // API
    text(text) {
        this.editor.setText(text);
    }
}
exports.TsView = TsView;
;
document.registerElement("ts-view", TsView);
//# sourceMappingURL=tsView.js.map