FROM node:16-alpine

WORKDIR /usr/src/app

# копируем все для npm
COPY package*.json ./

# ставим зависимости
RUN npm install

# копируем приложение
COPY . .

# пользовательские env переменные по умолчанию
ENV TOKEN='vk.abc...';
ENV MSG_NOTIFY_TTL=86400;
ENV MSG_BODY='Если у вас есть вопросы по сообщению выше, выберите подходящий вариант'
ENV MSG_KEYBOARD='{"inline":true,"buttons":[[{"action":{"type":"open_link","link": "https://vk.com/flyink","label":"Оформить"}},{"action":{"type":"open_link","link": "https://vk.cc/help","label":"Поддержка"}}]]}'

# команда для запуска
CMD [ "node", "index.js" ]
