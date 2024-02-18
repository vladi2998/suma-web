import { FileIcon, LinkIcon } from 'lucide-react';
import { Card } from '../ui/card';
import { Dispatch, SetStateAction } from 'react';

type FileOptionProps = {
	value: string;
	label: string;
	selected: boolean;
	setOption: Dispatch<SetStateAction<{ value: string; label: string }>>;
};

export default function FileOption(props: FileOptionProps) {
	return (
		<Card
			className={`w-48 h-48 flex justify-center items-center p-4 border-4 flex-col ${
				props.selected ? 'border-dark-green' : 'border-none'
			}`}
			onClick={() =>
				props.setOption({ value: props.value, label: props.label })
			}>
			{props.value == 'file' ? <FileIcon size={48} /> : <LinkIcon size={48} />}
			<p className="text-xl mt-4">{props.label}</p>
		</Card>
	);
}
