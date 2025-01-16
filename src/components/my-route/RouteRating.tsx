import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

export default function RatingComponent({
  stars,
  votes,
  students,
}: {
  stars: number;
  votes: number;
  students: number;
}) {
  const _stars = Array.from({ length: 5 });
  const roundedStars = Math.round(stars);
  return (
    <></>
    // <div className="flex flex-row items-center justify-center space-x-2">
    // 	<div className="flex flex-row items-center justify-center space-x-2">
    // 		<p className="text-white text-lg">{stars}</p>
    // 		<div className="flex flex-row items-center">
    // 			{_stars.map((_, idx) => {
    // 				return idx < roundedStars ? (
    // 					<StarIcon
    // 						key={idx}
    // 						className="w-8"
    // 						color="green"
    // 					/>
    // 				) : (
    // 					<OutlineStar
    // 						key={idx}
    // 						className="w-8"
    // 						color="green"
    // 					/>
    // 				);
    // 			})}
    // 		</div>
    // 	</div>
    // 	<p className="text-white font-bold text-lg">{votes} votos</p>
    // 	<p className="text-white text-lg">({students} estudiantes)</p>
    // </div>
  );
}
