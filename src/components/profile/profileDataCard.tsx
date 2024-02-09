import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
// import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ForwardButton from '../buttons/forwardButton';
import { useForm } from 'react-hook-form';
import InputField from '../forms/inputField';

export function ProfileDataCard() {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			name: 'Jose Antonio',
			lastname: 'De Oliveira',
			phone: '04121234567',
			birthday: '01/01/1999',
			career: 'Com. Social',
		},
	});

	const {
		register: registerCredentials,
		handleSubmit: handleSubmitCredentials,
	} = useForm({
		defaultValues: {
			email: 'example@example.com',
		},
	});

	return (
		<Tabs
			defaultValue="account"
			className="w-full h-screen">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="account">Cuenta</TabsTrigger>
				<TabsTrigger value="credentials">Credenciales</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				<Card>
					<CardHeader>
						<CardTitle>Datos Personales</CardTitle>
						<CardDescription>
							Aqui podrás ver y cambiar los datos de tu cuenta.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-1">
							<Label htmlFor="name">Nombre</Label>
							<InputField
								register={register}
								label="name"
								placeholder="Nombre"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="lastname">Apellido</Label>
							<InputField
								register={register}
								label="lastname"
								placeholder="Apellido"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="phone">Telefono</Label>
							<InputField
								register={register}
								label="phone"
								placeholder="Ex: 04121234567"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="birthday">Fecha de Nacimiento</Label>
							<InputField
								register={register}
								label="birthday"
								placeholder="Ex: dd/mm/aaaa"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="carer">Carrera</Label>
							<InputField
								register={register}
								label="career"
								placeholder="Carrera"
							/>
						</div>
					</CardContent>
					<CardFooter>
						<ForwardButton
							text="Guardar Cambios"
							callback={handleSubmit((values) => console.log(values))}
						/>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="credentials">
				<Card>
					<CardHeader>
						<CardTitle>Credenciales</CardTitle>
						<CardDescription>
							Cambia las credenciales asociadas a tu cuenta.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-1">
							<Label htmlFor="email">Correo Electrónico</Label>
							<InputField
								register={registerCredentials}
								label="email"
								placeholder="Nombre"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="password">Contraseña</Label>
							<InputField
								register={registerCredentials}
								label="password"
								placeholder="Contraseña"
							/>
						</div>
					</CardContent>
					<CardFooter>
						<ForwardButton
							text="Guardar Cambios"
							callback={handleSubmitCredentials((values) =>
								console.log(values)
							)}
						/>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
