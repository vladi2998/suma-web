'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import addingItemImg from '../../../public/WEBP/addingItemImg.webp';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import ForwardButton from '../buttons/forwardButton';
import Link from 'next/link';
import InputField from '../forms/inputField';
import { useForm } from 'react-hook-form';
import firstImgRoute from '../../../public/PNG/folderIcon.png';
import secondImgRoute from '../../../public/PNG/zoomIcon.png';
import thirdImgRoute from '../../../public/PNG/brainIcon.png';
import fourthImgRoute from '../../../public/PNG/teamIcon.png';
import fifthImgRoute from '../../../public/PNG/penIcon.png';
import sixthImgRoute from '../../../public/PNG/paperIcon.png';
import plusIcon from '../../../public/PNG/plus-icon.png';
import MyLearningRouteForModal from './MyLearningRouteForModal';

export function UserProfileModal() {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			content: null,
		},
	});

	const defaultObject = {
		name: 'José Antonio De Oliveria Pérez',
		degree: 'Pregrado',
		faculty: 'Ciencias de la Comunicación e Información',
		career: 'Comunicación Social',
		graduation_year: '2022',
		img: addingItemImg,
		abstract:
			'En la actualidad, me especializo en el ámbito del análisis y la estrategia de comunicación, desempeñando el papel de Analista de Mensaje en la Dirección de Marca de la Universidad Monteávila (UMA). Mi pasión por el orden, la estrategia y la producción se refleja en mis diversas responsabilidades, que incluyen la ejecución de activaciones en colegios, colaboraciones con distintas marcas, la creación de contenido adaptado a varias plataformas, el análisis de datos y el diseño de planes de comunicación eficaces. \n \n Paralelamente, mi entusiasmo por la educación y la pedagogía me ha llevado a cursar una maestría en Innovación Educativa mediada por TIC, consolidando mi compromiso con el avance educativo. Como miembro activo de la Asociación de Egresados (AEUMA), estoy abierto a escuchar nuevas ideas que contribuyan al crecimiento de nuestra institución. Si consideras que puedo ser de ayuda, te invito a contactarme; estoy dispuesto a colaborar y compartir mis conocimientos en pro del desarrollo universitario.',
	};

	const defaultImageRoute = [
		{
			img: firstImgRoute,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan turpis tortor, sed luctus mi varius quis. Donec fermentum placerat quam id interdum. Praesent sagittis venenatis ornare. Proin lobortis rhoncus ex, non tincidunt ligula pellentesque ultricies. Nam dapibus urna ut rhoncus accumsan. Vestibulum accumsan dapibus nulla. Morbi sagittis quis nisi sed elementum. Duis laoreet urna metus, scelerisque lacinia ligula molestie quis.',
		},
		{
			img: secondImgRoute,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan turpis tortor, sed luctus mi varius quis. Donec fermentum placerat quam id interdum. Praesent sagittis venenatis ornare. Proin lobortis rhoncus ex, non tincidunt ligula pellentesque ultricies. Nam dapibus urna ut rhoncus accumsan. Vestibulum accumsan dapibus nulla. Morbi sagittis quis nisi sed elementum. Duis laoreet urna metus, scelerisque lacinia ligula molestie quis.',
		},
		{
			img: thirdImgRoute,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan turpis tortor, sed luctus mi varius quis. Donec fermentum placerat quam id interdum. Praesent sagittis venenatis ornare. Proin lobortis rhoncus ex, non tincidunt ligula pellentesque ultricies. Nam dapibus urna ut rhoncus accumsan. Vestibulum accumsan dapibus nulla. Morbi sagittis quis nisi sed elementum. Duis laoreet urna metus, scelerisque lacinia ligula molestie quis.',
		},
		{
			img: fourthImgRoute,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan turpis tortor, sed luctus mi varius quis. Donec fermentum placerat quam id interdum. Praesent sagittis venenatis ornare. Proin lobortis rhoncus ex, non tincidunt ligula pellentesque ultricies. Nam dapibus urna ut rhoncus accumsan. Vestibulum accumsan dapibus nulla. Morbi sagittis quis nisi sed elementum. Duis laoreet urna metus, scelerisque lacinia ligula molestie quis.',
		},
		{
			img: fifthImgRoute,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan turpis tortor, sed luctus mi varius quis. Donec fermentum placerat quam id interdum. Praesent sagittis venenatis ornare. Proin lobortis rhoncus ex, non tincidunt ligula pellentesque ultricies. Nam dapibus urna ut rhoncus accumsan. Vestibulum accumsan dapibus nulla. Morbi sagittis quis nisi sed elementum. Duis laoreet urna metus, scelerisque lacinia ligula molestie quis.',
		},
		{
			img: sixthImgRoute,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan turpis tortor, sed luctus mi varius quis. Donec fermentum placerat quam id interdum. Praesent sagittis venenatis ornare. Proin lobortis rhoncus ex, non tincidunt ligula pellentesque ultricies. Nam dapibus urna ut rhoncus accumsan. Vestibulum accumsan dapibus nulla. Morbi sagittis quis nisi sed elementum. Duis laoreet urna metus, scelerisque lacinia ligula molestie quis.',
		},
	];

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="custom"
					size="custom">
					<p className="pl-2 w-3/4 font-bold text-white text-start md:text-xl">
						Sumemos
					</p>
					<Image
						className="bg-white rounded-full p-1 w-8 h-8"
						src={plusIcon}
						alt="Picture of the author"
					/>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[1280px] max-h-screen bg-transparent border-none">
				<div className="flex flex-col w-full h-full overflow-y-scroll max-h-screen no-scrollbar space-y-4">
					{/* <div className="-z-10 fixed w-full h-96 flex flex-col items-center justify-center">
						<Image
							className="object-cover"
							src={emptyAddingImg}
							alt="image-bg"
							layout="fill"
						/>
					</div> */}
					<Card className="w-full h-auto p-4 rounded-4xl bg-white flex flex-col md:flex-row items-center justify-around border-none">
						<div className="w-full md:w-2/5 h-auto flex items-center justify-center">
							<Image
								src={addingItemImg}
								alt={`profile-img`}
								className="w-auto h-96 rounded-5xl"
							/>
						</div>
						<div className="w-full md:w-3/5 h-4/5 flex flex-col text-xl justify-around">
							<p>
								<strong>Nombre: </strong>
								{defaultObject.name}
							</p>
							<p>
								<strong>Nivel de estudios: </strong>
								{defaultObject.degree}
							</p>
							<p>
								<strong>Facultad: </strong>
								{defaultObject.faculty}
							</p>
							<p>
								<strong>Carrera: </strong>
								{defaultObject.career}
							</p>
							<p>
								<strong>Año de graduación: </strong>
								{defaultObject.graduation_year}
							</p>
							<Link
								href="/"
								className="w-full md:w-1/2">
								<ForwardButton text="¡Ver mi portafolio!" />
							</Link>
						</div>
					</Card>
					<Card className="w-full h-auto p-4 bg-dark-green rounded-4xl text-xl text-white font-semibold whitespace-break-spaces">
						{defaultObject.abstract}
					</Card>
					<Card className="w-full h-auto p-4 rounded-4xl bg-transparent flex flex-col md:flex-row items-center justify-around border-none">
						<div className="w-full md:w-1/2 flex flex-col space-y-2 px-1">
							<InputField
								register={register}
								label="name"
								placeholder="Nombre"
							/>
							<InputField
								register={register}
								label="phone"
								placeholder="Teléfono"
							/>
							<InputField
								register={register}
								label="email"
								placeholder="Email"
							/>
						</div>
						<div className="w-full h-full md:w-1/2 flex flex-col space-y-2 px-0 md:px-1 my-2">
							<InputField
								register={register}
								label="message"
								placeholder="Mensaje"
							/>
						</div>
					</Card>
					<ForwardButton text="Mi ruta" />
					<Card className="w-full h-auto py-4 rounded-4xl bg-transparent flex flex-col items-center justify-around border-none space-y-2">
						<MyLearningRouteForModal imgList={defaultImageRoute} />
					</Card>
				</div>
			</DialogContent>
		</Dialog>
	);
}
