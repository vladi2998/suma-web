import BannerHistoryPage from '@/components/history/bannerHistoryPage';
import ChargesSection from '@/components/history/chargesSection';
import SocialMediaSection from '@/components/history/socialMediaSection';
import SumadosInfoSection from '@/components/history/sumadosInfoSection';
import TestimonialsSection from '@/components/history/testimonialsSection';
import UmaInfoSection from '@/components/history/umaInfoSection';

export default function HistoryPage() {
	return (
		<>
			<BannerHistoryPage />
			<div className="w-full px-4 my-2">
				<UmaInfoSection />
			</div>
			<ChargesSection />
			<div className="w-full px-4 my-2">
				<SumadosInfoSection />
			</div>
			<div className="w-full px-4 my-2">
				<SocialMediaSection />
			</div>
			<TestimonialsSection />
		</>
	);
}
