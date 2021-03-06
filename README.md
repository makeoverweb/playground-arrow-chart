### Фронтенд песочница проекта ПСС

#### Требования к компонентам
- Должны быть контролируемыми из вне
- Должны быть функциональными `React.FC`
- Для стилизации использовать препроцессор SASS
- Вопрос о получении данных и их форматирования под компонент решает команда интеграции, по этой причине команда подрядчика может
решать этот вопрос как ей удобно при разработке компонента
- Существуют определенные особенности хранения данных в глобальном сторе, знание которых может сократить время на интеграцию
    - данные хранятся в нормализованном виде (map, array)
    - почти всегда полем идентификации записи в нормализованной таблице является `<имя_таблицы> + _id`
    - данные в таблицах могут иметь ссылки на записи в других таблицах через идентификаторы

#### Запуск проекта
- `npm run start` - запуск в режиме разработчика
- `npm run build` - запуск компиляции соборки для продакшен

#### Особенности сборки
- В проекте используется JSX компилятор иконок из SVG, для этого после добавления или изменения SVG иконки,
необходимо произвести пересборку `npm run build-icons`
- Если есть необходимость использовать `mock` данные то редактируется файл `scripts/buildMock.js`
и затем запускается сборка сгенерированных json файлов `npm run build-mock`
- Система локализации использует макросы анализа проекта и выявление новых ключей, которые затем заносятся в соответствуюзие
директории локализации в файлы `.po` через запуск скрипта `npm run extract`, после этого на основе словарей должен быть
сформирован js интерпретируемый файл со словарями. В некоторых случаях это делается автоматически через webpack плагин, но 
можно это сделать вручную `npm run compile`
- Есть некоторые проблемы файлами описаний типов для библиотеки локализации, эта проблема решается запуском скприта `postinstall`

#### Организация разработки
- Определение роута
- Создание контейнера
    - Файл `jsx` разметки
    - Компонент для асинхронного отложенного импорта (разделение кода)
    - Локальный сервис (!по необходимости построение данных для отображения и обработчики событий уровня контейнера )
- Использование / Создание компонента
 - Файл разметки `jsx`
 - Локальный сервис представления (вычисление данных для отображения и обработчики событий)
 
#### Внешние библиотеки
- Работа с датами и временем `dayjs`

#### Известные проблемы
- Сборка на разных операционных системах может незначительно отличаться в виду использования различных  shell оболочек
- Настоящая версия гарантировано работает на Ubuntu, так же при некоторых правках работает на windows
    - "./node_modules/@svgr/cli/bin/svgr => svgr
    - cp ./scripts/index.d.ts ./node_modules/@lingui/macro/index.d.ts
