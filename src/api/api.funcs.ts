import ky from 'ky';

// const api = ky.extend({
//   hooks: {
//     beforeRequest: [
//       (request) => {
//         request.headers.set('DY-API-Key', '7a0fd330b12068d6e2348167297a3c03d96fcb57e76cd771c5bbdd78e3eea8fb');
//       }
//     ]
//   }
// });

export const chooseVariation = async (scriptId: string, selector: string, apiKey: string) => {
  const isEU = scriptId && scriptId[0] !== '8';
  return await ky
    .extend({
      hooks: {
        beforeRequest: [
          (request) => {
            request.headers.set('DY-API-Key', apiKey);
          }
        ]
      }
    })
    .post(`https://direct.dy-api.${isEU ? 'eu' : 'com'}/v2/serve/user/choose`, {
      json: {
        context: {
          device: {
            ip: '54.100.200.255',
            userAgent:
              'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
          },
          page: {
            data: [],
            location: 'https://ronny011-dy.github.io/gooseberry/',
            type: 'HOMEPAGE'
          }
        },
        explainMode: 'debug',
        options: {
          isImplicitPageview: true
        },
        selector: { names: [selector] },
        user: { active_consent_accepted: true }
      }
    })
    .json();
};
