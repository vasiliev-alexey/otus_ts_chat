const config = {
  firebaseBaseUrl: 'https://otus-js-chat-4ed79-default-rtdb.firebaseio.com',
  firebaseCollection: 'messages.json',
};

// /**
//  * @return {Object[]} messagesList
//  */
export async function getMessagesList(): Promise<any> {
  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) =>
      Object.entries(data).map((el) => ({
        ...el,

        //date: new Date(el.data),
      }))
    );
}

// /**
//  * @param {Object} data
//  * @param {string} data.nickname
//  * @param {string} data.message
//  * @returns {boolean}
//  */
export async function sendMessage(data: Record<string, any>): Promise<void> {
  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}`, {
    method: 'POST',
    body: JSON.stringify({
      ...data,
      date: new Date(),
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

// function observeWithXHR(cb: (d: unknown) => void) {
//   // https://firebase.google.com/docs/reference/rest/database#section-streaming
//   const xhr = new XMLHttpRequest();
//   let lastResponseLength = 0;
//
//   xhr.addEventListener('progress', () => {
//     // console.log("xhr body", xhr.response);
//     const body = xhr.response.substr(lastResponseLength);
//     lastResponseLength = xhr.response.length;
//
//     const eventType = body.match(/event: (.+)/)[1];
//     const data = JSON.parse(body.match(/data: (.+)/)[1]);
//
//     if (eventType === 'put') {
//       cb(data.data);
//     }
//   });
//
//   xhr.open(
//     'POST',
//     `${config.firebaseBaseUrl}/${config.firebaseCollection}`,
//     true
//   );
//   xhr.setRequestHeader('Accept', 'text/event-stream');
//
//   xhr.send();
// }

export function observeWithEventSource(
  cb: (data: { name: string; message: string }) => void
): void {
  // https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource
  const evtSource = new EventSource(
    `${config.firebaseBaseUrl}/${config.firebaseCollection}`
  );

  evtSource.addEventListener('put', (ev) => {
    cb(JSON.parse((ev as any).data).data);
  });
}
