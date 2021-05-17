// Interfaces
interface ISurl {
	fullUrl: string;
	shortUrl: string;
}

interface ISurlError {
	error: string;
}

interface SurlListProps {
	surl: ISurl;
	surls: ISurl[];
	surlError: ISurlError;
	createSurlAction: Function;
	resetSurlAction: Function;
	resetSurlErrorAction: Function;
	fetchSurlsAction: Funcion;
}

// Actions
type ISurlAction = {
	type?: string;
	surl?: ISurl | null;
	err?: any;
};

type ISurlErrorAction = {
	type: string;
	err: string;
};

type ISurlsAction = {
	type: string;
	surls?: ISurl[];
	err?: any;
};

type ISurlsErrorAction = {
	type: string;
	err: string;
};

// Dispatches
type DispatchSurlType = (args: ISurlAction) => ISurlAction;
type DispatchSurlsType = (args: ISurlsAction) => ISurlsAction;
