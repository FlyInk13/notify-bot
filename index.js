const { VK } = require('vk-io');
const TOKEN = String(process.env.TOKEN);
const MSG_NOTIFY_TTL = Number(process.env.MSG_NOTIFY_TTL);
const MSG_BODY = String(process.env.MSG_BODY);
const MSG_KEYBOARD = String(process.env.MSG_KEYBOARD);

const vk = new VK({ token: TOKEN });

vk.updates.on('message_new', async (context, next) => {
  if (!context.messageTag) {
    return next();
  }

  const { items: [ prevMessage ] } = await vk.api.messages.getByConversationMessageId({
    conversation_message_ids: context.conversationMessageId - 1,
    peer_id: context.peerId,
  });

  if (!prevMessage) {
    return next();
  }

  const diff = context.createdAt - prevMessage.date;
  if (diff > MSG_NOTIFY_TTL) {
    return next();
  }

  return context.send(MSG_BODY, {
    keyboard: MSG_KEYBOARD,
  });
});


vk.updates.start().catch(console.error);
