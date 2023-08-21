let metaNamesUrl = `${process.env.META_NAMES_APP_URL}`
if (metaNamesUrl.length === 0) metaNamesUrl = 'https://app.metanames.io';

export const metaNamesAppUrl = metaNamesUrl;
