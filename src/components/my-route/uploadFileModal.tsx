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
import { useState } from 'react';
import FileOption from './fileOption';
import { Button } from '../ui/button';
import InputField from '../forms/inputField';
import { useForm } from 'react-hook-form';

export function UploadFileModal() {
	const [selectedOption, setSelectedOption] = useState({
		value: 'link',
		label: 'Link',
	});
	const options = [
		{
			value: 'link',
			label: 'Link',
		},
		{ value: 'file', label: 'Archivo' },
	];
	const { register, handleSubmit } = useForm({
		defaultValues: {
			content: null,
		},
	});

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Subir contenido</Button>
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
					<Button variant="outline">Subir</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
