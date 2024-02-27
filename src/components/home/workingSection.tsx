'use client';

import Image from 'next/image';
import H1 from '../H1';
import WorkingSectionItem from './workingItem';
import bgMountains from '../../../public/PNG/workingBackgroundFHD.png';
import useWindowDimensions from '@/hooks/useWindowsDimensions';
import { useEffect, useState } from 'react';

type WorkingSectionProps = {
	showTitle?: boolean;
};
export default function WorkingSection({
	showTitle = true,
}: WorkingSectionProps) {
	const [width, setWidth] = useState(1024);

	const defaultWorksList = [
		{
			title: 'Community Manager',
			place: 'Lugar',
			agency: 'Gigi Studio',
			iconColor: 'rgb(54 110 20)',
			description:
				'Profesional responsable de construir y administrar la comunidad online y gestionar la identidad y la imagen de marca, creando y manteniendo relaciones estables y duraderas con sus clientes, sus fans en internet.',
			extra_info:
				'Responsabilidades: \n Elaborar y ejecutar la estrategia de contenidos sociales para las marcas, en colaboración con diferentes áreas internas (Creación) y con el cliente. Creación y documentación de planes de contenidos. Idear soluciones de contenido digital al momento que la agencia reciba un brief para campaña. Manejo de múltiples canales digitales Facebook, Twitter, blogs, YouTube, Instagram, foros, etc. Identificar los factores de influencia (influencers) de la industria de sus marcas a fin de establecer relaciones, sociedades y colaborar con ellos. Evaluar e interpretar las tendencias, ánimo y opiniones de las Comunidades y comunicarlo internamente a los distintos departamentos (RRPP, Marketing, Prensa, etc.) para crear una sinergia. Participar junto a los responsables de sus marcas, en la creación del plan de Comunidades en línea, incluyendo alcance conceptual y presupuesto. Construir y mantener redes de distribución de contenidos de sus marcas a través de canales de medios sociales. Participar en la definición de los mensajes creativos. Participar en filmaciones, grabaciones, etc., que apoyen la construcción del producto creativo. Manejar la buena relación con el cliente. \n Requisitos: \n Licenciado en Comunicación Social 1 año de experiencia en cargo similares Conocimientos en Redes Sociales, Páginas Web, Mailing, ADS, Banner, video y edición/producción de video básico, Redacción. Manejo de MS Office, MS Office Power Point, Básico de ADOBE, Programas de edición de video básico. Conocimientos de Inglés Medio en escritura, lectura y conversación. Capacidad de trabajo en equipo y bajo presión. Sexo indistinto. Manejo de equipos, organizado. Experiencia en manejo de trafico en agencias de Publicidad Disponibilidad de trabajo presencial \n Información Adicional: \n Salario Mensual proporcional al perfil y experiencia. Bono de Alimentación. Póliza de Seguro HCM. Excelente ambiente laboral',
		},
		{
			title: 'Dirección de arte',
			place: 'Lugar',
			agency: 'Gigi Studio',
			iconColor: 'rgb(250 204 21)',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi.',
			extra_info: '',
		},
		{
			title: 'Diseñador gráfco',
			place: 'Lugar',
			agency: 'Gigi Studio',
			iconColor: 'rgb(3 105 161)',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi.',
			extra_info: '',
		},
		{
			title: 'Filmaker',
			place: 'Lugar',
			agency: 'Gigi Studio',
			iconColor: 'rgb(239 68 68)',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi.',
			extra_info: '',
		},
	];

	const [selectedWork, setSelectedWork] = useState(defaultWorksList[0]);

	const handleSelectWork = (work: {
		title: string;
		place: string;
		agency: string;
		iconColor: string;
		description: string;
		extra_info: string
	}) => {
		setSelectedWork(work);
	};

	const handleResize = () => setWidth(window.innerWidth);
	useEffect(() => {
		window.addEventListener('resize', handleResize);
	});

	return (
		<>
			<div className="relative w-screen h-auto">
				<Image
					src={bgMountains}
					className="-z-10"
					alt="image-mountains-bg"
					layout="fill"
					objectFit="cover"
				/>
				<div className="w-full h-full flex flex-col items-center py-4 space-y-4">
					{showTitle && (
						<div className="w-full flex items-start">
							<H1 className="ml-20">Trabajemos</H1>
						</div>
					)}
					<div className="w-full flex flex-col space-y-12 items-center justify-around lg:flex-row">
						<div className="w-3/4 lg:w-2/5 flex flex-col items-center justify-center space-y-12">
							{defaultWorksList.map((item, idx) => (
								<WorkingSectionItem
									{...item}
									key={idx}
									onSelectWork={handleSelectWork}
									column={width && width >= 1024 ? false : true}
								/>
							))}
						</div>
						<div className="w-3/4 lg:w-2/5 h-full flex flex-col items-center justify-center ">
							<WorkingSectionItem
								{...selectedWork}
								column
								showExtraInfo
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
