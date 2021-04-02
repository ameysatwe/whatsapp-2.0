import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecipientEmail from "../utils/getRecipientEmail";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function Chat(id, users) {
  const [user] = useAuthState(auth);
  console.log();
  const recepientEmail = getRecipientEmail(id.users, user);
  return (
    <Container>
      <UserAvatar />
      {/* <p>{{ recepientEmail }}</p> */}
      <div></div>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
