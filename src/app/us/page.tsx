import BannerHistoryPage from '@/components/history/bannerHistoryPage';
import ChargesSection from '@/components/history/chargesSection';
import UmaInfoSection from '@/components/history/umaInfoSection';

export default function HistoryPage() {
	return (
		<>
			<BannerHistoryPage />
			<div className="w-full px-4 my-2">
				<UmaInfoSection />
			</div>
			<ChargesSection />
		</>
	);
}
