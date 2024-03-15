"use client";
import Image from "next/image";
import bgImageLogin from "../../../public/img-bg.webp";
import bgMountains from "../../../public/PNG/mountainsBackgroundFHD.png";
import sumateLogo from "../../../public/PNG/sumados-logo.png";
import ForwardButton from "@/components/buttons/forwardButton";
import { useForm } from "react-hook-form";
import InputField from "@/components/forms/inputField";
import {
  registerUndergraduateStudent,
  registerPostGraduateStudent,
  registerTeacher,
} from "@/utils/auth";
import PasswordField from "@/components/forms/passwordField";
import SelectField, { ItemValue } from "@/components/forms/inputSelect";
import { ChangeEvent, useEffect, useState } from "react";
import { DateTimeField } from "@/components/forms/dateTimeField";
import CheckboxField from "@/components/forms/checkboxField";

type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

export default function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: {
      user: {
        password: "",
        user_type: 0,
        is_currently_enrolled: false,
      },
      graduate_year: undefined,
    },
  });

  const userType: ItemValue[] = [
    { value: 0, label: "Pregrado" },
    { value: 1, label: "Postgrado" },
    { value: 2, label: "Profesor" },
  ];

  const pregraduates_faculties: ItemValue[] = [
    { value: 0, label: "Ciencias de la Comunicación e Información" },
    { value: 1, label: "Ciencias de la Educación" },
    { value: 2, label: "Ciencias Económicas y Administrativas" },
    { value: 3, label: "Ciencias Jurídicas y Políticas" },
  ];

  const pregraduates_careers: ItemValue[] = [
    { value: 0, label: "Comunicación Social" },
    { value: 2, label: "Educación" },
    { value: 5, label: "Derecho" },
    { value: 6, label: "Ciencias Administrativas" },
  ];

  const postgraduates_carreers: ItemValue[] = [
    { value: 0, label: "Esp. Atención Psicoeducativa del Autismo" },
    { value: 1, label: "Esp. Evaluación Educativa" },
    {
      value: 2,
      label: "Esp. Planificación, Desarrollo y Gestión de Proyectos",
    },
    { value: 3, label: "Esp. Derecho Procesal Constitucional" },
    { value: 4, label: "Esp. Derecho de la Economía" },
    { value: 5, label: "Esp. Propiedad Intelectual" },
    { value: 6, label: "Esp. Periodismo Digital" },
    { value: 7, label: "Esp. Proyectos Educativos Comunitarios" },
  ];

  const [selectedType, setSelectedType] = useState<ItemValue | null>(
    userType[0]
  );
  const [isPostGraduate, setIsPostGraduate] = useState(false);
  const [isUnderGraduate, setIsUnderGraduate] = useState(true);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isCurrentlyEnrrolled, setIsCurrentlyEnrrolled] = useState(false);

  useEffect(() => {
    if (selectedType && selectedType.label === "Postgrado") {
      setIsPostGraduate(true);
      setIsUnderGraduate(false);
      setIsTeacher(false);
    } else if (selectedType && selectedType.label === "Pregrado") {
      setIsPostGraduate(false);
      setIsUnderGraduate(true);
      setIsTeacher(false);
    } else {
      setIsPostGraduate(false);
      setIsUnderGraduate(false);
      setIsTeacher(true);
    }
  }, [selectedType]);

  const handleSelectChange = (event: SelectChangeEvent) => {
    const selectedValue = Number(event.target.value);
    const selectedOption = userType.find(
      (option) => option.value === selectedValue
    );
    setSelectedType(selectedOption || null);
  };

  const handleCheckboxChange = () =>
    setIsCurrentlyEnrrolled(!getValues("user.is_currently_enrolled"));

  const getListOfYears = () => {
    const currentYear = new Date().getFullYear();
    const fundationYearUMA = 1998;
    const years = [];
    for (let i = currentYear; i >= fundationYearUMA; i--) {
      years.push({ value: i, label: `${i}` });
    }
    return years;
  };

  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src={bgImageLogin}
          alt="image-bg"
          layout="fill"
          objectFit="cover"
        />
        <Image
          src={bgMountains}
          className="z-10"
          alt="image-mountains-bg"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute w-full h-full bg-light-green opacity-50 z-0" />
      </div>
      <form
        className="w-full h-auto flex items-center justify-center z-10 overflow-y-hidden"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="bg-white w-4/5 sm:w-1/2 md:w-2/3 xl:w-1/3 h-auto flex flex-col items-center justify-around py-12 px-6 md:px-12 2xl:px-18 rounded-8xl space-y-12">
          <Image
            src={sumateLogo}
            width={300}
            height={300}
            alt="Picture of the author"
          />

          <InputField
            register={register}
            label="user.email"
            placeholder="Correo Electrónico"
          />
          <InputField
            register={register}
            label="user.document_id"
            placeholder="Documento de Identidad"
          />
          <InputField
            register={register}
            label="user.phone_number"
            placeholder="Número de teléfono"
          />
          <PasswordField
            register={register}
            label="user.password"
            placeholder="Contraseña"
            validation={{
              required: "Por favor elige una contraseña",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 carácteres",
              },
            }}
            errors={errors}
          />
          <PasswordField
            register={register}
            label="user.repeated_password"
            placeholder="Repite tu contraseña"
            errors={errors}
            validation={{
              validate: (value) =>
                value === getValues("user.password") ||
                "Las contraseñas deben ser iguales",
            }}
          />
          <SelectField
            register={register}
            label="user.user_type"
            errors={errors}
            values={userType}
            onChange={handleSelectChange}
          />
          {isPostGraduate && (
            <SelectField
              register={register}
              label="career"
              errors={errors}
              values={postgraduates_carreers}
            />
          )}
          {(isPostGraduate || isUnderGraduate) && (
            <>
              <div className="w-full flex justify-around items-center">
                <div className="flex items-center justify-around w-1/2">
                  <CheckboxField
                    register={register}
                    tag="Sigo Cursando"
                    label="is_currently_enrolled"
                    errors={errors}
                    onClick={handleCheckboxChange}
                  />
                </div>
                {!isCurrentlyEnrrolled && (
                  <div className="w-1/2">
                    <SelectField
                      register={register}
                      label="graduate_year"
                      errors={errors}
                      values={getListOfYears()}
                      placeholder="Año de Graduacion"
                    />
                  </div>
                )}
              </div>
            </>
          )}
          {isUnderGraduate && (
            <>
              <SelectField
                register={register}
                label="faculty"
                errors={errors}
                values={pregraduates_faculties}
                placeholder="Facultad"
              />
              <SelectField
                register={register}
                label="career"
                errors={errors}
                values={pregraduates_careers}
                placeholder="Carrera"
              />
            </>
          )}

          <ForwardButton
            text="Registrarse"
            callback={handleSubmit((values) => {
              if (values.user.is_currently_enrolled) {
                values.graduate_year = undefined;
              }
              console.log(values, isUnderGraduate, isPostGraduate, isTeacher);

              if (isUnderGraduate) {
                registerUndergraduateStudent(values);
              } else if (isPostGraduate) {
                registerPostGraduateStudent(values);
              } else if (isTeacher) {
                registerTeacher(values);
              }
            })}
          />
        </div>
      </form>
    </>
  );
}
