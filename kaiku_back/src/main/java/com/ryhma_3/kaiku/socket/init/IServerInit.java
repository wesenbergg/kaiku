package com.ryhma_3.kaiku.socket.init;

import com.corundumstudio.socketio.SocketIOServer;
import com.ryhma_3.kaiku.model.database.IChatDAO;
import com.ryhma_3.kaiku.model.database.IMessageDAO;

/**
 * @author Panu Lindqvist
 * Interface to initialization class. We use interface, so we can modularly switch initialization class to in example testing mock class.
 *
 */
public interface IServerInit {

	/**
	 * @return configured SocketIOServer
	 * Give a configured SocketIOServer to requester.
	 */
	SocketIOServer getSocketServer();
	
	
	/**
	 * @param chatDAO
	 * Setup specific chatDAO
	 */
	void setChatDAO(IChatDAO chatDAO);
	
	/**
	 * @return ChatDAO
	 * ChatDAO is configurable in initialization class.
	 */
	IChatDAO getChatDAO();
	
	
	/**
	 * @param messageDAO
	 * Setup specific messageDAO
	 */
	void setMessageDAO(IMessageDAO messageDAO);
	
	
	/**
	 * @return MessageDAO
	 * MessageDAO in configurable in initialization class.
	 */
	IMessageDAO getMessageDAO();
}
