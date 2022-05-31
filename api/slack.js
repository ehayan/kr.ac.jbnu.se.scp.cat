export function sendMessage(webhook, msg) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", webhook, true);

  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Request finished. Do processing here.
      }
  }
  const payload = {
      "text": "슬렉 메시지 보내기",
      "blocks": [
          {
              "type": "section",
              "text": {
              "type": "mrkdwn",
              "text": "Probby: "
              }
          },
          {
              "type": "section",
              "block_id": "section123",
              "fields": [
                  {
                      "type": "mrkdwn",
                      "text": msg
                  }
              ]
          }
      ]
  };
  xhr.send( JSON.stringify(payload));
}