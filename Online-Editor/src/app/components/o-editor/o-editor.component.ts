import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

import * as ace from "ace-builds";

@Component({
  selector: 'app-o-editor',
  templateUrl: './o-editor.component.html',
  styleUrls: ['./o-editor.component.css']
})
export class OEditorComponent implements AfterViewInit {
  ngOnInit() {
    this.getEditor();
  }

  getEditor() {
    // let editor = document.getElementById("editor");
    // ace.edit(editor, {
    //   theme: "ace/theme/cobalt"
    // });
    
  }

  // @ViewChild("editor") private editor: ElementRef<HTMLElement>;
  // @ViewChild("editor") private editor: ElementRef<HTMLElement> | undefined = undefined;
  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;



  // 4️⃣
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");

    // 🚨 Added
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue("<h1>Ace Editor works great in Angular!</h1>");

    // 🚨 Added
    aceEditor.setTheme('ace/theme/twilight');
    aceEditor.session.setMode('ace/mode/html');

    // 🚨 Added
    aceEditor.on("change", () => {
      console.log(aceEditor.getValue());
    });
  }
}
