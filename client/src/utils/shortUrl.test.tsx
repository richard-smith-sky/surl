import { getShortUrl } from './shortUrl';

describe('shortUrl utility', () => {
	it('getShortUrl should return a random url', () => {
		const test = getShortUrl();
		const urlMatch = expect.stringMatching(/https:\/\/pbid.io\/[a-z0-9]{8}/gm);
		expect(test).toEqual(urlMatch);
	});
});
