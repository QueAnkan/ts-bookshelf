import {atom} from "recoil"
import { books } from "./books"

export const bookAtom = atom ({
	key: 'book',
	default: books
})