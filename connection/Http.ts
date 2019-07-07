// HTTP通信クラス
export class Http {
    // HTTP通信(GET)
    sendGetRequest(
        url: string,
        afterConnection: (response: string) => void
    ) {
        return this.sendRequest('GET', url, afterConnection);
    }

    // HTTP通信(POST)
    sendPostRequest(
        url: string,
        afterConnection: (response: string) => void
    ) {
        return this.sendRequest('POST', url, afterConnection);
    }

    // HTTP通信
    sendRequest(
        type: string,
        url: string,
        afterConnection: (response: string) => void
    ) {
        // リクエスト作成・送信
        const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        const request = new XMLHttpRequest();
        request.open(type, url);

        request.onreadystatechange = () => {
            // リクエスト完了 かつ 成功
            if (request.readyState === 4 &&
                request.status     === 200) {
                // textデータ(Json形式)をパースしてコールバック関数に渡す
                callback(request.responseText);
            }
            else {
                // TODO: 例外処理追加
            }
        };

        // HTTPリクエストをサーバへ送信
        request.send(null);
    }
}
