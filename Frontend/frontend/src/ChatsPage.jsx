import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('f8707881-8065-4b4e-924b-b2a1066c2d48', 
    props.user.username, props.user.secret)
    return (
    <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style= {{ height: '100%'}}/>        
    </div>
    )
}

export default ChatsPage