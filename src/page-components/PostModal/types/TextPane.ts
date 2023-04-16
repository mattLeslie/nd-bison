interface TextPane{
    data: string[]
    // styling describes the css styling of each chunk
    // this gets added to the Tailwind classname of the html element
    styling: string[]
}

export default TextPane;