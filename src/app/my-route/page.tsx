'use client';
import RoutesSection from '@/components/my-route/RoutesSection';
import BrandingSection from '@/components/my-route/brandingSection';
import MyLearningRouteSection from '@/components/my-route/myLearningRouteSection';
import ProfileSection from '@/components/my-route/profileSection';

export default function MyRoutePage() {
	localStorage.setItem('selectedStep', '0');
	return (
		<div className="w-full space-y-4 pb-12">
			<div className="w-full px-4 my-4">
				<ProfileSection />
			</div>
			<div
				id="routes-section"
				className="w-full px-12 my-4">
				<RoutesSection />
			</div>
			{/* <div className="w-full px-4 my-4">
				<MyLearningRouteSection />
			</div> */}
		</div>
	);
}
