'use client';

import Image from 'next/image';
import H1 from '../H1';
import WorkingSectionItem from './workingItem';
import bgMountains from '../../../public/PNG/workingBackgroundFHD.png';
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
				'<strong>Responsabilidades:</strong> \n● &nbsp;Elaborar y ejecutar la estrategia de contenidos sociales para las marcas, en colaboraci&oacute;n con diferentes &aacute;reas internas (Creaci&oacute;n) y con el cliente. \n● &nbsp;Creaci&oacute;n y documentaci&oacute;n de planes de contenidos. \n● &nbsp;Idear soluciones de contenido digital al momento que la agencia reciba un brief para campa&ntilde;a. \n● &nbsp;Manejo de m&uacute;ltiples canales digitales: Facebook, Twitter, blogs, YouTube,Instagram, foros, etc.\n● &nbsp;Identificar los factores de influencia (influencers) de la industria de sus marcas a fin de establecer relaciones, sociedades y colaborar con ellos. \n● &nbsp;Evaluar e interpretar las tendencias, &aacute;nimo y opiniones de las Comunidades y comunicar internamente a los distintos departamentos (RRPP, Marketing,Prensa, etc.) para crear una sinergia. \n● &nbsp;Participar junto a los responsables de sus marcas, en la creaci&oacute;n del plan de Comunidades en l&iacute;nea, incluyendo alcance conceptual y presupuesto. \n● &nbsp;Construir y mantener redes de distribuci&oacute;n de contenidos de sus marcas a trav&eacute;s de canales de medios sociales. \n● &nbsp;Participar en la definici&oacute;n de los mensajes creativos. \n● &nbsp;Participar en filmaciones, grabaciones, etc., que apoyen la construcci&oacute;n del producto creativo. \n● &nbsp;Manejar la buena relaci&oacute;n con el cliente.',
		},
		{
			title: 'Dirección de arte',
			place: 'Lugar',
			agency: 'Gigi Studio',
			iconColor: 'rgb(250 204 21)',
			description:
				'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi.</p>',
			extra_info: '',
		},
		{
			title: 'Diseñador gráfco',
			place: 'Lugar',
			agency: 'Gigi Studio',
			iconColor: 'rgb(3 105 161)',
			description:
				'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi.</p>',
			extra_info: '',
		},
		{
			title: 'Filmaker',
			place: 'Lugar',
			agency: 'Gigi Studio',
			iconColor: 'rgb(239 68 68)',
			description:
				'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi.</p>',
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
		extra_info: string;
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
