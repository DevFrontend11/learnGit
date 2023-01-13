Hiểu rõ hoạt động của redux-saga:
-> Redux action dispatched from component(getNews)
-> Watcher Saga catches the action
-> Handler call a function to make the request(handleGetNews)
-> Call requestGetNews
-> setNews
-> Update component
