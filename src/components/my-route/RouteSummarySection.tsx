import Image from 'next/image';
import { CardContent } from '../ui/card';
import CristobalLaptop from '../../../public/PNG/cristobal-laptop.png';
import H1 from '../H1';
import { ArrowDownCircle } from 'lucide-react';

export default function RouteSummarySection() {
	return (
		<CardContent className="flex flex-col md:flex-row items-center justify-around w-full h-full ">
			<div className="w-full h-full md:h-full md:w-2/5 flex flex-col items-center justify-around space-y-10">
				<H1>Rutas de aprendizaje</H1>
				<p className="text-2xl font-semibold">
					Aquí conseguirás las propuestas que nuestro profesores y egresados han
					preparado para ofrecerte las mejores herramientas que potencien tus
					habilidades como líder educativo.
				</p>
				<div className="w-full ha-full flex items-center justify-start">
					<a href="#routes-section">
						<ArrowDownCircle className="text-dark-green h-12 w-12 hover:text-light-green transition ease-in duration-300" />
					</a>
				</div>
			</div>
			<div className="w-full md:w-2/5 h-full flex flex-col justify-center items-center">
				<Image
					src={CristobalLaptop}
					className="w-2/3"
					alt={`route-summary-section-img`}
				/>
			</div>
		</CardContent>
	);
}
