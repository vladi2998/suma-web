'use client';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import FileOption from './fileOption';
import { Button } from '../ui/button';
import InputField from '../forms/inputField';
import { useForm } from 'react-hook-form';

export interface UploadFileModalProps {
	onUpload: (data: any) => void;
	idx?: number;
}

export function UploadFileModal({ onUpload, idx }: UploadFileModalProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState({
		value: 'link',
		label: 'Link',
	});
	const [selectedContent, setSelectedContent] = useState(null);
	const options = [
		{
			value: 'link',
			label: 'Link',
		},
		{ value: 'file', label: 'Archivo' },
	];
	const { register, handleSubmit, watch } = useForm({
		defaultValues: {
			content: null,
		},
	});

	const handleUpload = (data: any, event: any) => {
		if (selectedOption.value === 'link') {
			onUpload({ url: data.url, idx });
			setSelectedContent(data?.url);
		} else {
			onUpload({ file: data.file, idx });
			setSelectedContent(data?.file?.[0]?.name);
		}
		setIsOpen(false);
	};

	const content = watch('content');

	useEffect(() => {
		setSelectedContent(content);
	}, [content]);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" onClick={() => setIsOpen(true)}>
					{selectedContent || 'Subir contenido'}
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[480px]">
				<DialogHeader>
					<DialogTitle>Subir un archivo o link</DialogTitle>
					<DialogDescription>
						Por favor selecciona el tipo de archivo que deseas subir y adjunta
						el mismo antes de enviarlo
					</DialogDescription>
				</DialogHeader>
				<div className="w-full flex flex-col p-2">
					<div className="w-full flex flex-row items-center justify-between">
						{options.map((item, id) => (
							<FileOption
								{...item}
								selected={item.value === selectedOption.value}
								setOption={setSelectedOption}
								key={id}
							/>
						))}
					</div>
					<div className="w-full mt-4">
						{selectedOption.value === 'link' ? (
							<InputField
								register={register}
								label="url"
								placeholder="example.com/my-content/"
							/>
						) : (
							<InputField
								register={register}
								label="file"
								placeholder="content.pdf"
								type="file"
							/>
						)}
					</div>
				</div>
				<DialogFooter>
					<Button variant="outline" onClick={handleSubmit(handleUpload)}>
						Subir
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
