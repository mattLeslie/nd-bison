interface ImagePane{
    
    data: File[]

    // describes how each image is placed and sized
    // in the pane using a pair at index = {row, width}
    // row can be described by multiple consecutive numbers
    // to enable an image taking up a larger part of a column
    orientation: [number[], number][]
    
    // subtitles for each picture, with styling string
    descriptions: [string, string][]

}
export default ImagePane;