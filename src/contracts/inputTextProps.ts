export interface IInputTextProps {
    name?:string
    label:string;
    displayValue?:string;
    value?:string;
    maxLength?:number;
    valid?:boolean;
    errorMsg?: string;
    onChange?: (event:any) => void;
}