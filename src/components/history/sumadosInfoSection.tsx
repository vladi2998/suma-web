import { Card, CardContent } from '../ui/card';
export default function SumadosInfoSection() {
	return (
		<Card className='border-none'>
			<CardContent className="flex flex-col md:flex-row items-center justify-around h-auto py-20">
				<div className="w-full h-full flex flex-col justify-center items-center space-y-12">
					<h1 className="w-full text-4xl md:text-7xl font-bold text-center">
						¿Para qué sirve Sumados?
					</h1>
					<p className="text-xl md:text-2xl">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut lao- reet dolore magna aliquam
						erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
						tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea commodo
						consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
						velit esse molestie consequat, vel illum dolore eu feugiat nulla
						facilisis at vero eros et accumsan et iusto odio dignissim qui
						blandit praesent luptatum zzril delenit augue duis dolore te feugait
						nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing
						elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
						magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
						nostrud exerci tation ullam- corper suscipit lobortis nisl ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
