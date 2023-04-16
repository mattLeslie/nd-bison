import Chunk from './Chunk'

interface PostModalProps{
    
    title: string;
    subtitle?: string;
    author: string;
    date: string;

    chunks: Chunk[]

}
export default PostModalProps;