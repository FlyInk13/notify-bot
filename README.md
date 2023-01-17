# notify-bot
Бот ВКонтакте для ответа на бизнес уведомления

### Установка
- Сборка из исходников
```bash
docker build . -t flyink13/notify-bot
```

### Запуск
TOKEN можно получить в управлении сообществом, необходим токен с правами на сообщения и управление сообществом
```bash
docker run \
    -e TOKEN='vk1.a.00U...' \
    -e MSG_BODY='Если у вас есть вопросы по сообщению выше, выберите подходящий вариант' \
    -e MSG_KEYBOARD='{"inline":true,"buttons":[[{"action":{"type":"open_link","link": "https://vk.com/flyink","label":"Оформить"}},{"action":{"type":"open_link","link": "https://vk.cc/help","label":"Поддержка"}}]]}' \
    -d flyink13/notify-bot
```
