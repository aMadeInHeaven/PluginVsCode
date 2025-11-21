# TG-DeepSeek Share - VS Code Extension

**`TG-DeepSeek Share`** - это расширение для VS Code, позволяющее быстро делиться выделенным кодом в Telegram и DeepSeek. Расширение предоставляет две команды с горячими клавишами для быстрого доступа.

## Функциональность
Расширение добавляет две команды:
- Отправка кода в Telegram с форматированием
- Отправка кода в DeepSeek Chat

## Команды и сочетания клавиш

### Команда: `tg-deepseek-share.shareToTelegram`

**Сочетание клавиш**: `Ctrl + \ , Ctrl + T`
```
Отправляет выделенный код в Telegram Desktop с форматированием в ``` блоки.

Параметры:
    Нет

Возвращаемое значение:
    void

Пример использования:
    Выделите код в редакторе:
    int main() {
        return 0;
    }

    Нажмите Ctrl + \ , затем Ctrl + T
    Результат: код форматируется и копируется в буфер:

    ```
    int main() {
        return 0;
    }
    ```
    
    Открывается Telegram Desktop для вставки
```
### Команда: `tg-deepseek-share.shareToDeepSeek`

**Сочетание клавиш**: `Ctrl + \ , Ctrl + D` 
```
Отправляет выделенный код в DeepSeek Chat.

Параметры:
    Нет

Возвращаемое значение:
    void

Пример использования:
    Выделите код в редакторе:
    int main() {
        return 0;
    }

    Нажмите Ctrl + \ , затем Ctrl + T
    Результат: код форматируется и копируется в буфер:

    ```
    int main() {
        return 0;
    }
    ```

    Открывается DeepSeek для вставки
```
## Функции расширения

### Функция: `activate(context)`
```
Активирует расширение VS Code для отправки кода в Telegram и DeepSeek.

Параметры:
    context (vscode.ExtensionContext): контекст расширения VS Code

Возвращаемое значение:
    void

Пример вызова:
    Вызывается автоматически VS Code при активации расширения
    activate(extensionContext);
```
### Функция: `openTelegramWithCode(code)`
```
Открывает Telegram Desktop с кодом, отформатированным в ``` блоки.

Параметры:
    code (string): исходный код для отправки

Возвращаемое значение:
    void

Пример вызова:
    openTelegramWithCode('console.log("test");');

    Результат:
    В буфер обмена попадает:
    ```
    console.log("test");
    ```
    Открывается Telegram Desktop
```
### Функция: `shareToDeepSeekChat(code)`
```
Открывает DeepSeek в браузере с кодом в буфере обмена.

Параметры:
    code (string): исходный код для отправки

Возвращаемое значение:
    void

shareToDeepSeekChat('function sum(a, b) { return a + b; }');

    Результат:
    В буфер обмена попадает: 'function sum(a, b) { return a + b; }'
    Открывается https://chat.deepseek.com в браузере
```
### Функция: `openUrl(url)`
```
Открывает URL в браузере по умолчанию для текущей ОС.

Поддерживаемые платформы:
- Windows: использует команду 'start'
- macOS: использует команду 'open'
- Linux: использует команду 'xdg-open'

Параметры:
    url (string): URL для открытия

Возвращаемое значение:
    void

Примеры вызова:
    На Windows:
    openUrl('https://chat.deepseek.com');
    Выполняется: start "" "https://chat.deepseek.com"

    На macOS:
    openUrl('tg://');
    Выполняется: open "tg://"

    На Linux:
    openUrl('https://web.telegram.org');
    Выполняется: xdg-open "https://web.telegram.org"
```
### Функция: `deactivate()`
```
Деактивирует расширение при выгрузке.

Параметры:
    Нет

Возвращаемое значение:
    void

Пример вызова:
    Вызывается автоматически VS Code при деактивации расширения
    deactivate();
```

## История изменений

| Хеш коммита | Изменения |
|:------:|-----------|
| `d1ceac4` | add plugin |