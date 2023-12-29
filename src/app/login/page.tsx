import Image from 'next/image';
import bgImageLogin from '../../../public/img-bg.webp';
import ForwardButton from '@/components/buttons/forwardButton';

export default function LoginPage() {
	return (
		<>
			<div
				style={{
					zIndex: -1,
					position: 'fixed',
					width: '100vw',
					height: '100vh',
				}}>
				<Image
					src={bgImageLogin}
					alt="image-bg"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="w-48">
				<p>Login</p>
				<ForwardButton text="Login" />
			</div>
		</>
	);
}
