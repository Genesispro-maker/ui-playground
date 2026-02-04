export function Slider({type, value, onChange, className, ...props}: React.ComponentProps<"input">){
    return <input type={type} value={value} onChange={onChange} className={className} {...props}/>
}