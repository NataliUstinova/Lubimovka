## Contributing

#### Основные принципы:
- MVP: чем меньше куски, тем лучше
- 1 раз в неделю вливать develop в main
- 2 ревьюера проверяют pull request

### Процесс
- выбираем себе issue 
- делаем pull ветки develop  
- от актуальной develop делаем ветку с номером issue 
- вносим изменения, коммитим с # issue
- push 
- push --set-upstream origin
- запрашиваем pull request у 2х человек
- последний ревьюер мерджит с develop

#### Наименование веток
```
feat/1-add-header   
```
где 1 - номер issue

#### Cообщение коммита:
```
feat: added header #1        
```
где #1 - issue

