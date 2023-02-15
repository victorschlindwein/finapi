import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 15,
  duration: '10s',
};


export default function () {
  const url = 'http://localhost:3333/balance';
  sleep(1);


  const params = {
    headers: {
      cpf: '99999999999',
    },
  };

  http.get(url, params);
}
