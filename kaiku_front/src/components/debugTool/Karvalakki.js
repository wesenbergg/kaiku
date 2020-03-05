import React from 'react';
import userService from '../../services/userService'
import socketService from '../../services/socketService'
import init from './init'
import useField from '../../hooks/hooks';


const Karvalakki = () => {

  const { createSocketConnection, createChat, sendMessage } = socketService();

  const messageField = useField('text');
  const targetField = useField('text');

  var initKontsa = null;
  var users = [];

  const initialize = async() => {
    
    console.log(users);
    
    createSocketConnection(await initKontsa.token);

    console.log(initKontsa);
    
  }


  const handleCreateChats = () => {
    init.chats.forEach((chat) => {
      let member1 = Math.floor(Math.random() * (users.length - 1)) + 1;
      let member2 = 0;

      console.log(member1, member2);

      const _chat = createChat(
        chat.name,
        "private",[
          users[member1]._Id,
          users[member2]._Id
        ]
      )

      init.chats.concat(_chat);
    })
  }


  const handleCreateUsers = () => {
    init.users.forEach(async (user) => {
      users = users.concat(await userService.createUser(user.username, user.password, user.name));
    })
  }


  const handleSignIn = async() => {

    const index = Math.floor(Math.random() * users.length);

    console.log("users: ", users[index]);

    const userFromInit = init.users.find((usr) => usr.username == users[index].username);
    

    initKontsa = await userService.login(
      users[index].username,
      userFromInit.password
    )  
    console.log(initKontsa);
  }


  const handleGetAllUser = async() => {
    users = await userService.getAllUsers()
  }


  const handleSendMessage = (target, message) => {
    const target_id = initKontsa.chats.find((chat) => chat.chatName == target);
    const result = sendMessage(message, initKontsa._Id, target_id);

    console.log(result);
    
  }

  return(
    <div>
      <button onClick={() => handleCreateUsers()}>1. create test users</button>
      <button onClick={() => handleGetAllUser()}> 1(opt) get all users</button>
      <button onClick={() => handleSignIn()}>2. sign in random</button>
      <button onClick={() => handleCreateChats()}>Create chats for user if not created</button>
      <button onClick={() => initialize()} >3. Init socket</button>

      <form>
        message:
        <input value={messageField.value} onChange={(event) => messageField.onChange(event)} />
        Targetname:
        <input value={targetField.value} onChange={(event) => targetField.onChange(event)}/>      
      </form>
      <button onClick={() => handleSendMessage(targetField.value, messageField.value)}>send message</button>
    </div>
  )

}

export default Karvalakki;