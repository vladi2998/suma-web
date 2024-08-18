import '@justinribeiro/lite-youtube';
import { LiteYTEmbed } from '@justinribeiro/lite-youtube';

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['lite-youtube']: CustomElement<LiteYTEmbed>;
		}
	}
}
