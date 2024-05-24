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
		<div className="flex flex-col w-80 xl:w-96 h-auto md:h-140 justify-between mb-8">
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
					description={userData?.user?.description}
					undergraduate_graduation_date={userData.undergraduate_graduation_date}
					undergraduate_program={userData.undergraduate_program}
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
