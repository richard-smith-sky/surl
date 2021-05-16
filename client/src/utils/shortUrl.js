const baseUrl = 'https://pbid.io/';
const shortUrlChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateShortUrl = (len) => {
	let res = [];
	for (let i = 1; i <= len; i++) {
		res.push(shortUrlChars.charAt(Math.floor(Math.random() * shortUrlChars.length)));
	}
	return res.join('');
};

export const getShortUrl = () => {
	return baseUrl + generateShortUrl(8);
};
