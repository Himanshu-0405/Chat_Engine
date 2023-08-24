import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height:'100vh'}}>
      <PrettyChatWindow
        projectId='
        41748f2f-54f7-428f-a86b-8123da177083'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
      />
    </div>
  );
};

export default ChatsPage;