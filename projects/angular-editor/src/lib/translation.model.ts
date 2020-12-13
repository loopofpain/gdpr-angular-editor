import { SelectOption } from "./ae-select/ae-select.component";

export class Translation {
    public undo: string;
    public redo: string;
    public bold: string;
    public italic: string;
    public underline: string;
    public strikethrough: string;
    public subscript: string;
    public superscript: string;
    public justifyLeft: string;
    public justifyCenter: string;
    public justifyRight: string;
    public justifyFull: string;
    public indent: string;
    public outdent: string;
    public unorderedList: string;
    public orderedList: string;
    public textColor: string;
    public backgroundColor: string;
    public insertLink: string;
    public unlink: string;
    public insertImage: string;
    public insertVideo: string;
    public horizontalLine: string;
    public clearFormatting: string;
    public htmlCode: string;
    public headings: SelectOption[];
}