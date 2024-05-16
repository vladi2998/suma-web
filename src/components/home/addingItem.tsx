'use client';
import Image, { StaticImageData } from 'next/image';
import { UserProfileModal } from '../connect/userProfileModal';
import profile_bg from '../../../public/PNG/profile_bg.png';
import userMale from '../../../public/PNG/userMale.png';
import userFemale from '../../../public/PNG/userFemale.png';
import { useEffect, useState } from 'react';
import { getStudent, getTeacher } from '@/utils/user';

type AddingProps = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	document_id: string;
	phone_number: string;
	is_student: boolean;
	is_teacher: boolean;
};
export default function AddingItem({
	id,
	email,
	first_name,
	last_name,
	document_id,
	phone_number,
	is_student,
	is_teacher,
}: AddingProps) {
	// TODO: Add description to the user endpoint
	const defaultDescriptio =
		'En la actualidad, me especializo en el ámbito del análisis y la estrategia de comunicación, desempeñando el papel de Analista de Mensaje en la Dirección de Marca de la Universidad Monteávila (UMA). Mi pasión por el orden, la estrategia y la producción se refleja en mis diversas responsabilidades, que incluyen la ejecución de activaciones en colegios, colaboraciones con distintas marcas, la creación de contenido adaptado a varias plataformas, el análisis de datos y el diseño de planes de comunicación eficaces. \n \n Paralelamente, mi entusiasmo por la educación y la pedagogía me ha llevado a cursar una maestría en Innovación Educativa mediada por TIC, consolidando mi compromiso con el avance educativo. Como miembro activo de la Asociación de Egresados (AEUMA), estoy abierto a escuchar nuevas ideas que contribuyan al crecimiento de nuestra institución. Si consideras que puedo ser de ayuda, te invito a contactarme; estoy dispuesto a colaborar y compartir mis conocimientos en pro del desarrollo universitario.';
	//

	const [userData, setUserData] = useState({} as any);
	const [userImg, setUserImg] = useState<StaticImageData | string>('');

	const getStudentById = async (id: number) => {
		const student = await getStudent(id);
		setUserData(student);
	};

	const getTeacherById = async (id: number) => {
		const teacher = await getTeacher(id);
		setUserData(teacher);
	};

	useEffect(() => {
		const img: StaticImageData | string =
			userData?.user?.image ??
			(userData?.user?.gender === 'Masculino'
				? userMale
				: userData?.user?.gender === 'Femenino'
				? userFemale
				: profile_bg);
		setUserImg(img);
	}, [userData]);

	useEffect(() => {
		if (is_student) {
			getStudentById(id);
		} else if (is_teacher) {
			getTeacherById(id);
		}
	}, [id, is_student, is_teacher]);

	return (
		<div className="flex flex-col w-80 xl:w-96 h-auto space-y-12 mb-8">
			<div className="w-full h-6/12 relative">
				{userImg && (
					<Image
						src={userImg}
						alt={`adding-img-${userData?.user?.id}`}
                        className="w-full h-full rounded-[8rem]"
						width={500}
						height={500}
					/>
				)}
			</div>
			<div className="w-full h-5/12 flex flex-col items-start text-start">
				<h1 className="text-2xl font-bold">{first_name + ' ' + last_name}</h1>
				{is_teacher && <p>{userData.career}</p>}
				{is_teacher && <p>{userData.study_level}</p>}
				{is_teacher && <p>{userData.charge}</p>}
				{is_student && <p>Estudiante</p>}
			</div>
			<div className="w-full h-1/12 flex items-center justify-center">
				<UserProfileModal
					first_name={first_name}
					last_name={last_name}
					email={email}
					img={userImg}
					abstract={defaultDescriptio}
					is_teacher={is_teacher}
					is_student={is_student}
					career={userData.career}
					charge={userData.charge}
					study_level={userData.study_level}
					learning_path={userData.learning_path}
				/>
			</div>
		</div>
	);
}
