export function slugify(string = '') {
  if (typeof string !== 'string') {
    throw new TypeError(
      'Slugify function must receive a string as a parameter!',
    );
  }

  let str = string.replace(/^\s+|\s+$/g, '').toLowerCase();

  const from = 'àáäâãèéëêìíïîõòóöôùúüûñç·/_,:;';
  const to = 'aaaaaeeeeiiiiooooouuuunc------';

  for (let i = 0, l = from.length; i < l; i += 1) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/-$/, '');

  return str;
}
