import { monthsGeo } from './constants';

export const formatDate = dt => {
  if (dt) {
    const time = dt.split(' ')[ 1 ];
    const date = dt.split(' ')[ 0 ];
    const hours = `${time.split(':')[ 0 ]} : ${time.split(':')[ 1 ]}`;
    const formatedDate = `${date.split('-')[ 2 ]} ${monthsGeo[ parseInt(date.split('-')[ 1 ]) ]}`;

    return `${formatedDate} ${hours}`;
  }

  return null;
};