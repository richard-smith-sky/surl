const baseUrl = 'https://pbid.io/';
const shortUrlChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateShortUrl = (len: number): string => {
	let res = [];
	for (let i = 1; i <= len; i++) {
		res.push(shortUrlChars.charAt(Math.floor(Math.random() * shortUrlChars.length)));
	}
	return res.join('');
};

export const getShortUrl = (): string => {
	return baseUrl + generateShortUrl(8);
};
