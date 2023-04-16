import ImagePane from './ImagePane'
import TextPane from './TextPane'

interface Chunk{
    element: TextPane | ImagePane
}

export default Chunk;