'use client';

import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarDaysIcon } from '@heroicons/react/16/solid';

import { Path, UseFormRegister, useFormContext } from 'react-hook-form';
import { useState } from 'react';

type InputProps = {
	label: Path<any>;
	register: UseFormRegister<any>;
	required?: boolean;
	placeholder?: string;
	errors: any;
};

export function DateTimeField({
	label,
	register,
	required,
	placeholder,
	errors,
}: InputProps) {
	return (
		<div className="w-full flex flex-col relative">
			<input
				className="text-sm md:text-base hover:cursor-pointer hover:bg-light-gray transform transition duration-300 w-full h-auto bg-slate-300 flex flex-row items-center justify-between px-4 py-6 rounded-l-full rounded-r-full"
				type="date"
				{...register(label, { required })}
				placeholder={placeholder}
			/>
			{errors[label] && <p className="text-red-500">{errors[label].message}</p>}
		</div>
	);
}
