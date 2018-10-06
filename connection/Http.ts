// HTTP通信クラス
export class Http {
    // HTTP通信(GET)
    sendGetRequest(url: string, /* 通信後処理: */ callback) {
        return this.sendRequest('GET', url, callback);
    }

    // HTTP通信(POST)
    sendPostRequest(url: string, /* 通信後処理: */ callback) {
        return this.sendRequest('POST', url, callback);
    }

    // HTTP通信
    sendRequest(type: string, url: string, callback) {
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
        };

        // HTTPリクエストをサーバへ送信
        request.send(null);
    }
}
