"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import addingItemImg from "../../../public/WEBP/addingItemImg.webp";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import ForwardButton from "../buttons/forwardButton";
import Link from "next/link";
import InputField from "../forms/inputField";
import { useForm } from "react-hook-form";
import firstImgRoute from "../../../public/PNG/paperIcon2.png";
import secondImgRoute from "../../../public/PNG/penIcon2.png";
import thirdImgRoute from "../../../public/PNG/teamIcon2.png";
import fourthImgRoute from "../../../public/PNG/brainIcon2.png";
import fifthImgRoute from "../../../public/PNG/zoomIcon2.png";
import sixthImgRoute from "../../../public/PNG/folderIcon2.png";
import firstArrow from "../../../public/PNG/firstArrow.png";
import secondArrow from "../../../public/PNG/secondArrow.png";
import thirdArrow from "../../../public/PNG/thirdArrow.png";
import fourthArrow from "../../../public/PNG/fourthArrow.png";
import fifthArrow from "../../../public/PNG/fifthArrow.png";
import sixArrow from "../../../public/PNG/sixArrow.png";
import plusIcon from "../../../public/PNG/plus-icon.png";
import MyLearningRouteForModal from "./MyLearningRouteForModal";
import React from "react";

type UserProfileModalProps = {
  first_name: string;
  last_name: string;
  career?: string;
  charge?: string;
  study_level?: string;
  img: any;
  learning_path?: any;
  description: string;
  email: string;
  undergraduate_program?: string;
  undergraduate_graduation_date?: string;
  faculty?: string;
  is_teacher: boolean;
  is_student: boolean;
  postgraduate_program?: string;
};

export function UserProfileModal(props: UserProfileModalProps) {
  const { learning_path } = props;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      content: null,
    },
  });

  const defaultImageRoute = [
    {
      img: firstImgRoute,
      arrowImg: firstArrow,
      info: learning_path?.steps?.[0]?.description,
      style: "ml-36",
      arrowStyle: "top-28 ml-8",
    },
    {
      img: secondImgRoute,
      arrowImg: secondArrow,
      info: learning_path?.steps?.[1]?.description,
      style: "ml-16",
      arrowStyle: "top-12 ml-8",
    },
    {
      img: thirdImgRoute,
      arrowImg: thirdArrow,
      info: learning_path?.steps?.[2]?.description,
      style: "",
      arrowStyle: "bottom-4 ml-8",
    },
    {
      img: fourthImgRoute,
      arrowImg: fourthArrow,
      info: learning_path?.steps?.[3]?.description,
      style: "",
      arrowStyle: "bottom-6 ml-8",
    },
    {
      img: fifthImgRoute,
      arrowImg: fifthArrow,
      info: learning_path?.steps?.[4]?.description,
      style: "ml-16",
      arrowStyle: "bottom-28 ml-8",
    },
    {
      img: sixthImgRoute,
      arrowImg: sixArrow,
      info: learning_path?.steps?.[5]?.description,
      style: "ml-36",
      arrowStyle: "bottom-56 ml-8",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="custom" size="custom">
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
          <Card className="w-full h-auto p-4 rounded-4xl bg-white flex flex-col md:flex-row items-center justify-around border-none">
            <div className="w-full md:w-2/5 h-auto flex items-center justify-center">
              <Image
                src={props.img}
                alt={`profile-img`}
                className="w-auto h-96 rounded-5xl"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full md:w-3/5 h-4/5 flex flex-col text-xl justify-around">
              <p>
                <strong>Nombre: </strong>
                {props.first_name + " " + props.last_name}
              </p>
              {props.is_teacher && (
                <p>
                  <strong>Nivel de estudios: </strong>
                  {props.study_level}
                </p>
              )}
              {props.is_student && props.undergraduate_program && (
                <p>
                  <strong>Carrera: </strong>
                  {props.undergraduate_program}
                </p>
              )}
              {props.is_student && props.undergraduate_graduation_date && (
                <p>
                  <strong>Año de graduación: </strong>
                  {props.undergraduate_graduation_date}
                </p>
              )}
              {props.is_teacher && (
                <p>
                  <strong>Cargo: </strong>
                  {props.charge}
                </p>
              )}
              {props.is_teacher && (
                <p>
                  <strong>Carrera: </strong>
                  {props.career}
                </p>
              )}
              {props.is_student && props.postgraduate_program && (
                <p>
                  <strong>Carrera de postgrado: </strong>
                  {props.postgraduate_program}
                </p>
              )}
              {props.is_student && props.faculty && (
                <p>
                  <strong>Facultad: </strong>
                  {props.faculty}
                </p>
              )}
              {/* <p>
								<strong>Tipo de usuario: </strong>
								{props.is_teacher ? 'Profesor' : 'Estudiante'}
							</p> */}
              <Link href="/" className="w-full md:w-1/2">
                <ForwardButton text="¡Ver mi portafolio!" />
              </Link>
            </div>
          </Card>
          {props.description && (
            <Card className="w-full h-auto p-4 bg-dark-green rounded-4xl text-xl text-white font-semibold whitespace-break-spaces">
              {props.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Card>
          )}
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
          {props.is_teacher ? (
            <>
              <ForwardButton text={props?.learning_path?.title} />
              <Card className="w-full h-auto py-4 rounded-4xl bg-transparent flex flex-col items-center justify-around border-none space-y-2">
                <MyLearningRouteForModal imgList={defaultImageRoute} />
              </Card>
              <div className="my-36" />
            </>
          ) : (
            <div className="py-4 w-full" />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
