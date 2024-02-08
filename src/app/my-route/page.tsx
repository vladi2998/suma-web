import BrandingSection from '@/components/my-route/brandingSection';
import ProfileSection from '@/components/my-route/profileSection';

export default function MyRoutePage() {
	return (
		<>
			<div className="w-full px-4 my-4">
				<ProfileSection />
			</div>
			<div className="w-full px-12 my-4">
				<BrandingSection />
			</div>
		</>
	);
}
