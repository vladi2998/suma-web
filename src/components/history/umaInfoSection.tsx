import Image from 'next/image';
import H1 from '../H1';
import { Card, CardContent } from '../ui/card';
import HstySectionImg from '../../../public/banner-img-5.webp';
export default function UmaInfoSection() {
	return (
		<Card>
			<CardContent className="flex flex-col md:flex-row items-center justify-around h-auto py-20">
				<div className="w-full md:w-3/5 h-full flex flex-col justify-around space-y-12">
					<H1>Universidad Monteávila</H1>
					<p className="text-xl md:text-2xl">
						Sumados es una plataforma digital de networking destinada a
						estudiantes y egresados de la Universidad Monteávila. Se enmarca en
						el proceso de revitalización de la Asociación de Egresados de la
						Universidad Monteávila, nuestra plataforma tiene como objetivo
						facilitar el intercambio de conocimientos y mantener el contacto
						entre sus miembros. La meta es promover la comunicación constante y
						beneficiosa entre nuestra comunidad, preservando las relaciones
						valiosas construidas durante la experiencia universitaria.
					</p>
				</div>
				<div className="w-full md:w-1/3 flex items-center justify-center">
					<Image
						src={HstySectionImg}
						className="w-128 h-auto my-2 rounded-8xl"
						alt={`history-section-img`}
						sizes="120vw"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
