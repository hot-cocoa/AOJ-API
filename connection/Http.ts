// HTTP通信クラス
export class Http {
    // HTTP通信(GET)
    sendGetRequest(url: string) {
        return this.sendRequest('GET', url);
    }

    // HTTP通信(POST)
    sendPostRequest(url: string) {
        return this.sendRequest('POST', url);
    }

    // HTTP通信
    sendRequest(type: string, url: string) {
        // リクエスト作成・送信
        const request = new XMLHttpRequest();
        request.open(type, url);
        request.send();

        // レスポンス処理
        request.onreadystatechange = () => {
            // リクエスト完了 かつ 成功
            if (request.readyState === 4 &&
                request.status     === 200) {
                return request.responseText;
            }
            // TODO: エラー処理
        };
    }
}
