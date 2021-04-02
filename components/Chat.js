import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecipientEmail from "../utils/getRecipientEmail";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
function Chat(props) {
  const [user] = useAuthState(auth);
  const [recipentSnapShot] = useCollection(
    db
      .collection("users")
      .where("email", "==", getRecipientEmail(props.users, user))
  );
  const recipient = recipentSnapShot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(props.users, user);

  return (
    <Container>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0].toUpperCase()}</UserAvatar>
      )}
      <p> {recipientEmail}</p>
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
