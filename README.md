 ## Weather

Weather - это приложение для показа погоды по городам.
Можете ввести в input название города и нажать кнопку add Weather город появится у вас на экране с актуальной погодой. При нажатии на один из них, можно подробнее узнать, какие тайны природных аномалий хранит в себе выбранный вами город :)

### Какие технологии были использованы

1. React
2. MobX
3. GraphQL

### Архитектура приложения

UI -----> BLL ------> API

UI - за это отвечает React
BLL(business logic layer) - за это отвечает MobX там хранятся данные
API - за это отвечается GrapgQL

В ui при нажатии на кнопку происходит action который направляется в MobX.В Mobx происходит запрос на сервер и там же происходит сохрание data и отправляется в UI.

### Как запустить?

1.перейти в папку my-app: cd my-app
2.установить node_modules: npm install
3.запустить приложение: npm start
