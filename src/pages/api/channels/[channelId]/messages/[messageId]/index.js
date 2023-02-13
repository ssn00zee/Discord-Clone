import { getMessageById, updateMessageById, deleteMessageById } from "@/database";

export default async function handler(req, res) {
  const { messageId } = req.query;

  switch (req.method) {
    case "GET":
      // Get a message by ID
      const getMessage = await getMessageById(messageId)
      if (getMessage == undefined){
        res
          .status(404)
          .json({message: 'Message not found'})
        break
      }
      res
        .status(200)
        .json(getMessage);
      break;
    case "PUT":
      const {text} = req.body
      if (!text) {
        res.status(404).json({message: 'text cannot be empty'})
        break
      }
      const editMessage = await updateMessageById(messageId, text)
      res
        .status(200)
        .json(editMessage);
      break;
    case "DELETE":
      const deletedMessage = await deleteMessageById(messageId)
      console.log(deletedMessage)
      res
        .status(200)
        .json(deletedMessage);
      break;
    default:
      res.status(405).end();
  }
}