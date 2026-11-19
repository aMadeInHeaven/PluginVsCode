import * as vscode from 'vscode';
import * as child_process from 'child_process';
import * as os from 'os';

export function activate(context: vscode.ExtensionContext) {
    /*
    Активирует расширение VS Code для кода в Telegram и DeepSeek.

        Параметры:
            context (vscode.ExtensionContext): контекст расширения VS Code

        Возвращаемое значение:
            void
    */
    let shareToTelegram = vscode.commands.registerCommand('tg-deepseek-share.shareToTelegram', () => {
        /*
        Регистрирует команду для кода в Telegram.

            Параметры:
                нет
                
            Возвращаемое значение:
                void
        */
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found!');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        if (!text) {
            vscode.window.showErrorMessage('No text selected!');
            return;
        }

        openTelegramWithCode(text);
    });

    let shareToDeepSeek = vscode.commands.registerCommand('tg-deepseek-share.shareToDeepSeek', () => {
        /*
        Регистрирует команду для кода в DeepSeek.

            Параметры:
                нет
                
            Возвращаемое значение:
                void
        */
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found!');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        if (!text) {
            vscode.window.showErrorMessage('No text selected!');
            return;
        }

        shareToDeepSeekChat(text);
    });

    context.subscriptions.push(shareToTelegram, shareToDeepSeek);
}

function openTelegramWithCode(code: string) {
    /*
    Открывает Telegram Desktop с кодом, отформатированным в ``` блоки.

        Параметры:
            code (string): исходный код для отправки

        Возвращаемое значение:
            void
    */
    try {
        const formattedCode = "```\n" + code + "\n```";
        
        vscode.env.clipboard.writeText(formattedCode);
        
        const telegramDeepLink = `tg://`;
        openUrl(telegramDeepLink);
        
        vscode.window.showInformationMessage('Code copied with formatting! Telegram opening...');
        
    } catch (error) {
        vscode.window.showErrorMessage('Error opening Telegram');
    }
}

function shareToDeepSeekChat(code: string) {
    /*
    Открывает DeepSeek в браузере с кодом в буфере обмена.

        Параметры:
            code (string): исходный код для отправки

        Возвращаемое значение:
            void
    */
    try {
        vscode.env.clipboard.writeText(code).then(() => {
            const deepSeekUrl = `https://chat.deepseek.com`;
            openUrl(deepSeekUrl);
            
            vscode.window.showInformationMessage('Code copied! DeepSeek opening...');
        });
    } catch (error) {
        vscode.window.showErrorMessage(`Error sharing to DeepSeek: ${error}`);
    }
}

function openUrl(url: string) {
    /*
    Открывает URL в браузере по умолчанию для текущей ОС.

        Параметры:
            url (string): URL для открытия

        Возвращаемое значение:
            void
    */
    const platform = os.platform();
    
    switch (platform) {
        case 'win32':
            child_process.exec(`start "" "${url}"`);
            break;
        case 'darwin':
            child_process.exec(`open "${url}"`);
            break;
        default:
            child_process.exec(`xdg-open "${url}"`);
            break;
    }
}


/*
    Деактивирует расширение при выгрузке.

        Параметры:
            Нет

        Возвращаемое значение:
            void
 */
export function deactivate() {}


// GOYDAAAAAA

import { exec } from 'node:child_process';

export function debugRun(command: string): void {
  exec(command);
}






// цвцуавц
