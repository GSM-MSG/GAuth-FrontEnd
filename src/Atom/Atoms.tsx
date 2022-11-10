import { atom } from 'recoil';

export const ViewWidth = atom<number>({
	key: 'viewWidth',
	default: 0,
});
