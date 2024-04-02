import H1 from '../H1';
import { CreateOffertModal } from './createOffertModal';

export default function TitleWorkingSection() {
	return (
		<div className="w-full h-auto flex flex-col items-start justify-start relative px-20 py-4">
			<div className="w-full flex flex-row items-center jusitfy-between">
				<H1>Trabajemos</H1>
				<div className="w-1/2">
					<CreateOffertModal />
				</div>
			</div>
			<p className="w-2/3 text-2xl text-dark-gray my-12">
				Aquí podrás encontrar ofertas de empleo que nuestros egresados comparten
				contigo para que puedas encontrar nuevos retos profesionales.
			</p>
		</div>
	);
}
