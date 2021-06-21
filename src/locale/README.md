### Правила установки ключей для локализации
### Типы ключей
- `project` - базовая информация
    - `project.projectName`
- `basic` - зарезервированные стандартные слова и выражения
    - `basic.login`
- `form [form.label, form.placeholder, form.validator]` - формы
    - `form.label.name`,
    - `form.label.phone`,
    - `form.validator.needPhone`
- `dictionaty` - справочники
    - `dictionary.typeBuildings.type1`
- [`container`, `component`, `view`, `service`] - ключи компонентов, вьюшек, и контейнеров
    - `container.navScreen.description`
    - `view.AuthView.copy`
    - `service.DBService.other` 
- `error` ошибки
    - `error.userRequestFiled`,
    - `error.networkError`