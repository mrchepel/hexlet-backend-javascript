const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];

export default (emails) => emails.map((email) => email.split('@')[1])
  .filter((domain) => freeEmailDomains.indexOf(domain) !== -1)
  .reduce((acc, domain) => {
    const count = acc[domain] ? acc[domain] + 1 : 1;
    return { ...acc, [domain]: count };
  }, {});
