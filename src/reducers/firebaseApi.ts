const config = {
  firebaseBaseUrl: 'https://otus-js-chat-4ed79-default-rtdb.firebaseio.com',
  firebaseCollection: 'messages.json',
};

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

export function observeWithEventSource(
  cb: (data: { name: string; message: string }) => void
): void {
  // https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource
  const evtSource = new EventSource(
    `${config.firebaseBaseUrl}/${config.firebaseCollection}`
  );

  evtSource.addEventListener('put', (ev) => {
    cb(JSON.parse((ev as MessageEvent).data).data);
  });
}
